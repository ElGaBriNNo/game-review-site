<template>
  <Toast />
  <div id="myListContainer">
    <div id="myListContent">
      <div :key="game.id" v-for="game in this.$store.state.list" id="gameSaved">
        <div id="changeColorImage" v-if="games.includes(game.id)">
          <img :src="game.background_image" id="gameSaveImage" />
        </div>
        <div id="normalColorImage" v-else>
          <img :src="game.background_image" id="gameSaveImage" />
        </div>
        <p> {{ game.name }}</p>
        <div id="buttonsMyList">
          <button id="checkedButton" title="Remove Played" v-if="games.includes(game.id)" @click="removePlayed(game)">
            <i icon="pi pi-check" name="check" scale="1.2" color="#010" />
          </button>
          <button id="checkPlayed" @click="markPlayed(game), checkPlayed()" title="Check As Played" v-else>
            <i class="pi pi-check" name="check" scale="1.2" color="#00e500" />
          </button>
          <button id="markToRemove" title="Remove From Your List"
            @click="$store.commit('removeData', game), removeToast()">
            <i class="pi pi-times" name="trash" scale="1.2" color="#e50931" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Icon from "@fortawesome/vue-fontawesome";
export default {
  name: "MyList",
  data() {
    return {
      booleanGame: true,
      games: []
    };
  },
  components: {
    //   "v-icon": Icon
  },
  mounted() {
    this.checkPlayed();
  },
  methods: {
    markPlayed(game) {
      this.$store.commit("markPlayed", game);
      this.$toast.add(
        { severity: 'success', summary: game.name + ' marked as played', life: 3000 }
      );
    },
    removePlayed(game) {
      this.$store.commit('deletePlayed', game);
      window.location.reload();
    },
    removeToast(game) {
      this.$toast.add(
        { severity: 'success', summary: 'Successfully removed from the list', life: 3000 }
      );
    },
    markPlayedToast() {
      this.$toast.open({
        message: "Game Marked As Played",
        type: "success",
        duration: 3000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    },
    checkPlayed() {
      this.$store.state.gamePlayed.map(current => {
        this.games.push(current.id);
      });
    },
  }
};
</script>

<style>
#myListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#myListContent {
  width: 90%;
  height: 100%;
  margin-top: 20px;
  display: flex;
}

#gameSaved {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin-right: 30px;
  transition: 0.5s;
  cursor: pointer;
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

#buttonsMyList button {
  border: none;
  background: rgba(78, 78, 78, 0.562);
  font-size: 15px;
  text-align: center;
  transition: transform 0.5s;
  height: 30px;
}

#buttonsMyList button:hover {
  border: none;
  background: rgba(164, 73, 73, 0.26);
  color: #a8a77e;
  transform: scale(1.1);
  cursor: pointer;
}

#checkedButton {
  width: 50%;
  margin-right: 2px;
}

#checkedButton:hover {
  width: 50%;
  margin-right: 2px;
}

#checkPlayed {
  width: 50%;
  margin-right: 2px;
}

#markToRemove {
  width: 50%;
  margin-left: 2px;
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
</style>
