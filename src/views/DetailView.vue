<template>
  <div>
    <div id="Detail">
      <div id="containerDetail">
        <div id="gameDetail">
          <!-- <div id="iconsContainer">
            <div id="starIcon">
              <i class="p pi-star" name="star" scale="1.2" color="#e50931" v-for="star in starAmount" :key="star" />
              <div id="trailerIcon">
                <p>Watch The Trailer</p>
              </div>
            </div>
            <div id="videoContainer">
              <h1>{{ game.trailerID }}</h1>
            </div>
          </div> -->
          <i class="pi check" name="ticket-alt" scale="1.8" color="#e5e5e5" />
          <!-- <h4> {{ game.ratings }}</h4> -->
        </div>
        <div id="descriptionsContainer">
          <div id="imageContainer">
            <img :src="game.background_image" loading="lazy" />
          </div>
          <div id="spinnerLoading">
            <div v-show="showLoading" id="loadingSpinner">
              <Spinner />
            </div>
          </div>

          <div id="gameDescription">
            <div id="gameTitle">
              <h1>{{ game.name }}</h1>
            </div>
            <p>{{ game.description_raw }}</p>
          </div>
        </div>
        <button id="myList" @click="addToMyList">
          Add To Favourites
          <i class="p check" name="list-ul" scale="1.2" color="#e5e5e5" id="playIcon" />
        </button>
        <div id="descriptions">
          <p>
            Platforms
            <span>{{ game.platforms }}</span>
          </p>
          <p>
            Genre
            <span>{{ game.genres }}</span>
          </p>
          <p>
            Trailer
            <span>{{ gameTrailer }}</span>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGame } from "../services/GameDBapi.js";
import { Trailer } from "@/services/Trailer.js";


export default {
  name: "Detail",
  data() {
    return {
      game: [],
      showLoading: true,
      trailerID: "",
      gameTrailer: "",
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
        const responseTrailer = await Trailer($gameTrailer).get();
        this.trailerID = responseTrailer.data.items[0].id.videoId;
        console.log(gameTrailer);
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
}

.iconStyles {
  text-align: center;
  font-size: 14px;
}

#myList {
  background: #ff142d;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  height: 40px;
  font-size: 16px;
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
  margin: 30px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  align-items: center;
}

#imageContainer img {
  height: auto;
  width: 100%;
  max-height: 600px;
  max-width: 600px;
  grid-column: 1;
}

#gameDescription p {
  font-size: 25px;
  overflow-y: auto;
  grid-column: 2;
  font-size: 20px;
  font-family: $font-family_1;
  max-height: 500px
}

#gameDescription {
  margin-left: 50px;
}

#gameTitle h1 {
  font-size: 50px;
  text-align: left;
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
    font-family: $font-family_1;
    text-align: justify;
    text-shadow: black 0.1em 0.1em 0.2em;
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
  color: $color_1;

  p {
    margin-right: 10px;
    color: $color_1;
  }
}

#trailerIcon {
  display: flex;
  justify-content: center;
  align-items: center;
}

#trailerIcon p {
  text-align: center;
}





p {
  span {
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
