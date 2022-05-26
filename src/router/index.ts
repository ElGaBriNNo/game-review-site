import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import TestPage from '../views/TestView.vue'
import SignUp from '../views/SignUp.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
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
