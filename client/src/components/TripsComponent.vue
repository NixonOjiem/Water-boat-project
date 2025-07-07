<template>
  <div class="trips-container">
    <header class="trips-header">
      <h1>My Trips</h1>
      <p>Here you can view and manage all your upcoming and past adventures.</p>
    </header>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading your trips...</p>
    </div>

    <div v-if="error" class="error-message">
      <h3>Oops! Something went wrong.</h3>
      <p>{{ error }}</p>
      <button @click="fetchUserBookings" class="retry-button">Try Again</button>
    </div>

    <div v-if="!loading && bookings.length > 0" class="bookings-grid">
      <div v-for="booking in bookings" :key="booking.booking_id" class="booking-card"
        :class="getTripStatus(booking.booking_date).class">
        <div class="card-header">
          <img :src="booking.image" :alt="`Image of ${booking.destination_name}`" class="card-image" />
          {{ console.log(booking.image) }}
          <span class="trip-status">{{ getTripStatus(booking.booking_date).text }}</span>
        </div>
        <div class="card-content">
          <h3 class="destination-name">{{ booking.destination_name }}</h3>
          <div class="booking-details">
            <p class="booking-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-calendar-event" viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span>{{ new Date(booking.booking_date).toLocaleDateString() }}</span>
            </p>
            <p class="booking-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock"
                viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              <span>{{ booking.booking_time }}</span>
            </p>
            <p class="booking-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people"
                viewBox="0 0 16 16">
                <path
                  d="M15 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.264.26h-3.004a.278.278 0 0 1-.26-.26zM11 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.904 2.803a.5.5 0 1 0-.707-.707L4.5 9.293V7.5a.5.5 0 0 0-1 0v2.293l-1.146-1.147a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0zM5 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              </svg>
              <span>{{ booking.passengers }} Passenger(s)</span>
            </p>
          </div>
        </div>
        <div class="card-footer">
          <button class="details-button">View Details</button>
        </div>
      </div>
    </div>

    <div v-if="!loading && bookings.length === 0 && !error" class="no-bookings-state">
      <svg class="no-bookings-icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
        viewBox="0 0 16 16">
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0l-4 7A1.13 1.13 0 0 0 4 10.5h8a1.13 1.13 0 0 0 .982-1.934zM8 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 5m0 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0" />
      </svg>
      <h2>No Trips Found</h2>
      <p>It looks like your travel story is waiting for its first chapter. Let's book an adventure!</p>
      <button class="book-trip-button">Book a Trip</button>
    </div>
  </div>
</template>

<script>
import { getUserFromToken } from '@/utils/UserData';
import axios from 'axios';

const apiRoute = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
        const response = await axios.get(`${apiRoute}/api/user/${this.userId}`);
        const bookingsData = response.data;

        // **MODIFICATION HERE**
        // We map over the data to create a full, reliable path for each image.
        const processedBookings = bookingsData.map(booking => {
          // Ensure booking.image is just the filename, not a full path.
          // Then prepend the correct public path.
          return {
            ...booking,
            image: `/images/${booking.image}`
          };
        });

        this.bookings = processedBookings.sort((a, b) => new Date(b.booking_date) - new Date(a.booking_date));

      } catch (err) {
        this.error = 'Failed to load your bookings. Please check your connection and try again.';
        console.error("API Error:", err.response ? err.response.data : err.message);
      } finally {
        this.loading = false;
      }
    },
    getTripStatus(bookingDate) {
      const today = new Date();
      const tripDate = new Date(bookingDate);
      today.setHours(0, 0, 0, 0);
      tripDate.setHours(0, 0, 0, 0);

      if (tripDate < today) {
        return { text: 'Completed', class: 'status-completed' };
      }
      if (tripDate.getTime() === today.getTime()) {
        return { text: 'Today', class: 'status-today' };
      }
      return { text: 'Upcoming', class: 'status-upcoming' };
    },
  },
};
</script>

<style scoped>
:root {
  --primary-color: #3498db;
  --primary-hover-color: #2980b9;
  --text-color-primary: #2c3e50;
  --text-color-secondary: #555;
  --background-color: #f4f7f9;
  --card-background-color: #ffffff;
  --card-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  --card-hover-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  --border-radius: 12px;
  --error-color: #e74c3c;
  --success-color: #2ecc71;
  --warning-color: #f39c12;
}

.trips-container {
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: auto;
  width: 100vw;
  background-color: var(--background-color);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--background-color);
}

.trips-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.trips-header h1 {
  font-size: 2.5rem;
  color: var(--text-color-primary);
  margin-bottom: 0.5rem;
}

.trips-header p {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Loading and States */
.loading-state,
.no-bookings-state,
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  border-radius: var(--border-radius);
}

.error-message {
  background-color: #fbeae5;
  border: 1px solid var(--error-color);
  color: var(--error-color);
}

.error-message h3 {
  margin-top: 0;
  color: var(--error-color);
}

.retry-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.retry-button:hover {
  background-color: var(--primary-hover-color);
}

/* Spinner */
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Bookings Grid */
.bookings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  width: 100vw;
  background-color: #fff;
}

.booking-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  background: var(--card-background-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.booking-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-hover-shadow);
}

.card-header {
  position: relative;
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.trip-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  backdrop-filter: blur(5px);
}

/* Status Colors */
.status-upcoming .trip-status {
  background-color: rgba(52, 152, 219, 0.8);
}

/* Blue */
.status-today .trip-status {
  background-color: rgba(243, 156, 18, 0.9);
}

/* Orange */
.status-completed .trip-status {
  background-color: rgba(46, 204, 113, 0.8);
}

/* Green */
.status-completed .card-image {
  filter: grayscale(50%);
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.destination-name {
  margin: 0 0 1rem 0;
  font-size: 1.6rem;
  color: var(--text-color-primary);
  font-weight: 700;
}

.booking-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.booking-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  font-size: 1rem;
  color: var(--text-color-secondary);
}

.booking-info svg {
  color: var(--primary-color);
  flex-shrink: 0;
}

.card-footer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin-top: auto;
}

.details-button {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: var(--primary-hover-color);
}

/* No Bookings State */
.no-bookings-state {
  background-color: var(--card-background-color);
  border: 2px dashed #e0e0e0;
}

.no-bookings-icon {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.no-bookings-state h2 {
  font-size: 1.8rem;
  color: var(--text-color-primary);
  margin-bottom: 0.5rem;
}

.no-bookings-state p {
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
  max-width: 400px;
}

.book-trip-button {
  background-color: var(--success-color);
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.book-trip-button:hover {
  background-color: #27ae60;
  transform: translateY(-3px);
}
</style>
