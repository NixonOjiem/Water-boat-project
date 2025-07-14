<template>
  <section class="bg-slate-900 text-white">
    <section class="relative w-full h-screen overflow-hidden" ref="heroSectionRef">
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu"
        @open-booking-modal="openBookingModal" data-aos-easing="linear" data-aos="fade-down" data-aos-duration="1000" />

      <img src="/images/cruise-vertical.png" alt="Aerial view of a yacht on Lake Victoria"
        class="absolute top-0 left-0 w-full h-full object-cover hero-image"
        :style="{ transform: `scale(${parallaxScale})` }" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
        style="background-color: rgba(0, 0, 0, 0.6)">
        <h1 class="text-5xl md:text-7xl font-bold text-center mb-4" data-aos="zoom-in-up" data-aos-duration="3000">
          Experience Lake Victoria's Majesty
        </h1>
        <p class="text-lg md:text-xl text-center max-w-2xl" data-aos="zoom-in-up" data-aos-duration="3000">
          Solar boats for Africa.
        </p>
      </div>
      <canvas ref="rippleCanvas" class="absolute inset-0 z-[100] cursor-pointer"></canvas>
    </section>

    <main class="container mx-auto px-4 py-16 md:py-24 pb-32">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000">
        <h2 class="text-4xl md:text-5xl font-bold">A New Horizon for Lake Transport</h2>
        <p class="text-slate-400 mt-4 max-w-3xl mx-auto">
          Click on any card to expand it and learn more.
        </p>
      </div>

      <div ref="bentoGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
        data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
        <div :class="cardClasses('card-1')">
          <div @click="toggleCard('card-1')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">🌊 The Challenge</h3>
            <p class="mt-2 text-slate-300">
              Petrol-powered canoes have long posed safety and environmental risks on Lake Victoria.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-1'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-1'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-2')">
          <div @click="toggleCard('card-2')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">☀️ The Solution</h3>
            <p class="mt-2 text-slate-300">
              A solar-powered catamaran combining clean energy with a safe, stable, and locally-built design.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-2'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-2'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-3')">
          <div @click="toggleCard('card-3')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">⚓ About Yieh Boats</h3>
            <p class="mt-2 text-slate-300">
              Innovators charting a new course for water transport, powered entirely by the sun.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-3'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-3'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-4')">
          <div @click="toggleCard('card-4')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">🚤 Versatile by Design</h3>
            <p class="mt-2 text-slate-300">
              From leisure cruises and guided tours to commercial transport and fishing.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-4'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-4'].body"></div>
            </div>
          </Transition>
        </div>
      </div>
    </main>
    <GetInTouch />
    <Footer />
    <FloatingBar @open-booking-modal="openBookingModal" />
    <transition name="modal-fade">
      <BookingModal v-if="isBookingModalOpen" @close="closeBookingModal" />
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import Footer from '@/components/Footer.vue'
import BookingModal from '@/components/BookingModal.vue'
import FloatingBar from '@/components/FloatingBar.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Initialize AOS for animations
AOS.init();

// --- Template Refs ---
const heroSectionRef = ref(null)
const bentoGridRef = ref(null)

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

// --- NEW: Booking Modal State ---
const isBookingModalOpen = ref(false)
const openBookingModal = () => {
  isBookingModalOpen.value = true;
  // Optional: prevent background scroll when modal is open
  document.body.style.overflow = 'hidden';
}
const closeBookingModal = () => {
  isBookingModalOpen.value = false;
  // Optional: restore background scroll
  document.body.style.overflow = '';
}

// --- Parallax Effect Logic ---
const parallaxScale = ref(1)
const updateParallax = () => {
  if (heroSectionRef.value) {
    // Get the top position of the hero section relative to the viewport
    const rect = heroSectionRef.value.getBoundingClientRect()
    // Calculate scroll progress (0 when top of section hits top of viewport, 1 when bottom hits)
    let scrollProgress = -rect.top / window.innerHeight
    // Clamp the value between 0 and 1
    scrollProgress = Math.max(0, Math.min(1, scrollProgress))
    // Define how much the image should zoom (e.g., 20%)
    const maxZoomFactor = 0.2
    // Update the scale value
    parallaxScale.value = 1 + scrollProgress * maxZoomFactor
  }
}

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


// --- Card Interaction Logic ---
const activeCardId = ref(null)
const toggleCard = (cardId) => {
  activeCardId.value = activeCardId.value === cardId ? null : cardId
}
const handleClickOutside = (event) => {
  if (bentoGridRef.value && !bentoGridRef.value.contains(event.target)) {
    activeCardId.value = null
  }
}
const cardClasses = (cardId) => {
  const baseClasses = 'card-container rounded-2xl overflow-hidden transition-all duration-300 ease-in-out'
  const isActive = activeCardId.value === cardId
  let layoutClasses = 'lg:col-span-1'
  if (cardId === 'card-1' || cardId === 'card-2') {
    layoutClasses = 'md:col-span-1 lg:col-span-2'
  }
  return `${baseClasses} ${layoutClasses} ${isActive ? 'active-card' : ''}`
}
const content = {
  'card-1': { body: `<p>For generations, water transport on Lake Victoria has relied on petrol-powered canoes, leading to:</p><ul><li>⚠️ <strong>Safety Risks:</strong> Prone to capsizing.</li><li>🛢️ <strong>Environmental Harm:</strong> Oil leaks and emissions.</li><li>💸 <strong>High Operating Costs:</strong> Unsustainable fuel dependency.</li></ul>` },
  'card-2': { body: `<p>Our vessel revolutionizes lake transport by being:</p><ul><li>✅ <strong>Safe:</strong> A stable catamaran design.</li><li>🌱 <strong>Clean:</strong> Zero emissions.</li><li>🔋 <strong>Reliable:</strong> Consistent solar power.</li><li>🇰🇪 <strong>Locally Built:</strong> Crafted in Kenya.</li></ul>` },
  'card-3': { body: `<p>We are innovators charting a new course for sustainable water transport. We design and build safe, reliable, and clean boats propelled entirely by solar energy.</p>` },
  'card-4': { body: `<p>Our catamaran adapts to every journey:</p><ul><li><strong>Leisure:</strong> Onboard BBQs & tours.</li><li><strong>Commercial:</strong> Supply, cargo, and transport.</li><li><strong>Recreational:</strong> A stable, eco-friendly fishing platform.</li></ul>` },
}

// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener('scroll', updateParallax)
  document.addEventListener('click', handleClickOutside)
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
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax)
  document.removeEventListener('click', handleClickOutside)
  // Clean up ripple listeners
  if (heroSectionRef.value) {
    heroSectionRef.value.removeEventListener('mousemove', createRipple);
  }
})
</script>

<style>
/* ADDED: Transition for the modal appearing and disappearing */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Base styling for all cards */
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

/* Expansion Transition Animation for the content */
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
