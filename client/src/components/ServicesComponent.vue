<template>
  <section class="py-20 bg-gradient-to-b from-slate-900 to-blue-900 text-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="text-blue-400">🚤</span> Versatile by Design
        </h1>
        <p class="text-xl text-blue-200 max-w-3xl mx-auto">
          Your All-in-One Solar Catamaran Experience on Lake Victoria
        </p>
      </div>

      <!-- Intro Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div class="flex flex-col justify-center" data-aos="fade-right">
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
            <h2 class="text-3xl font-bold mb-6 text-blue-300">Your Solar-Powered Adventure</h2>
            <p class="text-lg mb-6">
              From scenic getaways to practical water transport, our solar-powered catamaran adapts to every journey on
              Lake Victoria.
              Whether you're planning a leisurely escape or a commercial mission, this vessel delivers unmatched
              functionality and comfort.
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <span class="text-xl">🇰🇪</span>
              </div>
              <p class="text-blue-200">Proudly built in Kenya with locally sourced materials</p>
            </div>
          </div>
        </div>
        <div class="relative" data-aos="fade-left">
          <div class="aspect-video rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-xl">
            <div class="w-full h-full bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center">
              <div class="text-center p-8">
                <div class="text-7xl mb-4">⛵</div>
                <h3 class="text-2xl font-bold">Experience Lake Victoria</h3>
                <p class="mt-2 text-blue-100">Sustainable, safe, and serene</p>
              </div>
            </div>
          </div>
          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-300/30">
          </div>
          <div
            class="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-300/30">
          </div>
        </div>
      </div>

      <!-- Service Categories -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Leisure Section -->
        <div
          class="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-3xl border border-cyan-500/30 p-8"
          data-aos="fade-up">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center mr-4">
              <span class="text-3xl">☀️</span>
            </div>
            <h2 class="text-3xl font-bold">Leisure & Lifestyle</h2>
          </div>

          <div class="space-y-6">
            <ServiceCard icon="🍔" title="Onboard BBQs & Drinks"
              description="Host lively day trips with food, drinks, and sunshine" />
            <ServiceCard icon="🌅" title="Guided Lake Tours"
              description="Discover the beauty and biodiversity of Lake Victoria" />
            <ServiceCard icon="🎉" title="Private Functions"
              description="Celebrate birthdays, anniversaries, or small events in style" />
            <ServiceCard icon="🎨" title="Paint & Sip Sessions"
              description="Bring creativity afloat with art, wine, and open water views" />
            <ServiceCard icon="🛏️" title="Overnight Cruises"
              description="Enjoy multi-day expeditions with accommodation on board" />
          </div>
        </div>

        <!-- Commercial Section -->
        <div
          class="bg-gradient-to-br from-slate-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl border border-blue-500/30 p-8"
          data-aos="fade-up" data-aos-delay="100">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center mr-4">
              <span class="text-3xl">🛠️</span>
            </div>
            <h2 class="text-3xl font-bold">Commercial Applications</h2>
          </div>

          <div class="space-y-6">
            <ServiceCard icon="🐟" title="Fish Farm Supply Vessel"
              description="Efficient, low-impact delivery of supplies to aquaculture sites" />
            <ServiceCard icon="🎣" title="Fishing Boat"
              description="Stable, silent, and eco-friendly for artisanal or recreational fishing" />
            <ServiceCard icon="🚢" title="Cargo & Passenger Transport"
              description="A sustainable solution for moving people and goods across the lake" />
            <ServiceCard icon="📦" title="Logistics Support"
              description="Reliable transport for supplies to island communities" />
            <ServiceCard icon="🛟" title="Safety & Rescue Operations"
              description="Emergency response capabilities with solar reliability" />
          </div>
        </div>
      </div>

      <!-- Features Table -->
      <div class="mb-20" data-aos="fade-up">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">A Bright Solution: The Solar Catamaran</h2>
          <p class="text-blue-200 max-w-2xl mx-auto">
            Our solar-powered catamaran is designed to revolutionize lake transport
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon="🌞" title="Solar-Powered" description="Clean, renewable energy with zero emissions" />
          <FeatureCard icon="🛶" title="Catamaran Design"
            description="Stable and safe, minimizing the risk of capsizing" />
          <FeatureCard icon="🔋" title="Battery Storage"
            description="Reliable performance even during cloudy weather" />
          <FeatureCard icon="💸" title="Low Operating Costs"
            description="No fuel needed—affordable for operators and passengers alike" />
          <FeatureCard icon="🛠️" title="Locally Built"
            description="Made in Kenya using local materials and skilled craftsmanship" />
          <FeatureCard icon="🌍" title="Eco-Friendly" description="Protects Lake Victoria's delicate ecosystem" />
        </div>
      </div>

      <!-- Why It Matters -->
      <div
        class="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl border border-cyan-500/30 p-8 mb-16"
        data-aos="fade-up">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
          <p class="text-blue-200 max-w-3xl mx-auto">
            Transforming Lake Victoria's transport while empowering communities
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactCard icon="✅" title="Reduces Pollution"
            description="Zero emissions protect Lake Victoria's delicate ecosystem" color="text-green-400" />
          <ImpactCard icon="❤️" title="Saves Lives" description="Safer design reduces the risk of accidents on the lake"
            color="text-red-400" />
          <ImpactCard icon="💡" title="Empowers Communities"
            description="Creates green jobs and supports local innovation" color="text-yellow-400" />
          <ImpactCard icon="🌱" title="Sustainable Model" description="Sets a blueprint for eco-transport across Africa"
            color="text-emerald-400" />
        </div>
      </div>

      <!-- About Yieh Boats -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="relative" data-aos="fade-right">
          <div class="relative aspect-square rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center">
              <div class="text-center p-8">
                <div class="text-7xl mb-4">⚓</div>
                <h3 class="text-3xl font-bold">Yieh Boats</h3>
                <p class="mt-4 text-xl">Innovating Water Transport</p>
              </div>
            </div>
          </div>
          <div
            class="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 z-[-1]">
          </div>
          <div
            class="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-300/30 z-[-1]">
          </div>
        </div>

        <div data-aos="fade-left">
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
            <h2 class="text-3xl font-bold mb-6 text-cyan-300">About Yieh Boats</h2>
            <p class="text-lg mb-6">
              At Yieh Boats, we're more than boatbuilders—we're innovators charting a new course for water transport
              across Lake Victoria and beyond.
            </p>

            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div class="mt-1 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-lg">🌞</span>
                </div>
                <p><strong>Powered by the Sun:</strong> We design and build safe, reliable boats propelled entirely by
                  solar energy.</p>
              </div>

              <div class="flex items-start">
                <div class="mt-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-lg">🛶</span>
                </div>
                <p><strong>Tailored to Your Journey:</strong> Custom-built vessels to meet your unique needs—balancing
                  functionality, sustainability, and design.</p>
              </div>

              <div class="flex items-start">
                <div class="mt-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-lg">🇰🇪</span>
                </div>
                <p><strong>Made in Kenya, Made with Purpose:</strong> Crafted by skilled Kenyan teams using locally
                  sourced materials—supporting regional industries and empowering green innovation.</p>
              </div>
            </div>

            <div class="bg-slate-800/50 p-4 rounded-xl border border-blue-500/30">
              <p class="italic text-blue-200">"We believe in local innovation. That's why our catamarans are constructed
                with materials sourced from Kenyan suppliers, built by Kenyan engineers, and supporting sustainable
                development."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

// Service Card Component
const ServiceCard = defineComponent({
  props: {
    icon: String,
    title: String,
    description: String
  },
  template: `
    <div class="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
      <div class="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
      <div>
        <h3 class="text-xl font-bold mb-1">{{ title }}</h3>
        <p class="text-blue-200">{{ description }}</p>
      </div>
    </div>
  `
});

// Feature Card Component
const FeatureCard = defineComponent({
  props: {
    icon: String,
    title: String,
    description: String
  },
  template: `
    <div class="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
      <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {{ icon }}
      </div>
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-blue-200">{{ description }}</p>
    </div>
  `
});

// Impact Card Component
const ImpactCard = defineComponent({
  props: {
    icon: String,
    title: String,
    description: String,
    color: String
  },
  template: `
    <div class="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300">
      <div :class="['text-4xl mb-4', color]">
        {{ icon }}
      </div>
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-blue-200">{{ description }}</p>
    </div>
  `
});

export default {
  name: 'ServicesComponent',
  components: {
    ServiceCard,
    FeatureCard,
    ImpactCard
  },
  mounted() {
    // Initialize animations if using AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }
}
</script>

<style scoped>
/* Custom gradient background */
.bg-gradient-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c4a6e 100%);
}

/* Animation for floating elements */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* Glowing effect for cards */
.card-glow {
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  transition: box-shadow 0.3s ease;
}

.card-glow:hover {
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.5);
}
</style>
