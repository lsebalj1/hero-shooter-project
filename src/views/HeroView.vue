<template>
  <div class="hero-list">
    <div class="hero-card" v-for="hero in heroes" :key="hero.id">
      <img :src="hero.image" :alt="hero.name" class="hero-image" />
      <div class="hero-info">
        <h2 class="hero-name">{{ hero.name }}</h2>
        <AbilityList :abilities="hero.abilities" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AbilityList from '../components/AbilityList.vue'
import { Ability, FireballAbility, ShieldAbility } from '../models/Ability.js'

const heroes = ref([
  {
    id: 1,
    name: 'Shadowblade',
    image: 'https://via.placeholder.com/150x150?text=Shadowblade',
    abilities: [
      new Ability('Stealth', 'Become invisible for a short time.'),
      new Ability('Backstab', 'Deal extra damage from behind.'),
      new Ability('Smoke Bomb', 'Create a smoke cloud to escape.')
    ]
  },
  {
    id: 2,
    name: 'Pyro',
    image: 'https://via.placeholder.com/150x150?text=Pyro',
    abilities: [
      new FireballAbility(),
      new Ability('Flame Wall', 'Create a wall of fire.'),
      new Ability('Inferno', 'Engulf area in flames.')
    ]
  },
  {
    id: 3,
    name: 'Guardian',
    image: 'https://via.placeholder.com/150x150?text=Guardian',
    abilities: [
      new ShieldAbility(),
      new Ability('Taunt', 'Force enemies to attack you.'),
      new Ability('Heal', 'Restore health to allies.')
    ]
  },
  {
    id: 4,
    name: 'Stormcaller',
    image: 'https://via.placeholder.com/150x150?text=Stormcaller',
    abilities: [
      new Ability('Lightning Bolt', 'Strike enemies with lightning.'),
      new Ability('Thunderclap', 'Stun nearby enemies.'),
      new Ability('Wind Rush', 'Increase movement speed.')
    ]
  },
  {
    id: 5,
    name: 'Frostbite',
    image: 'https://via.placeholder.com/150x150?text=Frostbite',
    abilities: [
      new Ability('Ice Shard', 'Throw a shard of ice.'),
      new Ability('Freeze', 'Freeze an enemy in place.'),
      new Ability('Blizzard', 'Summon a freezing storm.')
    ]
  }
])
</script>

<style scoped>
.hero-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.hero-card {
  background-color: #222;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  color: #fff;
}

.hero-image {
  width: 100%;
  border-radius: 8px;
}

.hero-info {
  margin-top: 1rem;
}

.hero-name {
  margin-bottom: 0.5rem;
}
</style>