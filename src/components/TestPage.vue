<script setup lang="ts">

</script>

<template>
  <div>
    <div class="media-body" v-if="loaded === false">
      <Button>Button</Button>
      <ProgressBar mode="indeterminate" />
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
    loaded: false
  }),

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.name = result;
        //this.loaded = true;
      });
  },
  methods: {}
};
</script>

<style>
p-progressbar-indeterminate {
  width: 50;
  background-color: white;
}

img {
  max-width: 300px;
  height: auto;
}
</style>