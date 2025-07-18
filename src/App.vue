<!-- <template>
  <Suspense>   
    <template #default>
      <UserProfile />
    </template>
    <template #fallback>
      <div>Loading profile...</div>
    </template>
  </Suspense>

  <UserProfile @isLoading=stopLoading />
</template>

<script setup>
import UserProfile from './components/UserProfile.vue'

const isLoading = ref(true)

function stopLoading(resp) {
  isLoading.value = resp
}
</script> -->


<!-- App.vue -->
<!-- <template>
  <button @click="show = !show">
    Toggle Message
  </button>

  <Transition name="fade">
    <p class="fadeEffect" v-if="show">Hello! I appear with a fade!</p>
  </Transition>

  <Transition name="slide">
    <div v-if="show">Sliding content</div>
  </Transition>

  <Transition name="zoom">
    <div v-if="show">Zooming!</div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

.zoom-enter-to,
.zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style> -->

<!-- App.vue -->
<template>
  <div class="tabs">
    <button class="tab" :class="current === 'One' ? 'active' : ''" @click="current = 'One'">Tab One</button>
    <button class="tab" :class="current === 'Two' ? 'active' : ''" @click="current = 'Two'">Tab Two</button>
  </div>
  <KeepAlive>
    <component :is="currentComponent" />
  </KeepAlive>
</template>

<script setup>
import { ref, computed } from 'vue'
import One from './components/One.vue'
import Two from './components/Two.vue'

const current = ref('One')

const currentComponent = computed(() => {
  return current.value === 'One' ? One : Two
})
</script>

<style scoped>
.tabs {
  display: flex;
  border-bottom: 2px solid #ccc;
  margin-bottom: 1rem;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-weight: 500;
  color: #555;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab:hover {
  color: #fff;
}

.tab.active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>

