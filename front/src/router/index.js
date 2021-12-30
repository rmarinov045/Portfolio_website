import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { x:0, y:0, behavior: 'smooth'}
  },
  routes
})

export default router
