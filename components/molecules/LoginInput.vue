<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String,
  },
  methods: {
    handleInput(event) {
      const newValue = event.target.value;
      this.$emit('input', newValue);
    },
  },
};
</script>