
<template>
  <div id="genreTitle">
    <h1>{{ genre }}</h1>
  </div>
  <div class="container-for-games">
    <div v-for="game in games.results">
      <div @click="showDetail(game.id)">
        <img :src="game.background_image" alt="pic" class="game-pic">
      </div>
      <p>{{ game.name }}</p>
    </div>
  </div>
</template>

<script>
import { fetchGamesByGenre, fetchGenre } from "../services/GameDBapi.js";


export default {
  name: "Genre",
  data() {
    return {
      games: [],
      showLoading: true,
      genre: ''
    }
  },
  props: { id: Number },
  computed: {
    starAmount() {
      return Math.floor(Math.random() * 5) + 1
    }
  },
  mounted() {
    this.getGamesByGenre()
    this.getGenreName()
  },
  methods: {
    showDetail(id) {
      console.log(id)
      this.$router.push({ name: "Detail", params: { id: id } });
    },
    async getGenreName() {
      const data = await fetchGenre(this.id);
      this.genre = data.name;
    },
    async getGamesByGenre() {
      this.showLoading = true;
      try {
        const data = await fetchGamesByGenre(this.id);
        console.log(data);
        this.games = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.showLoading = false;
      }
    },
    //  addToMyList() {
    //   this.$store.commit("addToMyList", this.game);
    //   this.showToast();
    // },

  }
};
</script>

<style lang="scss">
$color_1: #e9e9e9;
$color_2: #ffffff;
$color_3: #ffffff;
$font-family_1: "Segoe UI";
$background-color_1: rgb(255, 196, 0);

#Detail {
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 100%;
  max-width: 650px;
}

#containerDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.iconStyles {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

#myList {
  background: #ff142d;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: $color_2;
  border: none;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  margin-bottom: 30px;
  object-fit: cover;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    background: #c20b1d;
  }
}

#playIcon {
  margin-left: 10px;
}

p {
  color: $color_1;
  font-family: $font-family_1;
  text-align: justify;
}

h1 {
  color: $color_2;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 35px;
  font-family: $font-family_1;
  text-align: center;
}


span {
  color: $color_3;
}

p {
  color: $color_2;
  text-align: justify;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-bottom: 15px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;
}


#iconsContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: $color_1;

  p {
    margin-right: 10px;
    color: $color_1;
    font-weight: bold;
  }
}

rIcon p {
  text-align: center;
}

p {
  span {
    font-weight: 100;
    font-size: 14px;
    padding-top: 10px;
  }
}

@media only screen and (max-width: 699px) {
  iframe {
    height: 200px;
  }
}

@media only screen and (max-width: 566px) {
  #iconsContainer {
    display: flex;
    flex-direction: column;
  }
}

.container-for-games {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.game-pic {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  width: 300px;
  object-fit: cover;
  margin: 20px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}
</style>
