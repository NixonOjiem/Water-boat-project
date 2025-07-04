import { reactive } from 'vue'

export const authStore = reactive({
  isAuthenticated: !!localStorage.getItem('userToken'),

  login(token) {
    localStorage.setItem('userToken', token)
    this.isAuthenticated = true
  },

  logout() {
    localStorage.removeItem('userToken')
    this.isAuthenticated = false
  },
})
