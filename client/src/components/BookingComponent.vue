<template>
  <div class="min-h-screen bg-transparent font-sans flex items-center justify-center p-4">
    <div class="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 relative">
        <img src="https://images.unsplash.com/photo-1527098602225-6363b71c3743?q=80&w=2592&auto=format&fit=crop"
          alt="A beautiful boat on the water at sunset" class="h-64 md:h-full w-full object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white">
          <h2 class="text-3xl font-bold leading-tight">Your Lakeside Adventure Awaits</h2>
          <p class="mt-2 text-lg opacity-90">Book your boat trip today and explore the stunning beauty of Lake Victoria.
          </p>
        </div>
      </div>

      <div class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Book Your Trip</h1>
        <p class="text-gray-600 mb-8">Select your destination and date to get started.</p>

        <form @submit.prevent="submitBooking" class="space-y-6">
          <div>
            <label for="destination" class="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <div class="relative">
              <select id="destination" v-model="booking.destination" required
                class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none">
                <option disabled value="">Please select a destination</option>
                <option v-for="dest in destinations" :key="dest.id" :value="dest.name">{{ dest.name }}</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label for="trip-date" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input type="date" id="trip-date" v-model="booking.date" :min="today" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out">
          </div>

          <div>
            <label for="trip-time" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input type="time" id="trip-time" v-model="booking.time" required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out">
          </div>


          <div>
            <label for="passengers" class="block text-sm font-medium text-gray-700 mb-1">Passengers (Max: 20)</label>
            <div class="flex items-center">
              <button type="button" @click="decrementPassengers"
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300 transition"
                :disabled="booking.passengers <= 1">-</button>
              <input type="number" id="passengers" v-model.number="booking.passengers" readonly
                class="w-full text-center px-4 py-3 bg-gray-50 border-t border-b border-gray-300 focus:outline-none">
              <button type="button" @click="incrementPassengers"
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 transition"
                :disabled="booking.passengers >= 20">+</button>
            </div>
          </div>

          <div class="text-center pt-4">
            <p class="text-lg text-gray-600">Total Price</p>
            <p class="text-4xl font-bold text-gray-900">Ksh {{ totalPrice.toLocaleString() }}</p>
          </div>

          <button type="submit"
            :class="['w-full text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105', bookingStatus === 'idle' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-500']"
            :disabled="bookingStatus === 'booked' || bookingStatus === 'loading'">
            {{ buttonText }}
          </button>
        </form>

        <transition name="fade">
          <div>
            <div v-if="showConfirmation" key="confirmation"
              class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p class="font-bold">Booking Confirmed!</p>
              <p>We've received your request for a trip to {{ booking.destination }} for {{ booking.passengers }} people
                on {{ formattedDate }} at {{ booking.time }}.</p>
            </div>
            <div v-if="showError" key="error"
              class="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
              <p class="font-bold">Booking Failed!</p>
              <p>{{ errorMessage }}</p>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
const apiRoute = import.meta.env.VITE_API_URL || 'http://localhost:5000';
import { getUserFromToken } from '@/utils/UserData';

export default {
  name: 'BookingComponent',
  data() {
    return {
      userId: null,
      booking: {
        destination: '',
        date: '',
        time: '',
        passengers: 1,
      },
      destinations: [
        { id: 1, name: 'Dunga Beach' },
        { id: 2, name: 'Coastal Cruise' },
        { id: 3, name: 'Hippo Point' },
        { id: 4, name: 'Kisumu Yatch Club' },
        { id: 5, name: 'Kisumu Impala Sanctuary' },
        { id: 6, name: 'Dunga Hill Camp' },
        { id: 7, name: 'Villa Del Sol' },
        { id: 8, name: 'Mbita & Rusinga Island' },
        { id: 9, name: 'Mfangano Island' },
        { id: 10, name: 'Homa Bay' },
      ],
      basePricePerPerson: 1500,
      bookingStatus: 'idle', // idle, loading, booked, error
      showConfirmation: false,
      showError: false,
      errorMessage: '',
      maxPassengers: 20, // Define max passengers
      backendApiUrl: `${apiRoute}/api/bookings`, // Your backend API endpoint
    };
  },
  computed: {
    totalPrice() {
      return this.booking.passengers * this.basePricePerPerson;
    },
    today() {
      // To prevent booking past dates
      return new Date().toISOString().split('T')[0];
    },
    formattedDate() {
      if (!this.booking.date) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.booking.date).toLocaleDateString('en-US', options);
    },
    buttonText() {
      if (this.bookingStatus === 'loading') {
        return 'Booking...';
      } else if (this.bookingStatus === 'booked') {
        return 'Booked Successfully!';
      } else {
        return 'Book Now';
      }
    }
  },
  methods: {
    incrementPassengers() {
      if (this.booking.passengers < this.maxPassengers) {
        this.booking.passengers++;
      }
    },
    decrementPassengers() {
      if (this.booking.passengers > 1) {
        this.booking.passengers--;
      }
    },
    async submitBooking() {
      // Reset previous error/confirmation messages
      this.showError = false;
      this.showConfirmation = false;
      this.errorMessage = '';

      // **Check if the user is logged in (userId exists)**
      if (!this.userId) {
        this.errorMessage = 'Please log in to make a booking.';
        this.showError = true;
        this.bookingStatus = 'error'; // Set status to error
        return; // Stop the submission process
      }

      // Basic form field validation
      if (!this.booking.destination || !this.booking.date || !this.booking.time) {
        this.errorMessage = 'Please fill in all fields.';
        this.showError = true;
        this.bookingStatus = 'error';
        return;
      }

      this.bookingStatus = 'loading';

      try {
        const response = await fetch(this.backendApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Example for sending a token if you have one
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            ...this.booking,
            userId: this.userId
          })
        });

        const responseData = await response.json();

        if (!response.ok) {
          // Use the error message from the server response
          throw new Error(responseData.message || 'Failed to book your trip. Please try again.');
        }

        this.bookingStatus = 'booked';
        this.showConfirmation = true;

        setTimeout(() => {
          this.resetForm();
        }, 5000);

      } catch (error) {
        console.error('Error submitting booking:', error);
        this.bookingStatus = 'error';
        this.showError = true;
        // Display the caught error message
        this.errorMessage = error.message;

        setTimeout(() => {
          this.showError = false;
          this.errorMessage = '';
          this.bookingStatus = 'idle';
        }, 5000);
      }
    },
    resetForm() {
      this.booking = {
        destination: '',
        date: this.today,
        time: '',
        passengers: 1,
      };
      this.bookingStatus = 'idle';
      this.showConfirmation = false;
    }
  },
  mounted() {
    const userData = getUserFromToken();
    if (userData) {
      this.userId = userData.id;
    }
    this.booking.date = this.today;
    const now = new Date();
    this.booking.time = now.toTimeString().split(' ')[0].substring(0, 5);
  }
};
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Hide number input arrows */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
