<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <Toast />
    <ConfirmDialog />
    <Dialog header="Header" v-model:visible="display">
      <template #header>
        <h3>Sign up for free!</h3>
      </template>

      <form class="form1" action="post">
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="name" />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText id="password" type="password" v-model="pass" />
          <label for="password">Password</label>
        </span>
        <span class="p-float-label">
          <InputText id="email" type="text" v-model="email" />
          <label for="email">E-mail address</label>
        </span>
        <div class="field-checkbox">
          <Checkbox id="tos" v-model="checked" :binary="true"></Checkbox>
          <label for="tos"> I agree to the Terms Of Service</label>
        </div>
      </form>

      <template #footer>
        <Button label="Sign me up!" icon="pi pi-check" @click="signup" />
      </template>
    </Dialog>
    <img alt="GM logo" class="logo" src="@/assets/gamitePNG.png" height="125" />
    <h1>Welcome to Gamite!</h1>
    <h3>
      Access an extensive library of video games and reviews in a social media-esque setting. Create your account or log
      in to begin!
    </h3>
    <nav>
      <Button label="Sign Up" class="p-button-text" @click="loadSignup" />
      <Divider layout="vertical" />
      <Button label="Log In" class="p-button-text" @click="$router.push('/games')" />
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      display: false,
      name: "",
      pass: "",
      email: "",
      checked: false
    }
  },
  methods: {
    signup() {
      this.display = false;
      this.$toast.add(
        { severity: 'success', summary: 'Successfully signed up', detail: 'You can now log in', life: 3000 }
      );
    },
    loadSignup() {
      this.display = true;
    }
  }
}
</script>

<style scoped>
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
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1 {
    padding-top: 50px;
    color: #0e80e9
  }

  .greetings h3 {
    text-align: center;
  }
}
</style>
