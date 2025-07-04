<template></template>
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
<style></style>

<script>


</script>

