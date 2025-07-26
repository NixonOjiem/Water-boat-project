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
        <!-- Background image with a dark overlay for text contrast -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white bg-cover bg-center"
          style="background-image: url('/images/321589919.webp');">
          <h2 class="text-3xl font-bold leading-tight">Partner with Innovation</h2>
          <p class="mt-2 text-lg opacity-90">Join us in charting the future of sustainable maritime transport. Your
            investment fuels progress.</p>
        </div>
      </div>

      <!-- Right Panel: Form -->
      <div class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Investment Inquiry</h1>
        <p class="text-gray-600 mb-8">Provide your details, and our team will get in touch with you.</p>

        <!-- The form itself, submission is handled by the submitInquiry method -->
        <form @submit.prevent="submitInquiry" class="space-y-6">

          <!-- Full Name Input -->
          <div>
            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" id="fullName" v-model="inquiry.fullName" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., Jane Doe">
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" id="email" v-model="inquiry.email" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="you@company.com">
          </div>

          <!-- Phone Number Input -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="phone" v-model="inquiry.phone" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="+1 (555) 123-4567">
          </div>

          <!-- Investment Tier Select -->
          <div>
            <label for="investmentTier" class="block text-sm font-medium text-gray-700 mb-1">Investment Tier
              (Optional)</label>
            <div class="relative">
              <select id="investmentTier" v-model="inquiry.tier"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none text-gray-900">
                <option value="" disabled>Select a tier</option>
                <option value="seed">Seed ($10,000 - $50,000)</option>
                <option value="series_a">Series A ($50,000 - $250,000)</option>
                <option value="partner">Partner (250,000+)</option>
                <option value="other">Other</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
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
            <p class="font-bold">Thank You!</p>
            <p>Your inquiry has been sent. We will contact you at {{ inquiry.email }} shortly.</p>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestmentForm',
  emits: ['close'], // Declare the 'close' event
  data() {
    return {
      // Form data is stored in this object
      inquiry: {
        fullName: '',
        email: '',
        phone: '',
        tier: '',
      },
      // Manages the state of the form submission
      status: 'idle', // idle | loading | submitted | error
    };
  },
  computed: {
    // Dynamically changes the button text based on the form status
    buttonText() {
      if (this.status === 'loading') {
        return 'Submitting...';
      }
      if (this.status === 'submitted') {
        return 'Inquiry Sent!';
      }
      return 'Submit Inquiry';
    },
  },
  methods: {
    // Handles the form submission
    submitInquiry() {
      this.status = 'loading';
      console.log('Submitting investment inquiry:', this.inquiry);

      // Simulate an API call
      setTimeout(() => {
        this.status = 'submitted';

        // Optional: Close the modal automatically after a delay
        // setTimeout(() => {
        //   this.$emit('close');
        // }, 3000);

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
