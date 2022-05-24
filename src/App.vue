<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import TestPage from "@/components/TestPage.vue";
</script>

<template>
  <div class="hello-world">
    <HelloWorld msg="Welcome to Gamite!" />
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: center;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  justify-content: flex-start;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

.hello-world {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
