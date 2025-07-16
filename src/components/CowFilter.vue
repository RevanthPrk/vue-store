<template>
  <div class="mb-4">
    <label>Filter:</label>
    <select v-model="selected" @change="applyFilter">
      <option>All</option>
      <option>Healthy</option>
      <option>Sick</option>
    </select>
  </div>
</template>

<script setup>
// import { useCowStore } from '../stores/cowStore'
import { useCowStore } from '@/stores/cow'
import { ref } from 'vue'

const store = useCowStore()
const selected = ref(store.filterStatus)

function applyFilter() {
  store.setFilter(selected.value)
}
</script>
