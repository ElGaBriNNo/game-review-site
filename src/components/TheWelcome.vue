
<template>
  <div class="container" id="games">
    <!-- <h1>{{ platform }}</h1> -->
    <!-- <li v-for="game in games.results">
        {{ game.name }}
        <img v-bind:src="game.image_background" alt="img" class="pic" />
      </li> -->

    <Carousel :value="games.results" class="carousel" :numVisible="1">
      <template #header>
        <h3>{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h3>
      </template>
      <template #item="slotProps">
        <div class="item">
          <h4 class="h4">{{ slotProps.data.name }}</h4>
          <img v-bind:src="slotProps.data.image_background" alt="img" class="pic" />
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
      type: "platforms"
    };
  },
  props: {
    types: String,
    description: String,
  },

  mounted() {
    this.getData();
    console.log(this.types)
    //this.getMovieDetail();
  },
  methods: {
    async getData() {
      this.games = await GamesF(this.type);
      console.log(this.games)
    }
    // async getMovieDetail() {
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
    // showDetail(_id) {
    //   this.$router.push({ name: "Detail", params: { id: _id } });
    // },
  }
};
</script>
<style>
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

/* #slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
} */

#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}

#buttonNexts {
  color: #f1f;
}

#newMovies h1 {
  color: #cacaca;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
}

#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #e9e9e9 !important;
  outline: none !important;
}

/* @media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 150px;
    width: 100px;
  }

  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
} */
</style>
