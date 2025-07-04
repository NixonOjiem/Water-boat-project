<template lang="">
  <div class = "booking-container">
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"  />
    <BookingComponent />
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import BookingComponent from '@/components/BookingComponent.vue';
import { ref } from 'vue';

export default {
  components: { Navbar, BookingComponent },
  setup() {
    // --- State for Mobile Menu ---
    const isMobileMenuOpen = ref(false);
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // --- State for Desktop Menu ---
    const isDesktopMenuOpen = ref(false);
    const toggleDesktopMenu = () => {
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
  /* Fallback color */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  /* Essential for positioning the pseudo-element */
  z-index: 0;
  /* Ensure the container is above its pseudo-element if needed */
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
