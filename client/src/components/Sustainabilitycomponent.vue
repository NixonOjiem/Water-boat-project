<template lang="">
  <div class="bg-[#DBEFFD] py-8"> <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">{{ title }}</h2>

      <div class="flex flex-col lg:flex-row lg:space-x-8 items-center">
        <section class="lg:w-1/2 mb-8 lg:mb-0">
          <p class="text-gray-700 text-lg leading-relaxed">
            At Yieh boats we try to ensure that we operate in a sustainable
            and responsible way for the planet.
            Our boats ensure that the African lakes are not polluted by
            emissions and oil spills, caring for the life under water and at
            the same time improving the life on land at the same time.
            Ensuring that the millions of people living around the lake, and
            whose livelihoods depend on the lake, can have access to
            clean water, and they can fish on the lake. And in turn fishermen
            have decent work that is sustainable making sure there is no
            hunger and poverty is reduced. With reduced pollution people
            around the lake will live with good-health and well-being.
            Creating a truly sustainable community of people living around
            the lake, where inequalities are reduced and peace and justice
            thrives.
            Our solar boats do not require fossil fuels and ensure access to
            affordable and a clean form of energy for transport. We're
            looking to roll this model out all over Africa where the conditions
            are right. Creating a new industry that is innovative and forms
            part of a new transportation infrastructure. To build our boats we
            are going to use quality education to create the best boat
            builders, we will educate women and men ensuring gender
            equality. Our boat builders will have decent jobs with climate
            action and responsible production at its core.
            To make these bold plans a reality we need to form partnerships with communities, governments, NGO's, companies, etc.
          </p>
        </section>

        <section class="lg:w-1/2">
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
