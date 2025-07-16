import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const effectCount = computed(() => doubleCount.value + 1)

  function increment() {
    count.value++
  }
const fName = ref('')
  return { count, doubleCount, increment, effectCount }
})

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2,

//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//     increment() {
//       this.count++
//     }
//   },
// })
