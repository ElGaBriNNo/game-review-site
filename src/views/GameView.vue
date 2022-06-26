<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
import GamesF from "@/components/CarouselComponent.vue";
</script>
<template>
  <div>
    <CarouselComponent :key="games" :type="GamesF.data.games" />
    <!-- <CarouselComponent :key="genres" :type="GamesF.data.genres" /> -->
  </div>
</template>
<script lang="ts">

export default {
  name: "Games",
  components: {

  },
  computed: {
    data() {
      return [
        { id: 1, games: "games" },
        { id: 2, genre: "genres" }
      ]
    }

  }
};
</script>

<style>
#app h4 {
  color: #b79000;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>


