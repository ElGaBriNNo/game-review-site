<template>
  <div id="myListContainer">
    <div id="myListContent">
      <div  v-for="(id, itemObjKey) in games">
<div v-for="results in games[itemObjKey].results">
  <img v-bind:src="results.background_image" alt="img" class="pic" id="gameSaved" />
  {{results.name}}
</div>
</div>
    </div>
  </div>
</template>
<script>
//import Icon from "@fortawesome/vue-fontawesome";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";

export default {
  name: "Search",
  data() {
    return {

      booleanGame: true,
      games: this.$store.state.searchList,
    };
  },
  components: {
  //  HeaderComponent,
    CarouselComponent,
  },
  mounted() {
//this.components.HeaderComponent.methods.getSearchResults();
  },
  methods: {
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
