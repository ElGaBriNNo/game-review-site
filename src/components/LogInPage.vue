<script setup lang="ts">
</script>

<template>
    <Dialog header="Header" v-model:visible="toDisplay" class="dialog">
        <template #header>
            <h3>Log In to an existing account</h3>
        </template>

        <form class="form1" @submit.prevent="loginUser">
            <span class="p-float-label">
                <InputText id="email" type="text" v-model="login.email" placeholder="Email" />
                <label for="email">E-mail address</label>
            </span>
            <span class="p-float-label">
                <InputText id="password" type="password" v-model="login.password" placeholder="Password" />
                <label for="password">Password</label>
            </span>
        </form>

        <template #footer>
            <Button class="sign-button" label="Log In" icon="pi pi-check" type="submit" v-on:click="loginUser" />
        </template>
    </Dialog>
</template>


<script lang="ts">
import axios from "axios";
export default {

    name: "LogIn",
    data() {

        return {
            login: {
                email: "",
                password: ""
            },
            toDisplay: this.display,
        }
    },
    methods: {
        async loginUser() {
            try {
                let response = await axios.post("http://localhost:4000/user/login", this.login);
                let token = response.data.token;
                localStorage.setItem("jwt", token);
                if (token) {
                    this.$toast.add(
                        { severity: 'success', summary: 'Successfully logged in', life: 3000 }
                    );
                    this.toDisplay = false;
                    this.$router.push("/games");
                }
            } catch (err) {
                this.$toast.add(
                    { severity: 'error', summary: 'Something went wrong', detail: 'Please try again later', life: 3000 }
                );
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
