import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import axios from 'axios'
import { useEnv } from '/@/hooks'
import { ResultEnum, RequestEnum, ContentTypeEnum } from '/@/enums/httpEnum'
import { useUserStoreWithOut } from '/@/store/modules/user'
import { setErrorMessage, addAjaxErrorLog, addAjaxLog } from './log'
import { AxiosLoading } from './loading'
import { AxiosCancel } from './cancel'
import { AxiosRetry } from './retry'

interface axiosConfig {
  successMessage?: boolean
  errorMessage?: boolean
  cancelSame?: boolean
  retryCount?: number
  isRetry?: boolean
  loading?: boolean
}

const defaultConfig: axiosConfig = {
  successMessage: false,
  errorMessage: true,
  cancelSame: false,
  isRetry: false,
  retryCount: 3,
  loading: true,
}

const { VITE_BASE_API } = useEnv()

const axiosCancel = new AxiosCancel()

const axiosLoading = new AxiosLoading()

const service: AxiosInstance = axios.create({
  baseURL: VITE_BASE_API,
  timeout: 10 * 1000, // 请求超时时间
  headers: { 'Content-Type': ContentTypeEnum.JSON },
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  const { getToken } = useUserStoreWithOut()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { cancelSame, loading } = config.requestOptions
  if (cancelSame) {
    axiosCancel.addPending(config)
  }

  if (getToken) {
    config!.headers!.Authorization = unref(`Bearer ${getToken}`) ?? ''
  }
  if (loading) {
    axiosLoading.addLoading()
  }

  return config
})

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data
    axiosCancel.removePending(response.config)
    if (data.code === ResultEnum.SUCCESS || data.code === '200') {
      addAjaxLog(response)
      return data
    } else {
      addAjaxErrorLog(response, data.message)
      return Promise.reject(data)
    }
  },
  (err) => {
    if (err.code === 'ERR_CANCELED') return
    const { isRetry, retryCount } = err.config.requestOptions
    if (isRetry && (err.config._retryCount || 0) < retryCount) {
      const axiosRetry = new AxiosRetry()
      axiosRetry.retry(service, err)
      return
    }
    axiosCancel.removePending(err.config || {})
    setErrorMessage(err.response)
    return Promise.reject(err.response)
  },
)

const request = {
  get<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
    return request.request(RequestEnum.GET, url, { params: data }, config)
  },
  post<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
    return request.request(RequestEnum.POST, url, { data }, config)
  },
  put<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
    return request.request(RequestEnum.PUT, url, { data }, config)
  },
  delete<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
    return request.request(RequestEnum.DELETE, url, { params: data }, config)
  },
  request<T = any>(
    method = RequestEnum.GET,
    url: string,
    data?: any,
    config?: axiosConfig,
  ): Promise<T> {
    const options = Object.assign({}, defaultConfig, config)
    return new Promise((resolve, reject) => {
      service({ method, url, ...data, requestOptions: options })
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: Error | AxiosError) => {
          reject(e)
        })
        .finally(() => {
          if (options.loading) {
            axiosLoading.closeLoading()
          }
        })
    })
  },
}

export default request
