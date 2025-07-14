<template>
  <header :class="[
    'w-full fixed top-0 left-0 z-[9999] transition-all duration-300 ease-in-out',
    'flex justify-center',
    { 'py-2': isScrolled, 'py-5': !isScrolled },
  ]">
    <nav ref="desktopNavRef"
      class="hidden md:flex items-center w-full max-w-6xl mx-auto bg-white px-8 py-4 rounded-[2.75rem] shadow-md">
      <div class="logo-nav flex-shrink-0">
        <router-link to="/" class="text-2xl font-bold text-gray-800">YiehBoats</router-link>
      </div>

      <ul class="flex items-center space-x-8 mx-auto">
        <li>
          <router-link to="/services" class="text-gray-700 hover:text-blue-600 font-medium">Our Services</router-link>
        </li>
        <li>
          <router-link to="/custom-boat" class="text-gray-700 hover:text-blue-600 font-medium">Custom
            Boats</router-link>
        </li>
        <li>
          <a href="#" @click.prevent="$emit('open-booking-modal')"
            class="text-gray-700 hover:text-blue-600 font-medium">Book a Trip</a>
        </li>
        <li>
          <router-link to="/trips" class="text-gray-700 hover:text-blue-600 font-medium">Your Trips</router-link>
        </li>
        <li>
          <router-link to="/gallery" class="text-gray-700 hover:text-blue-600 font-medium">Gallery</router-link>
        </li>
      </ul>

      <div class="other-links relative">
        <div class="desktop-menu-wrapper relative">
          <div
            class="desktop-menu-button flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-gray-700"
            @click="$emit('toggle-desktop-menu', $event)">
            <ion-icon name="menu-outline" class="text-2xl transition-transform duration-300 ease-in-out"></ion-icon>
          </div>

          <transition name="fade">
            <div v-if="isDesktopMenuOpen" class="absolute right-0 top-full mt-2 bg-white p-4 rounded-lg shadow-lg w-40">
              <ul class="flex flex-col space-y-3 text-gray-700">
                <template v-if="authStore.isAuthenticated">
                  <li>
                    <router-link to="/dashboard" class="hover:text-blue-600"
                      @click="$emit('toggle-desktop-menu', $event)">
                      Dashboard
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/settings" class="hover:text-blue-600"
                      @click="$emit('toggle-desktop-menu', $event)">
                      Settings
                    </router-link>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-600" @click="logout">Logout</a>
                  </li>
                </template>

                <template v-else>
                  <li>
                    <router-link to="/authentication" class="hover:text-blue-600"
                      @click="$emit('toggle-desktop-menu', $event)">
                      Login
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/register" class="hover:text-blue-600"
                      @click="$emit('toggle-desktop-menu', $event)">
                      Register
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </nav>

    <div ref="mobileNavRef" class="md:hidden w-full px-5">
      <div class="flex items-center justify-between bg-white px-6 py-4 rounded-full shadow-md">
        <router-link to="/" class="text-xl font-bold text-gray-800">Yieh Boats</router-link>
        <div @click="isMobileMenuOpen = !isMobileMenuOpen" class="cursor-pointer">
          <ion-icon :name="isMobileMenuOpen ? 'close-outline' : 'menu-outline'"
            class="text-3xl text-gray-800 transition-transform duration-300 ease-in-out"></ion-icon>
        </div>
      </div>
      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="mt-2 bg-white rounded-2xl shadow-lg p-5">
          <ul class="flex flex-col space-y-4 text-gray-700">

            <li>
              <router-link to="/services" class="mobile-nav-link">Our Services</router-link>
            </li>
            <li>
              <router-link to="#" @click.prevent="$emit('open-booking-modal')" class="mobile-nav-link">Book a
                Trip</router-link>
            </li>
            <li>
              <router-link to="/trips" class="mobile-nav-link">Your Trips</router-link>
            </li>
            <li>
              <router-link to="/gallery" class="mobile-nav-link">Gallery</router-link>
            </li>

            <hr class="my-3 w-full" />

            <template v-if="authStore.isAuthenticated">
              <li>
                <router-link to="/dashboard" class="mobile-nav-link">Dashboard</router-link>
              </li>
              <li>
                <router-link to="/settings" class="mobile-nav-link">Settings</router-link>
              </li>
              <li>
                <router-link to="#" class="mobile-nav-link" @click="logout">Logout</router-link>
              </li>
            </template>

            <template v-else>
              <li>
                <router-link to="/authentication" class="mobile-nav-link">Login</router-link>
              </li>
              <li>
                <router-link to="/register" class="mobile-nav-link">Register</router-link>
              </li>
            </template>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "@/store/auth";

// MODIFIED: Click Outside Composable
const useClickOutside = (elementRef, callback) => {
  const listener = (event) => {
    if (!elementRef.value || elementRef.value.contains(event.target)) {
      return;
    }
    callback();
  };

  onMounted(() => {
    window.addEventListener("mousedown", listener);
  });

  onUnmounted(() => {
    window.removeEventListener("mousedown", listener);
  });
};

const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/");
  isMobileMenuOpen.value = false;
};

const props = defineProps({
  isDesktopMenuOpen: Boolean,
});

const emit = defineEmits(["toggle-desktop-menu", "open-booking-modal"]);

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// MODIFIED: Template refs for click-outside detection
const mobileNavRef = ref(null);
const desktopNavRef = ref(null);

// MODIFIED: Close menus when clicking outside
useClickOutside(mobileNavRef, () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
});

useClickOutside(desktopNavRef, () => {
  if (props.isDesktopMenuOpen) {
    emit("toggle-desktop-menu", new Event('click'));
  }
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  router.afterEach(() => {
    if (props.isDesktopMenuOpen) {
      emit("toggle-desktop-menu", new Event("click"));
    }
    isMobileMenuOpen.value = false;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Common Transition Styles */
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

.desktop-menu-button {
  transition: all 0.3s ease-in-out;
}

/* MODIFIED: New mobile menu animation for a smoother dropdown */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* MODIFIED: Custom styles for mobile navigation links */
.mobile-nav-link {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  width: 100%;
  text-align: left;
}

.mobile-nav-link:hover {
  background-color: #bfdbfe;
  color: #002255;
}
</style>
