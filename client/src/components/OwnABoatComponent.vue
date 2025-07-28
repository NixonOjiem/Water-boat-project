<template>
  <div class="design-boat-page-wrapper">

    <div class="design-form-card">

      <div class="design-image-panel">
        <div class="image-overlay-content">
          <h2 class="image-overlay-title">Craft Your Dream Vessel</h2>
          <p class="image-overlay-description">
            From concept to creation, our team is here to build the custom boat you've always wanted.
          </p>
        </div>
      </div>

      <div class="form-panel">
        <h1 class="form-title">Design Your Boat</h1>
        <p class="form-subtitle">Tell us about your vision, and we'll help you make it a reality.</p>

        <form @submit.prevent="submitDesign" class="space-y-6">

          <div>
            <label for="designFullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" id="designFullName" v-model="design.fullName" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., Alex Sammy">
          </div>

          <div>
            <label for="designEmail" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" id="designEmail" v-model="design.email" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="you@gmail.com">
          </div>

          <!-- <div>
            <label for="designPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="designPhone" v-model="design.phone" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="+254756566654">
          </div> -->

          <!-- <div>
            <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Your Location
              (City/Region)</label>
            <input type="text" id="location" v-model="design.location" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., Kisumu, Kenya">
          </div> -->

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Describe your ideal
              boat</label>
            <textarea id="description" v-model="design.description" rows="5" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-900"
              placeholder="e.g., A 30ft catamaran for cruising, focused on efficiency and solar power..."></textarea>
          </div>

          <button type="submit"
            :class="['w-full text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105', status === 'submitted' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700']"
            :disabled="status === 'loading' || status === 'submitted'">
            {{ buttonText }}
          </button>
        </form>

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
  name: 'DesignBoatPage', // Changed component name
  // emits: ['close'], // REMOVED: No 'close' event as it's not a modal
  data() {
    return {
      design: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        description: '',
      },
      status: 'idle', // idle | loading | submitted | error
    };
  },
  computed: {
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
/* Main page wrapper for layout */
.design-boat-page-wrapper {
  padding: 24px 16px;
  /* REDUCED overall page padding */
  display: flex;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height, 0px) - var(--footer-height, 0px));
  background-color: #f7fafc;
}

/* Form card on the page */
.design-form-card {
  width: 100%;
  max-width: 800px;
  /* REDUCED max-width for a more compact card */
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 650px;
}

/* Left Panel: Image */
.design-image-panel {
  width: 100%;
  position: relative;
  background-image: url('/images/BoatMoving1.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  /* REDUCED padding */
  color: white;
}

.image-overlay-content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 8px;
}

.image-overlay-title {
  font-size: 1.5rem;
  /* text-2xl - slightly smaller title */
  font-weight: bold;
  line-height: 1.25;
}

.image-overlay-description {
  margin-top: 8px;
  font-size: 1rem;
  /* text-base - slightly smaller description */
  opacity: 0.9;
}

/* Right Panel: Form */
.form-panel {
  width: 100%;
  padding: 24px;
  /* REDUCED padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: 1.5rem;
  /* text-2xl - slightly smaller title */
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 4px;
  /* mb-1 */
}

.form-subtitle {
  color: #4a5568;
  margin-bottom: 24px;
  /* REDUCED bottom margin (mb-6) */
}

/* Simple fade transition for the confirmation message */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- Media Queries --- */
@media (min-width: 768px) {
  .design-form-card {
    flex-direction: row;
  }

  .design-image-panel {
    width: 45%;
    /* Adjusted width slightly */
    min-height: 50vh;
    display: flex;
  }

  .form-panel {
    width: 55%;
    /* Adjusted width slightly */
    padding: 32px;
    /* REDUCED padding on larger screens (was 48px) */
  }
}
</style>
