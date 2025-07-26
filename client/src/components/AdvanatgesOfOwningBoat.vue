<template>
  <div class="advantages-section-wrapper">
    <h2 class="section-title"><b>Advantages of owning a Yieh boat</b></h2>
    <p class="section-description">
      Harnessing solar power on the water isn't just a novelty—it's a fundamental shift towards smarter, cleaner, and
      more enjoyable boating. See the advantages below
    </p>

    <div class="advantages-grid">
      <section class="advantage-card">
        <h3 class="card-title">No Pollution:</h3>
        <p class="card-description">Our boats produce zero emissions and no
          oil leaks, protecting the fragile aquatic
          ecosystems millions of people depend on</p>
      </section>

      <section class="advantage-card">
        <h3 class="card-title">Low Maintenance:</h3>
        <p class="card-description">With far fewer moving parts than a
          traditional motors, our electric propulsion
          systems require minimal upkeep, giving
          you more time on the water.</p>
      </section>

      <section class="advantage-card">
        <h3 class="card-title">Cost effective:</h3>
        <p class="card-description">The sun provides free fuel. Drastically cut
          your running costs by eliminating
          expenses for gasoline, oil changes, and
          frequent engine servicing</p>
      </section>

      <section class="advantage-card">
        <h3 class="card-title">Locally built:</h3>
        <p class="card-description">Our boats are built and designed in Kenya,
          with as much local components as
          possible. Empowering the Kenyan economy
          and people.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesOfOwningBoat',
  data() {
    return {
      // Data properties can be added here if needed
    }
  },
  methods: {
    // Methods can be added here if needed
  }
}
</script>

<style scoped>
/* Main wrapper for the section to contain everything */
.advantages-section-wrapper {
  padding: 20px;
  /* Add some padding around the entire section */
  max-width: 1200px;
  /* Limit overall width for better readability on large screens */
  margin: 0 auto;
  /* Center the wrapper */
}

/* H2 Styling */
.section-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  /* Space below the title */
  font-size: 2.5em;
  /* Adjust as needed */
  color: #333;
  /* Darker color for emphasis */
}

/* Paragraph after H2 Styling */
.section-description {
  text-align: left;
  /* Keep left aligned */
  margin-bottom: 40px;
  /* More space below description */
  line-height: 1.6;
  /* Improve readability */
  color: #555;
  /* Slightly lighter color */
  max-width: 800px;
  /* Limit width for readability */
  margin-left: auto;
  margin-right: auto;
  /* Center if max-width is applied */
}

/* Cards Container */
.advantages-grid {
  display: flex;
  flex-wrap: wrap;
  /* Allows cards to wrap to the next row */
  gap: 40px;
  /* Increased gap from 20px to 40px */
  /* Space between cards */
  justify-content: center;
  /* Center cards in the grid */
}

/* Individual Card Styling */
.advantage-card {
  /* Adjusted flex-basis to account for the new 40px gap */
  flex: 1 1 calc(50% - 20px);
  /* (50% of container width) - (half of the gap)
     If gap is 40px, then 50% - 20px for each card. */

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for card effect */
  border-radius: 8px;
  /* Rounded corners for cards */
  padding: 25px;
  background-color: #DBF0FE;
  /* White background for cards */
  display: flex;
  /* Use flexbox for content inside card */
  flex-direction: column;
  /* Stack title and paragraph */
  align-items: flex-start;
  /* Align text to the left */
  min-width: 300px;
  /* Minimum width for cards to prevent them from becoming too narrow */
}

.card-title {
  font-size: 1.5em;
  /* Larger font for card titles */
  color: #007bff;
  /* A distinct color for titles (e.g., blue) */
  margin-bottom: 10px;
}

.card-description {
  font-size: 1em;
  color: #666;
  line-height: 1.5;
}


/* Responsive adjustments for mobile view */
@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
    /* Slightly smaller for mobile */
  }

  .advantages-grid {
    flex-direction: column;
    /* Stack cards vertically on mobile */
    align-items: center;
    /* Center cards when stacked */
  }

  .advantage-card {
    flex: 1 1 90%;
    /* Take almost full width on mobile, leaving some padding */
    max-width: 400px;
    /* Prevent cards from becoming too wide on smaller tablets */
  }
}
</style>
