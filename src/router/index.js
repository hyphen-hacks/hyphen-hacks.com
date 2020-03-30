import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Placeholder from '../views/Placeholder.vue'
import Volunteer from '../views/Volunteer.vue'
import FAQ from '../views/FAQ.vue'
import Mentor from '../views/Mentor.vue'
import Apply from '../views/Apply.vue'
import Contact from '../views/Contact.vue'
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
  },
  {
    path: '/mentor',
    name: 'Mentor',
    component: Mentor
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FAQ
  },
  {
    path: '/apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
