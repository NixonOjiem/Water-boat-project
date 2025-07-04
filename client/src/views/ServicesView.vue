<template lang="">
  <div>
    <Navbar />
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Our Services</h1>
      <p class="text-lg mb-12">Explore the services we offer for your boating adventures.</p>
      <!-- Add your services content here -->
    </main>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  setup() {
    // You can add any setup logic here if needed
  }
}
</script>
<style scoped></style>
