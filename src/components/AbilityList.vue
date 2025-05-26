<template>
  <table class="abilities-table">
    <thead>
      <tr>
        <th>Ability</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ability, index) in abilities" :key="index">
        <td>{{ ability.name }}</td>
        <td>{{ ability.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
/* global defineProps */
defineProps({
  abilities: {
    type: Array,
    required: true
  }
})
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
</style>
