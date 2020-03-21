import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Placeholder from '../views/Placeholder.vue'
import Volunteer from '../views/Volunteer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/placeholder',
    name: 'Placeholder',
    component: Placeholder
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
