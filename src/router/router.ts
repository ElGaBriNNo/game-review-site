import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import GameView from '../views/GameView.vue'
import Detail from '../views/DetailView.vue'
import TitleScreen from "@/components/TitleScreen.vue";
import MyListComponent from "@/components/MyListComponent.vue";
import SignUpPage from "@/components/SignUpPage.vue";
import Genre from '../views/GenreView.vue'

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
    },
    {
      path: '/Genre/:id',
      name: 'Genre',
      props: true,
      component: Genre
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      props: true,
      component: SignUpPage
    },
    {
      path: '/MyList',
      name: 'MyList',
      props: true,
      component: MyListComponent
    }
  ]
})

export default router
