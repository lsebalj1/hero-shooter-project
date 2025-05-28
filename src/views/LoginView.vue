<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user';

const username = ref('');
const password = ref('');
const router = useRouter()
const userStore = useUserStore();

function handleLogin() {
  userStore.login({ username: username.value });
  alert(`Logged in as ${username.value}`);
  router.push('/home');
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #0f172a; /* tamna pozadina */
  border-radius: 10px;
  text-align: center;
  color: #facc15; /* zlatni tekst */
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
</style>