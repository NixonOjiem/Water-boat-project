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

              <!-- GitHub button (Placeholder - not implemented in backend) -->
              <button
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div class="bg-white p-1 rounded-full">
                  <svg class="w-6" viewBox="0 0 32 32">
                    <path fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                  </svg>
                </div>
                <span class="ml-4">
                  {{ isSigningUp ? 'Sign Up' : 'Sign In' }} with GitHub
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
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat rectangular-bg"
          style="background-image: url('/images/4970051.jpg');">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
      // IMPORTANT: Replace with your actual Google Client ID for the frontend
      // This is different from the backend one for token verification.
      GOOGLE_CLIENT_ID_FRONTEND: 'YOUR_GOOGLE_CLIENT_ID_FOR_FRONTEND_WEB_APP',
    };
  },
  mounted() {
    // Initialize Google Sign-In when the component mounts
    this.initGoogleSignIn();
  },
  methods: {
    // Toggles between Sign In and Sign Up mode
    toggleAuthMode() {
      this.isSigningUp = !this.isSigningUp;
      // Clear all messages and inputs when switching modes
      this.clearMessagesAndInputs(); // This clears both inputs and messages
    },

    // Clears all form inputs and messages
    clearMessagesAndInputs() {
      this.username = '';
      this.email = '';
      this.phone = '';
      this.password = '';
      this.clearMessagesAndErrors(); // Call the new method to clear only messages/errors
    },

    // New method: Clears only messages and errors, leaves input fields' data properties intact
    clearMessagesAndErrors() {
      this.loginMessage = '';
      this.loginError = '';
      this.registerMessage = '';
      this.registerError = '';
      this.googleAuthMessage = '';
      this.googleAuthError = '';
    },

    // Handles form submission (either login or registration)
    async handleSubmit() {
      if (this.isSigningUp) {
        await this.handleRegister();
      } else {
        await this.handleLogin();
      }
    },

    // Handles manual login
    async handleLogin() {
      this.clearMessagesAndErrors(); // Clear previous messages/errors

      // Client-side validation for login
      if (!this.email || !this.password) {
        this.loginError = 'Email and password are required for login.';
        return; // Stop execution if validation fails
      }

      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          email: this.email,
          password: this.password,
        });
        this.loginMessage = response.data.message;
        localStorage.setItem('userToken', response.data.token);
        console.log('Login successful, token:', response.data.token);
        // TODO: Redirect user or update UI state after successful login
      } catch (error) {
        this.loginError = error.response?.data?.message || 'Login failed. Please try again.';
        console.error('Login error:', error);
      }
    },

    // Handles manual registration
    async handleRegister() {
      this.clearMessagesAndErrors(); // Clear previous messages/errors

      // Debugging: Log the values before validation
      console.log('Attempting to register with:', {
        username: this.username,
        email: this.email,
        password: this.password
      });

      // Client-side validation for registration
      if (!this.username || !this.email || !this.password) {
        this.registerError = 'Username, email, and password are required for registration.';
        console.error('Client-side validation failed: One or more fields are empty.');
        return; // Stop execution if validation fails
      }

      try {
        const response = await axios.post('http://localhost:5000/auth/register', {
          username: this.username,
          email: this.email,
          phone: this.phone || null, // Send null if phone is empty
          password: this.password,
        });
        this.registerMessage = response.data.message;
        console.log('Registration successful, user ID:', response.data.userId);
        // Optionally, automatically switch to sign-in mode or log in the user
        this.isSigningUp = false; // Switch to sign-in after successful registration
        this.email = this.email; // Pre-fill email for login
        this.password = ''; // Clear password
      } catch (error) {
        this.registerError = error.response?.data?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    },

    // Initializes Google Sign-In button
    initGoogleSignIn() {
      // Ensure the Google API script is loaded before initializing
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.initialize({
          client_id: this.GOOGLE_CLIENT_ID_FRONTEND, // Your frontend Google Client ID
          callback: this.handleGoogleCredentialResponse,
        });

        // Render the Google Sign-In button into the div with ref="googleSignInButton"
        // The `renderButton` function will replace the content of the div with the actual Google button
        window.google.accounts.id.renderButton(
          this.$refs.googleSignInButton,
          { theme: 'outline', size: 'large', text: this.isSigningUp ? 'signup_with' : 'signin_with' } // Customization
        );
      } else {
        console.warn('Google Identity Services script not loaded yet. Retrying in 1 second...');
        setTimeout(this.initGoogleSignIn, 1000); // Retry if script not loaded
      }
    },

    // Callback for Google Sign-In after user interacts with the button
    async handleGoogleCredentialResponse(response) {
      this.clearMessagesAndErrors(); // Clear previous messages/errors
      if (response.credential) {
        try {
          // Send the ID token to your backend for verification and user management
          const backendResponse = await axios.post('http://localhost:5000/auth/google', {
            token: response.credential, // This is the ID token provided by Google
          });
          this.googleAuthMessage = backendResponse.data.message;
          localStorage.setItem('userToken', backendResponse.data.token);
          console.log('Google auth successful, user:', backendResponse.data.user);
          // TODO: Redirect user or update UI state after successful Google login/signup
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
  watch: {
    // Watch for changes in isSigningUp to re-render the Google button text
    isSigningUp() {
      // Re-initialize the Google button to update its text (Sign In/Sign Up)
      this.initGoogleSignIn();
    }
  }
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
