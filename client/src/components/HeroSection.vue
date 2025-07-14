<template>
    <section class="relative w-full h-screen overflow-hidden" ref="heroSectionRef">
      <img
        src="/images/cruise-vertical.png"
        alt="Aerial view of a yacht on Lake Victoria"
        class="absolute top-0 left-0 w-full h-full object-cover hero-image"
        :style="{ transform: `scale(${parallaxScale})` }"
      />
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <h1 class="text-5xl md:text-7xl font-bold text-center mb-4">
          Experience the Ocean's Majesty
        </h1>
        <p class="text-lg md:text-xl text-center max-w-2xl">
          Solar boats for Africa.
        </p>
        <button>Book Now</button>
        <button>Own a custom boat</button>
      </div>
      <canvas ref="rippleCanvas" class="absolute inset-0 z-[100] cursor-pointer"></canvas>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
