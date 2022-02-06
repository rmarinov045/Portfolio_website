import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    cities: []
  },
  mutations: {
    UPDATE_TASKS(state, payload) {
      state.tasks = payload
    },
    UPDATE_CITIES(state, payload) {
      state.cities = payload
    }
  },
  actions: {
    saveTask: (context, payload) => {
      const tasks = context.state.tasks
      tasks.push(payload)
      context.commit('UPDATE_TASKS', tasks)
    },
    saveCity: (context, payload) => {
      const cities = context.state.cities
      cities.push(payload)
      context.commit('UPDATE_CITIES', cities)
    }
  },
  getters: {
    getTasks: (state) => {
      return state.tasks
    },
    getCity: (state) => {
      return state.cities
    }
  },
  modules: {
  }
})
