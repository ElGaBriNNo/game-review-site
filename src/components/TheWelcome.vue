
<template>
  <div id="games">
    <div id="slide">
      <h1>{{ platform }}</h1>

      <carousel
        :per-page="4"
        :navigate-to="0"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationClickTargetSize="9"
      >
        <slide
          id="games"
          :key="game.imdbID + Math.random()"
          v-for="game in games"
        >
          <div @click="showDetail(game.imdbID)">
            <img :src="game.Poster" id="imagemPosterSlide" loading="lazy"/>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>

import { Games } from "@/services/GameDBapi.js";

export default {
  name: "games",
  data() {
    return {
      games: [],
      showLoading: true,
      paginationButtons: false
    };
  },
  props: {
    type: String,
    description: String,
  },

  mounted() {
    this.getMovieDetail();
  },
  methods: {
    async getMovieDetail(){
      console.log('wwwwwwwwwwwww')
      this.showLoading = true;
      try {
        const { data: { Search } } = await Games(this.type).get();
        this.games = Search;
      } catch (error) {
        console.error(error);
      } finally {
        this.showLoading = false;
      }
    },
    showDetail(_id) {
      this.$router.push({ name: "Detail", params: { id: _id } });
    },
  }
};
</script>
<style>
#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
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

@media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 150px;
    width: 100px;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>
