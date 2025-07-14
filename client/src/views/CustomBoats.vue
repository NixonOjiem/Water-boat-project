<template>
  <div class="relative">
    <Navbar />
    <main
      class="fixed top-0 left-0 w-full h-[50vh] bg-gray-900 text-white flex flex-col items-center justify-center z-0">
      <h1 class="text-4xl font-bold mb-6">Build Your Custom Boat</h1>
      <p class="text-lg mb-12">
        Design your dream boat with our experts. From concept to launch, we make it happen.
      </p>
    </main>

    <div class="pt-[50vh]">
      <CustomBoatComponent />
    </div>

    <FloatingBar @open-booking-modal="openBookingModal" />
  </div>
</template>

<script>
import CustomBoatComponent from '@/components/CustomBoatComponent.vue';
import Navbar from '@/components/Navbar.vue';
import FloatingBar from '@/components/FloatingBar.vue';

export default {
  components: {
    CustomBoatComponent,
    Navbar,
    FloatingBar,
  },
  methods: {
    openBookingModal() {
      // Implement your modal opening logic here
      console.log('Booking modal opened!');
    },
  },
};
</script>

<style scoped>
/* Add this to your style section if you are not using a utility-first framework like TailwindCSS
   or if you want to explicitly define custom classes.
   If you are using TailwindCSS, 'h-screen' and 'pt-screen' will handle this. */
.fixed-hero-section {
  height: 50vh;
  /* This ensures the hero section takes the full viewport height */
}

.pt-screen {
  padding-top: 50vh;
  /* This creates a padding at the top equal to the viewport height,
                         pushing the CustomBoatComponent below the fixed main section */
}
</style>
