<template lang="">
  <div>
    <div class="signup-view">
      <SignUpComponent />
      <p>The value of 'a' is: {{ a }}</p>
  </div>
  </div>
</template>

<script>

import SignUpComponent from '@/components/SignUpComponent.vue'

export default {
components: {
    SignUpComponent
  },
methods: {
    // You can add methods here if needed
  },
data() {
  const a =1,
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
/* .signup-view {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
} */
</style>
