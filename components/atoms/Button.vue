<template>
  <button :class="buttonClass" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: String,
    buttonClass: String,
    onClick: Function,
  },
};
</script>

<style scoped>
/* Button styles */
</style>