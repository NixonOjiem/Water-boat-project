<template>
  <section class="bg-gray-50">
    <!-- Hero Section: Contains the header, the parallax image, and the ripple overlay -->
    <section class="relative w-full h-screen overflow-hidden" ref="heroSectionRef">
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu" />
      <!-- Hero Image for Parallax Effect -->
      <img src="/images/cruise-vertical.png" alt="Aerial view of a yacht on Lake Victoria"
        class="absolute top-0 left-0 w-full h-full object-cover hero-image"
        :style="{ transform: `scale(${parallaxScale})` }" />

      <!-- Text Overlay - Removed bg-black and used inline style for rgba background -->
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
        style="background-color: rgba(0, 0, 0, 0.6);">
        <h1 class="text-5xl md:text-7xl font-bold text-center mb-4">Experience the Ocean's Majesty</h1>
        <p class="text-lg md:text-xl text-center max-w-2xl">Sail across the serene waters, captured from an unparalleled
          aerial perspective.</p>
      </div>

      <!-- Ripple Effect Canvas Overlay -->
      <canvas ref="rippleCanvas" class="absolute inset-0 z-[100] cursor-pointer"></canvas>

      <!-- Water SVG at the bottom of the hero section -->
      <!-- Removed the SVG waves as requested -->
    </section>

    <main class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Our World</h2>
      <p class="text-gray-600">This is where the rest of your website content will go. You can add more sections,
        features, and information here.</p>
      <div class="h-[1000px] mt-8 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
        More content will be here...
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
// --- Menu State and Logic ---
const isMobileMenuOpen = ref(false);
const isDesktopMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const toggleDesktopMenu = (event) => {
  event.stopPropagation();
  isDesktopMenuOpen.value = !isDesktopMenuOpen.value;
};

const handleClickOutside = (event) => {
  const desktopMenuWrapper = document.querySelector('.desktop-menu-wrapper');
  const desktopMenuDropdown = document.querySelector('.desktop-menu-wrapper > .absolute.right-0.top-full');

  if (desktopMenuWrapper && !desktopMenuWrapper.contains(event.target) &&
    desktopMenuDropdown && !desktopMenuDropdown.contains(event.target)) {
    isDesktopMenuOpen.value = false;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
    isDesktopMenuOpen.value = false;
  }
};

// --- Parallax Effect Logic ---
const heroSectionRef = ref(null); // Ref for the hero section element
const parallaxScale = ref(1); // Reactive property for the parallax zoom level

const updateParallax = () => {
  if (heroSectionRef.value) {
    const rect = heroSectionRef.value.getBoundingClientRect();

    // Calculate how much of the hero section has scrolled out of view from the top
    let scrollProgress = -rect.top / window.innerHeight;

    // Clamp the progress between 0 and 1 to control the effect only while scrolling through the hero
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    // Calculate the scale:
    // When scrollProgress is 0 (hero is at the top), scale is 1.0 (no zoom)
    // When scrollProgress is 1 (hero has scrolled one full viewport height), scale is 1.2 (20% zoom)
    const maxZoomFactor = 0.2; // Controls the maximum amount of zoom
    parallaxScale.value = 1 + (scrollProgress * maxZoomFactor);
  }
};

// --- Ripple Effect Logic ---
const rippleCanvas = ref(null);
let ctx;
let ripples = [];

// Ripple constructor
function Ripple(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 0;
  this.alpha = 1;
  this.maxRadius = 50; // Max size of the ripple
  this.speed = 1; // How fast the ripple expands
  this.fadeSpeed = 0.02; // How fast the ripple fades
}

Ripple.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

  // Determine color based on vertical position
  const heroHeight = ctx.canvas.height;
  if (this.y > heroHeight / 2) {
    // Bottom half: Lighter Ocean Blue
    ctx.strokeStyle = `rgba(0, 150, 220, ${this.alpha})`; // Changed from 0, 119, 190
  } else {
    // Top half: Sky Blue
    ctx.strokeStyle = `rgba(135, 206, 235, ${this.alpha})`; // A shade of sky blue
  }

  ctx.lineWidth = 2; // Ripple thickness
  ctx.stroke();
};

Ripple.prototype.update = function () {
  this.radius += this.speed;
  this.alpha -= this.fadeSpeed;
};

const createRipple = (event) => {
  const rect = rippleCanvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  ripples.push(new Ripple(x, y));
};

const animateRipples = () => {
  ctx.clearRect(0, 0, rippleCanvas.value.width, rippleCanvas.value.height);

  for (let i = 0; i < ripples.length; i++) {
    ripples[i].update();
    ripples[i].draw();

    if (ripples[i].alpha <= 0 || ripples[i].radius >= ripples[i].maxRadius) {
      ripples.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateRipples);
};

// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside);

  // Parallax setup
  window.addEventListener('scroll', updateParallax);
  updateParallax(); // Initial call for parallax

  // Ripple effect setup
  if (rippleCanvas.value) {
    ctx = rippleCanvas.value.getContext('2d');
    // Set canvas dimensions to match the hero section
    rippleCanvas.value.width = heroSectionRef.value.offsetWidth;
    rippleCanvas.value.height = heroSectionRef.value.offsetHeight;

    heroSectionRef.value.addEventListener('mousemove', createRipple);
    requestAnimationFrame(animateRipples); // Start ripple animation loop
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', updateParallax); // Clean up parallax listener

  // Clean up ripple listeners
  if (heroSectionRef.value) {
    heroSectionRef.value.removeEventListener('mousemove', createRipple);
  }
});
</script>

<style>
/* Global style to prevent body scrollbar shift */
html {
  overflow-y: scroll;
  /* Always show scrollbar to prevent horizontal jumps */
}

body {
  overflow-x: hidden;
  /* Prevent horizontal scroll */
}
</style>

<style scoped>
/* Optional: Add a simple fade transition for the menus */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Base styles for the new desktop menu wrapper */
.desktop-menu-wrapper {
  transition: all 0.3s ease-in-out;
  transform-origin: right center;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

/* Teardrop effect on the desktop-menu-wrapper when active */
.desktop-menu-wrapper.teardrop-active {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

/* Styling for the desktop menu button itself */
.desktop-menu-button {
  transition: all 0.3s ease-in-out;
  background-color: transparent !important;
  box-shadow: none !important;
}

/* Ensure the icon rotates or changes as desired when active */
.desktop-menu-wrapper.teardrop-active .desktop-menu-button ion-icon {
  transform: rotate(90deg);
}

/* Add will-change for performance optimization on parallax image */
.hero-image {
  will-change: transform;
}
</style>
