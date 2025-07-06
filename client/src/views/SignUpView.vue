<template lang="">
  <div>
    <div class="signup-view">
      <SignUpComponent />
  </div>
  </div>
</template>

<script>

import SignUpComponent from '@/components/SignUpComponent.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Initialize AOS for animations
AOS.init();

export default {
  components: {
    SignUpComponent
  },
  methods: {
    // You can add methods here if needed
  },
  data() {
    const a = 1,
      b = 2;
    console.log(a + b); // Example of a simple operation
    return {
      a: a,
      // You can define data properties here if needed
    };
  }
}
</script>

<style scoped>
.signup-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.signup-view::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/20250702_103943.png');
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  /* 👈 Adjust the blur here */
  z-index: 0;
}

.signup-view>* {
  position: relative;
  z-index: 1;
  /* Ensure your content stays on top */
}
</style>
