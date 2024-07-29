import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: () => import('../views/Tasks.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    }
  ]
})

export default router
