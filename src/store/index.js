import { defineStore } from 'pinia';

export const useAdminStore = defineStore('adminStore', {
  state: () => ({
    inp: '',
    password: '123',
    log: 0,
    logg: 0,
    log_button: 0,
  }),
  actions: {
    login() {
      if (this.inp === this.password) {
        this.logg = 1;
      } else {
        this.log = 1;
      }
      this.inp = '';
    },
    setLogButton(n) {
      this.log_button = n;
    }
  }
});