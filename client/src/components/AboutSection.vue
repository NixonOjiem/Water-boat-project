<template>
  <section class="bg-[#101828] py-20 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-semibold text-blue-200 text-center mb-12">
        About Us
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <div>
          <img src="/images/Mbita & Rusinga Island.jpg" alt="Our Team"
            class="w-full h-auto object-cover rounded-xl shadow-lg animated-shape glow" />
        </div>

        <div>
          <h3 class="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">
            Pioneering a Sustainable & Innovative Future
          </h3>
          <p class="text-blue-100 text-lg mb-6">
            We are innovators charting a new course for
            sustainable water transport. We design and
            build safe, reliable, and clean boats
            propelled entirely by solar energy.
            We believe in local innovation. That's why
            our catamarans are constructed with
            materials sourced from Kenyan suppliers,
            built by Kenyan engineers.
            The people working at Yieh boats are paid a
            decent salary and we look to employ people
            of any gender.
          </p>
          <ul class="space-y-4 text-blue-100">
            <li class="flex items-start">
              <svg class="flex-shrink-0 h-6 w-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Cutting-Edge Technology:</strong> Leveraging the latest advancements to build robust and
                efficient products.</span>
            </li>
            <li class="flex items-start">
              <svg class="flex-shrink-0 h-6 w-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Customer-Centric Approach:</strong> Your success is our top priority. We are dedicated to
                providing unparalleled support.</span>
            </li>
            <li class="flex items-start">
              <svg class="flex-shrink-0 h-6 w-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>**Investment Opportunity:** Partner with us to revolutionize sustainable water transport and achieve
                significant returns.</span>
            </li>
          </ul>
          <div
            class="display: flex; justify-content: center; margin-top: 20px; flex-direction: row; align-items: center;">
            <div class="m-8" style="display: inline-block;">
              <a href="/about"
                class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
                Learn More
              </a>
            </div>
            <div class="m-8" style="display: inline-block;">
              <a href="/about"
                class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
                Invest in YiehBoats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Simplified AOS initialization to match the example component
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init();

export default {
  name: 'AboutSection',
  // The mounted hook is no longer needed for AOS initialization
};
</script>

<style>
/* Styles remain unchanged as they are compatible */

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(30deg);
  }

  20% {
    transform: translateX(100%) rotate(30deg);
  }

  100% {
    transform: translateX(100%) rotate(30deg);
  }
}

.glow {
  filter: drop-shadow(0 0 10px rgba(56, 178, 172, 0.5));
}

.animated-shape {
  clip-path: polygon(0% 15%, 15% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 85%);
  animation: morph 8s ease-in-out infinite;
  transition: all 0.5s ease;
}

.animated-shape:hover {
  clip-path: polygon(0 25%, 25% 0, 100% 15%, 100% 85%, 75% 100%, 0 75%);
}

@keyframes morph {
  0% {
    clip-path: polygon(0% 15%, 15% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 85%);
  }

  50% {
    clip-path: polygon(0 25%, 25% 0, 100% 15%, 100% 85%, 75% 100%, 0 75%);
  }

  100% {
    clip-path: polygon(0% 15%, 15% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 85%);
  }
}
</style>
