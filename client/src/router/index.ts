import LandingPage from '@/views/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import BookingView from '@/views/BookingView.vue'
import TripsPage from '@/views/TripsPage.vue'
import GalleryView from '@/views/GalleryView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'


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
    {
      path: '/booking',
      name: 'BookingView',
      component: BookingView,
    },
     {
      path: '/trips',
      name: 'TripsPage',
      component: TripsPage,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: GalleryView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
  ],
})

export default router
