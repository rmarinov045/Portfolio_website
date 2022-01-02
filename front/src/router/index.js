import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Skillset from "@/views/Skillset";
import Contact from "@/views/Contact";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/skillset',
    name: 'Skillset',
    component: Skillset
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { x:0, y:0, behavior: 'smooth'}
  },
  routes
})

export default router
