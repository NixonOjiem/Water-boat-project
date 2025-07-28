<template>
  <div class="tailored-section-wrapper">
    <h2 class="tailored-section-title" style="font-size: 25px;"><b>Tailored To Your Vision:</b></h2>
    <p class="tailored-section-description" style="font-size: 20px;">
      Your boat should be a perfect reflection of your needs. We don't believe in one-size-fits-all. Our design process
      is
      a collaboration, allowing you to specify everything from the hull material to the onboard technology.
    </p>

    <div class="vision-cards-container">
      <section class="vision-card">
        <div class="card-content-wrapper">
          <h3 class="card-title" style="font-size: 22px;">Custom Hull Material:</h3>
          <p class="card-description" style="font-size: 20px;">Choose from different materials to produce your hull.
            Lightweight fiberglass for agility, robust HDPE for durability, Aluminium
            or wood</p>
        </div>
      </section>

      <section class="vision-card">
        <div class="card-content-wrapper">
          <h3 class="card-title" style="font-size: 22px;">Choose Your Size:</h3>
          <p class="card-description" style="font-size: 20px;">We size the boat to your exact needs, whether it's a
            compact vessel for
            two or a spacious deck for commercial tours</p>
        </div>
      </section>

      <section class="vision-card">
        <div class="card-content-wrapper">
          <h3 class="card-title" style="font-size: 22px;">Performance Tuning:</h3>
          <p class="card-description" style="font-size: 20px;">Define your need for speed and range. We'll engineer the
            optimal motor
            power, battery bank capacity, and solar array size to match.</p>
        </div>
      </section>

      <section class="vision-card">
        <div class="card-content-wrapper">
          <h3 class="card-title" style="font-size: 22px;">Deck layout and finishing:</h3>
          <p class="card-description" style="font-size: 20px;">Choose the deck layout that suits you and select from
            premium seating, advanced
            navigation systems, high-end sound systems, and other custom tech gadgets.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TayloredToYourVision',
}
</script>

<style scoped>
/* Main wrapper for the entire section */
.tailored-section-wrapper {
  padding: 20px;
  width: 100%;
  max-width: none;
  margin: 0 auto;
  text-align: center;
}

/* H2 Styling */
.tailored-section-title {
  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

/* Paragraph following H2 Styling */
.tailored-section-description {
  text-align: left;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #555;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Cards Container (still for vertical stacking of cards) */
.vision-cards-container {
  display: flex;
  flex-direction: column;
  /* Cards stack vertically */
  align-items: center;
  /* Center cards horizontally */
  gap: 20px;
  padding: 0 20px;
}

/* Individual Card Styling */
.vision-card {
  width: 100%;
  max-width: 800px;
  /* INCREASED: from 600px to 800px */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 25px;
  background-color: #DBF0FE;
}

/* Inner wrapper for side-by-side content within each card */
.card-content-wrapper {
  display: flex;
  flex-direction: row;
  /* Arranges title and description side-by-side */
  align-items: flex-start;
  /* Aligns items to the top if heights differ */
  gap: 20px;
  /* Space between title and description */
  width: 100%;
}

.card-title {
  flex: 0 0 150px;
  /* Fixed width for the title column */
  font-size: 1.5em;
  color: #007bff;
  text-align: left;
  line-height: 1.2;
}

.card-description {
  flex: 1;
  /* Description takes remaining space */
  font-size: 1em;
  color: #666;
  line-height: 1.5;
  text-align: left;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .tailored-section-title {
    font-size: 2em;
  }

  .tailored-section-description {
    text-align: center;
    padding: 0 10px;
  }

  .vision-cards-container {
    padding: 0 10px;
  }

  .vision-card {
    max-width: 100%;
    /* On mobile, cards still take full available width */
    padding: 15px;
  }

  .card-content-wrapper {
    flex-direction: column;
    /* Stack title and description vertically on mobile */
    gap: 10px;
  }

  .card-title {
    flex: initial;
    width: 100%;
    font-size: 1.3em;
  }

  .card-description {
    flex: initial;
    width: 100%;
  }
}
</style>
