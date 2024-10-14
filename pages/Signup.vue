<template>
  <main class='background'>
    <div class="container">
      <div class="topBox">
        <i class="fa-solid fa-arrow-left text-white/50 transition-all g"></i>
        <span @click="goToLogin">Back to Log in</span>
      </div>

      <div class="middlebox">
        <div>
          <label class="imageBox" for="image">
            <input
              id="image"
              type="file"
              accept="image/*"
              @change="onImageChange"
            />
            <img class="profileImage" :src="imageUrl" />
          </label>
        </div>

        <div class="googleText">
          <h2>Nice to meet you,</h2>
          <p>Upload a profile picture and complete your presentation</p>
        </div>
      </div>

      <div class="term">
        <input type="checkbox" v-model="termsAccepted" />
        <span>I accept Terms & Conditions and Privacy Policy</span>
      </div>

      <form class="frombox" @submit.prevent="handleSignup">
        <label for="username">Enter your details</label>

        <div class="inputBox">
          <input
            type="text"
            placeholder="Name"
            v-model="name"
            @input="setName($event.target.value)"
          />
          <div class="icon">
            <i class="fa-solid fa-user text-base text-black/70"></i>
          </div>
        </div>
        <p v-if="nameError" class="error">{{ nameError }}</p>

        <div class="inputBox">
          <input
            type="text"
            placeholder="Surname"
            v-model="surname"
            @input="setSurname($event.target.value)"
          />
          <div class="icon">
            <i class="fa-solid fa-user text-base text-black/70"></i>
          </div>
        </div>
        <p v-if="surnameError" class="error">{{ surnameError }}</p>

        <div class="inputBox">
          <input
            type="email"
            placeholder="Email Address"
            v-model="email"
            @input="setEmail($event.target.value)"
          />
          <div class="icon">
            <i class="fa-solid fa-envelope text-base text-black/70"></i>
          </div>
        </div>
        <p v-if="emailError" class="error">{{ emailError }}</p>

        <div class="inputBox">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            v-model="password"
            @input="setPassword($event.target.value)"
          />

          <button type="button" @click="toggleShowPassword" class="togglePassword">
            <i :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
          </button>
        </div>
        <p v-if="passwordError" class="error">{{ passwordError }}</p>

        <div class="inputBox">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            @input="setConfirmPassword($event.target.value)"
          />
          <div class="icon">
            <i class="fa-solid fa-key text-base text-black/70"></i>
          </div>
        </div>
        <p v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</p>

        <button class="btn" type="submit" :disabled="!formIsValid || !termsAccepted">
          <span v-if="isSubmitting">Registering...</span>
          <span v-else>Enter</span>
        </button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>

      <div class="termCondtions">
        <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from '/store/UserStore';
import { useRouter } from 'vue-router';
import logoImage from '/assets/logo.png';

export default {
  name: 'Signup',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const imageUrl = ref(userStore.imageUrl || logoImage);
    const termsAccepted = ref(false);

    const name = ref(userStore.name);
    const surname = ref(userStore.surname);
    const email = ref(userStore.email);
    const password = ref(userStore.password);
    const confirmPassword = ref(userStore.confirmPassword);

    const nameError = ref(userStore.nameError);
    const surnameError = ref(userStore.surnameError);
    const emailError = ref(userStore.emailError);
    const passwordError = ref(userStore.passwordError);
    const confirmPasswordError = ref(userStore.confirmPasswordError);
    const errorMessage = ref(userStore.errorMessage);
    const successMessage = ref('');

    const isSubmitting = ref(false);
    const showPassword = ref(false);

    const setName = (value) => userStore.setName(value);
    const setSurname = (value) => userStore.setSurname(value);
    const setEmail = (value) => userStore.setEmail(value);
    const setPassword = (value) => userStore.setPassword(value);
    const setConfirmPassword = (value) => userStore.setConfirmPassword(value);

    const formIsValid = computed(() => {
      return (
        !nameError.value &&
        !surnameError.value &&
        !emailError.value &&
        !passwordError.value &&
        !confirmPasswordError.value &&
        termsAccepted.value
      );
    });

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const validateConfirmPassword = () => {
      if (password.value !== confirmPassword.value) {
        confirmPasswordError.value = "Passwords do not match";
      } else {
        confirmPasswordError.value = "";
      }
    };

    const handleSignup = async () => {
  isSubmitting.value = true;

  userStore.validateName();
  userStore.validateSurname();
  userStore.validateEmail();
  userStore.validatePassword();
  validateConfirmPassword(); 

  if (formIsValid.value) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some(user => user.email === userStore.email);

    if (emailExists) {
      errorMessage.value = 'Email already exists. Please log in.';
      isSubmitting.value = false;
      return; 
    }

    const newUser = {
      name: userStore.name,
      surname: userStore.surname,
      email: userStore.email,
      password: userStore.password,
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    successMessage.value = 'You have successfully registered!';

    setTimeout(() => {
      router.push('/welcome');
    }, 1000);
  } else {
    errorMessage.value = 'Please fill in all fields correctly and accept the terms.';
  }

  isSubmitting.value = false;
};

    const goToLogin = () => {
      router.push('/login');
    };

    const onImageChange = (event) => {
      const file = event.target.files[0];
      const maxFileSize = 2 * 1024 * 1024; // 2MB

      if (file && file.size > maxFileSize) {
        alert("File size should be less than 2MB");
        return;
      }

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          imageUrl.value = e.target.result;
        };
      } else {
        alert('Please upload a valid image file.');
      }
    };

    return {
      imageUrl,
      name,
      surname,
      email,
      password,
      confirmPassword,
      nameError,
      surnameError,
      emailError,
      passwordError,
      confirmPasswordError,
      errorMessage,
      successMessage,
      termsAccepted,
      isSubmitting,
      formIsValid,
      showPassword,
      handleSignup,
      goToLogin,
      onImageChange,
      toggleShowPassword,
      setName,
      setSurname,
      setEmail,
      setPassword,
      setConfirmPassword,
    };
  },
};
</script>

<style scoped src="../styles/login2.css"></style>