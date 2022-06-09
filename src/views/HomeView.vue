<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
</script>
<template>


  <div>
    <h4>All Available Games</h4>
    <!-- <GamesF :key="game.id" :type="game.type" v-for="game in games" /> -->
    <TheWelcome />
  </div>
</template>

<script lang="ts">



export default {
  name: "games",
  components: {

  },
  computed: {
    games() {
      return [
        { id: 1, types: "dark_souls" },
        { id: 2, types: "bioshock" },
      ]
    }
  }
};
</script>

<style>
/* #app h4 {
  color: #e9e9e9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}

@media only screen and (max-width: 599px) {
  #app h4 {
    font-size: 14px;
  }
} */
</style>


