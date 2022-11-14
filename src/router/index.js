import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/landingPage/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/daily-routine',
    name: 'Rutinas Diarias',
    component: () => import('@/views/landingPage/dailyRoutine.vue')
  },
  {
    path: '/user-advisor',
    name: 'Asistencia al usuario',
    component: () => import('@/views/landingPage/userAdvisor.vue')
  },
  {
    path: '/regulation-section',
    name: 'Zona de regulación',
    component: () => import('@/views/landingPage/regulationSection.vue')
  },
  {
    path: '/login',
    name: 'Inicio Sección',
    component: () => import('@/views/sections/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})



export default router
    