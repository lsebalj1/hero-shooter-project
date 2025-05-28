<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" placeholder="Email" />
      <div v-if="emailError" class="error">{{ emailError }}</div>

      <input v-model="username" placeholder="Username" />
      <div v-if="usernameError" class="error">{{ usernameError }}</div>

      <input v-model="password" type="password" placeholder="Password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const email = ref('')
const username = ref('')
const password = ref('')
const emailError = ref('')
const usernameError = ref('')
const passwordError = ref('')
const router = useRouter()
const userStore = useUserStore()

function validateEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
}

function handleRegister() {
  emailError.value = ''
  usernameError.value = ''
  passwordError.value = ''

  const userVal = username.value.trim().toLowerCase()

  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.'
    return
  }

  if (!userVal) {
    usernameError.value = 'Username cannot be empty.'
    return
  }

  // ✅ Sigurnosna provjera da users array postoji
  if (!Array.isArray(userStore.users)) {
    userStore.users = []
  }

  const isTaken = userStore.users.find(u => u.username === userVal)

  if (isTaken) {
    usernameError.value = 'Username is already taken.'
    return
  }

  if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters long.'
    return
  }

  // Registriraj korisnika (sa spremanjem u store)
  userStore.register({
    username: userVal,
    email: email.value,
    password: password.value
  })

  // Preusmjeri na home
  router.push('/home')
}
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #0f172a;
  border-radius: 10px;
  text-align: center;
  color: #facc15;
  box-shadow: 0 0 20px #1e3a8a88;
}

input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 90%;
  border: 2px solid #1e3a8a;
  border-radius: 5px;
  background-color: #1e293b;
  color: #facc15;
  font-size: 1em;
}

input::placeholder {
  color: #94a3b8;
}

button {
  padding: 10px 20px;
  background-color: #1e3a8a;
  color: #facc15;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3b82f6;
  color: #fff;
}

.error {
  color: #f87171;
  font-size: 0.9em;
  margin-bottom: 5px;
}
</style>
