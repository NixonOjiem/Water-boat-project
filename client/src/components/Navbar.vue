<template lang="">


        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="logo-nav">
            <a href="#" class="text-2xl font-bold text-white">Your Logo</a>
          </div>

          <nav class="hidden md:flex flex-grow justify-center">
            <ul class="flex space-x-10 bg-white p-6 rounded-[2.75rem] shadow-md">
              <li><a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Why Us</a></li>
              <li><a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Our Services</a></li>
              <li><a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Our Experts</a></li>
              <li><a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Our Cases</a></li>
            </ul>
          </nav>

          <div class="other-links flex items-center space-x-4 relative">
            <div
              class="get-touch flex items-center space-x-2 cursor-pointer bg-white p-4 rounded-[2.75rem] shadow-md text-gray-700 hover:text-blue-600">
              <ion-icon name="mail-outline" class="text-xl"></ion-icon>
              <span>Get in Touch</span>
            </div>

            <div class="menu md:hidden cursor-pointer text-white ml-4" @click="toggleMobileMenu">
              <ion-icon name="menu-outline" class="text-4xl"></ion-icon>
            </div>

            <div :class="[
                'desktop-menu-wrapper relative transition-all duration-300 ease-in-out',
                { 'teardrop-active bg-white rounded-[2.75rem] shadow-md': isDesktopMenuOpen }
              ]">
              <div :class="[
                  'desktop-menu-button hidden md:flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-white',
                  { 'p-4': isDesktopMenuOpen }
                ]" @click="toggleDesktopMenu">
                <ion-icon name="menu-outline" class="text-2xl transition-transform duration-300 ease-in-out"></ion-icon>
              </div>

              <transition name="fade">
                <div v-if="isDesktopMenuOpen" class="absolute right-0 top-full bg-white p-4 rounded-lg shadow-lg">
                  <ul class="flex flex-col space-y-2 text-gray-700">
                    <li><a href="#" class="hover:text-blue-600" @click="toggleDesktopMenu">Dashboard</a></li>
                    <li><a href="#" class="hover:text-blue-600" @click="toggleDesktopMenu">Settings</a></li>
                    <li><a href="#" class="hover:text-blue-600" @click="toggleDesktopMenu">Logout</a></li>
                  </ul>
                </div>
              </transition>
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
