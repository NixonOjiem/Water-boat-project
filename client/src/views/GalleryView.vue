<template>
  <div>
    <Navbar />
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-6">Gallery</h1>
      <p class="text-lg mb-12">Explore our collection of stunning boat images.</p>
    </main>
    <GalleryComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
export default {
  components: {
    Navbar, GalleryComponent
  },
  setup() {
    // You can add any setup logic here if needed
  }
}
</script>

<style scoped></style>
