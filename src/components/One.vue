<template>
  <div>
    <h2>Tab One</h2>
    <input v-focus v-model="message" placeholder="Type something..." />
    <button v-longpress:1500="handleLongPress">
      Hold me for 1.5s
    </button>
    <p v-copy="'Hello Class!'">
      Click me to copy 📋
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'

// const msgeRef = useTemplateRef('msge')

// onMounted(()=>{
//     msgeRef.value.focus()
// })
// const message = ref('')

function handleLongPress() {
  alert('long pressed')
}
</script>
