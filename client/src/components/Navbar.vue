<template>
  <header :class="[
    'w-full fixed top-0 left-0 z-[9999] transition-all duration-300 ease-in-out',
    { 'scrolled-nav': isScrolled }
  ]">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="logo-nav">
        <a href="#" class="text-2xl font-bold text-white">Yieh Boats</a>
      </div>

      <nav class="hidden md:flex flex-grow justify-center">
        <ul class="flex space-x-10 bg-white p-6 rounded-[2.75rem] shadow-md">
          <li><a href="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</a></li>
          <li><a href="/services" class="text-gray-700 hover:text-blue-600 font-medium">Our Services</a></li>
          <li><a href="/booking" class="text-gray-700 hover:text-blue-600 font-medium">Book a Trip</a></li>
          <li><a href="/trips" class="text-gray-700 hover:text-blue-600 font-medium">Your Trips</a></li>
          <li><a href="/gallery" class="text-gray-700 hover:text-blue-600 font-medium">Gallery</a></li>
        </ul>
      </nav>

      <div class="other-links flex items-center space-x-4 relative">
        <div :class="[
          'desktop-menu-wrapper relative transition-all duration-300 ease-in-out',
          { 'teardrop-active bg-white rounded-[2.75rem] shadow-md': isDesktopMenuOpen }
        ]">
          <div :class="[
            'desktop-menu-button hidden md:flex items-center justify-center w-12 h-12 rounded-full cursor-pointer',
            isDesktopMenuOpen ? 'text-gray-700' : 'text-white'
          ]" @click="$emit('toggle-desktop-menu', $event)">
            <ion-icon name="menu-outline" class="text-2xl transition-transform duration-300 ease-in-out"></ion-icon>
          </div>

          <transition name="fade">
            <div v-if="isDesktopMenuOpen" class="absolute right-0 top-full bg-white p-4 rounded-lg shadow-lg">
              <ul class="flex flex-col space-y-2 text-gray-700">
                <li><a href="#" class="hover:text-blue-600" @click="$emit('toggle-desktop-menu', $event)">Dashboard</a>
                </li>
                <li><a href="#" class="hover:text-blue-600" @click="$emit('toggle-desktop-menu', $event)">Settings</a>
                </li>
                <li v-if="authStore.isAuthenticated">
                  <a href="#" class="hover:text-blue-600" @click="logout">Logout</a>
                </li>
                <li v-else>
                  <router-link to="/authentication" class="hover:text-blue-600">
                    Login
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { authStore } from '@/store/auth';

const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/');
};

// Define props that the component expects to receive
const props = defineProps({
  isMobileMenuOpen: Boolean,
  isDesktopMenuOpen: Boolean
});

// Define custom events that the component can emit
const emit = defineEmits(['toggle-mobile-menu', 'toggle-desktop-menu']);

// --- Scroll Logic ---
const isScrolled = ref(false);

const handleScroll = () => {
  // Check if the user has scrolled more than 50px from the top
  isScrolled.value = window.scrollY > 50;
};

// Add and remove the scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // NEW: Listen for route changes to close the desktop menu
  // This ensures the menu closes when navigating via router-link
  router.afterEach(() => {
    if (props.isDesktopMenuOpen) {
      emit('toggle-desktop-menu', new Event('click')); // Emit a dummy event to close the menu
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* This class will be applied when the user scrolls down */

/* Scoped styles for the Navbar component */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.desktop-menu-wrapper {
  transition: all 0.3s ease-in-out;
  transform-origin: right center;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.desktop-menu-wrapper.teardrop-active {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.desktop-menu-button {
  transition: all 0.3s ease-in-out;
  background-color: transparent !important;
  box-shadow: none !important;
}

.desktop-menu-wrapper.teardrop-active .desktop-menu-button ion-icon {
  transform: rotate(90deg);
}
</style>
