<template>
  <!-- Floating Div Container - Now sticky at the bottom -->
  <div class="floating-container sticky bottom-0 z-50">
    <div
      class="floating-content bg-white shadow-lg rounded-t-xl p-2 md:p-3 flex flex-col md:flex-row items-center justify-around w-full max-w-2xl mx-auto space-y-2 md:space-y-0 md:space-x-3 border border-gray-200">
      <div
        class="flex flex-col items-center text-center p-2 bg-blue-50 rounded-lg w-full md:w-1/2 transition-all duration-300 hover:shadow-sm hover:bg-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 text-blue-600 mb-1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <h2 class="lg:text-lg font-semibold text-gray-800 mb-1">Book a Trip</h2>
        <p class="text-sm text-gray-600 mb-2">
          Embark on an unforgettable journey. Choose from our curated trips or customize your own adventure.
        </p>
        <button @click="$emit('open-booking-modal')"
          class="bg-blue-600 text-white px-3 py-1.5 rounded-full font-normal text-sm shadow-sm hover:bg-blue-700 transition-colors duration-300">
          Explore Trips
        </button>
      </div>

      <div
        class="flex flex-col items-center text-center p-2 bg-green-50 rounded-lg w-full md:w-1/2 transition-all duration-300 hover:shadow-sm hover:bg-green-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 text-green-600 mb-1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 10.5a.75.75 0 01.75-.75h.008v.008H9.75a.75.75 0 01-.75.75zM12 10.5a.75.75 0 01.75-.75h.008v.008H12.75a.75.75 0 01-.75.75zM15 10.5a.75.75 0 01.75-.75h.008v.008H15.75a.75.75 0 01-.75.75z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 12c0 2.75 1.75 5 4 5s4-2.25 4-5-1.75-5-4-5-4 2.25-4 5z" />
        </svg>
        <h2 class="lg:text-lg font-semibold text-gray-800 mb-1">Own a Custom Boat</h2>
        <p class="text-sm text-gray-600 mb-2">
          Design your dream boat with our experts. From concept to launch, we build it just for you.
        </p>
        <button
          class="bg-green-600 text-white px-3 py-1.5 rounded-full font-normal text-sm shadow-sm hover:bg-green-700 transition-colors duration-300">
          Design Your Boat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['open-booking-modal']
}
</script>

<style scoped>
.floating-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  /* Ensure it's above content but below modals */
  padding: 0 1rem;
  /* Add horizontal padding */
  transition: transform 0.3s ease;
}

.floating-content {
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
