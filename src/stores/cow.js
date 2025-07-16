import { defineStore } from 'pinia'

export const useCowStore = defineStore('cow', {
  state: () => ({
    cows: [
      { id: 1, name: 'Bella', temperature: 39.2, activity: 'High', status: 'Healthy' },
      { id: 2, name: 'Luna', temperature: 41.0, activity: 'Low', status: 'Sick' },
      { id: 3, name: 'Daisy', temperature: 38.6, activity: 'Medium', status: 'Healthy' }
    ],
    filterStatus: 'All',
    cowName: '',
    selectedLevel: '',
    selectedStatus: '',
    temperature: '',
    searchQuery: ''
  }),

  getters: {
    filteredCows(state) {
      if (state.filterStatus === 'All') {
        return state.cows
      } else {
        return state.cows.filter(cow => cow.status === state.filterStatus)
      }
    },

    healthyCount(state) {
      return state.cows.filter(cow => cow.status === 'Healthy').length
    }
  },

  actions: {
    setFilter(status) {
      this.filterStatus = status
    },

    updateCowStatus(id, newStatus) {
      const cow = this.cows.find(c => c.id === id)
      if (cow) cow.status = newStatus
    },

    addCow(cow) {
      this.cows.push(cow)
    },
  }
})
