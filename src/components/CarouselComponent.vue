
<template>
  <div class="container" id="games">
    <!-- <h1>{{ platform }}</h1> -->
    <!-- <li v-for="game in games.results">
        {{ game.name }}
        <img v-bind:src="game.image_background" alt="img" class="pic" />
      </li> -->
    <Carousel :value="games.results" class="carousel" :numVisible="7" :numScroll="3">
      <template #header>
        <h3>{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h3>
      </template>
      <template #item="slotProps">
        <div class="item">
          <div @click="showDetail(slotProps.data.id)">
            <img :src="slotProps.data.background_image" id="imagemPosterSlide" />
          </div>
          <h4 class="h4">{{ slotProps.data.name }}</h4>
        </div>

      </template>
    </Carousel>
  </div>

  <div class="container" id="genres">
    <!-- <h1>{{ platform }}</h1> -->
    <!-- <li v-for="game in games.results">
        {{ game.name }}
        <img v-bind:src="game.image_background" alt="img" class="pic" />
      </li> -->
    <Carousel :value="genres.results" class="carousel" :numVisible="7" :numScroll="3">
      <template #header>
        <h3>{{ genre.charAt(0).toUpperCase() + genre.slice(1) }}</h3>
      </template>
      <template #item="slotProps">
        <div class="item">
          <div @click="showGenre(slotProps.data.id)">
            <img :src="slotProps.data.image_background" id="imagemPosterSlide" />
          </div>
          <h4 class="h4">{{ slotProps.data.name }}</h4>
        </div>

      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">

import { fetchGenres, GamesF } from "@/services/GameDBapi.js";

export default {
  name: "gamesF",
  data() {
    return {
      games: [],
      genres: [],
      showLoading: true,
      paginationButtons: false,
      type: "games",
      genre: "genres",
      propType: this.types
    };
  },
  props: {
    types: {
      type: String,
      genre: String,
      required: true
    }
  },
  mounted() {
    this.getData();
    this.getGenres();
    //this.getGameDetail();
  },
  methods: {
    async getData(): Promise<void> {
      this.games = await GamesF(this.type);
      console.log(this.propType)
    },
    showDetail(_id: number): void {
      this.$router.push({ name: "Detail", params: { id: _id } });
      console.log(this.data.id);
    },
    showGenre(_id: number): void {
      this.$router.push({ name: "Genre", params: { id: _id } });
      console.log(this.data.id);
    },
    async getGenres(): Promise<void> {
      this.genres = await fetchGenres(this.genre);
      console.log(this.propType)
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

#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  width: 250px;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}

.item {
  margin: 10px;
  max-width: 100%;
}

#buttonNexts {
  color: $color_1;
}

h3 {
  margin-left: 3%;
}
</style>
