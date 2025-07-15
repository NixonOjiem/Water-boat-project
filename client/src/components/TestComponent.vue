<template>
  <div class="trips-container">
    <h2>My Trips</h2>
    <div v-if="loading" class="loading">Loading your trips...</div>
    <div v-if="error" class="error-message">{{ error }}</div>

    <div v-if="!loading && bookings.length > 0" class="bookings-grid">
      <!-- The loop now displays data that matches your database table -->
      <div v-for="booking in bookings" :key="booking.booking_id" class="booking-card">
        <!-- A placeholder image is used since the table does not contain an image URL -->
        <img src="https://placehold.co/600x400/3498db/ffffff?text=Trip" alt="Trip placeholder image"
          class="card-image" />
        <div class="card-content">
          <h3 class="destination-name">{{ booking.destination }}</h3>
          <p class="booking-info">
            <strong>Date:</strong> {{ new Date(booking.booking_date).toLocaleDateString() }}
          </p>
          <p class="booking-info">
            <strong>Time:</strong> {{ booking.booking_time }}
          </p>
          <p class="booking-info">
            <strong>Passengers:</strong> {{ booking.passengers }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="!loading && bookings.length === 0 && !error" class="no-bookings">
      <p>You haven't booked any trips yet. Time to explore!</p>
    </div>
  </div>

  <!-- <main class="container mx-auto px-4 py-16 md:py-24 pb-32">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000">
        <h2 class="text-4xl md:text-5xl font-bold">A New Horizon for Lake Transport</h2>
        <p class="text-slate-400 mt-4 max-w-3xl mx-auto">
          Click on any card to expand it and learn more.
        </p>
      </div>

      <div ref="bentoGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
        data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
        <div :class="cardClasses('card-1')">
          <div @click="toggleCard('card-1')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">🌊 The Challenge</h3>
            <p class="mt-2 text-slate-300">
              Petrol-powered canoes have long posed safety and environmental risks on Lake Victoria.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-1'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-1'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-2')">
          <div @click="toggleCard('card-2')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">☀️ The Solution</h3>
            <p class="mt-2 text-slate-300">
              A solar-powered catamaran combining clean energy with a safe, stable, and locally-built design.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-2'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-2'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-3')">
          <div @click="toggleCard('card-3')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">⚓ About Yieh Boats</h3>
            <p class="mt-2 text-slate-300">
              Innovators charting a new course for water transport, powered entirely by the sun.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-3'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-3'].body"></div>
            </div>
          </Transition>
        </div>

        <div :class="cardClasses('card-4')">
          <div @click="toggleCard('card-4')" class="p-6 cursor-pointer">
            <h3 class="text-2xl font-bold">🚤 Versatile by Design</h3>
            <p class="mt-2 text-slate-300">
              From leisure cruises and guided tours to commercial transport and fishing.
            </p>
          </div>
          <Transition name="expand">
            <div v-if="activeCardId === 'card-4'" class="px-6 pb-6">
              <div class="prose prose-invert max-w-none prose-slate" v-html="content['card-4'].body"></div>
            </div>
          </Transition>
        </div>
      </div>
    </main>
    </main> -->
</template>

<script>
import { getUserFromToken } from '@/utils/UserData';
import axios from 'axios'; // Make sure to install axios: npm install axios

export default {
  name: 'TripsComponent',
  data() {
    return {
      userId: null,
      bookings: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const userData = getUserFromToken();
      if (userData && userData.id) {
        this.userId = userData.id;
        await this.fetchUserBookings();
      } else {
        // This provides a clearer error message if the user token is invalid or missing
        throw new Error("Could not identify user. Please log in again.");
      }
    } catch (err) {
      this.error = err.message;
      console.error("Mounting Error:", err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async fetchUserBookings() {
      if (!this.userId) return;

      this.loading = true;
      this.error = null;
      try {
        // This URL points to the corrected backend route
        const response = await axios.get(`http://localhost:5000/api/user/${this.userId}`);
        this.bookings = response.data;
      } catch (err) {
        this.error = 'Failed to load your bookings. Please try again later.';
        console.error("API Error:", err.response ? err.response.data : err.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.trips-container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.loading,
.no-bookings,
.error-message {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.error-message {
  color: #e74c3c;
  background-color: #fbeae5;
  padding: 1rem;
  border-radius: 8px;
}

.bookings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.booking-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.booking-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
}

.destination-name {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.booking-info {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
}

.booking-info strong {
  color: #34495e;
}

.no-bookings {
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px dashed #ddd;
  border-radius: 8px;
}
</style>
