<template>
  <div class="yieh-boats-showcase">
    <section id="applications" class="feature-section">
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyle">
          <img v-for="(pic, index) in slidePictures_B" :key="`slide-1-${index}`" :src="pic"
            alt="Solar boat application" />
        </div>
      </div>
      <div class="feature-content">
        <h2>Endless Applications</h2>
        <p>From serene lake cruises and fishing trips to commercial transport and research, our solar boats are designed
          for versatility.</p>
        <div class="scroll-gallery">
          <div v-for="(pic, index) in slidePictures" :key="`gallery-${index}`" class="gallery-item">
            <img :src="pic" :alt="'Solar boat application ' + (index + 1)" />
          </div>
        </div>
        <p class="scroll-hint">Scroll sideways to see more &rarr;</p>
      </div>
    </section>

    <hr class="section-divider">

    <section id="advantages" class="feature-section reverse-layout">
      <div class="feature-content">
        <h2>The YiehBoats Advantage</h2>
        <p>Experience the unique benefits of harnessing solar power on the water.</p>
        <ul class="advantages-list">
          <li>🌿 <strong>Eco-Friendly:</strong> Zero emissions for a cleaner planet.</li>
          <li>🤫 <strong>Silent Operation:</strong> Glide through the water without noise pollution.</li>
          <li>💰 <strong>Cost-Effective:</strong> Minimal running costs with free energy from the sun.</li>
          <li>🔧 <strong>Low Maintenance:</strong> Fewer moving parts means less upkeep and more time on the water.</li>
        </ul>
      </div>
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyle">
          <img v-for="(pic, index) in slidePictures_A" :key="`slide-2-${index}`" :src="pic"
            alt="A sleek YiehBoats solar vessel" />
        </div>
      </div>
    </section>

    <hr class="section-divider">

    <section id="customization" class="feature-section">
      <div class="feature-image image-slider-container">
        <div class="image-slider-track" :style="sliderStyle">
          <img v-for="(pic, index) in slidePictures" :key="`slide-3-${index}`" :src="pic"
            alt="Detailed view of a YiehBoats custom build" />
        </div>
      </div>
      <div class="feature-content">
        <h2>Tailored to Your Vision</h2>
        <p>Your boat, your rules. Whether you want a boat for easy cruising, fishing, a party
          boat or a multiday cruiser. We can create a boat with the
          deck layout that suits your needs:</p>
        <ul class="custom-options-list">
          <li>Hull Size & Layout: Depending on your applications we can choose different hull materials</li>
          <li>Size: Depending on you needs we can size the boat accordingly</li>
          <li>Speed: We can design your boat for your required speed</li>
          <li>Navigation & Tech Gadgets</li>
        </ul>
        <a href='#' @click.prevent="$emit('open-design-boat')" class="cta-button">Design Your Boat Today</a>
      </div>
    </section>

  </div>
</template>

<script>
import { defineEmits } from "vue";
import boat1 from '/images/download (1).jpg';
import boat2 from '/images/download (2).jpg';
import boat3 from '/images/download (3).jpg';
import boat4 from '/images/own_boat.jpg';
import boat5 from '/images/images.jpg';
import boat6 from '/images/istockphoto-1191503410-612x612.jpg';
import boat7 from '/images/Rideau0625web.jpg';
import boat8 from '/images/221013_LASAI_0936.jpg';
import boat9 from '/images/wwf_solar_ok.jpg';

const emit = defineEmits(["open-design-boat"]);


export default {
  name: 'YiehBoatsShowcase',
  data() {
    return {
      emit,
      slidePictures: [
        boat1,
        boat2,
        boat3,
      ],
      slidePictures_A: [
        boat4,
        boat5,
        boat6,
      ],
      slidePictures_B: [
        boat7,
        boat8,
        boat9,
      ],
      currentSlideIndex: 0,
      slideInterval: null,
    };
  },
  computed: {
    sliderStyle() {
      // This computed property calculates the CSS transform to slide the images
      return {
        transform: `translateX(-${this.currentSlideIndex * 100}%)`
      };
    }
  },
  methods: {
    nextSlide() {
      // Moves to the next slide, or loops back to the first
      const newIndex = this.currentSlideIndex + 1;
      this.currentSlideIndex = newIndex >= this.slidePictures.length ? 0 : newIndex;
    }
  },
  mounted() {
    // Start the automatic sliding every 4 seconds
    this.slideInterval = setInterval(this.nextSlide, 4000);
  },
  beforeUnmount() {
    // Clean up the interval when the component is removed to prevent memory leaks
    clearInterval(this.slideInterval);
  }
}
</script>

<style scoped>
/* Scoped styles ensure they only apply to this component */

/* --- General & Theming --- */
.yieh-boats-showcase {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f4f7f6;
  overflow-x: hidden;
}

.showcase-header {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #004266;
  color: white;
}

.showcase-header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.showcase-header p {
  font-size: 1.25rem;
  color: #cceeff;
  margin-top: 0.5rem;
}

.section-divider {
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 0 auto;
  max-width: 1200px;
}

/* --- Feature Section Layout --- */
.feature-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-section.reverse-layout {
  flex-direction: row-reverse;
}

.feature-image,
.feature-content {
  flex: 1;
  min-width: 300px;
}

/* --- NEW: Image Slider Styles --- */
.image-slider-container {
  overflow: hidden;
  /* This is crucial to hide the other images */
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.image-slider-track {
  display: flex;
  /* Aligns images horizontally */
  transition: transform 0.5s ease-in-out;
  /* The sliding animation */
}

.image-slider-track-B {
  display: flex;
  /* Aligns images horizontally */
  transition: transform 0.7s ease-in-out;
  /* The sliding animation */
}

.image-slider-track-A {
  display: flex;
  /* Aligns images horizontally */
  transition: transform 0.9s ease-in-out;
  /* The sliding animation */
}

.image-slider-track img {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  /* Prevents images from shrinking */
  object-fit: cover;
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
  align-items: center;
}

.advantages-list li strong {
  margin-left: 0.5rem;
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
  background-color: #101828;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
}

.cta-button:hover {
  background-color: #868a94;
  transform: translateY(-2px);
}

/* --- Responsive Design --- */
@media (max-width: 768px) {

  .feature-section,
  .feature-section.reverse-layout {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 2rem;
  }

  #customization .feature-image {
    order: 2;
  }

  #customization .feature-content {
    order: 1;
  }

  .showcase-header h1 {
    font-size: 2.2rem;
  }

  .feature-content h2 {
    font-size: 2rem;
  }
}
</style>
