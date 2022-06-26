<script setup lang="ts">
</script>

<template>
    <Dialog header="Header" v-model:visible="toDisplay" class="dialog">
        <template #header>
            <h3>Sign up for free!</h3>
        </template>

        <form class="form1" @submit.prevent="registerUser">
            <span class="p-float-label">
                <InputText id="username" type="text" v-model="register.name" />
                <label for="username">Username</label>
            </span>
            <span class="p-float-label">
                <InputText id="password" type="password" v-model="register.password" />
                <label for="password">Password</label>
            </span>
            <span class="p-float-label">
                <InputText id="email" type="text" v-model="register.email" />
                <label for="email">E-mail address</label>
            </span>
            <div class="field-checkbox">
                <Checkbox id="tos" v-model="checked" :binary="true"></Checkbox>
                <label for="tos"> I agree to the Terms Of Service</label>
            </div>
        </form>

        <template #footer>
            <Button class="sign-button" label="Sign me up!" icon="pi pi-check" type="submit"
                v-on:click="registerUser" />
        </template>
    </Dialog>
</template>


<script lang="ts">
//import User from "/src/model/user";
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            register: {
                name: "",
                email: "",
                password: ""
            },
            toDisplay: this.display,
            checked: false
        }
    },
    methods: {
        async registerUser() {
            console.log('test')
            try {
                let response = await axios.post("http://localhost:4000/user/register", this.register);
                console.log(response);
                let token = response.data.token;
                if (token) {
                    localStorage.setItem("jwt", token);
                    this.$router.push("/");
                    this.$toast.add(
                        { severity: 'success', summary: 'Successfully signed up', detail: 'You can now log in', life: 3000 }
                    );
                    this.toDisplay = false;
                } else {
                    this.$toast.add(
                        { severity: 'error', summary: 'Something went wrong', detail: 'Please try again later', life: 3000 }
                    );
                }
            } catch (err) {
                let error = err.response;
                if (error.status == 409) {
                    this.$toast.add(
                        { severity: 'error', summary: error.data.message, life: 3000 }
                    );
                } else {
                    this.$toast.add(
                        { severity: 'error', summary: error.data.err.message, life: 3000 }
                    );
                }
            }
        }
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

<style scoped>
.sign-button {
    height: 50px
}

.pi {
    color: black;
}
</style>
