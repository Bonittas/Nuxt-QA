<template>
    <main class="background">
      <div class="container">
        <div class="topBox">
          <i class="fa-solid fa-arrow-left text-white/50 transition-all g"></i>
          <span @click="goToLogin">Back to Log in</span>
        </div>
        <h1 class="heading">Create an Account</h1>
        <p class="description">
          Please enter your details to create your account.
        </p>
        <SignupForm />
      </div>
    </main>
  </template>
  
  <script>
  import SignupForm from '/components/molecules/SignupForm.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: { SignupForm },
    setup() {
      const router = useRouter();
      const goToLogin = () => {
        router.push('/');
      };
  
      return {
        goToLogin,
      };
    },
  };
  </script>

  