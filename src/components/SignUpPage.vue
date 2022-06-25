<script setup lang="ts">
</script>

<template>
    <Dialog header="Header" v-model:visible="toDisplay">
        <template #header>
            <h3>Sign up for free!</h3>
        </template>

        <form class="form1" action="post">
            <span class="p-float-label">
                <InputText id="username" type="text" v-model="name" />
                <label for="username">Username</label>
            </span>
            <span class="p-float-label">
                <InputText id="password" type="password" v-model="password" />
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
</template>


<script lang="ts">
import User from "/src/model/user";
import axios from "axios";
export default {

  name: "SignUp",
    data() {

        return {
            toDisplay: this.display,
            name: "",
            password: "",
            email: "",
            checked: false
        }
    },
    methods: {

        signup(): void {

            this.toDisplay = false;

            let apiURL = 'mongodb+srv://admin:admin@cluster0.pnanr.mongodb.net/game-review-siteDB/?retryWrites=true&w=majority';

            axios.post(apiURL, User).then(() => {
              User = {
                name: this.name,
                password: this.password,
                email: this.email,
              }
            }).catch(error => {
              console.log(error)
            });
            this.$toast.add(
                { severity: 'success', summary: 'Successfully signed up', detail: 'You can now log in', life: 3000 }
            );
        },
    },
    props: {
        display: {
            type: Boolean
        }
    },
    mounted() {
        //this.interval();
    }
};
</script>

<style>
</style>
