<template>
  <div class="p-4 border rounded shadow mb-2">
    <h2 class="text-xl font-semibold">{{ cow.name }}</h2>
    <p>🌡️ Temperature: {{ cow.temperature }}°C</p>
    <p>🏃‍♂️ Activity: {{ cow.activity }}</p>
    <p>🩺 Status: <strong :class="statusClass">{{ cow.status }}</strong></p>
    <button @click="markStatus" class="text-red-600 mt-2 underline">{{ buttonText }}</button>

  </div>
</template>

<script setup>
// import { useCowStore } from '../stores/cowStore'
import { useCowStore } from '@/stores/cow'
import { computed } from 'vue'

const props = defineProps(['cow'])
const store = useCowStore()

const buttonText = computed(() => {
    return props.cow.status == 'Healthy' ? 'Mark Sick' : 'Mark Health'
})

function markStatus() {
    if(props.cow.status == 'Sick') {
store.updateCowStatus(props.cow.id, 'Healthy')
    } else {
        store.updateCowStatus(props.cow.id, 'Sick')
    }
  
}

const statusClass = computed(() => ({
  'text-green-600': props.cow.status === 'Healthy',
  'text-red-600': props.cow.status === 'Sick'
}))
</script>
