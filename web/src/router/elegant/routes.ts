/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'about',
    path: '/about',
    component: 'layout.base$view.about',
    meta: {
      title: 'about',
      i18nKey: 'route.about',
      icon: 'fluent:book-information-24-regular',
      order: 10
    }
  },
  {
    name: 'administrative',
    path: '/administrative',
    component: 'layout.base',
    meta: {
      title: 'administrative',
      i18nKey: 'route.administrative',
      icon: 'ri:quill-pen-line',
      order: 2
    },
    children: [
      {
        name: 'administrative_framework',
        path: '/administrative/framework',
        component: 'view.administrative_framework',
        meta: {
          title: 'administrative_framework',
          i18nKey: 'route.administrative_framework'
        }
      },
      {
        name: 'administrative_message',
        path: '/administrative/message',
        component: 'view.administrative_message',
        meta: {
          title: 'administrative_message',
          i18nKey: 'route.administrative_message'
        }
      },
      {
        name: 'administrative_message-detail',
        path: '/administrative/message-detail/:id',
        component: 'view.administrative_message-detail',
        meta: {
          title: 'administrative_message-detail',
          i18nKey: 'route.administrative_message-detail'
        }
      },
      {
        name: 'administrative_organization',
        path: '/administrative/organization',
        component: 'view.administrative_organization',
        meta: {
          title: 'administrative_organization',
          i18nKey: 'route.administrative_organization',
          icon: 'ri:exchange-2-line'
        }
      },
      {
        name: 'administrative_post-manage',
        path: '/administrative/post-manage',
        component: 'view.administrative_post-manage',
        meta: {
          title: 'administrative_post-manage',
          i18nKey: 'route.administrative_post-manage',
          icon: 'ri:contacts-book-3-line'
        }
      }
    ]
  },
  {
    name: 'demo-route',
    path: '/demo-route',
    component: 'layout.base',
    meta: {
      title: 'demo-route',
      i18nKey: 'route.demo-route'
    },
    children: [
      {
        name: 'demo-route_child',
        path: '/demo-route/child',
        component: 'view.demo-route_child',
        meta: {
          title: 'demo-route_child',
          i18nKey: 'route.demo-route_child'
        }
      }
    ]
  },
  {
    name: 'features',
    path: '/features',
    component: 'layout.base',
    meta: {
      title: 'features',
      i18nKey: 'route.features'
    },
    children: [
      {
        name: 'features_captcha',
        path: '/features/captcha',
        component: 'view.features_captcha',
        meta: {
          title: 'features_captcha',
          i18nKey: 'route.features_captcha'
        }
      },
      {
        name: 'features_colorthief',
        path: '/features/colorthief',
        component: 'view.features_colorthief',
        meta: {
          title: 'features_colorthief',
          i18nKey: 'route.features_colorthief'
        }
      },
      {
        name: 'features_draggable',
        path: '/features/draggable',
        component: 'view.features_draggable',
        meta: {
          title: 'features_draggable',
          i18nKey: 'route.features_draggable'
        }
      },
      {
        name: 'features_eye-dropper',
        path: '/features/eye-dropper',
        component: 'view.features_eye-dropper',
        meta: {
          title: 'features_eye-dropper',
          i18nKey: 'route.features_eye-dropper'
        }
      },
      {
        name: 'features_flow',
        path: '/features/flow',
        component: 'view.features_flow',
        meta: {
          title: 'features_flow',
          i18nKey: 'route.features_flow'
        }
      },
      {
        name: 'features_gantt',
        path: '/features/gantt',
        component: 'view.features_gantt',
        meta: {
          title: 'features_gantt',
          i18nKey: 'route.features_gantt'
        }
      },
      {
        name: 'features_lazyload',
        path: '/features/lazyload',
        component: 'view.features_lazyload',
        meta: {
          title: 'features_lazyload',
          i18nKey: 'route.features_lazyload'
        }
      },
      {
        name: 'features_pickr',
        path: '/features/pickr',
        component: 'view.features_pickr',
        meta: {
          title: 'features_pickr',
          i18nKey: 'route.features_pickr'
        }
      },
      {
        name: 'features_print',
        path: '/features/print',
        component: 'view.features_print',
        meta: {
          title: 'features_print',
          i18nKey: 'route.features_print'
        }
      },
      {
        name: 'features_swiper',
        path: '/features/swiper',
        component: 'view.features_swiper',
        meta: {
          title: 'features_swiper',
          i18nKey: 'route.features_swiper'
        }
      },
      {
        name: 'features_viewer',
        path: '/features/viewer',
        component: 'view.features_viewer',
        meta: {
          title: 'features_viewer',
          i18nKey: 'route.features_viewer'
        }
      },
      {
        name: 'features_vue-directive',
        path: '/features/vue-directive',
        component: 'view.features_vue-directive',
        meta: {
          title: 'features_vue-directive',
          i18nKey: 'route.features_vue-directive'
        }
      },
      {
        name: 'features_vue-office',
        path: '/features/vue-office',
        component: 'view.features_vue-office',
        meta: {
          title: 'features_vue-office',
          i18nKey: 'route.features_vue-office'
        }
      },
      {
        name: 'features_waterfall',
        path: '/features/waterfall',
        component: 'view.features_waterfall',
        meta: {
          title: 'features_waterfall',
          i18nKey: 'route.features_waterfall'
        }
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mdi:monitor-dashboard',
      order: 1
    }
  },
  {
    name: 'iframe-page',
    path: '/iframe-page/:url',
    component: 'layout.base$view.iframe-page',
    props: true,
    meta: {
      title: 'iframe-page',
      i18nKey: 'route.iframe-page',
      constant: true,
      hideInMenu: true,
      keepAlive: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'system-manage',
    path: '/system-manage',
    component: 'layout.base',
    meta: {
      title: 'system-manage',
      i18nKey: 'route.system-manage',
      order: 3,
      icon: 'ri:settings-2-line'
    },
    children: [
      {
        name: 'system-manage_internalization',
        path: '/system-manage/internalization',
        component: 'view.system-manage_internalization',
        meta: {
          title: 'system-manage_internalization',
          i18nKey: 'route.system-manage_internalization',
          icon: 'ri:global-line',
          order: 2
        }
      },
      {
        name: 'system-manage_menu-manage',
        path: '/system-manage/menu-manage',
        component: 'view.system-manage_menu-manage',
        meta: {
          title: 'system-manage_menu-manage',
          i18nKey: 'route.system-manage_menu-manage',
          icon: 'ri:route-fill',
          order: 1
        }
      },
      {
        name: 'system-manage_operation-log',
        path: '/system-manage/operation-log',
        component: 'view.system-manage_operation-log',
        meta: {
          title: 'system-manage_operation-log',
          i18nKey: 'route.system-manage_operation-log',
          icon: 'ri:draft-line',
          order: 3
        }
      },
      {
        name: 'system-manage_role-manage',
        path: '/system-manage/role-manage',
        component: 'view.system-manage_role-manage',
        meta: {
          title: 'system-manage_role-manage',
          i18nKey: 'route.system-manage_role-manage'
        }
      },
      {
        name: 'system-manage_user-manage',
        path: '/system-manage/user-manage',
        component: 'view.system-manage_user-manage',
        meta: {
          title: 'system-manage_user-manage',
          i18nKey: 'route.system-manage_user-manage',
          icon: 'ri:user-settings-line'
        }
      }
    ]
  },
  {
    name: 'user-center',
    path: '/user-center',
    component: 'layout.base$view.user-center',
    meta: {
      title: 'user-center',
      i18nKey: 'route.user-center',
      hideInMenu: true
    }
  }
];
