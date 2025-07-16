<template>
  <section class="bg-slate-900 text-white">
    <section class="relative w-full h-screen overflow-hidden">
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
        @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />

      <HeroSection @open-booking-modal="openBookingModal" />
    </section>

    <BookTripComponent />
    <OwnABoat />
    <AboutSection />
    <GetInTouch />
    <Footer />
    <FloatingBar @open-booking-modal="openBookingModal" />

    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
    </transition>
  </section>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import Footer from '@/components/Footer.vue'
import BookingModal from '@/components/BookingModal.vue'
import FloatingBar from '@/components/FloatingBar.vue'
import BookTripComponent from '@/components/BookTripComponent.vue'
import OwnABoat from '@/components/OwnABoat.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Initialize AOS for animations
AOS.init();

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

// --- Emits ---
// This is kept for communication between components if needed, but not strictly
// necessary for the booking modal logic as it's handled locally now.
const emit = defineEmits(["toggle-desktop-menu", "open-booking-modal"]);

// All parallax, ripple, and bento-grid logic has been removed from here.
// It should reside within the specific components that use it.
</script>

<style>
/* Transition for the modal appearing and disappearing */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Base styling for all cards (assuming this is for AboutSection or another component) */
.card-container {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-container:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

/* Styling for the ACTIVE card */
.active-card {
  border-color: rgba(22, 163, 74, 0.4);
  background: linear-gradient(145deg, rgba(14, 165, 233, 0.2), rgba(45, 212, 191, 0.1));
}

/* Expansion Transition Animation for card content */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Prose styles for inverted text in dark cards */
.prose-invert {
  color: #d1d5db;
}

.prose-invert ul>li::before {
  background-color: #6b7280;
}

.prose-invert strong {
  color: #f9fafb;
}

/* Hero image style for performance */
.hero-image {
  will-change: transform;
}

/* Prevent horizontal scrollbar */
html {
  overflow-y: scroll;
}

body {
  overflow-x: hidden;
}
</style>
