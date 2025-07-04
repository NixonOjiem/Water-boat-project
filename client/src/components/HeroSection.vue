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
          Sail across the serene waters, captured from an unparalleled aerial perspective.
        </p>
      </div>
      <canvas ref="rippleCanvas" class="absolute inset-0 z-[100] cursor-pointer"></canvas>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const heroSectionRef = ref(null)
const parallaxScale = ref(1)
// --- Lifecycle Hooks ---
onMounted(() => {
  // Add listeners for parallax and click-outside
  window.addEventListener('scroll', updateParallax)
  document.addEventListener('click', handleClickOutside)

  // --- Unchanged Ripple Effect Logic ---
  if (rippleCanvas.value && heroSectionRef.value) {
    /* ... ripple logic ... */
  }
})

onUnmounted(() => {
  // Clean up listeners
  window.removeEventListener('scroll', updateParallax)
  document.removeEventListener('click', handleClickOutside)

  if (heroSectionRef.value) {
    /* ... remove ripple listener ... */
  }
})
const updateParallax = () => {
  if (heroSectionRef.value) {
    const rect = heroSectionRef.value.getBoundingClientRect()
    let scrollProgress = -rect.top / window.innerHeight
    scrollProgress = Math.max(0, Math.min(1, scrollProgress))
    const maxZoomFactor = 0.2
    parallaxScale.value = 1 + scrollProgress * maxZoomFactor
  }
}
const rippleCanvas = ref(null)

</script>
