import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from "@/components/auth/LoginComponent.vue";
import Designer from "@/components/designers/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent,
    },
    {
      path: '/designers',
      name: 'Designer',
      component: Designer
    }
  ],
})

export default router
