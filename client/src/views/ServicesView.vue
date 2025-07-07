<template lang="">
  <div>
        <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
        @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />
    <main class="flex flex-col items-center justify-center min-h-[500px] bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Our Services</h1>
      <p class="text-lg mb-12">Explore the services we offer for your boating adventures.</p>
      <!-- Add your services content here -->
    </main>
    <ServicesComponent />
    <Footer />
    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BookingModal from '@/components/BookingModal.vue'
import ServicesComponent from '@/components/ServicesComponent.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  components: {
    Navbar, Footer, BookingModal, ServicesComponent
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
    const toggleDesktopMenu = (event) => {
      event.stopPropagation();
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

    // --- Expose everything to the template ---
    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isDesktopMenuOpen,
      toggleDesktopMenu,
      isBookingModalOpen,   // <-- ADDED
      openBookingModal,     // <-- ADDED
      closeBookingModal     // <-- ADDED
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
