<template>
  <div class="background">
    <div class="login-container">
      <div class="login-card">
        <div class="welcome-text">
          <div class="welcome-box">
            <div class="gradient"></div>
            <div class="content">
              <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="icon" />
              <div>
                <div class="title">Welcome to Aladia,</div>
                <div class="subtitle">Create or access your <br /> account from here</div>
              </div>
            </div>
          </div>
        </div>

        <p class="enter-email">Enter your email</p>
        <input
          type="email"
          placeholder="Email Address"
          class="email-input"
          v-model="email"
          @input="setEmail($event.target.value)"
        />

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <button @click="handleEnter" class="enter-button">Enter</button>

        <div class="social-buttons">
          <button class="social-button google">Continue with Google</button>
          <button class="social-button facebook">Continue with Facebook</button>
          <button class="social-button apple">Continue with Apple</button>
        </div>

        <p class="terms">Terms & Conditions</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useUserStore } from '/store/UserStore';

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const setEmail = (value) => {
      userStore.setEmail(value);
    };

    const handleEnter = () => {
      userStore.handleEnter(router);
    };

    return {
      email: userStore.email,
      errorMessage: userStore.errorMessage,
      setEmail,
      handleEnter,
    };
  },
};
</script>

<style scoped src="../styles/login.css"></style>
