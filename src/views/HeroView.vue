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

const heroes = ref([
    {
        id: 1,
        name: 'Shadowblade',
        image: 'https://via.placeholder.com/150x150?text=Shadowblade',
        abilities: [
            { name: 'Stealth', description: 'Become invisible for a short time.' },
            { name: 'Backstab', description: 'Deal extra damage from behind.' },
            { name: 'Smoke Bomb', description: 'Create a smoke cloud to escape.' }
        ]
    },
    {
        id: 2,
        name: 'Pyro',
        image: 'https://via.placeholder.com/150x150?text=Pyro',
        abilities: [
            { name: 'Fireball', description: 'Throw a ball of fire at enemies.' },
            { name: 'Flame Wall', description: 'Create a wall of fire.' },
            { name: 'Inferno', description: 'Engulf area in flames.' }
        ]
    },
    {
        id: 3,
        name: 'Guardian',
        image: 'https://via.placeholder.com/150x150?text=Guardian',
        abilities: [
            { name: 'Shield', description: 'Block incoming damage.' },
            { name: 'Taunt', description: 'Force enemies to attack you.' },
            { name: 'Heal', description: 'Restore health to allies.' }
        ]
    },
    {
        id: 4,
        name: 'Stormcaller',
        image: 'https://via.placeholder.com/150x150?text=Stormcaller',
        abilities: [
            { name: 'Lightning Bolt', description: 'Strike enemies with lightning.' },
            { name: 'Thunderclap', description: 'Stun nearby enemies.' },
            { name: 'Wind Rush', description: 'Increase movement speed.' }
        ]
    },
    {
        id: 5,
        name: 'Frostbite',
        image: 'https://via.placeholder.com/150x150?text=Frostbite',
        abilities: [
            { name: 'Ice Shard', description: 'Throw a shard of ice.' },
            { name: 'Freeze', description: 'Freeze an enemy in place.' },
            { name: 'Blizzard', description: 'Summon a freezing storm.' }
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
