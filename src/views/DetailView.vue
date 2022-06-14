<template>
  <div>
    <div id="Detail">
      <div id="containerDetail">
        <div id="gameDetail">
          <div id="iconsContainer">
            <div id="starIcon">
              <v-icon name="star" scale="1.2" color="#e50931" v-for="star in starAmount" :key="star" />
            </div>
            <div id="trailerIcon">

              <v-icon name="ticket-alt" scale="1.8" color="#e5e5e5" />
            </div>
          </div>
          <h4> {{ game.ratings }}</h4>
          <img :src="game.background_image" loading="lazy" />
        </div>
        <div id="descriptionsContainer">
          <div id="gameTitle">
            <h1>{{ game.name }}</h1>
          </div>
          <div id="spinnerLoading">
            <div v-show="showLoading" id="loadingSpinner">
              <Spinner />
            </div>
          </div>
          <div id="gameDescription">
            <p>{{ game.description }}</p>
          </div>
          <button id="myList" @click="addToMyList">
            Add To Favourites
            <v-icon name="list-ul" scale="1.2" color="#e5e5e5" id="playIcon" />
          </button>
          <div id="descriptions">
            <p>
              <span>{{ game.platforms }}</span>
            </p>
            <p>
              Genre
              <span>{{ game.genres }}</span>
            </p>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGame } from "../services/GameDBapi.js";


export default {
  name: "Detail",
  data() {
    return {
      game: [],
      showLoading: true,

    };
  },
  props: { id: Number },
  components: {


  },
  computed: {
    starAmount() {
      return Math.floor(Math.random() * 5) + 1
    }
  },
  mounted() {
    this.getGameDetail()
  },
  methods: {
    async getGameDetail() {
      this.showLoading = true;
      try {
        const data = await fetchGame(this.id);
        console.log(data);
        this.game = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.showLoading = false;
      }
    },
    addToMyList() {
      this.$store.commit("addToMyList", this.game);
      this.showToast();
    },
    showToast() {
      this.$toast.open({
        message: "Game has been added to your list",
        type: "success",
        duration: 5000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    }
  }
};
</script>

<style lang="scss">
$color_1: #e9e9e9;
$color_2: #ffffff;
$color_3: #969696;
$font-family_1: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
$font-family_2: Arial, Helvetica, sans-serif;
$font-family_3: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
$font-family_4: arial;
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

#rateContainer {
  width: 100%;
}

#rateNumber {
  color: $color_1;
  font-size: 17px;
  border: 2px solid white;
  background-color: $background-color_1;
  border-radius: 10px;
  width: 45px;
  height: 45px;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
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

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    background: #c20b1d;
  }
}

#playIcon {
  margin-left: 10px;
}

#gameDetail {
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-around;

  p {
    color: $color_1;
    font-family: $font-family_1;
    text-align: justify;
  }
}

#descriptionsContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;

  h1 {
    color: $color_2;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-size: 35px;
    font-family: $font-family_2;
    text-align: center;
  }
}

#descriptions {
  border-radius: 20px;
  width: 90%;
  height: 38%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  span {
    color: $color_3;
  }

  p {
    color: $color_2;
    font-family: $font-family_3;
    text-align: justify;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
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

#trailerIcon {
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }
}

#gameTitle {
  width: 58%;
  text-align: center;
}

#gameDescription {
  color: $color_1;
  font-family: $font-family_4;
  font-size: 14px;
  font-family: $font-family_3;
  text-align: justify;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  text-align: center;
  width: 60%;
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

@media only screen and (max-width: 450px) {
  #descriptions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
}

@media only screen and (max-width: 566px) {
  #iconsContainer {
    display: flex;
    flex-direction: column;
  }

  #starIcon {
    display: flex;
    width: 100%;
  }

  #trailerIcon {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
