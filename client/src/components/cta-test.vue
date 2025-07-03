<template>
  <section class="bg-slate-900 text-white">
    <section class="relative w-full h-screen overflow-hidden" ref="heroSectionRef">
      <Navbar :is-mobile-menu-open="isMobileMenuOpen" :is-desktop-menu-open="isDesktopMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu" @toggle-desktop-menu="toggleDesktopMenu" />
      <img src="/images/cruise-vertical.png" alt="Aerial view of a yacht on Lake Victoria"
        class="absolute top-0 left-0 w-full h-full object-cover hero-image"
        :style="{ transform: `scale(${parallaxScale})` }" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
        style="background-color: rgba(0, 0, 0, 0.6);">
        <h1 class="text-5xl md:text-7xl font-bold text-center mb-4">Experience the Ocean's Majesty</h1>
        <p class="text-lg md:text-xl text-center max-w-2xl">Sail across the serene waters, captured from an unparalleled
          aerial perspective.</p>
      </div>
      <canvas ref="rippleCanvas" class="absolute inset-0 z-[100] cursor-pointer"></canvas>
    </section>

    <main class="container mx-auto px-4 py-16 md:py-24">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold">A New Horizon for Lake Transport</h2>
        <p class="text-slate-400 mt-4 max-w-3xl mx-auto">Click on any card to explore the features of our revolutionary solar-powered catamaran, designed and built in Kenya.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] lg:auto-rows-[220px]">

        <div :class="cardClasses('card-1')" @click="toggleCard('card-1')">
          <div v-if="activeCardId !== 'card-1'" class="p-6 flex flex-col h-full">
            <h3 class="text-2xl font-bold">🌊 The Challenge</h3>
            <p class="mt-2 text-slate-300">Petrol-powered canoes have long posed safety and environmental risks on Lake Victoria.</p>
          </div>
          <div v-if="activeCardId === 'card-1'" class="p-6" v-html="content['card-1'].body"></div>
        </div>

        <div :class="cardClasses('card-2')" @click="toggleCard('card-2')">
          <div v-if="activeCardId !== 'card-2'" class="p-6 flex flex-col h-full">
             <h3 class="text-2xl font-bold">☀️ The Solution</h3>
             <p class="mt-2 text-slate-300">A solar-powered catamaran combining clean energy with a safe, stable, and locally-built design.</p>
          </div>
           <div v-if="activeCardId === 'card-2'" class="p-6" v-html="content['card-2'].body"></div>
        </div>

        <div :class="cardClasses('card-3')" @click="toggleCard('card-3')">
          <div v-if="activeCardId !== 'card-3'" class="p-6 flex flex-col h-full">
            <h3 class="text-2xl font-bold">⚓ About Yieh Boats</h3>
            <p class="mt-2 text-slate-300">Innovators charting a new course for water transport, powered entirely by the sun.</p>
          </div>
          <div v-if="activeCardId === 'card-3'" class="p-6" v-html="content['card-3'].body"></div>
        </div>

        <div :class="cardClasses('card-4')" @click="toggleCard('card-4')">
          <div v-if="activeCardId !== 'card-4'" class="p-6 flex flex-col h-full">
            <h3 class="text-2xl font-bold">🚤 Versatile by Design</h3>
            <p class="mt-2 text-slate-300">From leisure cruises and guided tours to commercial transport and fishing.</p>
          </div>
          <div v-if="activeCardId === 'card-4'" class="p-6" v-html="content['card-4'].body"></div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/Navbar.vue';

// --- Card Interaction Logic ---
const activeCardId = ref(null);

const toggleCard = (cardId) => {
  if (activeCardId.value === cardId) {
    activeCardId.value = null; // Close if already open
  } else {
    activeCardId.value = cardId; // Open the new card
  }
};

const cardClasses = (cardId) => {
  const baseClasses = 'card-container rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 ease-in-out';
  let layoutClasses = '';

  // --- No Card is Active (Default State) ---
  if (!activeCardId.value) {
    switch (cardId) {
      case 'card-1': layoutClasses = 'lg:col-span-2 lg:row-span-1'; break;
      case 'card-2': layoutClasses = 'lg:col-span-2 lg:row-span-2'; break;
      case 'card-3': layoutClasses = 'lg:col-span-1 lg:row-span-1'; break;
      case 'card-4': layoutClasses = 'lg:col-span-1 lg:row-span-1'; break;
    }
    return `${baseClasses} ${layoutClasses} md:col-span-1`;
  }

  // --- A Card IS Active ---
  if (activeCardId.value === cardId) {
    // This is the active card
    return `${baseClasses} active-card col-span-1 md:col-span-3 lg:col-span-2 lg:row-span-2`;
  } else {
    // These are the inactive cards
    return `${baseClasses} inactive-card col-span-1`;
  }
};


// --- Card Content (Now with better formatting for the expanded view) ---
const content = {
  'card-1': {
    body: `
      <h3 class="text-3xl font-bold text-white mb-4">🌊 A Safer, Cleaner Future</h3>
      <div class="prose prose-invert max-w-none prose-slate">
        <p>For generations, water transport on Lake Victoria has relied on petrol-powered canoes, leading to:</p>
        <ul>
          <li>⚠️ <strong>Safety Risks:</strong> Prone to capsizing, causing tragic fatalities.</li>
          <li>🛢️ <strong>Environmental Harm:</strong> Oil leaks and emissions that degrade the ecosystem.</li>
          <li>💸 <strong>High Operating Costs:</strong> Unsustainable fuel dependency.</li>
        </ul>
        <p class="mt-4 text-cyan-300 font-semibold">We are changing the narrative with a solution born from the African sun.</p>
      </div>`
  },
  'card-2': {
    body: `
      <h3 class="text-3xl font-bold text-white mb-4">☀️ The Solar Catamaran</h3>
      <div class="prose prose-invert max-w-none prose-slate">
        <p>Our vessel revolutionizes lake transport by being:</p>
        <ul>
            <li>✅ <strong>Safe:</strong> A stable catamaran design that prevents capsizing.</li>
            <li>🌱 <strong>Clean:</strong> Zero emissions to protect the lake’s biodiversity.</li>
            <li>🔋 <strong>Reliable:</strong> Consistent performance powered by solar energy.</li>
            <li>🇰🇪 <strong>Locally Built:</strong> Crafted in Kenya, supporting local industry.</li>
        </ul>
      </div>`
  },
  'card-3': {
    body: `
      <h3 class="text-3xl font-bold text-white mb-4">⚓ About Yieh Boats</h3>
      <div class="prose prose-invert max-w-none prose-slate">
        <p>We are more than boatbuilders—we’re innovators charting a new course for sustainable water transport across Africa.</p>
        <p><strong>Our Mission:</strong> To design and build safe, reliable, and clean boats propelled entirely by solar energy. We custom-build each vessel to meet our clients' unique needs, balancing function, sustainability, and design.</p>
      </div>`
  },
  'card-4': {
    body: `
      <h3 class="text-3xl font-bold text-white mb-4">🚤 Versatile by Design</h3>
      <div class="prose prose-invert max-w-none prose-slate">
        <p>Our catamaran adapts to every journey:</p>
        <ul>
          <li><strong>Leisure:</strong> Onboard BBQs, guided tours, and private functions.</li>
          <li><strong>Commercial:</strong> Efficient fish farm supply, cargo transport, and passenger transit.</li>
          <li><strong>Recreational:</strong> A stable, silent, and eco-friendly fishing platform.</li>
        </ul>
      </div>`
  }
};


// --- UNCHANGED SCRIPT LOGIC (Menu, Parallax, Ripple) ---
const isMobileMenuOpen = ref(false);
const isDesktopMenuOpen = ref(false);
const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };
const toggleDesktopMenu = (event) => { event.stopPropagation(); isDesktopMenuOpen.value = !isDesktopMenuOpen.value; };
const heroSectionRef = ref(null);
const parallaxScale = ref(1);
const updateParallax = () => { if (heroSectionRef.value) { const rect = heroSectionRef.value.getBoundingClientRect(); let scrollProgress = -rect.top / window.innerHeight; scrollProgress = Math.max(0, Math.min(1, scrollProgress)); const maxZoomFactor = 0.2; parallaxScale.value = 1 + (scrollProgress * maxZoomFactor); } };
const rippleCanvas = ref(null);
let ctx;
let ripples = [];
function Ripple(x, y) { this.x = x; this.y = y; this.radius = 0; this.alpha = 1; this.maxRadius = 50; this.speed = 1; this.fadeSpeed = 0.02; }
Ripple.prototype.draw = function() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); const heroHeight = ctx.canvas.height; if (this.y > heroHeight / 2) { ctx.strokeStyle = `rgba(0, 150, 220, ${this.alpha})`; } else { ctx.strokeStyle = `rgba(135, 206, 235, ${this.alpha})`; } ctx.lineWidth = 2; ctx.stroke(); };
Ripple.prototype.update = function() { this.radius += this.speed; this.alpha -= this.fadeSpeed; };
const createRipple = (event) => { if (!rippleCanvas.value) return; const rect = rippleCanvas.value.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; ripples.push(new Ripple(x, y)); };
const animateRipples = () => { if (!ctx) return; ctx.clearRect(0, 0, rippleCanvas.value.width, rippleCanvas.value.height); for (let i = 0; i < ripples.length; i++) { ripples[i].update(); ripples[i].draw(); if (ripples[i].alpha <= 0) { ripples.splice(i, 1); i--; } } requestAnimationFrame(animateRipples); };
onMounted(() => { window.addEventListener('scroll', updateParallax); if (rippleCanvas.value) { ctx = rippleCanvas.value.getContext('2d'); rippleCanvas.value.width = heroSectionRef.value.offsetWidth; rippleCanvas.value.height = heroSectionRef.value.offsetHeight; heroSectionRef.value.addEventListener('mousemove', createRipple); requestAnimationFrame(animateRipples); } });
onUnmounted(() => { window.removeEventListener('scroll', updateParallax); if (heroSectionRef.value) { heroSectionRef.value.removeEventListener('mousemove', createRipple); } });
</script>

<style>
/* Base styling for all cards */
.card-container {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.card-container:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Styling for the FOCUSED card */
.active-card {
  background: linear-gradient(145deg, rgba(14, 165, 233, 0.2), rgba(45, 212, 191, 0.1));
  transform: scale(1.05);
  z-index: 10;
  border-color: rgba(22, 163, 74, 0.3);
}

/* Styling for the UNFOCUSED cards when one is active */
.inactive-card {
  opacity: 0.5;
  transform: scale(0.95);
  filter: blur(2px);
}

/* Prose styles for inverted text in dark cards */
.prose-invert {
  color: #d1d5db; /* gray-300 */
}
.prose-invert h4 {
  color: #ffffff;
}
.prose-invert strong {
  color: #f9fafb; /* gray-50 */
}
.prose-invert ul > li::before {
  background-color: #6b7280; /* gray-500 */
}

/* Unchanged styles */
.hero-image { will-change: transform; }
html { overflow-y: scroll; }
body { overflow-x: hidden; }
</style>
