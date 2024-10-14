<template>
  <img :src="src" :alt="alt" class="icon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'icon',
    },
  },
};
</script>

<style scoped src="../../styles/login.css"></style>
