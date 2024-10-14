import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    errorMessage: ''
  }),
  actions: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errorMessage = !emailPattern.test(this.email) ? 'Invalid email address' : '';
    },
    setEmail(email) {
      this.email = email;
    },
    clearError() {
      this.errorMessage = '';
    },
    handleEnter() {
      if (!this.errorMessage && this.email) {

        this.router.push('/signup');
      } else {
        this.errorMessage = 'Please enter a valid email address';
      }
    }
  }
});