import { createWebHashHistory, createRouter } from 'vue-router'
import { AppRouteType } from './types'
import { basicRoutes, asyncRoutes, WHITE_LIST } from './basic'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...basicRoutes, ...asyncRoutes] as AppRouteType[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
