import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Pages/Home.vue";
import Index from "@/components/Pages/Index.vue";

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
      path: '/wpisy',
      name: 'Wpisy',
      component: Index,
      props: true
    }
  ]
})

export default router
