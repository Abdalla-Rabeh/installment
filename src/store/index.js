import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
  },
});

