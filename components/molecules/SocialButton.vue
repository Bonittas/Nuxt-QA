<template>
  <div class="social-buttons">
    <Button
      v-for="button in buttons"
      :key="button.label"
      :label="button.label"
      :buttonClass="button.class"
      :onClick="button.action"
    />
  </div>
</template>

<script>
import Button from '/components/atoms/Button.vue';

export default {
  components: { Button },
  props: {
    buttons: Array,
  },
};
</script>

<style scoped>
/* Social button styles */
</style>