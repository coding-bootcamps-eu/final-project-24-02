import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfferView from '../views/OfferView.vue'
import FormView from '../views/FormView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offer',
      name: 'OfferView',
      component: OfferView
    },
    {
      path: '/form',
      name: 'FormView',
      component: FormView
    },
    {
      path: '/user/:id',
      name: 'UserView',
      component: UserView
    }
  ]
})

export default router
