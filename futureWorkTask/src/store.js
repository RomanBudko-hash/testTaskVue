import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      inputValue: '',
      profileList: []
    }
  },
  mutations: {
    setInputValue (state, payload) {
        state.inputValue = payload
    },
    setProfileList (state, payload) {
      state.profileList = payload
    }
  },
  actions: {
      async fetchProfileList({commit}, payload) {
        try{
          if (payload) {
            const valuesPayload = payload.split(',').map(item => item.trim()).filter(item => item !== "")

            const response = await fetch(`https://jsonplaceholder.typicode.com/users?${valuesPayload.map((val) =>  Number.isNaN(+val) ? `username=${val}` : `id=${val}`).join('&')}`);

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

            const json = await response.json();
            console.log(json) // TODO to remove this, just for testing
            commit('setProfileList', json);
          } else {
            commit('setProfileList', []);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  }
})

export default store;