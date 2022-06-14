<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import GamesF from "@/components/TheWelcome.vue";
</script>
<template>


  <div>
    <h4>All Available Games</h4>

    <TheWelcome :key="data.id" :type="GamesF.data.type" v-for="genre in data"/> />
  </div>
</template>
<script lang="ts">

export default {
  name: "games",
  components: {

  },
  computed: {
    data() {
      return [
        { id: 1, genre: "Action" },
        { id: 2, genre: "Horror" },
        { id: 2, genre: "Adventure" }
      ]
    }
  }
};
</script>

<style>
 #app h4 {
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
}
</style>


