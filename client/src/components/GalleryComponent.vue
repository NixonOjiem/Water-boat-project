<template>
  <div class="bg-[#F4F8FA] py-6">
    <div class="w-full max-w-6xl px-4 mx-auto mb-8 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
        The Art of Our Boat Building
      </h2>
      <p class="mt-3 text-xl text-gray-600">
        Crafting dreams on water through precision engineering and timeless artistry.
      </p>
    </div>
    <section
      class="grid w-full grid-cols-2 gap-4 p-4 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[24rem]">
      <div class="relative overflow-hidden rounded-xl group col-span-2 lg:col-span-2 lg:row-span-1">
        <img src="/images/20250418_150744.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="People relaxing on a luxury yacht deck." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Luxury Yacht Charters</h3>
          <p class="card-description">Experience the ultimate in maritime luxury.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group lg:col-span-1">
        <img src="/images/20250418_151305.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A modern motorboat ready for rental." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Premier Boat Rentals</h3>
          <p class="card-description">Find the perfect vessel for your next adventure.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group lg:col-span-1">
        <img src="/images/20250417_130634.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="An angler fishing from a boat at sunset." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Fishing Expeditions</h3>
          <p class="card-description">Charter a fully-equipped trip to the best spots.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group lg:col-span-1">
        <img src="/images/IMG20250408130233.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Close-up of boat engine maintenance.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Maintenance & Repair</h3>
          <p class="card-description">Keep your boat in pristine condition.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group lg:col-span-1">
        <img src="/images/IMG20250410164059.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A modern yacht sailing on the open water.">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Boat Sales</h3>
          <p class="card-description">Find your dream boat with our brokerage service.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-2 lg:col-span-2 lg:row-span-1">
        <img src="/images/20250116_113830.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="A small boat navigating through a scenic canyon." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
          <h3 class="text-2xl font-bold text-white">Guided Tours</h3>
          <p class="card-description">Explore hidden gems with our expert captains.</p>
        </div>
      </div>

    </section>
    <div class="w-full max-w-6xl px-4 mx-auto my-12">
      <hr class="border-gray-200" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  setup() {
    // Setup logic can go here if needed
  }
}
</script>

<style scoped></style>
