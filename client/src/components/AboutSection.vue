<template>
  <section class="bg-white py-20 lg:py-24">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-semibold text-gray-700 text-center mb-12">
        About Us
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/Mbita & Rusinga Island.jpg"
            alt="Our Team"
            class="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Pioneering a Sustainable & Innovative Future
          </h3>
          <p class="text-gray-600 text-lg mb-6">
            We are driven by a passion for innovation and a commitment to creating solutions that not only meet the demands of today but also pave the way for a brighter, more sustainable tomorrow.
          </p>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="flex-shrink-0 h-6 w-6 text-[#002255] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Cutting-Edge Technology:</strong> Leveraging the latest advancements to build robust and efficient products.</span>
            </li>
            <li class="flex items-start">
              <svg class="flex-shrink-0 h-6 w-6 text-[#002255] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Customer-Centric Approach:</strong> Your success is our top priority. We are dedicated to providing unparalleled support.</span>
            </li>
          </ul>
          <div class="mt-8">
            <a href="/about" class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted: function() {
    // Check if the screen width is >= 768px (desktop) before initializing AOS
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000, // Animation duration
          once: true,     // Animate elements only once
        });
      }
    }
  }
};
</script>

<style>
/* You can add any custom styles here if needed, though Tailwind covers most cases. */
</style>
