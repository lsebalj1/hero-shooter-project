<template>
  <nav class="navbar">
    <RouterLink to="/" class="nav-link" active-class="active-link">Home</RouterLink>
    <RouterLink to="/heroes" class="nav-link" active-class="active-link">Heroes</RouterLink>
    <RouterLink to="/register" class="nav-link" active-class="active-link">Register</RouterLink>
    <RouterLink to="/login" class="nav-link" active-class="active-link">Login</RouterLink>
    <span class="nav-indicator" :style="indicatorStyle"></span>
  </nav>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const indicatorStyle = ref({})

const updateIndicator = () => {
  nextTick(() => {
    const active = document.querySelector('.active-link')
    if (active) {
      const rect = active.getBoundingClientRect()
      const parentRect = active.parentElement.getBoundingClientRect()
      indicatorStyle.value = {
        left: `${rect.left - parentRect.left}px`,
        width: `${rect.width}px`,
        opacity: 1
      }
    } else {
      indicatorStyle.value = { opacity: 0 }
    }
  })
}

watch(() => route.path, updateIndicator, { immediate: true })
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #0a2342 0%, #274690 100%);
  padding: 15px 0;
  display: flex;
  gap: 40px;
  justify-content: center;
  position: relative;
}

.nav-link {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 8px 18px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  position: relative;
  z-index: 1;
}

.nav-link:hover {
  background: #ffd700;
  color: #274690;
  transform: translateY(-2px) scale(1.07);
  box-shadow: 0 2px 8px rgba(39,70,144,0.15);
}

.active-link {
  background: #ffd700;
  color: #274690;
  box-shadow: 0 2px 12px rgba(255,215,0,0.15);
}

.nav-indicator {
  position: absolute;
  bottom: 6px;
  height: 4px;
  background: linear-gradient(90deg, #ffd700 0%, #274690 100%);
  border-radius: 2px;
  transition: left 0.3s cubic-bezier(.4,2,.6,1), width 0.3s cubic-bezier(.4,2,.6,1), opacity 0.2s;
  z-index: 0;
  opacity: 0;
}
</style>
