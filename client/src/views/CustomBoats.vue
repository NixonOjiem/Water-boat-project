<template>
  <div class="relative">
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
      @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />
    <main class="fixed top-0 left-0 w-full h-[20vh] flex flex-col items-center justify-end z-[-999]">
      <h1 class="text-4xl font-bold mb-6 text-green">Own a Boat</h1>
    </main>

    <div class="pt-[20vh] z-99999">
      <!-- <CustomBoatComponent @open-design-boat="openDesignBoatForm" /> pt-[50vh] -->
      <IntroOwnABoat @open-design-boat="openDesignBoatForm" />
      <SlidingPicture />
    </div>
    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" class="Z-9999999999" />

    </transition>

    <FloatingBar @open-booking-modal="openBookingModal" />
    <transition name="modal-fade">
      <DesignBoatForm v-if="designBoatFormOpen" @close="closeDesignBoatForm" />
    </transition>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'; // Make sure to import ref
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CustomBoatComponent from '@/components/CustomBoatComponent.vue';
import FloatingBar from '@/components/FloatingBar.vue';
import BookingModal from '@/components/BookingModal.vue';
import DesignBoatForm from '@/components/DesignBoatForm.vue';
import IntroOwnABoat from '@/components/IntroOwnABoat.vue';
import SlidingPicture from '@/components/SlidingPicture.vue';

// --- Booking Modal State ---
const isBookingModalOpen = ref(false);
const openBookingModal = () => {
  isBookingModalOpen.value = true;
  document.body.style.overflow = 'hidden';
  //console.log('Booking modal opened!'); // Added for debugging
};
const closeBookingModal = () => {
  isBookingModalOpen.value = false;
  document.body.style.overflow = '';
  //console.log('Booking modal closed!'); // Added for debugging
};

// --- Menu State ---
const isMobileMenuOpen = ref(false)
const isDesktopMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const toggleDesktopMenu = (event) => {
  event.stopPropagation()
  isDesktopMenuOpen.value = !isDesktopMenuOpen.value
}

// --- Design Boat Form State ---
const designBoatFormOpen = ref(false);
const openDesignBoatForm = () => {
  designBoatFormOpen.value = true;
  document.body.style.overflow = 'hidden';
}
const closeDesignBoatForm = () => {
  designBoatFormOpen.value = false;
  document.body.style.overflow = '';
}



</script>

<style scoped>
/* Add this to your style section if you are not using a utility-first framework like TailwindCSS
    or if you want to explicitly define custom classes.
    If you are using TailwindCSS, 'h-screen' and 'pt-screen' will handle this. */
.fixed-hero-section {
  height: 50vh;
  /* This ensures the hero section takes the full viewport height */
}

.pt-screen {
  padding-top: 50vh;
  /* This creates a padding at the top equal to the viewport height,
            pushing the CustomBoatComponent below the fixed main section */
}
</style>
