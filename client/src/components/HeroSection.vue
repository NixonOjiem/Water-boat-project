<template>
  <div ref="heroRootRef" class="relative w-full h-full">
    <img src="/images/cruise-vertical.png" alt="Aerial view of a yacht on Lake Victoria"
      class="absolute top-0 left-0 w-full h-full object-cover hero-image"
      :style="{ transform: `scale(${parallaxScale})` }" />

    <canvas ref="rippleCanvas" class="absolute inset-0 w-full h-full z-10 cursor-pointer"></canvas>

    <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-20"
      style="background-color: rgba(0, 0, 0, 0.5)">
      <h1 class="text-5xl md:text-7xl font-bold text-center mb-4" data-aos="zoom-in-up" data-aos-duration="3000">
        Solar Boats For Africa.
      </h1>
      <p class="text-lg md:text-xl text-center max-w-2xl" data-aos="zoom-in-up" data-aos-duration="3000">
        Experience Lake Victoria's Majesty
      </p>
      <div class="button-container">
        <button class="btn btn-glass" @click.prevent="openBookingModal">
          Book a Trip
        </button>
        <router-link to="/custom-boat" class="btn btn-glass">
          Custom Boat
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

// --- Component Refs ---
const heroRootRef = ref(null);
const rippleCanvas = ref(null);

// --- Emits ---
const emit = defineEmits(['openBookingModal']);
const openBookingModal = () => {
  emit('openBookingModal');
}

// --- Parallax Effect Logic ---
const parallaxScale = ref(1);
const updateParallax = () => {
  if (heroRootRef.value) {
    const rect = heroRootRef.value.getBoundingClientRect();
    let scrollProgress = -rect.top / window.innerHeight;
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));
    const maxZoomFactor = 0.2;
    parallaxScale.value = 1 + scrollProgress * maxZoomFactor;
  }
};

// --- Ripple Effect Logic ---
let ctx;
let ripples = [];

function Ripple(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 0;
  this.alpha = 1;
  this.maxRadius = 50;
  this.speed = 1.2; // Slightly faster ripple
  this.fadeSpeed = 0.02;
}

Ripple.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  const heroHeight = ctx.canvas.height;
  // ✨ UPDATED: Brighter colors for the ripples
  if (this.y > heroHeight / 2) {
    // Bottom half: Vibrant Ocean Cyan
    ctx.strokeStyle = `rgba(0, 150, 220, ${this.alpha})`; // Changed from 0, 119, 190
  } else {
    // Top half: Bright Sky Cyan
    ctx.strokeStyle = `rgba(135, 206, 235, ${this.alpha})`; // A shade of sky blue
  }
  ctx.lineWidth = 2;
  ctx.stroke();
};

Ripple.prototype.update = function () {
  this.radius += this.speed;
  this.alpha -= this.fadeSpeed;
};

const createRipple = (event) => {
  if (!rippleCanvas.value) return;
  const rect = rippleCanvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  ripples.push(new Ripple(x, y));
};

let animationFrameId = null;
const animateRipples = () => {
  if (!ctx || !rippleCanvas.value) return;
  ctx.clearRect(0, 0, rippleCanvas.value.width, rippleCanvas.value.height);
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].draw();
    if (ripples[i].alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
  animationFrameId = requestAnimationFrame(animateRipples);
};


// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener('scroll', updateParallax);
  updateParallax();

  if (rippleCanvas.value && heroRootRef.value) {
    ctx = rippleCanvas.value.getContext('2d');
    rippleCanvas.value.width = heroRootRef.value.offsetWidth;
    rippleCanvas.value.height = heroRootRef.value.offsetHeight;
    heroRootRef.value.addEventListener('mousemove', createRipple);
    animateRipples();
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax);
  if (heroRootRef.value) {
    heroRootRef.value.removeEventListener('mousemove', createRipple);
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>
<style scoped>
.button-container {
  /* Example styles for the container to showcase the glass effect */
  background-image: url('https://images.unsplash.com/photo-1559128010-4c1ad8e1b4a5?q=80&w=2070');
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  border-radius: 1rem;

  /* Layout styles to replace Tailwind's `mt-8` and `mr-4` */
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* This creates space between the buttons */
}

/* Base style for the buttons */
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.btn:hover {
  transform: translateY(-3px);
}

/* Glass effect for the buttons */
.btn-glass {
  background: rgba(1, 83, 49, 0.644);
  /* Semi-transparent white */
  backdrop-filter: blur(12px);
  /* The blur effect */
  -webkit-backdrop-filter: blur(12px);
  /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>
