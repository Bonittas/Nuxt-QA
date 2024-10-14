<template>
  <main>
    <div class="container">
      <div class="topBox">
        <i class="fa-solid fa-arrow-left text-white/50 transition-all g"></i>
        <span>Back to Log in</span>
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
        <input type="checkbox" />
        <span>I accept Terms & Conditions and Privacy Policy</span>
      </div>

      <form class="frombox">
        <label for="username">Enter your details</label>
        <div class="inputBox">
          <input type="text" placeholder="Name" />
          <div class="icon">
            <i class="fa-solid fa-user text-base text-black/70"></i>
          </div>
        </div>

        <div class="inputBox">
          <input type="text" placeholder="Surname" />
          <div class="icon">
            <i class="fa-solid fa-user text-base text-black/70"></i>
          </div>
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Email Address" />
          <div class="icon">
            <i class="fa-solid fa-envelope text-base text-black/70"></i>
          </div>
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Password" />
          <div class="icon">
            <i class="fa-solid fa-key text-base text-black/70"></i>
          </div>
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Confirm password" />
          <div class="icon">
            <i class="fa-solid fa-key text-base text-black/70"></i>
          </div>
        </div>
        <button class="btn">Enter</button>
      </form>
      <div class="termCondtions">Team & Conditions</div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      imageUrl: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
    };
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0];

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
      } else {
        alert("Please upload a valid image file.");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  font-family: Arial, sans-serif;

  background-color: black;
}

h1 {
  color: #333;
}
.bg {
  display: grid;
  place-items: center;
  height: 100vh;
  
}

h2 {
  color: white;
}

.container {
  border: 1px solid rgb(90, 90, 90);
  padding: 20px;
  max-width: 400px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:black;

}

p {
  color: white;
}

main {
  display: grid;
  place-items: center;
  height: 100vh;
}

.middlebox {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-bottom: 20px;

  border-radius: 4px;
  gap: 30px;
}

.middlebox img {
  width: 120px;
}

.imageBox {
  display: block;
  width: 100%;
  height: 100px;
  background-color: #00000086;
  color: white;
  background-image: linear-gradient(
    15deg,
    #fff0 8.33%,
    #fff0 27.43%,
    #fff6,
    #fff0 37.85%,
    #fff0 53.91%,
    #fff 62.15%,
    #fff0 68.23%,
    #fff 91.67%
  );
  padding: 10px 0;
  border-radius: 4px;
}

.middlebox h2 {
  font-size: 16px;
  margin-bottom: 1rem;
}
.middlebox p {
  font-size: 14px;
  color: rgb(190, 190, 190);
}

.topBox {
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.profileImage {
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
}

.topBox i {
  justify-self: start;
  color: rgb(123, 123, 123);
}

.btn {
  padding: 12px 20px;
  background-color: none;
  border: none;
  width: 100%;
  color: rgb(190, 190, 190);
  opacity: 0.8;
  border-radius: 4px;
  background: linear-gradient(
    15deg,
    #fff0 9.55%,
    #fff0 30.28%,
    #fff6,
    #fff0 41.58%,
    #fff0 59.02%,
    #fff 67.97%,
    #fff0 74.56%,
    #fff
  );
  background-position: right bottom;
  margin-bottom: 20px;
}

.term {
  align-self: self-start;
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.term input {
  width: auto;
}
.term span {
  color: rgb(160, 160, 160);
  font-size: 14px;
}

.imageDig {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 20px;
  margin-bottom: 100px;
}

.imageDig img:first-child {
  width: 100%;
}

.imageDig div {
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

input[type="file"] {
  display: none;
  /* visibility: hidden; */
  /* opacity: 0; */
}

.frombox label {
  color: white;
  display: block;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
}

.frombox input {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(165, 165, 165);
  padding: 12px 0px 12px 40px;
  width: 100%;
}

.frombox {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.inputBox {
  position: relative;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(87, 87, 87);
}

.termCondtions {
  margin-top: 10px;
  color: #5f5f5f;
}
</style>