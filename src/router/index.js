import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import DashboardView from '../views/DashboardView.vue'
import ApiView from '../views/ApiView.vue'
import GuardarView from '../views/GuardarView.vue'
import EditarView from '../views/EditarView.vue'
import MecanicosView from '../views/MecanicosView.vue'
import GuardarMView from '../views/GuardarMView.vue'
import EditarMView from '../views/EditarMView.vue'


 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/NosotrosView',
      name: 'NosotrosView',
      component: NosotrosView
    },
    {
      path: '/DashboardView',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/ApiView',
      name: 'ApiView',
      component: ApiView
    },
    {
      path: '/GuardarView',
      name: 'GuardarView',
      component: GuardarView
    },
    {
      path: '/EditarView/:id',
      name: 'EditarView',
      component: EditarView
    },
    {
      path: '/MecanicosView',
      name: 'MecanicosView',
      component: MecanicosView
    },
    {
      path: '/GuardarMView',
      name: 'GuardarMView',
      component: GuardarMView
    },
    {
      path: '/EditarMView/:id',
      name: 'EditarMView',
      component: EditarMView
    },





    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
