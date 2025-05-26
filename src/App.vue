<template>
  <div>
    <Navbar />
    <RouterView />
    
  </div>
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue';
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: #f5f5f5;
}
</style>
