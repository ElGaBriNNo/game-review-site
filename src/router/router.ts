import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import GameView from '../views/GameView.vue'
import Detail from '../views/DetailView.vue'
import TitleScreen from "@/components/TitleScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: TitleScreen
    },
    {
      path: '/games',
      name: 'games',
      props: true,
      component: GameView
    },

    {
      path: '/Detail/:id',
      name: 'Detail',
      props: true,
      component: Detail
    }
  ]
})

export default router
