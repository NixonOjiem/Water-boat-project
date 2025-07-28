<template lang="">
  <div class="bg-[#DBEFFD] py-8"> <div class="container mx-auto px-4">

      <div class="flex flex-col lg:flex-row lg:space-x-8 items-center">
        <section class="lg:w-1/2 mb-8 lg:mb-0">
          <p class="text-gray-700 text-lg leading-relaxed">
            At Yieh boats we try to ensure that we operate in a sustainable
            and responsible way for the planet.
            Our boats ensure that the African lakes are not polluted by
            emissions and oil spills, caring for the <b>life under water </b>and at
            the same time improving <b>the life on land at the same time.</b>
            Ensuring that the millions of people living around the lake, and
            whose livelihoods depend on the lake, can have <b>access to
            clean water,</b> and they can fish on the lake. And in turn fishermen
            have <b>decent work </b>that is sustainable making sure there is <b>no
            hunger</b> and <b>poverty is reduced.</b> With reduced pollution people
            around the lake will live with <b>good-health and well-being.</b>
            Creating a truly <b>sustainable community</b> of people living around
            the lake, <b>where inequalities are reduced</b> and <b>peace and justice
            thrives.</b>
            Our solar boats do not require fossil fuels and ensure access to
            <b>affordable and a clean form of energy</b> for transport. We're
            looking to roll this model out all over Africa where the conditions
            are right. <b>Creating a new industry that is innovative</b> and forms
            part of a new transportation <b>infrastructure.</b> To build our boats we
            are going to use <b>quality education</b> to create the best boat
            builders, we will educate women and men ensuring <b>gender
            equality.</b> Our boat builders will have decent jobs with <b>climate
            action</b> and <b>responsible production</b> at its core.
            To make these bold plans a reality we need to form <b>partnerships</b> with communities, governments, NGO's, companies, etc.
          </p>
        </section>

        <section class="lg:w-1/2">
          <h2 class="text-3xl font-bold text-center mb-8 text-gray-800" style="font-size: 45px;">{{ title }}</h2>
          <img src="/images/Screenshot 2025-07-27 155343.png" alt="Sustainability Image"
            class="w-full h-auto object-cover rounded-xl shadow-lg" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SustainabilityComponent',
  props: {
    title: {
      type: String,
      default: 'Sustainability'
    }
  }
}
</script>

<style lang="">
/* No specific styles needed here for the layout with Tailwind CSS */
</style>
