<template>
  <div class="yieh-boats-showcase">
    <!-- <header class="showcase-header">
      <h1>YiehBoats</h1>
      <p>Navigating the Future, Powered by the Sun ☀️</p>
    </header> -->

    <section id="applications" class="feature-section">
      <div class="feature-image">
        <img src="/images/download (2).jpg" alt="Custom YiehBoats solar boat on the water" />
      </div>
      <div class="feature-content">
        <h2>Endless Applications</h2>
        <p>From serene lake cruises and fishing trips to commercial transport and research, our solar boats are designed
          for versatility.</p>

        <div class="scroll-gallery">
          <div v-for="(pic, index) in slidePictures" :key="index" class="gallery-item">
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
      <div class="feature-image">
        <img src="/images/download (2).jpg" alt="A sleek YiehBoats solar vessel" />
      </div>
    </section>

    <hr class="section-divider">

    <section id="customization" class="feature-section">
      <div class="feature-image">
        <img src="/images/download (2).jpg" alt="Detailed view of a YiehBoats custom build" />
      </div>
      <div class="feature-content">
        <h2>Tailored to Your Vision</h2>
        <p>Your boat, your rules. We work with you to build a solar boat that perfectly fits your needs. Customization
          options include:</p>
        <ul class="custom-options-list">
          <li>Hull Size & Layout</li>
          <li>Deck Materials & Seating</li>
          <li>Battery Capacity & Solar Array Size</li>
          <li>Navigation & Tech Gadgets</li>
        </ul>
        <button class="cta-button">Design Your Boat Today</button>
      </div>
    </section>

  </div>
</template>

<script>
import boat1 from '/images/download (1).jpg';
import boat2 from '/images/download (2).jpg';
import boat3 from '/images/download (3).jpg';
import boat4 from '/images/own_boat.jpg';

export default {
  name: 'YiehBoatsShowcase',
  data() {
    return {
      slidePictures: [
        boat1,
        boat2,
        boat3,
        boat4,
      ],
    };
  },
  methods: {
    // Methods can be added here if needed
  },
}
</script>

<style scoped>
/* Scoped styles ensure they only apply to this component */

/* --- General & Theming --- */
.yieh-boats-showcase {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f4f7f6;
  /* Light, clean background */
  overflow-x: hidden;
  /* Prevents horizontal scroll on the main page */
}

.showcase-header {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #004266;
  /* Deep blue for a professional, watery feel */
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

/* Alternates the layout for visual interest */
.feature-section.reverse-layout {
  flex-direction: row-reverse;
}

.feature-image,
.feature-content {
  flex: 1;
  /* Each takes up half the space */
  min-width: 300px;
  /* Prevents them from getting too squished */
}

.feature-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

/* --- Content Styling --- */
.feature-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #005a8c;
  /* Brand color */
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
  /* This enables horizontal scrolling */
  gap: 1rem;
  padding: 1rem 0.5rem 1rem 0;
  scrollbar-width: thin;
  /* For Firefox */
  scrollbar-color: #0077be #e0e0e0;
  /* For Firefox */
}

/* Scrollbar styling for Webkit browsers (Chrome, Safari) */
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
  /* A vibrant, action-oriented color */
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  /* Modern pill shape */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
}

.cta-button:hover {
  background-color: #868a94;
  transform: translateY(-2px);
}

/* --- Responsive Design --- */
/* --- Responsive Design --- */
@media (max-width: 768px) {

  .feature-section,
  .feature-section.reverse-layout {
    flex-direction: column;
    /* Stacks image and content vertically */
    padding: 2rem 1rem;
    gap: 2rem;
  }

  /* Specific adjustment for the "Tailored to Your Vision" section */
  #customization .feature-image {
    order: 2;
    /* Puts the image second (after the content) */
  }

  #customization .feature-content {
    order: 1;
    /* Puts the content first */
  }

  .showcase-header h1 {
    font-size: 2.2rem;
  }

  .feature-content h2 {
    font-size: 2rem;
  }
}
</style>
