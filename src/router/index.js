import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Index from "@/views/Index.vue";
import Menu from "@/views/Menu.vue";
import Schedule from "@/views/Schedule.vue";
import Create from "@/views/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      props: true
    },
    {
      path: '/harmonogram-wesela',
      name: 'Harmonogram wesela',
      component: Schedule,
      props: true
    },
    {
      path: '/lista-zyczen',
      name: 'Lista życzeń',
      component: Index,
      props: true
    },
    {
      path: '/dodaj-zyczenie',
      name: 'Dodaj życzenie',
      component: Create,
      props: true
    }
  ]
})

export default router
