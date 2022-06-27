<template>
  <div class="searchTitle">
    <h1> Showing games with "{{ search }}"</h1>
  </div>
  <div v-if="!isFetching">
    <div class="container-for-games">
      <div v-for="results in games.results">
        <div @click="showDetail(results.id)">
          <img v-bind:src="results.background_image" alt="img" class="game-pic" />
        </div>
        <p>{{ results.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
//import Icon from "@fortawesome/vue-fontawesome";
import { fetchByName } from '../services/GameDBapi.js'

export default {
  name: "Search",
  data() {
    return {
      games: [],
      isFetching: true
    };
  },
  watch: {
    search: {
      immediate: true,
      handler(val, oldVal) {
        this.getResults()
      }
    }
  },
  mounted() {
    this.getResults()
  },
  props: { search: String },
  methods: {
    async getResults() {
      const data = await fetchByName(this.search);
      this.games = data;
      this.isFetching = false;
    },
    showDetail(id) {
      this.$router.push({ name: "Detail", params: { id: id } });
    },
  }
};
</script>

<style>
#myListContents {
  width: 90%;
  height: 100%;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

#gameSaved {
  width: 100%;
  height: auto;
  margin: 30px;
  transition: 0.5s;
  cursor: pointer;
  object-fit: cover;
}

#normalColorImage {
  width: 100%;
  height: 300px;
  position: relative;
}

#changeColorImage {
  width: 100%;
  height: 300px;
  position: relative;
  background: #414040be;
}

#gameSaveImage {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

#gameSaved:hover {
  transform: scale(1.05);
}

#buttonsMyList {
  display: flex;
  margin-top: 10px;
}

@media only screen and (max-width: 730px) {
  #myListContent {
    width: 90%;
    display: flex;
  }
}

@media only screen and (max-width: 600px) {
  #myListContent {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}

.searchTitle h1 {
  text-align: left;
  margin: 20px
}
</style>
