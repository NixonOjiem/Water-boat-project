<template>
  <!-- Outer container to establish a relative context for fixed positioning -->
  <div class="relative min-h-screen">
    <!--
      The main section is now fixed, covering the entire viewport.
      It acts as a background layer (z-index: 0) while its content remains visible.
      'inset-0' is a Tailwind utility for 'top: 0; right: 0; bottom: 0; left: 0;'.
      'h-full' and 'w-full' ensure it takes up the full dimensions of its parent (the viewport in this case).
    -->
    <main class="fixed inset-0 w-full h-[500px] bg-gray-900 text-white z-0 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-6">Gallery</h1>
      <p class="text-lg mb-12">Explore our collection of stunning boat images.</p>
    </main>

    <!--
      This container holds all the scrollable content and is positioned above the fixed main section.
      'relative' ensures z-index works, and 'z-10' places it in the foreground.
    -->
    <div class="relative z-10">
      <!-- The Navbar is now part of the scrollable foreground content -->
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
        @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />

      <!--
        This spacer div is crucial. Since the 'main' section is fixed and out of the normal document flow,
        other elements would appear at the very top of the page. This 'h-screen' (height: 100vh) div
        creates a visual space equal to the viewport height, pushing down the 'GalleryComponent'
        and 'Footer' so they start scrolling *after* the fixed 'main' section is initially displayed.
      -->
      <div class="h-[500px] w-full"></div>

      <!-- These components will scroll up over the fixed main section -->
      <GalleryTrips />
      <GalleryDiff />
      <GalleryComponent />
      <Footer />
    </div>

    <!-- The BookingModal remains outside the scrollable content for proper modal overlay behavior -->
    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
    </transition>
    <FloatingBar @open-booking-modal="openBookingModal" />
  </div>
</template>


<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import GalleryDiff from '@/components/GalleryDiff.vue';
import GalleryTrips from '@/components/GalleryTrips.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import Footer from '@/components/Footer.vue';
import BookingModal from '@/components/BookingModal.vue'
import FloatingBar from '@/components/FloatingBar.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Initialize AOS for animations


export default {
  components: {
    Navbar, GalleryDiff, GalleryTrips, GalleryComponent, Footer, BookingModal, FloatingBar
  },
  setup() {
    // Initialize AOS for animations
    AOS.init();
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

    // --- MOVED: Booking Modal State (now inside setup) ---
    const isBookingModalOpen = ref(false);
    const openBookingModal = () => {
      isBookingModalOpen.value = true;
      document.body.style.overflow = 'hidden';
    };
    const closeBookingModal = () => {
      isBookingModalOpen.value = false;
      document.body.style.overflow = '';
    };

    // --- Expose state and methods to the template ---
    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isDesktopMenuOpen,
      toggleDesktopMenu,
      isBookingModalOpen,   // <-- ADDED
      openBookingModal,     // <-- ADDED
      closeBookingModal
    };
  }
}
</script>

<style scoped>
/* ADDED: Transition for the modal appearing and disappearing */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
