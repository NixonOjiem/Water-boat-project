<template lang="">
  <section class="booking-view">
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"  />
  <div class = "booking-container">
    <BookingComponent />
    <Footer />
  </div>
  </section>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BookingComponent from '@/components/BookingComponent.vue';
import { ref } from 'vue';

export default {
  name: 'BookingView',
  components: { Navbar, BookingComponent, Footer },
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

<style>
.booking-container {
  background-image: url('/images/cruise-vertical.png');
  background-color: #334155;
  background-size: cover;
  background-position: center;
  padding-top: 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
}

.booking-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* Black with 50% opacity */
  z-index: -1;
  /* Place the overlay behind the container's content */
}

/* If you want content within the container to be visible above the overlay */
.booking-container>* {
  z-index: 1;
  /* Ensure child elements are above the overlay */
  position: relative;
  /* May be needed depending on context */
}
</style>
