<template>
  <div class="image-uploader">
    <input type="file" @change="onFileChange" />
    <img v-if="imageUrl" :src="imageUrl" alt="Profile Image" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => this.$emit('image-selected', e.target.result);
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
.image-uploader input {
  display: block;
  margin-bottom: 10px;
}
.image-uploader img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
</style>
