<template lang="">
  <div class="bg-[#101728] py-8"> <div class="container mx-auto px-4">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-white mb-8 text-center">{{ title }}</h1>
      <div class="flex flex-col lg:flex-row lg:space-x-8 items-center">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <img src="/images/IMG20250410164059.jpg" alt="Boat being built"
            class="w-full h-auto object-cover rounded-xl shadow-lg glow" />
        </div>

        <div class="lg:w-1/2 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">
            Pioneering a Sustainable & Innovative Future
          </h3>
          <p class="text-blue-100 text-lg mb-6">
            We are innovators charting a new course for sustainable water transport. We design and
            build safe, reliable, and clean boats propelled entirely by solar energy.
            We believe in local innovation. That's why our catamarans are constructed with
            materials sourced from Kenyan suppliers, built by Kenyan engineers.
            The people working at Yieh boats are paid a decent salary and we look to employ people
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
              <span><strong>Investment Opportunity:</strong> Partner with us to revolutionize sustainable water transport and achieve
                significant returns.</span>
            </li>
          </ul>
          <div class="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <a href="/about"
                class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300 text-center w-full">
                Learn More
              </a>
            </div>
            <div>
              <a href="#" @click.prevent="$emit('open-investment-form')"
                class="inline-block bg-[#002255] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300 text-center w-full">
                Invest in YiehBoats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroToAboutus',
  props: {
    title: {
      type: String,
      default: 'About Us'
    },
    description: {
      type: String,
      default: 'We are dedicated to revolutionizing water transport in Africa with our innovative solar-powered boats.'
    }
  }
}
</script>

<style lang="">
/* You can keep this section for any custom CSS not easily handled by Tailwind,
   but for this request, Tailwind handles everything. */
</style>
