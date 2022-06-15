<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
import GamesF from "@/components/CarouselComponent.vue";
</script>
<template>


  <div>
    <h4>All Available Games</h4>

    <CarouselComponent :key="data[0]" :type="GamesF.data.type" />
    <CarouselComponent :key="data[1]" :type="GamesF.data.type" />
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
        { id: 1, type: "genre" },
        { id: 2, genre: "games" }
      ]
    }
  }
};
</script>

<style>
#app h4 {
  color: #e9e9e9;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>


