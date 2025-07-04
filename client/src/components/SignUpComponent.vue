<template>
  <div class="min-h-screen flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            {{ isSigningUp ? 'Sign up' : 'Sign in' }}
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">
              <!-- Google Sign-In Button -->
              <button ref="googleSignInButton"
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4" />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853" />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04" />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335" />
                  </svg>
                </div>
                <span class="ml-4">
                  {{ isSigningUp ? 'Sign Up' : 'Sign In' }} with Google
                </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or {{ isSigningUp ? 'sign up' : 'sign in' }} with e-mail
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <!-- Username input for Sign Up -->
              <input v-if="isSigningUp" v-model="username"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
                type="text" placeholder="Username" />

              <input v-model="email"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email" placeholder="Email" />

              <!-- Phone input for Sign Up -->
              <input v-if="isSigningUp" v-model="phone"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="tel" placeholder="Phone (Optional)" />

              <input v-model="password"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password" placeholder="Password" />

              <!-- Display messages/errors -->
              <p v-if="loginMessage || registerMessage || googleAuthMessage"
                class="mt-4 text-sm text-green-600 text-center">
                {{ loginMessage || registerMessage || googleAuthMessage }}
              </p>
              <p v-if="loginError || registerError || googleAuthError" class="mt-4 text-sm text-red-600 text-center">
                {{ loginError || registerError || googleAuthError }}
              </p>

              <button @click="handleSubmit"
                :disabled="isSigningUp ? (!username || !email || !password) : (!email || !password)"
                :class="{ 'opacity-50 cursor-not-allowed': isSigningUp ? (!username || !email || !password) : (!email || !password) }"
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                  {{ isSigningUp ? 'Sign Up' : 'Sign In' }}
                </span>
              </button>
              <p class="mt-6 text-xs text-gray-600 text-center">
                <a href="#" @click.prevent="toggleAuthMode" class="border-b border-gray-500 border-dotted">
                  {{ isSigningUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 hidden lg:flex bg-contain bg-no-repeat bg-cover"
        style="background-image: url('/images/VectorImage.jpg');">
        <!-- <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat rectangular-bg"
          style="background-image: url('/images/VectorImage.jpg');">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
const apiRoute = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const router = useRouter();


export default {
  data() {
    return {
      isSigningUp: false,
      username: '',
      email: '',
      phone: '',
      password: '',
      loginMessage: '',
      loginError: '',
      registerMessage: '',
      registerError: '',
      googleAuthMessage: '',
      googleAuthError: '',
      GOOGLE_CLIENT_ID_FRONTEND: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
      isGoogleScriptLoaded: false // Add a flag to track script loading
    };
  },
  mounted() {
    // Load the Google script dynamically
    this.loadGoogleSignInScript();
  },
  methods: {
    // Toggles between Sign In and Sign Up mode
    toggleAuthMode() {
      this.isSigningUp = !this.isSigningUp;
      this.clearMessagesAndInputs();
    },

    // Clears all form inputs and messages
    clearMessagesAndInputs() {
      this.username = '';
      this.email = '';
      this.phone = '';
      this.password = '';
      this.clearMessagesAndErrors();
    },

    // Clears only messages and errors
    clearMessagesAndErrors() {
      this.loginMessage = '';
      this.loginError = '';
      this.registerMessage = '';
      this.registerError = '';
      this.googleAuthMessage = '';
      this.googleAuthError = '';
    },

    // Handles form submission (login or registration)
    async handleSubmit() {
      if (this.isSigningUp) {
        await this.handleRegister();
      } else {
        await this.handleLogin();
      }
    },

    // Handles manual login
    async handleLogin() {
      this.clearMessagesAndErrors();
      if (!this.email || !this.password) {
        this.loginError = 'Email and password are required for login.';
        return;
      }
      try {
        const response = await axios.post(`${apiRoute}/auth/login`, {
          email: this.email,
          password: this.password,
        });
        this.loginMessage = response.data.message;
        localStorage.setItem('userToken', response.data.token);
        // console.log('Login successful, Token:', response.data.token,);
        this.$router.push('/');
      } catch (error) {
        this.loginError = error.response?.data?.message || 'Login failed. Please try again.';
        console.error('Login error:', error);
      }
    },

    // Handles manual registration
    async handleRegister() {
      this.clearMessagesAndErrors();
      if (!this.username || !this.email || !this.password) {
        this.registerError = 'Username, email, and password are required.';
        return;
      }
      try {
        const response = await axios.post(`${apiRoute}/auth/register`, {
          username: this.username,
          email: this.email,
          phone: this.phone || null,
          password: this.password,
        });
        this.registerMessage = response.data.message;
        console.log('Registration successful, user ID:', response.data.userId);
        this.isSigningUp = false;
        this.email = this.email;
        this.password = '';
      } catch (error) {
        this.registerError = error.response?.data?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    },

    // **NEW**: Method to load the script
    loadGoogleSignInScript() {
      if (this.isGoogleScriptLoaded || document.getElementById('google-signin-script')) {
        this.initGoogleSignIn();
        return;
      }
      const script = document.createElement('script');
      script.id = 'google-signin-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.isGoogleScriptLoaded = true;
        this.initGoogleSignIn();
      };
      script.onerror = () => {
        console.error('Google Identity Services script failed to load.');
        this.googleAuthError = 'Could not load Google Sign-In. Please try again later.';
      }
      document.head.appendChild(script);
    },

    // Initializes Google Sign-In button (now called by script's onload)
    initGoogleSignIn() {
      if (!window.google || !this.$refs.googleSignInButton) {
        // If the script isn't ready or the component unmounted, do nothing.
        return;
      }

      window.google.accounts.id.initialize({
        client_id: this.GOOGLE_CLIENT_ID_FRONTEND,
        callback: this.handleGoogleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        this.$refs.googleSignInButton,
        // The text can be generic. The backend will handle if it's a new or existing user.
        { theme: 'outline', size: 'large', text: 'continue_with' }
      );
    },

    // Callback for Google Sign-In
    async handleGoogleCredentialResponse(response) {
      this.clearMessagesAndErrors();
      if (response.credential) {
        try {
          const backendResponse = await axios.post(`${apiRoute}/auth/google`, {
            token: response.credential,
          });
          this.googleAuthMessage = backendResponse.data.message;
          localStorage.setItem('userToken', backendResponse.data.token);
          console.log('Google auth successful, user:', backendResponse.data.user);
          // TODO: Redirect user
        } catch (error) {
          this.googleAuthError = error.response?.data?.message || 'Google authentication failed on backend.';
          console.error('Google auth backend error:', error);
        }
      } else {
        this.googleAuthError = 'Google credential not received.';
        console.error('Google credential not received.');
      }
    },
  },
  // **REMOVED**: The watch block is no longer needed and was causing issues.
  // watch: { ... }
};
</script>

<style scoped>
/* You can add component-specific styles here if needed */
.rectangular-bg {
  /* Ensure the background image covers the entire container */
  background-size: cover;
  background-position: center;
  /* No clip-path needed for a rectangular shape */
  clip-path: none;
  /* Explicitly remove any inherited clip-path */
}
</style>
