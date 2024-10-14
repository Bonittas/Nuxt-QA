import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    nameError: '',
    surnameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    errorMessage: '',
  }),
  actions: {
    setName(value) {
      this.name = value;
    },
    setSurname(value) {
      this.surname = value;
    },
    setEmail(value) {
      this.email = value;
    },
    setPassword(value) {
      this.password = value;
    },
    setConfirmPassword(value) {
      this.confirmPassword = value;
    },

    validateName() {
      this.nameError = this.name ? '' : 'Name is required';
    },
    validateSurname() {
      this.surnameError = this.surname ? '' : 'Surname is required';
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailPattern.test(this.email) ? '' : 'Invalid email';
    },
    validatePassword() {
      this.passwordError = this.password.length >= 6 ? '' : 'Password must be at least 6 characters';
    },
    validateConfirmPassword() {
      this.confirmPasswordError = this.password === this.confirmPassword ? '' : 'Passwords do not match';
    },

    handleEnter(router) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === this.email);

      if (userExists) {
        router.push('/welcome');
      } else {
        this.errorMessage = 'Email is not registered. Please sign up.';
        router.push('/signup');
      }
    },
  },
});