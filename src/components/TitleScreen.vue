<script setup lang="ts">
import SignUpPage from "./SignUpPage.vue";
</script>

<template>
  <div class="greetings">
    <Toast />
    <SignUpPage v-bind:display="showSignUp" v-if="showSignUp" />
    <div class="startup">
      <img alt="GM logo" class="logo" src="@/assets/gamitePNG.png" height="125" />
      <h1>Welcome to Gamite!</h1>
      <h3>
        Access an extensive library of video games and reviews in a social media-esque setting. Create your account or
        log
        in to begin!
      </h3>
      <div class="signButtons">
        <Button label="Sign Up" class="p-button-text grid-item" @click="showSignUp = !showSignUp" />
        <Divider class="grid-item" layout="vertical" />
        <Button label="Log In" class="p-button-text grid-item" @click="$router.push('/games')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showSignUp: false,
      name: "",
      pass: "",
      email: "",
      checked: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
$color_1: #0e80e9;

span {
  margin: 30px 0;
}

#email {
  width: 300px;
}

.signButtons {
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 20px;
}

.grid-item {
  max-height: 100px;
  text-align: center;
}

.greetings {
  margin-top: 5%;
}

.logo {
  width: 20%;
  height: auto;
}

.p-button {
  width: 250px;
  height: auto;
}

.p-button.p-button-text {
  font-size: 50px;
}

.startup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 60px;
    padding-top: 50px;
    color: $color_1;
  }

  h3 {
    font-size: 30px;
    text-align: center;
  }
}
</style>
