import type { AppRouteType } from '/@/router/types'

const func: AppRouteType[] = [
  {
    path: '/func',
    name: 'Func',
    component: () => import('/@/layouts/index.vue'),
    redirect: '/func/axios',
    meta: {
      title: '功能',
      icon: 'local-func',
      sort: 6,
      permission: 'admin_func',
    },
    children: [
      {
        path: 'axios',
        name: 'Axios',
        component: () => import('/@/views/func/axios/index.vue'),
        meta: {
          title: 'axios',
          sort: 1,
          permission: 'admin_func_axios',
          icon: '',
        },
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('/@/views/func/message/index.vue'),
        meta: {
          title: 'message',
          sort: 2,
          permission: '',
          icon: '',
        },
      },
      {
        path: 'watermark',
        name: 'Watermark',
        component: () => import('/@/views/func/watermark/index.vue'),
        meta: {
          title: 'watermark',
          sort: 3,
          permission: '',
          icon: '',
        },
      },
      {
        path: 'drag-resize',
        name: 'DragResize',
        component: () => import('/@/views/func/drag-resize/index.vue'),
        meta: {
          title: '拖拽缩放',
          sort: 4,
          permission: '',
          icon: '',
        },
      },
      {
        path: 'draggable',
        name: 'Draggable',
        component: () => import('/@/views/func/draggable/index.vue'),
        meta: {
          title: '拖拽',
          sort: 5,
          permission: '',
          icon: '',
        },
      },
    ],
  },
]

export default func
