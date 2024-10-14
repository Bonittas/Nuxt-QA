<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      :class="inputClass"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    modelValue: String,
    error: String,
    inputClass: String,
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
/* Input styles */
</style>