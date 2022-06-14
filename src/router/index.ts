import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import TestPage from '../views/TestView.vue'
import SignUp from '../views/SignUp.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailView.vue'
import HelloWorld from "@/components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HelloWorld
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
      path: '/games',
      name: 'games',
      props: true,
      component: HomeView
    },

    {
      path: '/Detail/:id',
      name: 'Detail',
      props: true,
      component: Detail
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
