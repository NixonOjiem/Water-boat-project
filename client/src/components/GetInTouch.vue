<template>
  <div
    class="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e0f2fe] to-[#bfdbfe]">
    <div class="absolute inset-0 overflow-hidden">
      <div class="water-ripple" style="background: rgba(0, 170, 212, 0.1)"></div>
      <div class="water-ripple delay-1" style="background: rgba(0, 170, 212, 0.1)"></div>
      <div class="water-ripple delay-2" style="background: rgba(0, 170, 212, 0.1)"></div>
    </div>

    <div
      class="absolute top-1/2 left-8 transform -translate-y-1/2 -rotate-90 font-extrabold text-7xl text-gray-300 opacity-80 pointer-events-none tracking-widest hidden lg:block">
      CONTACT US
    </div>

    <div class="relative z-10 max-w-4xl w-full bg-white bg-opacity-90 rounded-xl shadow-2xl overflow-hidden md:flex"
      data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      <div class="md:w-1/2 p-8 sm:p-12 bg-[#002255] text-white flex flex-col justify-between">
        <div>
          <h2 class="text-3xl font-extrabold mb-4 text-center md:text-left">
            Get in Touch
          </h2>
          <p class="text-lg mb-8 opacity-90 text-center md:text-left">
            We'd love to hear from you! Whether you have questions about boat
            rides, custom boat building, or anything else, feel free to reach
            out.
          </p>

          <div class="space-y-6">
            <div class="flex items-start transition-transform duration-300 hover:translate-x-2">
              <ion-icon name="location-outline" class="flex-shrink-0 h-7 w-7 mr-4 text-[#00aad4] text-3xl"></ion-icon>
              <div>
                <h4 class="text-xl font-semibold mb-1">Our Location</h4>
                <p class="text-lg opacity-90">Kisumu City, Kenya</p>
              </div>
            </div>

            <div class="flex items-start transition-transform duration-300 hover:translate-x-2">
              <ion-icon name="call-outline" class="flex-shrink-0 h-7 w-7 mr-4 text-[#00aad4] text-3xl"></ion-icon>
              <div>
                <h4 class="text-xl font-semibold mb-1">Call Us</h4>
                <p class="text-lg opacity-90">
                  <a href="tel:+254799424167" class="hover:underline">+254 (0799) 424-167</a>
                </p>
              </div>
            </div>

            <div class="flex items-start transition-transform duration-300 hover:translate-x-2">
              <ion-icon name="mail-outline" class="flex-shrink-0 h-7 w-7 mr-4 text-[#00aad4] text-3xl"></ion-icon>
              <div>
                <h4 class="text-xl font-semibold mb-1">Email Us</h4>
                <p class="text-lg opacity-90">
                  <a href="mailto:info@yiehboats.com" class="hover:underline">info@yiehboats.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center md:text-left">
          <h4 class="text-xl font-semibold mb-3">Follow Us</h4>
          <div class="flex justify-center md:justify-start space-x-6">
            <a href="#"
              class="text-[#00aad4] hover:text-white transition-colors duration-300 transform hover:scale-110">
              <ion-icon name="logo-facebook" class="text-3xl"></ion-icon>
            </a>
            <a href="#"
              class="text-[#00aad4] hover:text-white transition-colors duration-300 transform hover:scale-110">
              <ion-icon name="logo-twitter" class="text-3xl"></ion-icon>
            </a>
            <a href="#"
              class="text-[#00aad4] hover:text-white transition-colors duration-300 transform hover:scale-110">
              <ion-icon name="logo-instagram" class="text-3xl"></ion-icon>
            </a>
            <a href="#"
              class="text-[#00aad4] hover:text-white transition-colors duration-300 transform hover:scale-110">
              <ion-icon name="logo-linkedin" class="text-3xl"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 p-8 sm:p-12">
        <h2 class="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Send Us a Message
        </h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" v-model="form.name" autocomplete="name" required
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00aad4] focus:border-[#00aad4] sm:text-base transition duration-300 ease-in-out transform focus:scale-105"
              placeholder="Your Full Name" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" v-model="form.email" autocomplete="email" required
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00aad4] focus:border-[#00aad4] sm:text-base transition duration-300 ease-in-out transform focus:scale-105"
              placeholder="you@example.com" />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" v-model="form.subject"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00aad4] focus:border-[#00aad4] sm:text-base transition duration-300 ease-in-out transform focus:scale-105"
              placeholder="Regarding boat booking, custom build, etc." />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" v-model="form.message" rows="6" required
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#00aad4] focus:border-[#00aad4] sm:text-base transition duration-300 ease-in-out transform focus:scale-105"
              placeholder="Tell us more about what you need..."></textarea>
          </div>

          <div>
            <button type="submit"
              class="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-[#00aad4] hover:bg-[#002255] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00aad4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <span v-if="!loading">Send Message</span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Sending...
              </span>
            </button>
          </div>

          <div v-if="formStatus.message" :class="[
            'mt-4 p-3 rounded-md text-center',
            formStatus.type === 'success'
              ? 'bg-[#80ff3f]/10 text-[#002255]' // Subtly use green with transparency for background, text in deep blue
              : 'bg-red-100 text-red-800', // Standard red for errors
          ]">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouch",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      loading: false,
      formStatus: {
        message: "",
        type: "", // 'success' or 'error'
      },
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.formStatus = { message: "", type: "" }; // Reset status

      // Simulate API call
      try {
        // Replace with your actual API endpoint for form submission
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            // Simulate success or failure
            const success = Math.random() > 0.2; // 80% chance of success
            if (success) {
              resolve({
                status: 200,
                message: "Your message has been sent successfully!",
              });
            } else {
              throw new Error(
                "Failed to send message. Please try again later."
              );
            }
          }, 2000)
        );

        if (response.status === 200) {
          this.formStatus.message = response.message;
          this.formStatus.type = "success";
          // Optionally clear the form
          this.form.name = "";
          this.form.email = "";
          this.form.subject = "";
          this.form.message = "";
        }
      } catch (error) {
        this.formStatus.message =
          error.message || "An unexpected error occurred.";
        this.formStatus.type = "error";
      } finally {
        this.loading = false;
        // Clear status message after a few seconds
        setTimeout(() => {
          this.formStatus.message = "";
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
/* Pure CSS for a subtle water ripple background effect */
.water-ripple {
  position: absolute;
  border-radius: 50%;
  /* This style will be overridden by inline style for dynamic colors */
  background: rgba(255, 255, 255, 0.1);
  /* Fallback */
  animation: ripple 15s infinite ease-in-out;
  opacity: 0;
}

.water-ripple:nth-child(1) {
  width: 100vmax;
  height: 100vmax;
  top: -50vmax;
  left: -50vmax;
}

.water-ripple:nth-child(2) {
  width: 80vmax;
  height: 80vmax;
  top: 10vmax;
  left: 30vmax;
  animation-delay: 5s;
}

.water-ripple:nth-child(3) {
  width: 120vmax;
  height: 120vmax;
  top: 60vmax;
  left: -10vmax;
  animation-delay: 10s;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  20% {
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
