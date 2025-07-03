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
        <p class="text-slate-400 mt-4 max-w-3xl mx-auto">Click on any card to expand it and learn more.</p>
      </div>

      <div ref="bentoGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

        <div :class="cardClasses('card-1')">
          <div @click="toggleCard('card-1')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">🌊 The Challenge</h3>
            <p class="mt-2 text-slate-300">Petrol-powered canoes have long posed safety and environmental risks on Lake Victoria.</p>
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
             <p class="mt-2 text-slate-300">A solar-powered catamaran combining clean energy with a safe, stable, and locally-built design.</p>
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
            <p class="mt-2 text-slate-300">Innovators charting a new course for water transport, powered entirely by the sun.</p>
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
            <p class="mt-2 text-slate-300">From leisure cruises and guided tours to commercial transport and fishing.</p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-4'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-4'].body"></div>
            </div>
          </Transition>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/Navbar.vue';

// --- Card Interaction Logic ---
const activeCardId = ref(null);
const bentoGridRef = ref(null); // Ref for the grid container

const toggleCard = (cardId) => {
  activeCardId.value = activeCardId.value === cardId ? null : cardId;
};

// NEW: Handles clicking outside the bento grid to close the active card
const handleClickOutside = (event) => {
  if (bentoGridRef.value && !bentoGridRef.value.contains(event.target)) {
    activeCardId.value = null;
  }
};

const cardClasses = (cardId) => {
  const baseClasses = 'card-container rounded-2xl overflow-hidden transition-all duration-300 ease-in-out';
  const isActive = activeCardId.value === cardId;

  // Static layout classes - cards no longer change their span
  let layoutClasses = 'lg:col-span-1';
  if (cardId === 'card-1' || cardId === 'card-2') {
    layoutClasses = 'md:col-span-1 lg:col-span-2';
  }

  return `${baseClasses} ${layoutClasses} ${isActive ? 'active-card' : ''}`;
};


// --- Card Content (Simplified for dropdown) ---
const content = {
  'card-1': { body: `<p>For generations, water transport on Lake Victoria has relied on petrol-powered canoes, leading to:</p><ul><li>⚠️ <strong>Safety Risks:</strong> Prone to capsizing.</li><li>🛢️ <strong>Environmental Harm:</strong> Oil leaks and emissions.</li><li>💸 <strong>High Operating Costs:</strong> Unsustainable fuel dependency.</li></ul>` },
  'card-2': { body: `<p>Our vessel revolutionizes lake transport by being:</p><ul><li>✅ <strong>Safe:</strong> A stable catamaran design.</li><li>🌱 <strong>Clean:</strong> Zero emissions.</li><li>🔋 <strong>Reliable:</strong> Consistent solar power.</li><li>🇰🇪 <strong>Locally Built:</strong> Crafted in Kenya.</li></ul>` },
  'card-3': { body: `<p>We are innovators charting a new course for sustainable water transport. We design and build safe, reliable, and clean boats propelled entirely by solar energy.</p>` },
  'card-4': { body: `<p>Our catamaran adapts to every journey:</p><ul><li><strong>Leisure:</strong> Onboard BBQs & tours.</li><li><strong>Commercial:</strong> Supply, cargo, and transport.</li><li><strong>Recreational:</strong> A stable, eco-friendly fishing platform.</li></ul>` }
};


// --- Lifecycle Hooks ---
onMounted(() => {
  // Add listeners for parallax and click-outside
  window.addEventListener('scroll', updateParallax);
  document.addEventListener('click', handleClickOutside);

  // --- Unchanged Ripple Effect Logic ---
  if (rippleCanvas.value && heroSectionRef.value) { /* ... ripple logic ... */ }
});

onUnmounted(() => {
  // Clean up listeners
  window.removeEventListener('scroll', updateParallax);
  document.removeEventListener('click', handleClickOutside);

  if (heroSectionRef.value) { /* ... remove ripple listener ... */ }
});


// --- UNCHANGED SCRIPT LOGIC (Menu, Parallax, Ripple) ---
const isMobileMenuOpen = ref(false); const isDesktopMenuOpen = ref(false); const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; }; const toggleDesktopMenu = (event) => { event.stopPropagation(); isDesktopMenuOpen.value = !isDesktopMenuOpen.value; }; const heroSectionRef = ref(null); const parallaxScale = ref(1); const updateParallax = () => { if (heroSectionRef.value) { const rect = heroSectionRef.value.getBoundingClientRect(); let scrollProgress = -rect.top / window.innerHeight; scrollProgress = Math.max(0, Math.min(1, scrollProgress)); const maxZoomFactor = 0.2; parallaxScale.value = 1 + (scrollProgress * maxZoomFactor); } }; const rippleCanvas = ref(null); let ctx;
</script>

<style>
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
  max-height: 500px; /* Adjust to a height larger than any possible content */
  opacity: 1;
}

/* Prose styles for inverted text in dark cards */
.prose-invert { color: #d1d5db; }
.prose-invert ul > li::before { background-color: #6b7280; }
.prose-invert strong { color: #f9fafb; }

/* Unchanged styles */
.hero-image { will-change: transform; }
html { overflow-y: scroll; }
body { overflow-x: hidden; }
</style>
