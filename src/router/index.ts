import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import TestPage from '../views/TestView.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: App
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      props: true,
      component: TestPage
    },
    {
      path: '/signup',
      name: 'signup',
      props: true,
      component: SignUp
    },
  ]
})

export default router
