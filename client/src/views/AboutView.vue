<template>
  <section class="about-container relative min-h-screen">
    <!-- <main class="fixed inset-0 w-full h-[500px] bg-gray-900 text-white z-0 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-6">About Us</h1>
      <p class="text-lg mb-12">We are dedicated to revolutionizing water transport in Africa with our innovative
        solar-powered boats.</p>
    </main> -->
    <div class="about-content relative z-10">
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
        @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />

      <div class="h-[90px] w-full"></div>
      <!-- <AboutComponent @open-investment-form="openInvestmentForm" /> -->
      <IntroToAboutus @open-investment-form="openInvestmentForm" />
      <Sustainabilitycomponent />
      <CallForInvestorsOnAbout @open-investment-form="openInvestmentForm" />
      <FloatingBar @open-booking-modal="openBookingModal" />

      <transition name="modal-fade">
        <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
      </transition>

      <transition name="modal-fade">
        <InvestmentForm v-if="investmentFormOpen" @close="closeInvestmentForm" />
      </transition>
    </div>
    <Footer />
  </section>

</template>
<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import AOS from 'aos';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import FloatingBar from '@/components/FloatingBar.vue';
import BookingModal from '@/components/BookingModal.vue';
import InvestmentForm from '@/components/InvestmentForm.vue';
import IntroToAboutus from '@/components/IntroToAboutus.vue';
import Sustainabilitycomponent from '@/components/Sustainabilitycomponent.vue';
import CallForInvestorsOnAbout from '@/components/CallForInvestorsOnAbout.vue';

// Initialize AOS for animations
onMounted(() => {
  AOS.init();
});

// --- Emits ---
// This is kept for communication between components if needed, but not strictly
// necessary for the booking modal logic as it's handled locally now.
const emit = defineEmits(["toggle-desktop-menu", "open-booking-modal"]);

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

// --- Booking Modal State ---
const isBookingModalOpen = ref(false)
const openBookingModal = () => {
  isBookingModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}
const closeBookingModal = () => {
  isBookingModalOpen.value = false;
  document.body.style.overflow = '';
}

// --- Investment Form State ---
const investmentFormOpen = ref(false)
const openInvestmentForm = () => {
  investmentFormOpen.value = true;
  document.body.style.overflow = 'hidden';
}
const closeInvestmentForm = () => {
  investmentFormOpen.value = false;
  document.body.style.overflow = '';
}

</script>
<style></style>
