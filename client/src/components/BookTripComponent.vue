<template>
  <div class="bg-[#101828] w-full min-h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div class="text-white z-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Book a Trip <span class="text-cyan-400">Eco-Tourism at the lake front</span>
          </h1>
          <p class="mt-4 text-lg text-gray-300 max-w-xl">
            Discover the serene beauty of the lake from our silent, all-electric catamaran. We offer a luxury experience
            that respects nature, providing a peaceful escape without compromise.
          </p>

          <div class="mt-8">
            <div class="relative h-40 overflow-hidden rounded-xl bg-[#1d293b] p-4 border border-cyan-500/20">
              <div v-for="(item, index) in advantages" :key="index"
                class="absolute inset-0 p-4 transition-all duration-500 ease-in-out" :class="{
                  'opacity-100 translate-y-0': currentAdvantage === index,
                  'opacity-0 translate-y-4': currentAdvantage !== index
                }">
                <div class="flex items-start">
                  <div class="text-cyan-400 mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path :d="item.icon" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg text-cyan-300">{{ item.title }}</h3>
                    <p class="text-gray-300 mt-1">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-4 space-x-2">
              <button v-for="(_, index) in advantages" :key="index" @click="currentAdvantage = index"
                class="w-3 h-3 rounded-full transition-all" :class="{
                  'bg-cyan-400 w-6': currentAdvantage === index,
                  'bg-gray-600': currentAdvantage !== index
                }"></button>
            </div>
          </div>

          <router-link to="/book-trip" class="group mt-10 inline-block">
            <span
              class="px-8 py-4 font-bold text-white inline-block bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:-translate-y-1">
              Book Your Voyage
            </span>
          </router-link>
        </div>

        <div class="relative h-96 lg:h-full flex items-center justify-center" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <div class="w-[500px] h-[500px] absolute bg-cyan-500/20 blur-3xl rounded-full"></div>

          <img v-for="(slide, index) in pictureSlides" :key="index" :src="slide" alt="A modern catamaran on a calm lake"
            class="absolute inset-0 w-full h-full object-cover z-10 animated-shape transition-opacity duration-1000 ease-in-out"
            :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'

// import pic1 from '/images/download (2).jpg'
import pic2 from '/images/download (1).jpg'
import pic3 from '/images/221013_LASAI_0936.jpg'
import pic4 from '/images/221013_LASAI_0917.jpg'

AOS.init();
export default {
  data() {
    return {
      currentAdvantage: 0,
      // MODIFICATION: Add index to track the current image
      currentImageIndex: 0,
      pictureSlides: [
        // pic1,
        pic2,
        pic3,
        pic4
      ],
      advantages: [
        {
          title: "Wildlife Encounters",
          description: "Spot rare birds and aquatic life in their natural habitats with our silent electric boat.",
          icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        },
        {
          title: "Eco-Friendly Experience",
          description: "Zero emissions and noise pollution preserves the lake's delicate ecosystem.",
          icon: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
        },
        {
          title: "Photography Paradise",
          description: "Capture stunning sunset views and landscape shots from unique water perspectives.",
          icon: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
        },
        {
          title: "Guided Exploration",
          description: "Learn about local ecology and history from our expert naturalist guides.",
          icon: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
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
      }, 5000); // Using a 5-second interval for the images
    }
  }
}
</script>

<style scoped>
/* Existing styles */
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

/* No new styles needed. The transition is handled by Tailwind classes. */
/* You can remove the old .carousel-item styles if they are no longer used elsewhere. */
.carousel-item-enter-active,
.carousel-item-leave-active {
  transition: all 0.8s ease;
}

.carousel-item-enter,
.carousel-item-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
