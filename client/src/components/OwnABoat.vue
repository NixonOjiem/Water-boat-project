<template>
  <div class="bg-[#DBF0FE] w-full min-h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">

        <div class="text-gray-800 z-10 order-1 lg:order-2">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span class="block">Own The Future</span>
            <span class="text-cyan-500">Solar-Powered Luxury</span>
          </h1>

          <p class="mt-6 text-lg text-gray-600 max-w-xl">
            Yieh boats provides solar boats for Lake
            Victoria. The boats are built and
            designed in Kenya. Pick one of our
            standard designs, or get a fully
            customised design to your needs. Our
            boats have infinite sailing range.
            Whether you want a boat for easy
            cruising, fishing, a party boat or a
            multiday cruiser. We can create a deck
            layout that suits your needs. We can
            supply boats all over africa.
          </p>

          <div class="mt-10">
            <div class="relative h-48 overflow-hidden rounded-xl bg-gray-50 border border-cyan-100 p-6 shadow-sm">
              <div v-for="(item, index) in advantages" :key="index"
                class="absolute inset-0 p-6 transition-all duration-500 ease-in-out"
                :class="currentAdvantage === index ? 'opacity-100' : 'opacity-0'">
                <div class="flex items-start">
                  <div class="text-cyan-500 mt-1 mr-5">
                    <i :class="item.icon" class="text-2xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg text-cyan-600">{{ item.title }}</h3>
                    <p class="text-gray-600 mt-2">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-6 space-x-2">
              <button v-for="(_, index) in advantages" :key="index" @click="currentAdvantage = index"
                class="w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                :class="currentAdvantage === index ? 'bg-cyan-500 w-6' : ''">
              </button>
            </div>
          </div>

          <button class="group mt-10 inline-block">
            <span
              class="px-8 py-4 font-bold text-white inline-block solar-gradient rounded-xl transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-cyan-300/50 group-hover:-translate-y-1 solar-shine">
              Own A Solar Boat
              <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </span>
          </button>
        </div>

        <div class="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center order-2 lg:order-1">
          <div class="w-[500px] h-[500px] absolute bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div class="relative z-20 w-full max-w-2xl h-[500px] lg:h-[600px]">
            <img v-for="(slide, index) in pictureSlides" :key="index" :src="slide" alt="Solar-powered catamaran"
              class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl glow animated-shape transition-opacity duration-1000 ease-in-out"
              :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }" />

            <div class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-cyan-100 w-48 z-10">
              <div class="flex items-center">
                <div class="solar-panel w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-solar-panel text-cyan-400"></i>
                </div>
                <div>
                  <p class="text-xs text-gray-500">Solar Efficiency</p>
                  <p class="font-bold text-cyan-600">94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000">
        <div class="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
          <div class="text-cyan-500 text-3xl mb-4">
            <i class="fas fa-bolt"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Energy Independent</h3>
          <p class="text-gray-600 mt-2">Harness solar power for unlimited range without fuel stops or charging stations.
          </p>
        </div>

        <div class="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
          <div class="text-cyan-500 text-3xl mb-4">
            <i class="fas fa-leaf"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Zero Emissions</h3>
          <p class="text-gray-600 mt-2">Cruise silently without polluting our precious waterways and marine ecosystems.
          </p>
        </div>

        <div class="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
          <div class="text-cyan-500 text-3xl mb-4">
            <i class="fas fa-coins"></i>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Cost Efficient</h3>
          <p class="text-gray-600 mt-2">Eliminate fuel costs and reduce maintenance with our innovative solar
            technology.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'

import pic1 from '/images/images.jpg'
import pic2 from '/images/Rideau0625web.jpg'
import pic3 from '/images/own_boat.jpg'
import pic4 from '/images/download (3).jpg'

AOS.init();
export default {
  data() {
    return {
      currentAdvantage: 0,
      // MODIFICATION: Add index to track the current image
      currentImageIndex: 0,
      pictureSlides: [
        pic1,
        pic2,
        pic3,
        pic4
      ],
      advantages: [
        {
          title: "Sustainable Luxury",
          description: "Experience premium comfort with zero environmental impact using cutting-edge solar technology.",
          icon: "fas fa-sun"
        },
        {
          title: "Minimal Maintenance",
          description: "Electric motors with fewer moving parts mean dramatically reduced maintenance costs.",
          icon: "fas fa-tools"
        },
        {
          title: "Silent Operation",
          description: "Enjoy the sounds of nature without engine noise disturbing your peaceful journey.",
          icon: "fas fa-volume-mute"
        },
        {
          title: "Energy Independence",
          description: "Never worry about fuel availability - the sun powers your adventures.",
          icon: "fas fa-bolt"
        }
      ]
    }
  },
  mounted() {
    this.startCarousel();
    // MODIFICATION: Call the new method to start the image slideshow
    this.startImageSlideshow();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentAdvantage = (this.currentAdvantage + 1) % this.advantages.length;
      }, 4000);
    },
    // MODIFICATION: Add a new method to handle the image slideshow logic
    startImageSlideshow() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.pictureSlides.length;
      }, 5000); // Images will change every 5 seconds
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8fafc;
}

.solar-gradient {
  background: linear-gradient(135deg, #38b2ac 0%, #0ea5e9 100%);
}

.solar-gradient-hover:hover {
  background: linear-gradient(135deg, #2c9a94 0%, #0c8fd8 100%);
}

.solar-panel {
  background:
    linear-gradient(135deg, #2c5282 0%, #2b6cb0 100%),
    repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0.1) 20px);
}

.solar-shine {
  position: relative;
  overflow: hidden;
}

.solar-shine::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.03) 30%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.03) 70%,
      rgba(255, 255, 255, 0) 100%);
  transform: rotate(30deg);
  animation: shine 8s infinite;
}

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
