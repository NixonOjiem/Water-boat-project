<template>
  <div class="bg-slate-50 font-sans">
    <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="font-bold text-2xl text-blue-900">AquaGlide Marine</div>
        <ul class="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li><a href="#why-us" class="hover:text-blue-600">Why Us</a></li>
          <li><a href="#fleet" class="hover:text-blue-600">Our Fleet</a></li>
          <li><a href="#crew" class="hover:text-blue-600">Our Crew</a></li>
          <li><a href="#destinations" class="hover:text-blue-600">Destinations</a></li>
        </ul>
        <a href="#contact" class="hidden md:block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
          Get in Touch
        </a>
        <button class="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>

    <main>
      <section class="h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('https://images.unsplash.com/photo-1590422122138-95621342591e?q=80&w=2070');">
        <div class="text-center bg-black/50 p-10 rounded-xl">
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight">Chart Your Course to Adventure</h1>
          <p class="mt-4 text-xl md:text-2xl font-light">Dive into the open water with AquaGlide Marine.</p>
          <div class="mt-8 space-x-4">
            <a href="#fleet" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Explore Our Fleet
            </a>
            <a href="#contact" class="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
              Book a Voyage
            </a>
          </div>
        </div>
      </section>

      <section id="why-us" class="py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-blue-900">Why AquaGlide?</h2>
          <p class="text-lg text-gray-600 mt-2">Your Voyage is Our Priority.</p>
          <div class="mt-12 grid md:grid-cols-3 gap-12">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="text-5xl font-extrabold text-blue-600">50+</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Point Safety Inspection</h3>
              <p class="text-gray-600 mt-2">Every vessel undergoes a rigorous pre-departure check to ensure your safety.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="text-5xl font-extrabold text-blue-600">100%</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Satisfaction Guarantee</h3>
              <p class="text-gray-600 mt-2">We're committed to providing an unforgettable experience on the water.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="text-5xl font-extrabold text-blue-600">25</div>
              <h3 class="text-xl font-bold mt-4 text-blue-900">Years of Marine Excellence</h3>
              <p class="text-gray-600 mt-2">Our legacy is built on a passion for boating and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-blue-900">Our Fleet: Find Your Perfect Vessel</h2>
          <p class="text-lg text-gray-600 mt-2">From high-speed thrills to leisurely cruises, your ideal boat awaits.</p>
          <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div v-for="boat in fleet" :key="boat.name" class="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img :src="boat.image" :alt="boat.name" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-900">{{ boat.name }}</h3>
                <p class="text-gray-700 mt-2">{{ boat.description }}</p>
                <div class="mt-4 text-xl font-bold text-blue-600">From {{ boat.price }} / half-day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crew" class="py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-blue-900">Meet Our Captains & Crew</h2>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="member in crew" :key="member.name" class="text-center">
              <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto shadow-lg object-cover">
              <h4 class="mt-4 text-xl font-bold text-blue-900">{{ member.name }}</h4>
              <p class="text-blue-600 font-medium">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
           <h2 class="text-4xl font-bold text-blue-900 text-center">Explore Our Breathtaking Destinations</h2>
           <p class="text-lg text-gray-600 mt-2 text-center">We provide the vessel, you create the story.</p>
           <div class="mt-12 grid md:grid-cols-3 gap-8">
             <div v-for="dest in destinations" :key="dest.title" class="bg-white rounded-lg shadow-xl overflow-hidden">
                <img :src="dest.image" :alt="dest.title" class="w-full h-56 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-bold text-blue-900">{{ dest.title }}</h3>
                  <p class="text-gray-700 mt-2">{{ dest.description }}</p>
                   <a href="#" class="inline-block mt-4 text-blue-600 font-bold hover:underline">Plan Your Itinerary →</a>
                </div>
             </div>
           </div>
        </div>
      </section>

      <footer id="contact" class="bg-blue-900 text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold">Get In Touch</h2>
          <p class="text-lg text-blue-200 mt-4">Ready to set sail? We're here to help.</p>
          <div class="mt-8">
            <p class="text-xl">(123) 456-7890</p>
            <p class="text-xl mt-2">bookings@aquaglidemarine.com</p>
            <p class="text-xl mt-2">123 Marina Drive, Waterfront, FL</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- Reactive data for your content ---

// 3. Fleet Data
const fleet = ref([
  {
    name: 'The Voyager X-1',
    description: 'Perfect for watersports and thrilling day trips. Seats 6.',
    price: '$350',
    image: 'https://images.unsplash.com/photo-1565551981144-a61a0b3ce8b6?q=80&w=1974'
  },
  {
    name: 'The Serenity Cruiser',
    description: 'Ideal for family outings and relaxed cruising. Seats 12.',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1620062332151-25314ac6195c?q=80&w=1932'
  }
]);

// 4. Crew Data
const crew = ref([
  { name: 'Capt. John Smith', role: '20+ Years on the Water', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887' },
  { name: 'Anna Williams', role: 'Watersports Instructor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070' },
  { name: 'Mike Davis', role: 'Lead Deckhand', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887' },
  { name: 'Emily White', role: '5-Star Guest Services', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887' }
]);

// 5. Destinations Data
const destinations = ref([
    { title: 'Sunrise at Crystal Cove', description: 'Experience the ultimate morning escape as the sun rises over calm, clear waters.', image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070' },
    { title: 'Island-Hopping Adventure', description: 'Discover hidden beaches and local wildlife on a full-day island exploration trip.', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cfb?q=80&w=1974' },
    { title: 'Coastal City Lights Tour', description: 'See the city skyline from a new perspective on a guided evening cruise.', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7207?q=80&w=1974' },
]);

</script>

<style>
/* This example uses Tailwind CSS classes directly in the template.
  To use, you must have Tailwind CSS set up in your project.

  If you prefer not to use Tailwind, you can remove the classes
  and write your own scoped CSS here. For example:

  .hero-section {
    background-image: url(...);
    height: 100vh;
    ...
  }
*/

/* Basic style for smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
