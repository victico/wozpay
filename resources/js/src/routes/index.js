import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
import guest from './middlewares/guest'
import auth from './middlewares/auth'
import defaultComponent from '@/layouts/dashboardLayout.vue';
import pageComponent from '@/layouts/pagesLayout.vue';
import authLayout from '@/layouts/authLayout.vue';
import bankPage from '@/pages/bank.vue';
import lastOperationPage from '@/pages/lastOperations.vue';
import notificationsPage from '@/pages/notifications.vue';
import profilePage from '@/pages/profile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: "/",
      name:"home",
      component: defaultComponent,
      beforeEnter: auth,
      children: [
        {
          name: "dashboard",
          path: '/dashboard',
          component: () => import('@/pages/dashboard.vue'),
          meta: {
            // middleware: [
            //   auth
            // ],
            title : 'Dashboard'
          },
        }
      ]
    },
    {
      path: "/",
      name:"pages",
      component: pageComponent,
      beforeEnter: auth,
      children: [
        {
          path: "/bank",
          component: bankPage,
          meta: {
            // middleware: [
            //   auth,
              
            // ],
            title : 'Banco'
          },
        },
        {
          path: "/last-operations",
          component: lastOperationPage,
          meta: {
            // middleware: [
            //   auth,
              
            // ],
            title : 'Ult. Trans.'
          },
        },
        {
          path: "/notifications",
          component: notificationsPage,
          meta: {
            title : 'Notificaciones'
          },
        },
        {
          path: "/profile",
          component: profilePage,
          meta: {
            // middleware: [
            //   auth,
              
            // ],
            title : 'Perfil'
          },
        },
      ]
    },
    {
      path: "/",
      name:"auth",
      component: authLayout,
      beforeEnter:guest,
      children: [
        {
          path: "/login",
          name: "Login",
          component: () => import('@/pages/login.vue'),
          meta: {
            title: 'Bienvenido'
          },
        },
        {
          path: "/register",
          name: "register",
          component: () => import('@/pages/register.vue'),
          meta: {
            title: 'Crea tu cuenta'
          },
        },
      ]
    }
    
  ]
})



export default router
