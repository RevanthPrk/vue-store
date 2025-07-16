<template>
  <div class="p-6">
    <h1 class="text-2xl mb-4">🐄 Cow Health Dashboard</h1>

    <CowFilter />

    <p class="mb-4 text-sm text-gray-600">Total Healthy Cows: {{ store.healthyCount }}</p>

    <CowCard
      v-for="cow in store.filteredCows"
      :key="cow.id"
      :cow="cow"
    />
  </div>
</template>

<script setup>
import CowCard from '../components/CowCard.vue'
import CowFilter from '../components/CowFilter.vue'
import { useCowStore } from '@/stores/cow'
// import { useCowStore } from '../stores/cowStore'

const store = useCowStore()
</script>
