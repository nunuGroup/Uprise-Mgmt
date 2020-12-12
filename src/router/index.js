import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SocialMedia from '../views/SocialMedia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/social_media_management',
    name: 'SocialMedia',
    component: SocialMedia
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
