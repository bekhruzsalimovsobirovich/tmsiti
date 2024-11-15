import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from "@/components/auth/LoginComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent,
    },
  ],
})

export default router
