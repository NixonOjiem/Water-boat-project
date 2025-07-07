<template lang="">
  <div>
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
      @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="2000" />
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Your Trips</h1>
      <p class="text-lg mb-12">Manage your trips and bookings here.</p>
      <!-- Add your trip management content here -->
    </main>
    <TripsComponent />
    <Footer />
    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
    </transition>
  </div>
</template>
<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import TripsComponent from '@/components/TripsComponent.vue'
import BookingModal from '@/components/BookingModal.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  components: {
    Navbar,
    TripsComponent,
    Footer,
    BookingModal
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
