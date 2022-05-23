<script setup lang="ts">

</script>

<template>
  <div class="div-body">
    <Button label="Fetch Data" class="p-button-primary" v-on:click="fetchData" />
    <br />
    <div class="media-body" v-if="loaded === false">
      <ProgressBar :value="value" />
    </div>
    <div class="media-body" v-if="loaded">
      <li v-for="names in name">{{ names.name }}</li>
    </div>
  </div>
</template>


<script lang="ts">

const API_URL = "http://localhost:8000/users";
export default {
  name: "UserNames",
  data: () => ({
    name: [],
    loaded: undefined,
    value: 0
  }),
  methods: {
    fetchData: function () {
      this.loaded = false;
      this.value = 20;
      fetch(API_URL)
        .then(response => response.json())
        .then(result => {
          this.value = 50;
          console.log(result)
          this.name = result;
          this.value = 99;
          setTimeout(() => {
            this.loaded = true;
          }, 1000)
        });
    }
  },
  mounted() {
    //this.interval();
  }
};
</script>

<style>
</style>