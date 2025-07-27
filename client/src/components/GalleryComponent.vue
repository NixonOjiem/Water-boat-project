<template>
  <div class="bg-[#F4F8FA] py-6">
    <div class="w-full max-w-6xl px-4 mx-auto mb-8 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
        Boat Build & Design
      </h2>
      <p class="mt-3 text-xl text-gray-600">
        Crafting dreams on water through precision engineering and timeless artistry.
      </p>
    </div>

    <section class="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:auto-rows-[24rem]">
      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-2 lg:row-span-1">
        <img src="/images/20250418_150744.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Luxury yacht under construction." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-1">
        <img src="/images/20250418_151305.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Detailed boat interior." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-1">
        <img src="/images/20250417_130634.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Boat hull being crafted." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-1">
        <img src="/images/IMG20250408130233.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Boat structure under assembly." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-1">
        <img src="/images/IMG20250410164059.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Boat being finished in workshop." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl group col-span-1 h-64 lg:h-auto lg:col-span-2 lg:row-span-1">
        <img src="/images/20250116_113830.jpg"
          class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Boat being transported." />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="relative z-10 flex flex-col justify-end h-full p-6">
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

<style scoped>
/* No custom CSS needed */
</style>
