
<template>
  <div class="container" id="games">
    <!-- <h1>{{ platform }}</h1> -->
    <!-- <li v-for="game in games.results">
        {{ game.name }}
        <img v-bind:src="game.image_background" alt="img" class="pic" />
      </li> -->

    <Carousel :value="games.results" class="carousel" :numVisible="11">
      <template #header>
        <h3>{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h3>
      </template>
      <template #item="slotProps">
        <div class="item">

          <div @click="showDetail(slotProps.data.id)">
            <img :src="slotProps.data.background_image" id="imagemPosterSlide" loading="lazy"/>
          </div>
          <h4 class="h4">{{ slotProps.data.name }}</h4>

        </div>

      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">

import { GamesF } from "@/services/GameDBapi.js";

export default {
  name: "gamesF",
  data() {
    return {
      games: [],
      showLoading: true,
      paginationButtons: false,
     type: "games"
    };
  },
  props: {
    types: String,
    description: String,
  },

  mounted() {
    this.getData();
    console.log(this.types)
    //this.getGameDetail();
  },
  methods: {
    async getData() {
      this.games = await GamesF(this.type);
      console.log(this.games)

    },
    showDetail(_id) {
      this.$router.push({ name: "Detail", params: { id: _id } });
      console.log(this.data.id);
    },
    // async getGameDetail() {
    //   console.log('wwwwwwwwwwwww')
    //   this.showLoading = true;
    //   try {
    //     const { data: { Search } } = await GamesF(this.type).get();
    //     this.games = Search;
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     this.showLoading = false;
    //   }
    // },

  }
};
</script>
<style lang="scss">
$color_1: #f1f;
$color_2: #cacaca;
$color_3: #e9e9e9;
$font-family_1: Arial, Helvetica, sans-serif;

/* #slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
} */
/* @media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 150px;
    width: 100px;
  }

  #newGames h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
} */
.pic {
  width: 100%;
}
.item {
  max-height: 400px;
  position: relative;
}
.container {
  max-height: 50%;
}
#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
  h1 {
    color: $color_2;
    font-family: $font-family_1;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 15px;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
#buttonNexts {
  color: $color_1;
}
#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#GamesDiv {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: $color_3 !important;
  outline: none !important;
}

</style>
