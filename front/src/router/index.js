import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Skillset from "@/views/Skillset";
import Contact from "@/views/Contact";
import Projects from "@/views/Projects";
import ToDoList from "@/views/ToDoList";
import Weather from '@/views/Weather'
import CalculatorApp from "@/views/Calculator-app";

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/home'
  },
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
  },
  {
    path: "/projects",
    name: 'Projects',
    component: Projects,
  },
  {
    path: "/To Do List",
    name: "ToDoList",
    component: ToDoList
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: "/calculator",
    name: 'Calculator',
    component: CalculatorApp
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
