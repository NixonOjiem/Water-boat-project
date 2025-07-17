<template lang="">
  <div>
    <InvestmentForm @close="$emit('close')" />
    <DesignBoatForm @close="$emit('close')" />
  </div>
</template>
<script>
import InvestmentForm from '@/components/InvestmentForm.vue';
import DesignBoatForm from '@/components/DesignBoatForm.vue';
export default {
  components: {
    InvestmentForm,
    DesignBoatForm,
  },
}
</script>
<style lang="">

</style>
