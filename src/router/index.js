import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Pages/Home.vue";
import Index from "@/components/Pages/Index.vue";
import Menu from "@/components/Pages/Menu.vue";
import Schedule from "@/components/Pages/Schedule.vue";
import Create from "@/components/Pages/Create.vue";

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
