<template>
  <div class="bg-slate-50 font-sans overflow-x-hidden">
    <!-- Header Navigation -->
    <header :class="['fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300', isPageLoaded ? 'opacity-100' : 'opacity-0']">
      <div class="bg-white/80 backdrop-blur-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="font-bold text-2xl text-blue-900">AquaGlide Marine</div>
          <ul class="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <li><a href="#why-us" class="hover:text-blue-600 transition-colors">Why Us</a></li>
            <li><a href="#fleet" class="hover:text-blue-600 transition-colors">Our Fleet</a></li>
            <li><a href="#crew" class="hover:text-blue-600 transition-colors">Our Crew</a></li>
            <li><a href="#destinations" class="hover:text-blue-600 transition-colors">Destinations</a></li>
          </ul>
          <a href="#contact" class="hidden md:block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </a>
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-800 z-50">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </nav>
      </div>
       <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4 shadow-lg">
          <a href="#why-us" @click="isMenuOpen = false" class="text-gray-700 hover:text-blue-600">Why Us</a>
          <a href="#fleet" @click="isMenuOpen = false" class="text-gray-700 hover:text-blue-600">Our Fleet</a>
          <a href="#crew" @click="isMenuOpen = false" class="text-gray-700 hover:text-blue-600">Our Crew</a>
          <a href="#destinations" @click="isMenuOpen = false" class="text-gray-700 hover:text-blue-600">Destinations</a>
          <a href="#contact" @click="isMenuOpen = false" class="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors mt-2">Get in Touch</a>
        </div>
      </transition>
    </header>

    <main>
      <!-- 1. Hero Section -->
      <section class="h-screen relative overflow-hidden flex items-center justify-center text-white" style="background: linear-gradient(to bottom, #a1c4fd, #c2e9fb);">
         <!-- Animated Background Elements -->
        <div :class="['absolute -bottom-1/4 w-full h-1/2 bg-gradient-to-t from-blue-300 to-transparent transition-transform duration-1000', isPageLoaded ? 'translate-y-0' : 'translate-y-full']" style="opacity: 0.5;"></div>
        <div :class="['absolute bottom-0 left-0 w-full h-1/4 bg-white transition-transform duration-1000 delay-200', isPageLoaded ? 'translate-y-0' : 'translate-y-full']"></div>

        <div class="text-center z-10 p-6">
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-blue-900">
            <span class="animated-text-line" :style="{transitionDelay: '300ms'}">Chart Your Course</span>
            <span class="animated-text-line" :style="{transitionDelay: '500ms'}">to <span class="text-blue-600">Adventure</span></span>
          </h1>
          <p :class="['mt-4 text-lg sm:text-xl md:text-2xl font-light text-blue-800 transition-all duration-700 delay-700', isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">Dive into the open water with AquaGlide Marine.</p>
          <div :class="['mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-1000', isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <a href="#fleet" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform hover:scale-105">Explore Our Fleet</a>
            <a href="#contact" class="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-transform hover:scale-105">Book a Voyage</a>
          </div>
        </div>
      </section>

      <!-- 2. Why Us Section -->
      <section id="why-us" ref="whyUsSection" class="py-16 md:py-20 animated-section">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900">Why AquaGlide?</h2>
          <p class="text-lg text-gray-600 mt-2">Your Voyage is Our Priority.</p>
          <div class="mt-12 grid md:grid-cols-3 gap-8 md:gap-12">
            <div class="bg-white p-8 rounded-xl shadow-lg animated-card" style="--delay: 100ms;">
              <div ref="counter1" class="text-5xl font-extrabold text-blue-600">0+</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Point Safety Inspection</h3>
              <p class="text-gray-600 mt-2">Every vessel undergoes a rigorous pre-departure check to ensure your safety.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg animated-card" style="--delay: 200ms;">
              <div ref="counter2" class="text-5xl font-extrabold text-blue-600">0%</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Satisfaction Guarantee</h3>
              <p class="text-gray-600 mt-2">We're committed to providing an unforgettable experience on the water.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg animated-card" style="--delay: 300ms;">
              <div ref="counter3" class="text-5xl font-extrabold text-blue-600">0</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Years of Marine Excellence</h3>
              <p class="text-gray-600 mt-2">Our legacy is built on a passion for boating and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Our Fleet Section -->
      <section id="fleet" ref="fleetSection" class="py-16 md:py-20 bg-gray-100 animated-section">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900">Our Fleet: Find Your Perfect Vessel</h2>
          <p class="text-lg text-gray-600 mt-2">From high-speed thrills to leisurely cruises, your ideal boat awaits.</p>
          <div class="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div v-for="(boat, index) in fleet" :key="boat.name" class="bg-white rounded-lg shadow-xl overflow-hidden animated-card" :style="{'--delay': (index * 100) + 'ms'}">
              <img :src="boat.image" :alt="boat.name" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/003366/FFFFFF?text=Boat+Image';">
              <div class="p-6 text-left">
                <h3 class="text-2xl font-bold text-blue-900">{{ boat.name }}</h3>
                <p class="text-gray-700 mt-2">{{ boat.description }}</p>
                <div class="mt-4 text-xl font-bold text-blue-600">From {{ boat.price }} / half-day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Meet Our Crew Section -->
      <section id="crew" ref="crewSection" class="py-16 md:py-20 animated-section">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900">Meet Our Captains & Crew</h2>
          <div class="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="(member, index) in crew" :key="member.name" class="text-center animated-card" :style="{'--delay': (index * 100) + 'ms'}">
              <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto shadow-lg object-cover border-4 border-white" onerror="this.onerror=null;this.src='https://placehold.co/128x128/CCCCCC/FFFFFF?text=Crew';">
              <h4 class="mt-4 text-xl font-bold text-blue-900">{{ member.name }}</h4>
              <p class="text-blue-600 font-medium">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Destinations Section -->
      <section id="destinations" ref="destinationsSection" class="py-16 md:py-20 bg-gray-100 animated-section">
        <div class="container mx-auto px-6">
           <h2 class="text-3xl md:text-4xl font-bold text-blue-900 text-center">Explore Our Breathtaking Destinations</h2>
           <p class="text-lg text-gray-600 mt-2 text-center">We provide the vessel, you create the story.</p>
           <div class="mt-12 relative">
             <!-- Carousel Wrapper -->
             <div class="relative h-[450px] overflow-hidden">
                <transition-group name="carousel" tag="div">
                    <div v-for="(dest, index) in destinations" :key="dest.title" v-show="currentDestinationIndex === index" class="absolute w-full h-full">
                         <div class="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center">
                            <img :src="dest.image" :alt="dest.title" class="w-full md:w-1/2 h-64 md:h-[450px] object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/3498db/FFFFFF?text=Destination';">
                            <div class="p-8 text-center md:text-left">
                              <h3 class="text-2xl font-bold text-blue-900">{{ dest.title }}</h3>
                              <p class="text-gray-700 mt-4">{{ dest.description }}</p>
                               <a href="#" class="inline-block mt-6 text-blue-600 font-bold hover:underline">Plan Your Itinerary →</a>
                            </div>
                         </div>
                    </div>
                </transition-group>
             </div>
             <!-- Carousel Controls -->
             <button @click="prevDestination" class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-white/50 hover:bg-white p-3 rounded-full shadow-md transition"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg></button>
             <button @click="nextDestination" class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-white/50 hover:bg-white p-3 rounded-full shadow-md transition"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></button>
           </div>
        </div>
      </section>

      <!-- 6. Contact Us Section -->
      <footer id="contact" class="bg-blue-900 text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p class="text-lg text-blue-200 mt-4">Ready to set sail? We're here to help.</p>
          <div class="mt-8 space-y-2 text-lg md:text-xl">
            <p><a href="tel:123-456-7890" class="hover:underline">(123) 456-7890</a></p>
            <p><a href="mailto:bookings@aquaglidemarine.com" class="hover:underline">bookings@aquaglidemarine.com</a></p>
            <p>123 Marina Drive, Waterfront, FL</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- Page Load State ---
const isPageLoaded = ref(false);
const isMenuOpen = ref(false);

onMounted(() => {
  // Trigger initial hero animations
  setTimeout(() => {
    isPageLoaded.value = true;
  }, 100);
});

// --- Intersection Observer for Scroll Animations ---
const whyUsSection = ref(null);
const fleetSection = ref(null);
const crewSection = ref(null);
const destinationsSection = ref(null);
const counter1 = ref(null);
const counter2 = ref(null);
const counter3 = ref(null);

const sectionsToObserve = [
  whyUsSection, fleetSection, crewSection, destinationsSection,
  counter1, counter2, counter3
];

const animateNumber = (el, finalValue, suffix = '') => {
  let start = 0;
  const duration = 1500;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const current = Math.floor(progress * finalValue);
    el.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = finalValue + suffix;
    }
  }
  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Trigger counters
        if (entry.target === counter1.value) animateNumber(counter1.value, 50, '+');
        if (entry.target === counter2.value) animateNumber(counter2.value, 100, '%');
        if (entry.target === counter3.value) animateNumber(counter3.value, 25);

        // Unobserve after animation to prevent re-triggering
        if (!entry.target.classList.contains('counter')) {
            observer.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.1 }
);

onMounted(() => {
  sectionsToObserve.forEach(sectionRef => {
    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  });
});

onUnmounted(() => {
  observer.disconnect();
});


// --- Data ---
const fleet = ref([
  { name: 'The Voyager X-1', description: 'Perfect for watersports and thrilling day trips. Seats 6.', price: '$350', image: 'https://images.unsplash.com/photo-1565551981144-a61a0b3ce8b6?q=80&w=1974&auto=format&fit=crop' },
  { name: 'The Serenity Cruiser', description: 'Ideal for family outings and relaxed cruising. Seats 12.', price: '$450', image: 'https://images.unsplash.com/photo-1620062332151-25314ac6195c?q=80&w=1932&auto=format&fit=crop' }
]);
const crew = ref([
  { name: 'Capt. John Smith', role: '20+ Years on the Water', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Anna Williams', role: 'Watersports Instructor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Mike Davis', role: 'Lead Deckhand', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Emily White', role: '5-Star Guest Services', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' }
]);
const destinations = ref([
    { title: 'Sunrise at Crystal Cove', description: 'Experience the ultimate morning escape as the sun rises over calm, clear waters.', image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Island-Hopping Adventure', description: 'Discover hidden beaches and local wildlife on a full-day island exploration trip.', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cfb?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Coastal City Lights Tour', description: 'See the city skyline from a new perspective on a guided evening cruise.', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7207?q=80&w=1974&auto=format&fit=crop' },
]);

// --- Carousel Logic ---
const currentDestinationIndex = ref(0);
const nextDestination = () => {
    currentDestinationIndex.value = (currentDestinationIndex.value + 1) % destinations.value.length;
};
const prevDestination = () => {
    currentDestinationIndex.value = (currentDestinationIndex.value - 1 + destinations.value.length) % destinations.value.length;
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Hero Text Animation */
.animated-text-line {
  display: block;
  overflow: hidden;
}
.animated-text-line::after {
  content: '';
  display: block;
  transform: translateY(100%);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: inherit;
}
.is-page-loaded .animated-text-line::after {
  transform: translateY(0);
}
h1 .animated-text-line::after {
  content: attr(data-text); /* Fallback if needed, but we use innerHTML */
}
.is-page-loaded h1 .animated-text-line {
    animation: revealText 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: inherit;
    transform: translateY(110%);
}
@keyframes revealText {
    to {
        transform: translateY(0);
    }
}

/* Scroll-triggered Animations */
.animated-section, .animated-card {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: var(--delay, 0ms);
}
.animated-section.is-visible, .animated-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Staggered animation for children of a visible section */
.is-visible .animated-card {
    opacity: 1;
    transform: translateY(0);
}


/* Mobile Menu Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Carousel Transitions */
.carousel-enter-active, .carousel-leave-active {
  transition: all 0.5s ease-in-out;
}
.carousel-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.carousel-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
