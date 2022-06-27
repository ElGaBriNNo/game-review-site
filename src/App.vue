<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />

  <router-view></router-view>
</template>

<script lang="ts">
import Header from "./components/HeaderComponent.vue";
export default {

  data() {

    return {
      components: {
        Header
      }
    }
  }
}
</script>
<style>
@import '@/assets/base.css';
</style>
