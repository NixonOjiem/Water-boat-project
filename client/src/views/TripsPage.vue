<template lang="">
  <div>
    <Navbar
      :is-mobile-menu-open="isMobileMenuOpen"
      :is-desktop-menu-open="isDesktopMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu"
      @toggle-desktop-menu="toggleDesktopMenu"
      data-aos-easing="linear"
        data-aos="fade-down" data-aos-duration="2000"
    />
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Your Trips</h1>
      <p class="text-lg mb-12">Manage your trips and bookings here.</p>
      <!-- Add your trip management content here -->
    </main>
    <TripsComponent />
    <Footer />
  </div>
</template>
<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import TripsComponent from '@/components/TripsComponent.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Initialize AOS for animations
AOS.init();

export default {
  components: {
    Navbar,
    TripsComponent,
    Footer,
  },
  setup() {
    // --- State for Mobile Menu ---
    const isMobileMenuOpen = ref(false);
    const toggleMobileMenu = (event) => {
      event.stopPropagation();
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // --- State for Desktop Menu ---
    const isDesktopMenuOpen = ref(false);
    const toggleDesktopMenu = (event) => { // <--- Add 'event' parameter here
      event.stopPropagation(); // <--- Add this line
      isDesktopMenuOpen.value = !isDesktopMenuOpen.value;
    };

    // --- Expose state and methods to the template ---
    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isDesktopMenuOpen,
      toggleDesktopMenu,
    };
  }
}
</script>
<style scoped></style>
