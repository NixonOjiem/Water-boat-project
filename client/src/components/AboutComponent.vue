<template>
  <div class="bg-[#D8EDFF] py-8 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Top Section: About Yieh Boats -->
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="h-full w-full flex items-center justify-center" data-aos="fade-up" data-aos-duration="1200">
          <img src="/images/Mbita & Rusinga Island.jpg" alt="A solar-powered boat gliding on a calm lake"
            class="animated-shape w-full h-full max-h-[500px] object-cover shadow-xl">
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
        </div>
      </div>

      <!-- Middle Section: The Advantage -->
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
          <img src="/images/kisumu-yacht-club.jpg" alt="A blueprint for engineering and investment"
            class="animated-shape w-full h-full max-h-[500px] object-cover shadow-xl">
        </div>
      </div>


      <!-- Bottom Section: Sustainable Development Goals (Integrated) -->
      <div class="mt-16 md:mt-24">
        <div class="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">

          <!-- Wrapper for the first two cards to be side-by-side -->
          <div class="flex flex-col lg:flex-row gap-8 mb-8">

            <!-- Card 1 (Left) -->
            <div class="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                No poverty, hunger, good and well-being.
              </h2>
              <p class="text-lg text-sky-600 font-medium mb-8">
                The boat will be able to provide jobs and make sure the ecology of the lake improves. This results in a lake that can produce more fish in a sustainable way, eliminating hunger and ensuring the people can live healthily in and around the lake.
              </p>
              <!-- SDG Squares for Card 1 -->
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

            <!-- Card 2 (Right) -->
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
              <!-- SDG Squares for Card 2 -->
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

          <!-- Card 3 (Full Width) -->
          <div class="w-full bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-800 text-center">
              Building a Sustainable Future
            </h2>
            <!-- SDG Squares for Card 3 with an ID for JS targeting -->
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
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// This function will run after the component's template has been rendered to the DOM.
onMounted(() => {
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

  // Get all the square elements from the container
  const squares = document.querySelectorAll('#random-color-squares .sdg-square');

  // Shuffle the colors array to ensure no immediate repeats if possible
  const shuffledColors = shuffle([...colors]);

  // Assign a unique random color to each square
  squares.forEach((square, index) => {
    // Use the shuffled color, and loop back to the start if there are more squares than colors
    square.style.backgroundColor = shuffledColors[index % shuffledColors.length];
  });
});
</script>

<style>
/* Your existing animated shape styles */
.animated-shape {
  clip-path: polygon(0% 15%, 15% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 85%);
  animation: morph 8s ease-in-out infinite;
  transition: all 0.5s ease;
}

.animated-shape:hover {
  animation-play-state: paused;
  /* Pauses the animation on hover */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  /* Expands to full rectangle */
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
