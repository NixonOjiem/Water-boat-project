<template>
  <div class="bg-[#F4F8FA] py-12">
    <section class="grid w-full max-w-6xl grid-cols-1 gap-6 p-4 mx-auto md:grid-cols-3">

      <div class="relative h-64 overflow-hidden rounded-xl group md:col-span-2">
        <img
          src="https://images.unsplash.com/photo-1744996746100-a144a225c9be?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A modern yacht sailing on the open water.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Premier Boat Rentals</h3>
          <p
            class="mt-1 text-sm text-gray-200 transition-all duration-300 ease-in-out opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            Find the perfect vessel for your next adventure.
          </p>
        </div>
      </div>

      <div class="relative h-64 overflow-hidden rounded-xl group">
        <img src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A small boat navigating through a scenic canyon.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Guided Tours</h3>
          <p
            class="mt-1 text-sm text-gray-200 transition-all duration-300 ease-in-out opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            Explore hidden gems with our expert captains.
          </p>
        </div>
      </div>

      <div class="relative h-64 overflow-hidden rounded-xl group">
        <img src="https://images.pexels.com/photos/28241135/pexels-photo-28241135.jpeg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Close-up of boat engine maintenance.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Maintenance & Repair</h3>
          <p
            class="mt-1 text-sm text-gray-200 transition-all duration-300 ease-in-out opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            Keep your boat in pristine condition.
          </p>
        </div>
      </div>

      <div class="relative h-64 overflow-hidden rounded-xl group md:col-span-2">
        <img src="https://images.pexels.com/photos/8800142/pexels-photo-8800142.jpeg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A group of people enjoying themselves on the deck of a luxury yacht.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Luxury Yacht Charters</h3>
          <p
            class="mt-1 text-sm text-gray-200 transition-all duration-300 ease-in-out opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            Experience the ultimate in maritime luxury.
          </p>
        </div>
      </div>
    </section>

    <div class="w-full max-w-6xl px-4 mx-auto my-12">
      <hr class="border-gray-200" />
    </div>

    <section class="w-full max-w-6xl p-4 mx-auto mt-8 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Scaling Yieh Boats for Broader Impact</h2>
      <p class="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
        At Yieh Boats, we're on a mission to revolutionize the maritime industry with sustainable solutions. We're
        looking to expand our reach, and we need your support to achieve our goals.
      </p>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
        <div class="p-6 text-left bg-white border border-gray-200 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Funding Needs</h3>
          <p class="text-gray-700">
            To scale our operations, we require funding to significantly expand our **production capacity**. This will
            allow us to launch **pilot fleets** for both commercial and tourism use and further refine our **local
            manufacturing processes**.
          </p>
        </div>
        <div class="p-6 text-left bg-white border border-gray-200 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Market Opportunity</h3>
          <p class="text-gray-700">
            The market for Yieh Boats is vast, encompassing **any region around the equator with water**. Our
            solar-powered boats reduce operational expenses and carbon emissions, contributing to **cleaner water** and
            **economic uplift**.
          </p>
        </div>
      </div>

      <h3 class="text-3xl font-bold text-gray-800 mb-8">Our Core Impact</h3>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-800">Economic Growth</h4>
          <p class="mt-2 text-gray-600">Creating jobs, refining the local maritime industry, and boosting Kenya's blue
            economy.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V6m0-1V4m0 2.01V6m0 10.99V18m0 .01V18m0 2v-1m0 1v-1m0 2v-1">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945"></path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-800">Environmental Sustainability</h4>
          <p class="mt-2 text-gray-600">Significantly cutting water pollution with our solar-powered vessels for
            healthier ecosystems.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 01.553-.894L9 4l6 3.001 5.447 2.724A1 1 0 0121 10.618v5.764a1 1 0 01-.553.894L15 20l-6-3.001zM9 4v16m6-16v16">
              </path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-800">Enhanced Connectivity</h4>
          <p class="mt-2 text-gray-600">Unlocking new commercial routes on the water to enhance local trade and tourism.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <p class="text-lg text-gray-700">Yieh Boats offers scalable, socially impactful returns.</p>
        <a href="#contact"
          class="inline-block px-8 py-3 mt-4 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Explore Partnerships
        </a>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  // No specific script logic needed for this component
}
</script>

<style scoped>
/* No specific scoped styles needed as Tailwind CSS is used */
</style>
