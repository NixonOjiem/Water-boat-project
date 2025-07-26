<template>
  <div class="yieh-boats-showcase">
    <section id="applications" class="feature-section px-5">
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyles.applications">
          <img v-for="(pic, index) in sliders.applications.pictures" :key="`slide-app-${index}`" :src="pic" class="rounded-2xl"
            alt="Solar boat in a serene lake application" />
        </div>
      </div>
      <div class="feature-content">
        <h2>Endless Applications, Zero Compromises</h2>
        <p>
          Our solar electric boats are engineered for unparalleled versatility. Forget the limitations of traditional
          boating; embrace the freedom of silent, sustainable power. Whether for personal leisure or commercial
          enterprise,
          there's a YiehBoat for every purpose.
        </p>
        <ul class="custom-options-list">
          <li><strong>Eco-Tourism & Charters:</strong> Offer silent, emission-free tours that don't disturb wildlife,
            providing an immersive nature experience.</li>
          <li><strong>Water Taxis & Ferries:</strong> Reduce operational costs and your carbon footprint with reliable,
            solar-powered public transport solutions.</li>
          <li><strong>Fishing & Angling:</strong> Approach your favorite fishing spots with stealth. Our silent motors
            won't scare away the fish.</li>
          <li><strong>Private Leisure & Cruising:</strong> Enjoy peaceful days on the water with family and friends,
            powered only by the sun.</li>
        </ul>
        <div class="scroll-gallery">
          <div v-for="(pic, index) in sliders.customization.pictures" :key="`gallery-${index}`" class="gallery-item">
            <img :src="pic" :alt="'Solar boat application ' + (index + 1)"  class="rounded-2xl"/>
          </div>
        </div>
        <p class="scroll-hint">Scroll sideways to see more &rarr;</p>
      </div>
    </section>

    <section id="advantages" class="feature-section reverse-layout px-5">
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyles.advantages">
          <img v-for="(pic, index) in sliders.advantages.pictures" :key="`slide-adv-${index}`" :src="pic"  class="rounded-2xl"
            alt="A sleek YiehBoats solar vessel showing its advantages" />
        </div>
      </div>
      <div class="feature-content">
        <h2>The YiehBoats Advantage</h2>
        <p>
          Harnessing solar power on the water isn't just a novelty—it's a fundamental shift towards smarter, cleaner,
          and more enjoyable boating. Experience benefits that gasoline and diesel engines simply can't offer.
        </p>
        <ul class="advantages-list">
          <li>🌿 <strong>Eco-Friendly:</strong> Glide on the water with a clear conscience. Our boats produce zero
            emissions and no oil leaks, protecting the fragile aquatic ecosystems you love.</li>
          <li>🤫 <strong>Silent Operation:</strong> Rediscover the sounds of nature. The near-silent electric motor
            eliminates noise pollution, allowing for peaceful conversations and wildlife observation.</li>
          <li>💰 <strong>Cost-Effective:</strong> The sun provides free fuel. Drastically cut your running costs by
            eliminating expenses for gasoline, oil changes, and frequent engine servicing.</li>
          <li>🔧 <strong>Low Maintenance:</strong> With far fewer moving parts than a traditional combustion engine, our
            electric propulsion systems require minimal upkeep, giving you more time on the water.</li>
        </ul>
      </div>
    </section>

    <section id="customization" class="feature-section px-5 mb-6">
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyles.customization">
          <img v-for="(pic, index) in sliders.customization.pictures" :key="`slide-cust-${index}`" :src="pic"  class="rounded-2xl"
            alt="Detailed view of a YiehBoats custom build" />
        </div>
      </div>
      <div class="feature-content">
        <h2>Tailored to Your Vision</h2>
        <p>
          Your boat should be a perfect reflection of your needs. We don't believe in one-size-fits-all. Our design
          process is a collaboration, allowing you to specify everything from the hull material to the onboard
          technology.
        </p>
        <ul class="custom-options-list">
          <li><strong>Hull Design & Materials:</strong> Choose from lightweight fiberglass for agility, robust aluminum
            for durability, or classic wood finishes for timeless style.</li>
          <li><strong>Bespoke Dimensions:</strong> We size the boat to your exact needs, whether it's a compact vessel
            for two or a spacious deck for commercial tours.</li>
          <li><strong>Performance Tuning:</strong> Define your need for speed and range. We'll engineer the optimal
            motor power, battery bank capacity, and solar array size to match.</li>
          <li><strong>Luxury Finishes & Tech:</strong> Select from premium seating, advanced navigation systems,
            high-end sound systems, and other custom tech gadgets.</li>
        </ul>
        <a href='#' @click.prevent="$emit('open-design-boat')" class="cta-button">Design Your Boat Today</a>
      </div>
    </section>
  </div>
</template>

<script>
// Image imports
import boat1 from '/images/download (1).jpg';
import boat2 from '/images/download (2).jpg';
import boat3 from '/images/download (3).jpg';
import boat4 from '/images/own_boat.jpg';
import boat5 from '/images/images.jpg';
import boat6 from '/images/istockphoto-1191503410-612x612.jpg';
import boat7 from '/images/Rideau0625web.jpg';
import boat8 from '/images/221013_LASAI_0936.jpg';
import boat9 from '/images/wwf_solar_ok.jpg';

export default {
  name: 'YiehBoatsShowcase',
  emits: ["open-design-boat"],
  data() {
    return {
      // Each slider now has its own state for independent operation
      sliders: {
        applications: {
          pictures: [boat7, boat8, boat9],
          currentIndex: 0,
          interval: null,
        },
        advantages: {
          pictures: [boat4, boat5, boat6],
          currentIndex: 0,
          interval: null,
        },
        customization: {
          pictures: [boat1, boat2, boat3],
          currentIndex: 0,
          interval: null,
        },
      },
    };
  },
  computed: {
    // This computed property generates the correct style for each slider
    sliderStyles() {
      const styles = {};
      for (const key in this.sliders) {
        const slider = this.sliders[key];
        styles[key] = {
          transform: `translateX(-${slider.currentIndex * 100}%)`,
        };
      }
      return styles;
    },
  },
  methods: {
    // A single method to advance the slide for a specific slider
    nextSlide(sliderKey) {
      const slider = this.sliders[sliderKey];
      const newIndex = slider.currentIndex + 1;
      slider.currentIndex = newIndex >= slider.pictures.length ? 0 : newIndex;
    },
  },
  mounted() {
    // Start an interval for each slider
    for (const key in this.sliders) {
      this.sliders[key].interval = setInterval(() => {
        this.nextSlide(key);
      }, 4000); // Change slide every 4 seconds
    }
  },
  beforeUnmount() {
    // Clean up all intervals when the component is destroyed
    for (const key in this.sliders) {
      clearInterval(this.sliders[key].interval);
    }
  },
};
</script>

<style scoped>
/* Scoped styles ensure they only apply to this component */

/* --- General & Theming --- */
.yieh-boats-showcase {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f4f7f6;
  overflow-x: hidden;
  /* Prevents horizontal scrollbar from layout shifts */
}

/* --- Feature Section Layout (FULL-WIDTH IMAGES) --- */
.feature-section {
  display: flex;
  align-items: center;
  /* No padding here to allow image to be full-width */
  width: 100%;
}

.feature-section.reverse-layout {
  flex-direction: row-reverse;
}

/* The image container takes up half the space */
.feature-image {
  flex: 1;
  min-width: 50%;
  height: 550px;
  /* NEW: Set a fixed height for the slider area */
}

/* The content container takes up the other half and has internal padding */
.feature-content {
  flex: 1;
  min-width: 50%;
  padding: 4rem 5%;
  /* NEW: Padding is now inside the content block */
  box-sizing: border-box;
}

/* --- Image Slider Styles --- */
.image-slider-container {
  overflow: hidden;
  height: 42rem;
  object-fit: cover;
}

.image-slider-track {
  display: flex;
  /* Aligns images horizontally */
  height: 100%;
  transition: transform 0.7s ease-in-out;
  /* The sliding animation */
}

.image-slider-track img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  /* Prevents images from shrinking */
  object-fit: cover;
  /* Prevents distortion */
}

/* --- Content Styling --- */
.feature-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #005a8c;
  margin-bottom: 1rem;
}

.feature-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.advantages-list,
.custom-options-list {
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
}

.advantages-list li,
.custom-options-list li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  /* Aligns items to the top */
  line-height: 1.5;
}

.advantages-list li strong,
.custom-options-list li strong {
  margin-left: 0.5rem;
  display: block;
  /* Ensures strong tag text flows correctly */
}

/* --- Side-Scrolling Gallery --- */
.scroll-gallery {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0.5rem 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: #0077be #e0e0e0;
}

.scroll-gallery::-webkit-scrollbar {
  height: 8px;
}

.scroll-gallery::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 4px;
}

.scroll-gallery::-webkit-scrollbar-thumb {
  background-color: #0077be;
  border-radius: 4px;
}

.gallery-item img {
  height: 150px;
  width: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.scroll-hint {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

/* --- Call to Action Button --- */
.cta-button {
  display: inline-block;
  background-color: #101828;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
}

.cta-button:hover {
  background-color: #005a8c;
  transform: translateY(-2px);
}

/* --- Responsive Design --- */
@media (max-width: 900px) {

  .feature-section,
  .feature-section.reverse-layout {
    flex-direction: column;
  }

  .feature-image {
    width: 100%;
    min-width: 100%;
    height: 400px;
    /* Adjust height for mobile */
  }

  .feature-content {
    width: 100%;
    min-width: 100%;
    padding: 2.5rem 1.5rem;
  }
}
</style>
