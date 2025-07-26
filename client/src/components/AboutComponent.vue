<template>
  <div class="bg-[#D8EDFF] py-8 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="h-full w-full flex items-center justify-center" data-aos="fade-up" data-aos-duration="1200">
          <img :src="currentSlide1" alt="A solar-powered boat gliding on a calm lake"
            class="w-full h-full max-h-[500px] object-cover shadow-xl rounded-lg">
        </div>

        <div class="flex flex-col justify-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-slate-800" data-aos="fade-up" data-aos-duration="1000">
            About Yieh Boats
          </h1>
          <p class="text-lg md:text-xl text-sky-600 font-semibold mb-8" data-aos="fade-up" data-aos-duration="1200">
            Proudly built and designed in Kenya, we are pioneering a cleaner future for Lake Victoria's waters.
          </p>
          <div class="space-y-4 text-md md:text-lg text-gray-600">
            <p data-aos="fade-up" data-aos-duration="1400">
              Our innovative boats provide low-cost, safe, and pollution-free transport. No greenhouse gasses are
              emitted when using our solar boats, and no chemicals are released into the ecosystem.
            </p>
            <p data-aos="fade-up" data-aos-duration="1600">
              This ensures that Lake Victoria can continue to be a source of clean water and food for the millions of
              people living around the lake.
            </p>
          </div>
          <div class="m-8" style="display: inline-block;">
            <a href="#" @click.prevent="$emit('open-investment-form')"
              class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
              Invest in YiehBoats
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl text-center font-bold text-slate-800 mb-8" data-aos="fade-up">
            The Yieh Boats Advantage
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="text-center p-6 bg-white/50 rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="500">
              <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-800 mb-2">🌍 Eco-Friendly</h3>
              <p class="text-gray-600">Operate with zero emissions, protecting Lake Victoria's biodiversity and water
                quality.</p>
            </div>
            <div class="text-center p-6 bg-white/50 rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="700">
              <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414-.336.75-.75.75h-.75m0-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m15 6.375v.375a.75.75 0 01-.75.75h-.75m0-1.5h.75a.75.75 0 01.75.75v.375m0 0v.375a.75.75 0 01-.75.75h-.75m0-1.5h.75a.75.75 0 01.75.75v.375" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-800 mb-2">💰 Cost-Effective</h3>
              <p class="text-gray-600">Eliminate unpredictable fuel costs and drastically reduce your operational
                expenses.</p>
            </div>
            <div class="text-center p-6 bg-white/50 rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="900">
              <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-800 mb-2">🤫 Quiet & Peaceful</h3>
              <p class="text-gray-600">Silent motors preserve the tranquility of the lake for everyone.</p>
            </div>
            <div class="text-center p-6 bg-white/50 rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="1100">
              <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-800 mb-2">🔧 Low Maintenance</h3>
              <p class="text-gray-600">Fewer moving parts means higher reliability and less downtime.</p>
            </div>
          </div>
        </div>

        <div class="h-full w-full flex items-center justify-center" data-aos="fade-up" data-aos-duration="1200">
          <img :src="currentSlide2" alt="A blueprint for engineering and investment"
            class="w-full h-full max-h-[500px] object-cover shadow-xl rounded-lg">
        </div>
      </div>


      <div class="mt-16 md:mt-24">
        <div class="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">

          <div class="flex flex-col lg:flex-row gap-8 mb-8">

            <div class="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                No poverty, hunger, good and well-being.
              </h2>
              <p class="text-lg text-sky-600 font-medium mb-8">
                The boat will be able to provide jobs and make sure the ecology of the lake improves. This results in a
                lake that can produce more fish in a sustainable way, eliminating hunger and ensuring the people can
                live healthily in and around the lake.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                <div class="sdg-square bg-red-600">
                  <span class="sdg-number">1</span>
                  <span class="sdg-text">No Poverty</span>
                </div>
                <div class="sdg-square" style="background-color: #4C9F38;">
                  <span class="sdg-number">2</span>
                  <span class="sdg-text">Zero Hunger</span>
                </div>
                <div class="sdg-square" style="background-color: #A21942;">
                  <span class="sdg-number">3</span>
                  <span class="sdg-text">Good Health and Well-Being</span>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                No pollution of the lake.
              </h2>
              <ul class="list-disc list-inside text-lg text-slate-700 space-y-2 mb-8">
                <li>No two stroke outboard engine pollution in the ecosystem
                  <ul class="list-disc list-inside pl-6 mt-1 text-base text-slate-600">
                    <li>Petrol in exhaust</li>
                    <li>Oil in exhaust</li>
                  </ul>
                </li>
                <li>No engine oil needed i.e no engine oil spills</li>
                <li>No pollution from plastic waste</li>
              </ul>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                <div class="sdg-square" style="background-color: #3EB049;">
                  <span class="sdg-number">14</span>
                  <span class="sdg-text">Life Below Water</span>
                </div>
                <div class="sdg-square" style="background-color: #009989;">
                  <span class="sdg-number">15</span>
                  <span class="sdg-text">Life on Land</span>
                </div>
                <div class="sdg-square" style="background-color: #26BDE2;">
                  <span class="sdg-number">6</span>
                  <span class="sdg-text">Clean Water and Sanitation</span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-800 text-center">
              Building a Sustainable Future
            </h2>
            <div id="random-color-squares" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div class="sdg-square">
                <span class="sdg-number">7</span>
                <span class="sdg-text">Affordable and Clean Energy</span>
              </div>
              <div class="sdg-square">
                <span class="sdg-number">8</span>
                <span class="sdg-text">Decent Work & Economic Growth</span>
              </div>
              <div class="sdg-square">
                <span class="sdg-number">9</span>
                <span class="sdg-text">Industry, Innovation & Infrastructure</span>
              </div>
              <div class="sdg-square">
                <span class="sdg-number">10</span>
                <span class="sdg-text">Reduced Inequalities</span>
              </div>
              <div class="sdg-square">
                <span class="sdg-number">11</span>
                <span class="sdg-text">Sustainable Cities & Communities</span>
              </div>
              <div class="sdg-square">
                <span class="sdg-number">12</span>
                <span class="sdg-text">Responsible Consumption</span>
              </div>
            </div>
          </div>
        </div>
        <section class="w-full px-0 py-8 mt-8 text-center">
          <div class="flex flex-direction-col items-center justify-center mb-8">

            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-4">
                Scaling Yieh Boats for Broader Impact
              </h2>
              <p class="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                At Yieh Boats, we're on a mission to revolutionize the maritime industry with sustainable solutions.
                We're looking to expand our reach, and we need your support to achieve our goals.
              </p>
            </div>

            <!-- New Solar Boats Benefits Block -->
            <div class="max-w-4xl mx-auto text-left mb-12 px-4">
              <h3 class="text-2xl font-semibold text-gray-800 mb-3">
                Why Solar Boats?
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Zero carbon emissions for cleaner waterways and healthier ecosystems.</li>
                <li>Significant reduction in operating costs using free solar energy.</li>
                <li>High-capacity battery storage for reliable, all-day performance.</li>
                <li>Quiet, low-maintenance design that enhances tourism experiences.</li>
              </ul>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12 px-4">
            <div class="p-6 text-left bg-white border border-gray-200 rounded-lg">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">
                Funding Needs
              </h3>
              <p class="text-gray-700">
                To scale our operations, we require funding to significantly expand our <strong>production
                  capacity</strong>.
                This will allow us to launch <strong>pilot fleets</strong> for both commercial and tourism use and
                further
                refine our <strong>local manufacturing processes</strong>.
              </p>
            </div>
            <div class="p-6 text-left bg-white border border-gray-200 rounded-lg">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">
                Market Opportunity
              </h3>
              <p class="text-gray-700">
                The market for Yieh Boats is vast, encompassing <strong>any region around the equator with
                  water</strong>.
                Our
                solar-powered boats reduce operational expenses and carbon emissions, contributing to
                <strong>cleaner water</strong> and <strong>economic uplift</strong>.
              </p>
            </div>
          </div>

          <h3 class="text-3xl font-bold text-gray-800 mb-8">
            Our Core Impact
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3 px-4">
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                  </path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-800">
                Economic Growth
              </h4>
              <p class="mt-2 text-gray-600">
                Creating jobs, refining the local maritime industry, and boosting Kenya's blue economy.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V6m0-1V4m0 2.01V6m0 10.99V18m0 .01V18m0 2v-1m0 1v-1m0 2v-1">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945">
                  </path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-800">
                Environmental Sustainability
              </h4>
              <p class="mt-2 text-gray-600">
                Significantly cutting water pollution with our solar-powered vessels for healthier ecosystems.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 01.553-.894L9 4l6 3.001
                   5.447 2.724A1 1 0 0121 10.618v5.764a1 1 0 01-.553.894L15 20l-6-3.001zM9 4v16m6-16v16">
                  </path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-800">
                Enhanced Connectivity
              </h4>
              <p class="mt-2 text-gray-600">
                Unlocking new commercial routes on the water to enhance local trade and tourism.
              </p>
            </div>
          </div>

          <div class="mt-16 px-4">
            <p class="text-lg text-gray-700">
              Yieh Boats offers scalable, socially impactful returns.
            </p>
            <a href="#contact"
              class="inline-block px-8 py-3 mt-4 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Explore Partnerships
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Array of appealing, contrasting background colors (using hex codes for more variety)
const colors = [
  '#f97316', // orange-500
  '#84cc16', // lime-500
  '#10b981', // emerald-500
  '#06b6d4', // cyan-500
  '#6366f1', // indigo-500
  '#d946ef', // fuchsia-500
  '#ec4899', // pink-500
  '#f43f5e', // rose-500
  '#22c55e', // green-500
  '#3b82f6', // blue-500
  '#8b5cf6', // violet-500
  '#a855f7'  // purple-500
];

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

import pic1 from '/images/Rideau0625web.jpg';
import pic2 from '/images/own_boat.jpg';
import pic3 from '/images/download (3).jpg';

import pic4 from '/images/download (1).jpg';
import pic5 from '/images/221013_LASAI_0936.jpg';
import pic6 from '/images/221013_LASAI_0917.jpg';

const pictureSlides1 = [pic1, pic2, pic3];
const pictureSlides2 = [pic4, pic5, pic6];

const currentSlideIndex1 = ref(0);
const currentSlideIndex2 = ref(0);
let slideInterval1 = null;
let slideInterval2 = null;

// Computed properties to get the current image source
const currentSlide1 = computed(() => pictureSlides1[currentSlideIndex1.value]);
const currentSlide2 = computed(() => pictureSlides2[currentSlideIndex2.value]);

// Function to advance the slide
const nextSlide = (indexRef, slidesArray) => {
  indexRef.value = (indexRef.value + 1) % slidesArray.length;
};

onMounted(() => {
  // Assign random colors to SDG squares
  const squares = document.querySelectorAll('#random-color-squares .sdg-square');
  const shuffledColors = shuffle([...colors]);
  squares.forEach((square, index) => {
    square.style.backgroundColor = shuffledColors[index % shuffledColors.length];
  });

  // Start the first slider
  slideInterval1 = setInterval(() => {
    nextSlide(currentSlideIndex1, pictureSlides1);
  }, 4000); // Change image every 4 seconds

  // Start the second slider
  slideInterval2 = setInterval(() => {
    nextSlide(currentSlideIndex2, pictureSlides2);
  }, 4000); // Change image every 4 seconds
});

onUnmounted(() => {
  // Clear intervals when the component is unmounted to prevent memory leaks
  if (slideInterval1) clearInterval(slideInterval1);
  if (slideInterval2) clearInterval(slideInterval2);
});
</script>

<style>
/* The .animated-shape class, its :hover state, and the @keyframes morph
  animation have been removed from here.
*/

/* Custom styles for the SDG squares for a consistent look */
.sdg-square {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.75rem;
  color: white;
  min-height: 150px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sdg-square:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.sdg-number {
  font-size: 2.25rem;
  /* 36px */
  font-weight: 800;
  line-height: 1;
}

.sdg-text {
  font-size: 1rem;
  /* 16px */
  font-weight: 600;
}
</style>
