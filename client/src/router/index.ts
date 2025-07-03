import LandingPage from '@/views/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/authentication',
      name: 'authentication',
      component: SignUpView,
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
  ],
})

export default router
