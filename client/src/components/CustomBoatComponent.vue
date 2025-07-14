<template>
  <div class="solar-boat-showcase">
    <div class="hero-section">
      <img src="https://images.unsplash.com/photo-1629091347713-a93589947322?q=80&w=2070&auto=format&fit=crop"
        alt="Solar Boat Background" class="background-image">
      <div class="hero-content">
        <h1 class="animate-fade-in-down">The Future of Marine Travel: The Solar Boat</h1>
        <p class="animate-fade-in-up">Harnessing the power of the sun for a silent, sustainable, and revolutionary
          journey on the water.</p>
      </div>
    </div>

    <div class="intro-section">
      <div class="intro-text">
        <h2>Introducing the Concept</h2>
        <p>Our solar boat represents a paradigm shift in marine technology. By integrating advanced photovoltaic panels
          with a sleek, hydrodynamic design, we've created a vessel that is not only eco-friendly but also remarkably
          efficient and cost-effective. Experience the tranquility of the open water without the noise, fumes, or
          environmental impact of traditional combustion engines.</p>
      </div>
      <div class="renders-grid">
        <img
          src="https://images.pexels.com/photos/11540302/pexels-photo-11540302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Solar Boat Render 1" class="render-image">
        <img
          src="https://images.pexels.com/photos/9813151/pexels-photo-9813151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Solar Boat Render 2" class="render-image">
      </div>
    </div>

    <div class="applications-section">
      <h2>Diverse Applications</h2>
      <div class="side-scroll-container">
        <div class="side-scroll-item">
          <img
            src="https://images.pexels.com/photos/7722937/pexels-photo-7722937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Leisure Cruising">
          <div class="scroll-item-caption">
            <h3>Leisure Cruising</h3>
            <p>Enjoy serene day trips and quiet coastal exploration with zero emissions.</p>
          </div>
        </div>
        <div class="side-scroll-item">
          <img
            src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Eco-Tourism">
          <div class="scroll-item-caption">
            <h3>Eco-Tourism</h3>
            <p>Offer unique, environmentally friendly tours in sensitive marine ecosystems.</p>
          </div>
        </div>
        <div class="side-scroll-item">
          <img src="https://images.unsplash.com/photo-1541690594192-1647a7b9319e?q=80&w=2070&auto=format&fit=crop"
            alt="Water Taxi Services">
          <div class="scroll-item-caption">
            <h3>Water Taxi & Ferry Services</h3>
            <p>Provide clean and quiet public transportation in urban waterways.</p>
          </div>
        </div>
        <div class="side-scroll-item">
          <img src="https://images.unsplash.com/photo-1519946394483-b4139b4b0938?q=80&w=1974&auto=format&fit=crop"
            alt="Research & Monitoring">
          <div class="scroll-item-caption">
            <h3>Research & Monitoring</h3>
            <p>Conduct marine research with minimal disturbance to wildlife and the environment.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="advantages-section">
      <h2>Advantages of Solar Power</h2>
      <div class="advantages-grid">
        <div class="advantage-card">
          <i class="fas fa-leaf"></i>
          <h3>Eco-Friendly</h3>
          <p>Produces zero emissions, protecting our pristine marine environments.</p>
        </div>
        <div class="advantage-card">
          <i class="fas fa-volume-mute"></i>
          <h3>Silent Operation</h3>
          <p>Glide through the water in near silence for a more peaceful experience.</p>
        </div>
        <div class="advantage-card">
          <i class="fas fa-gas-pump"></i>
          <h3>Lower Running Costs</h3>
          <p>Significantly reduced fuel and maintenance expenses compared to traditional boats.</p>
        </div>
        <div class="advantage-card">
          <i class="fas fa-solar-panel"></i>
          <h3>Energy Independence</h3>
          <p>Freedom from marinas and refueling stations, with the sun as your power source.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolarBoatShowcase',
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.solar-boat-showcase {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f4f7f6;
}

.hero-section {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
}

.intro-section,
.applications-section,
.advantages-section {
  padding: 4rem 2rem;
  text-align: center;
}

.intro-section h2,
.applications-section h2,
.advantages-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
}

.renders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.render-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.render-image:hover {
  transform: scale(1.05);
}

.applications-section {
  background-color: #e9ecef;
}

.side-scroll-container {
  display: flex;
  overflow-x: auto;
  padding-bottom: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: #007bff #e9ecef;
}

.side-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.side-scroll-container::-webkit-scrollbar-track {
  background: #e9ecef;
}

.side-scroll-container::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 10px;
}

.side-scroll-item {
  flex: 0 0 300px;
  margin-right: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
}

.side-scroll-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.scroll-item-caption {
  padding: 1rem;
}

.scroll-item-caption h3 {
  margin-bottom: 0.5rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.advantage-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.advantage-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Animations */
@keyframes-fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

@keyframes-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}
</style>
