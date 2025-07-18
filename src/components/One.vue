<!-- components/One.vue -->
<template>
  <div>
    <h2>Tab One</h2>
    <input v-model="message" ref="msge" placeholder="Type something..." />
  </div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'

const msgeRef = useTemplateRef('msge')

onMounted(()=>{
    msgeRef.value.focus()
})
const message = ref('')
</script>
