<template>
  <table class="abilities-table">
    <thead>
      <tr>
        <th>Ability</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ability, index) in abilities" :key="index">
        <td>{{ ability.name }}</td>
        <td>{{ ability.description }}</td>
        <td>
          <button @click="useAbility(ability)">Use</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="message" class="ability-message">{{ message }}</div>
</template>

<script setup>
/* global defineProps */
import { ref } from 'vue'

defineProps({
  abilities: {
    type: Array,
    required: true
  }
})

const message = ref('')
function useAbility(ability) {
  message.value = ability.use ? ability.use() : 'No action implemented!'
}
</script>

<style scoped>
.abilities-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}
.abilities-table th,
.abilities-table td {
  padding: 0.4rem 0.6rem;
  color: #fff;
}
.abilities-table th {
  background: #fff1;
  font-weight: bold;
  text-align: left;
}
.abilities-table tr:nth-child(even) {
  background: #fff1;
}
.abilities-table tr:nth-child(odd) {
  background: #fff2;
}
.ability-message {
  margin-top: 1rem;
  color: #ffd700;
  font-weight: bold;
}
</style>