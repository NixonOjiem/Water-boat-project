<template>
  <!-- Main modal container with a semi-transparent background -->
  <div class="fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-opacity duration-300"
    style="background-color: rgba(0, 0, 0, 0.8);" @click.self="$emit('close')">

    <!-- Modal content card -->
    <div class="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
      @click.stop>

      <!-- Close button -->
      <button @click="$emit('close')"
        class="absolute top-3 right-3 z-20 text-gray-500 hover:text-gray-900 transition-colors">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Left Panel: Image and Text Overlay -->
      <div class="w-full md:w-1/2 relative hidden md:block">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white bg-cover bg-center"
          style="background-image: url('/images/BoatMoving1.gif');">
          <h2 class="text-3xl font-bold leading-tight">Craft Your Dream Vessel</h2>
          <p class="mt-2 text-lg opacity-90">
            From concept to creation, our team is here to build the custom boat you've always wanted.
          </p>
        </div>
      </div>

      <!-- Right Panel: Form -->
      <div class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Design Your Boat</h1>
        <p class="text-gray-600 mb-8">Tell us about your vision, and we'll help you make it a reality.</p>

        <!-- The form itself, submission is handled by the submitDesign method -->
        <form @submit.prevent="submitDesign" class="space-y-6">

          <!-- Full Name Input -->
          <div>
            <label for="designFullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" id="designFullName" v-model="design.fullName" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., Alex Sammy">
          </div>

          <!-- Email Input -->
          <div>
            <label for="designEmail" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" id="designEmail" v-model="design.email" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="you@gmail.com">
          </div>

          <!-- Phone Number Input -->
          <div>
            <label for="designPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="designPhone" v-model="design.phone" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="+254756566654">
          </div>

          <!-- Location Input -->
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Your Location
              (City/Region)</label>
            <input type="text" id="location" v-model="design.location" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., Kisumu, Kenya">
          </div>

          <!-- Boat Description Textarea -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Describe your ideal
              boat</label>
            <textarea id="description" v-model="design.description" rows="4" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., A 30ft catamaran for coastal cruising, focused on fuel efficiency and solar power..."></textarea>
          </div>


          <!-- Submit Button -->
          <button type="submit"
            :class="['w-full text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105', status === 'submitted' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700']"
            :disabled="status === 'loading' || status === 'submitted'">
            {{ buttonText }}
          </button>
        </form>

        <!-- Confirmation Message -->
        <transition name="fade">
          <div v-if="status === 'submitted'"
            class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p class="font-bold">Vision Received!</p>
            <p>Thank you for sharing your design ideas. Our team will review it and contact you soon.</p>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DesignBoatForm',
  emits: ['close'], // Declare the 'close' event
  data() {
    return {
      // Form data is stored in this object
      design: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        description: '',
      },
      // Manages the state of the form submission
      status: 'idle', // idle | loading | submitted | error
    };
  },
  computed: {
    // Dynamically changes the button text based on the form status
    buttonText() {
      if (this.status === 'loading') {
        return 'Sending Design...';
      }
      if (this.status === 'submitted') {
        return 'Design Sent!';
      }
      return 'Start My Design';
    },
  },
  methods: {
    // Handles the form submission
    submitDesign() {
      this.status = 'loading';
      console.log('Submitting boat design:', this.design);

      // Simulate an API call
      setTimeout(() => {
        this.status = 'submitted';
      }, 1500);
    },
  },
};
</script>

<style scoped>
/* Simple fade transition for the confirmation message */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
