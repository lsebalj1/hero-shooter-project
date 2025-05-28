import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    users: JSON.parse(localStorage.getItem('users')) || []
  }),

  actions: {
    register(userData) {
      if (!Array.isArray(this.users)) this.users = []
      this.users.push(userData)

      this.user = userData
      this.token = this.generateToken()

      this.persist()
    },

    login({ username, password }) {
      if (!Array.isArray(this.users)) this.users = []

      const found = this.users.find(
        u => u.username === username && u.password === password
      )

      if (found) {
        this.user = found
        this.token = this.generateToken()
        this.persist()
        return true
      } else {
        return false
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.persist()
    },

    generateToken() {
      return Math.random().toString(36).substring(2) + Date.now().toString(36)
    },

    persist() {
      localStorage.setItem('user', JSON.stringify(this.user))
      localStorage.setItem('token', this.token || '')
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }
})
