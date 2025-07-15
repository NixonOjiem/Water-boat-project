<template>
  <div class="floating-container sticky bottom-0 z-[9999]">
    <div
      class="floating-content bg-white shadow-lg rounded-t-xl p-2 flex items-center justify-around max-w-2xl mx-auto space-x-2 border border-gray-200">

      <router-link to="#" @click.prevent="$emit('open-booking-modal')"
        class="flex flex-col items-center justify-center text-center bg-blue-50 rounded-lg w-1/2 transition-all duration-300 hover:shadow-sm hover:bg-blue-100 h-full">

        <div class="flex flex-col items-center justify-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-blue-600 mb-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          <span class="text-xs font-medium text-gray-800">Book a Trip</span>
        </div>
      </router-link>

      <router-link to="/custom-boat"
        class="flex flex-col items-center justify-center text-center bg-green-50 rounded-lg w-1/2 transition-all duration-300 hover:shadow-sm hover:bg-green-100 h-full">

        <div class="flex flex-col items-center justify-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-green-600 mb-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span class="text-xs font-medium text-gray-800">Own a Boat</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['open-booking-modal'],
};
</script>

<style scoped>
.floating-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease;
}

.floating-content {
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  /* Ensure full width on all screens */
}

/* Remove the media query for medium screens to keep the small screen styling */
/* @media (min-width: 768px) {
  .floating-content {
    width: fit-content;
  }
} */
</style>
