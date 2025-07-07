<template>
  <!-- Outer container to establish a relative context for fixed positioning -->
  <div class="relative min-h-screen">
    <!--
      The main section is fixed, covering the top 500px of the viewport.
      It acts as a background layer (z-index: 0) while its content remains visible.
      'inset-0' is a Tailwind utility for 'top: 0; right: 0; bottom: 0; left: 0;'.
      'w-full' ensures it takes up the full width, and 'h-[500px]' sets its fixed height.
    -->
    <main class="fixed inset-0 w-full h-[500px] bg-gray-900 text-white z-0 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-6">Your Trips</h1>
      <p class="text-lg mb-12">Manage your trips and bookings here.</p>
      <!-- Add your trip management content here -->
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
        other elements would appear at the very top of the page. This 'h-[500px]' div
        creates a visual space equal to the height of the fixed 'main' section, pushing down the
        'TripsComponent' and 'Footer' so they start scrolling *after* the fixed 'main' section
        is initially displayed.
      -->
      <div class="h-[500px] w-full"></div>

      <!-- These components will scroll up over the fixed main section -->
      <TripsComponent />
      <Footer />
    </div>

    <!-- The BookingModal remains outside the scrollable content for proper modal overlay behavior -->
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
