<template>
  <footer class="bg-gray-900 text-gray-300 py-10 rounded-t-lg shadow-lg">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">

        <!-- Company Info Section -->
        <div class="w-full md:w-1/3 lg:w-1/4 text-center md:text-left">
          <h3 class="text-2xl font-semibold text-white mb-4">
            <span class="text-blue-400">Yieh</span>Boats
          </h3>
          <p class="text-sm leading-relaxed">
            We are innovators charting a new course for sustainable water transport. We design and build safe, reliable,
            and clean boats propelled entirely by solar energy.
          </p>
        </div>

        <!-- Navigation Links Section -->
        <div class="w-full md:w-1/3 lg:w-1/4 text-center md:text-left">
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <nav class="space-y-2">
            <router-link to="/"
              class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">Home</router-link>
            <!-- <a href="#" class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">About Us</a> -->
            <router-link to="/services"
              class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">Services</router-link>
            <router-link to="/booking"
              class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">Book a
              Trip</router-link>
            <router-link to="/trips"
              class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">Your
              Trips</router-link>
            <router-link to="/gallery"
              class="block text-sm hover:text-blue-400 transition-colors duration-300 rounded-md py-1">Gallery</router-link>
          </nav>
        </div>

        <!-- Social Media Section -->
        <div class="w-full md:w-1/3 lg:w-1/4 text-center md:text-left">
          <h4 class="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div class="flex justify-center md:justify-start space-x-4">
            <!-- Social Media Icons (using Lucide React for example, or you can use Font Awesome/SVGs) -->
            <router-link to="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <!-- Replace with actual SVG or icon component -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span class="sr-only">Facebook</span>
            </router-link>
            <router-link to="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <!-- Replace with actual SVG or icon component -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-twitter">
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2 1.1 0 2.1-.2 2.9-.8 1.8-1.1 2.8-3.3 2.8-5.7v-.8c.7-.5 1.3-1.2 1.7-2 0 0 2 2.1 2 3.4z" />
              </svg>
              <span class="sr-only">Twitter</span>
            </router-link>
            <router-link to="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <!-- Replace with actual SVG or icon component -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
              </svg>
              <span class="sr-only">Instagram</span>
            </router-link>
            <router-link to="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <!-- Replace with actual SVG or icon component -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span class="sr-only">LinkedIn</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {{ currentYear }} YourBrand. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Reactive variable for the current year
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* No custom styles needed, Tailwind handles it! */
</style>
