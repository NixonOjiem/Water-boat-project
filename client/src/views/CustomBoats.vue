<template>
  <div class="relative">
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
      @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />

    <main class="absolute top-0 left-0 w-full h-[30vh] flex flex-col items-center justify-end z-[10]"
      :style="{ transform: `translateY(${parallaxOffset}px)` }">
      <h1 class="text-4xl font-bold mb-6 text-black">Own a Boat</h1>
    </main>
    <div class="relative pt-[30vh] z-[10]">
      <IntroOwnABoat @open-design-boat="openDesignBoatForm" />
      <SlidingPicture />
      <AdvanatgesOfOwningBoat />
      <TayloredToYourVision />
      <OwnABoatComponent />
    </div>

    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" class="z-[9999]" />
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
import AdvanatgesOfOwningBoat from '@/components/AdvanatgesOfOwningBoat.vue';
import TayloredToYourVision from '@/components/TayloredToYourVision.vue';
import OwnABoatComponent from '@/components/OwnABoatComponent.vue';
import { onMounted, onUnmounted } from 'vue'; // Make sure to import onMounted and onUnmounted

// --- Parallax Effect ---

const parallaxOffset = ref(0);
const handleScroll = () => {
  // The 0.5 factor controls the speed. A smaller number means it moves slower.
  parallaxOffset.value = window.scrollY * 0.5;
};

// Add and remove the scroll listener to avoid performance issues
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


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
