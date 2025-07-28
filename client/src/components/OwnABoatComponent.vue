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
            <textarea id="description" v-model="design.description" rows="7" required
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
  padding: 40px 20px;
  /* Add overall padding for the page content */
  display: flex;
  justify-content: center;
  /* Center the form card horizontally */
  min-height: calc(100vh - var(--navbar-height, 0px) - var(--footer-height, 0px));
  /* Ensure it takes available viewport height */
  background-color: #f7fafc;
  /* Light background for the page */
}

/* Modal content card -> now the main form card on the page */
.design-form-card {
  width: 100%;
  max-width: 900px;
  /* Increased max-width for better page layout */
  background-color: white;
  border-radius: 16px;
  /* Rounded-2xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  /* Shadow-2xl */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* Default to column on small screens */
}

/* Left Panel: Image and Text Overlay */
.design-image-panel {
  width: 100%;
  position: relative;
  background-image: url('/images/BoatMoving1.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* Align content to the bottom */
  padding: 32px;
  /* p-8 */
  color: white;
}

.image-overlay-content {
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent overlay for text readability */
  padding: 15px;
  border-radius: 8px;
}

.image-overlay-title {
  font-size: 1.875rem;
  /* text-3xl */
  font-weight: bold;
  line-height: 1.25;
  /* leading-tight */
}

.image-overlay-description {
  margin-top: 8px;
  /* mt-2 */
  font-size: 1.125rem;
  /* text-lg */
  opacity: 0.9;
}


/* Right Panel: Form */
.form-panel {
  width: 100%;
  padding: 32px;
  /* p-8 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: 1.875rem;
  /* text-3xl */
  font-weight: bold;
  color: #1a202c;
  /* text-gray-800 */
  margin-bottom: 8px;
  /* mb-2 */
}

.form-subtitle {
  color: #4a5568;
  /* text-gray-600 */
  margin-bottom: 32px;
  /* mb-8 */
}

/* Form inputs and button (Tailwind classes kept for brevity) */
/* ... (existing Tailwind classes for inputs and button are fine) ... */

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

/* For medium and large screens (md: breakpoint and up) */
@media (min-width: 768px) {
  .design-form-card {
    flex-direction: row;
    /* Layout as row on larger screens */
  }

  .design-image-panel {
    width: 50%;
    /* md:w-1/2 */
    min-height: 50vh;
    /* Set height to 50vh as requested */
    display: flex;
    /* Ensure it's displayed */
  }

  .form-panel {
    width: 50%;
    /* md:w-1/2 */
    padding: 48px;
    /* lg:p-12 */
  }
}

/* For very large screens (lg: breakpoint and up if you had it) */
/* @media (min-width: 1024px) {
    .form-panel {
        padding: 48px;
    }
} */
</style>
