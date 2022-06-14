<script setup lang="ts">
import SignUpPage from "./SignUpPage.vue";
</script>

<template>
  <div class="greetings">
    <Toast />
    <SignUpPage v-bind:display="showSignUp" v-if="showSignUp" />
    <img alt="GM logo" class="logo" src="@/assets/gamitePNG.png" height="125" />
    <h1>Welcome to Gamite!</h1>
    <h3>
      Access an extensive library of video games and reviews in a social media-esque setting. Create your account or log
      in to begin!
    </h3>
    <nav>
      <Button label="Sign Up" class="p-button-text" @click="showSignUp = !showSignUp" />
      <Divider layout="vertical" />
      <Button label="Log In" class="p-button-text" @click="$router.push('/games')" />
    </nav>
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

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .greetings {
    h1 {
      padding-top: 50px;
      color: $color_1;
    }

    h3 {
      text-align: center;
    }
  }
}
</style>
