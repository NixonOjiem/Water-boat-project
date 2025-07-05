<template>
  <div>
        <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"  />
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Gallery</h1>
      <p class="text-lg mb-12">Explore our collection of stunning boat images.</p>
    </main>
    <GalleryComponent />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Navbar, GalleryComponent, Footer
  },
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

<style scoped></style>
