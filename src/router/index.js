import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/landingPage/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/login',
    name: 'Inicio Sección',
    component: () => import('@/views/sections/login.vue')
  },
  {
    path: '/daily-routine',
    name: 'Rutinas Diarias',
    component: () => import('@/views/landingPage/dailyRoutine.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/user-advisor',
    name: 'Asistencia al usuario',
    component: () => import('@/views/landingPage/userAdvisor.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/regulation-section',
    name: 'Zona de regulación',
    component: () => import('@/views/landingPage/regulationSection.vue'),
    meta:{
      requiresAuth:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next)=>{
  const logged = JSON.parse(window.localStorage.getItem('user'));
  const reqAuth = to.matched.some(record=> record.meta.requiresAuth);

if (to.fullPath=='/') {
  next('/login')
}
  if (reqAuth) {
    if (logged!=null) {
      next()
    }else{
      next('/login')
    }
  }else{
    if (logged!=null) {
      next('/home')
    }else{
      next()
    }
  }

})


export default router
    