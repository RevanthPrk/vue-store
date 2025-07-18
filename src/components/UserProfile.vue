<template>
  <div v-if="user">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

// await new Promise(resolve => setTimeout(resolve, 2000))
// user.value = {
//   name: 'John Doe',
//   email: 'john@example.com'
// }
onMounted(async () => {

  // Simulate delay like fetching data
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Set the user data
  user.value = {
    name: 'John Doe',
    email: 'john@example.com'
  }
defineEmits('isLoading', false)
})
</script>
