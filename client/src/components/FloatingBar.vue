<template lang="">
  <!-- Floating Div Container -->
    <div class="floating-container flex justify-center p-4">
        <div class="floating-content bg-white shadow-lg rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-around w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-6 border border-gray-200">
            <!-- Section 1: Book a Trip -->
            <div class="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl w-full md:w-1/2 transition-all duration-300 hover:shadow-md hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-600 mb-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Book a Trip</h2>
                <p class="text-gray-600 mb-4">
                    Embark on an unforgettable journey. Choose from our curated trips or customize your own adventure.
                </p>
                <button class="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors duration-300">
                    Explore Trips
                </button>
            </div>

            <!-- Section 2: Own a Custom Boat -->
            <div class="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl w-full md:w-1/2 transition-all duration-300 hover:shadow-md hover:bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-600 mb-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 10.5a.75.75 0 01.75-.75h.008v.008H9.75a.75.75 0 01-.75.75zM12 10.5a.75.75 0 01.75-.75h.008v.008H12.75a.75.75 0 01-.75.75zM15 10.5a.75.75 0 01.75-.75h.008v.008H15.75a.75.75 0 01-.75.75z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12c0 2.75 1.75 5 4 5s4-2.25 4-5-1.75-5-4-5-4 2.25-4 5z" />
                </svg>
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Own a Custom Boat</h2>
                <p class="text-gray-600 mb-4">
                    Design your dream boat with our experts. From concept to launch, we build it just for you.
                </p>
                <button class="bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300">
                    Design Your Boat
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
