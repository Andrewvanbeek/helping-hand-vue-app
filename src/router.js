import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import Auth from '@okta/okta-vue'
 
Vue.use(Auth, {
  issuer: 'https://dev-165774.okta.com/oauth2/default',
  clientId: '0oa51ovro3GDX14pX4x6',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})
 

Vue.use(Router)

const router= new Router({mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    { path: '/implicit/callback', component: Auth.handleCallback() },
    {
      path: '/',
      redirect: 'dashboard',
      meta: {
        requiresAuth: true
      },
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/hospitals',
          name: 'hospitals',
          component: () => import(/* webpackChunkName: "demo" */ './views/Hospitals.vue')
        },
        {
          path: '/hands',
          name: 'hands',
          component: () => import(/* webpackChunkName: "demo" */ './views/Hands.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        },
        {
          path: '/welcome',
          name: 'ChooseRegistration',
          component: () => import(/* webpackChunkName: "demo" */ './views/ChooseRegistration.vue')
        },
        {
          path: '/donater-register',
          name: 'DonaterRegister',
          component: () => import(/* webpackChunkName: "demo" */ './views/DonaterRegister.vue')
        },
        {
          path: '/provider-register',
          name: 'ProviderRegister',
          component: () => import(/* webpackChunkName: "demo" */ './views/ProviderRegister.vue')
        },
        {
          path: '/fast-donate',
          name: 'FastDonations',
          component: () => import(/* webpackChunkName: "demo" */ './views/FastDonations.vue')
        }
      ]
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router