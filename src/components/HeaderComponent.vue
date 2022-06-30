<template>
  <div id="header">
    <img class="logoHeader" :src="image" @click="navigateMain" />
    <nav role="navigation">
      <ul>
        <li id="selections">
          <a id="navigate">
            Navigate
            <v-icon name="sort-down" scale="1" color="#e5e5e5" />
          </a>
          <ul class="dropdown">
            <li @click="navigateMain">
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Most Recent</a>
            </li>
            <li @click="navigateMyList">
              <a>Go To Your List</a>
            </li>
          </ul>
        </li>
        <li class="items" @click="navigateMain">Home</li>
        <li class="items" @click="navigateGames">Categories and games</li>
        <!-- <li class="items">Most Recent</li> -->
        <li class="items" @click="navigateMyList">You list</li>
        <li v-if="user.name" class="items" icon="pi pi-user" @click="logUserOut">Log out from <b>{{ user.name }}</b>
        </li>
      </ul>
    </nav>
    <div id="textForm">
      <input class="form-control" id="search" type="text" name="text" v-model="searchQuery"
        placeholder="Search for a game" v-on:keyup.enter="getSearchResults" />
    </div>
    <div id="icons">
      <Button id="x-button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text"
        @click="clearField" />
    </div>
  </div>
</template>

<script>
import image from "../assets/gamitepng.png";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Header",
  data() {
    return {
      image,
      inputSearch: "",
      user: {},
      searchQuery: "",
    };
  },
  methods: {
    async getSearchResults() {
      this.$router.push({ name: "Search", params: { search: this.searchQuery } })
    },
    navigateMain() {
      this.$router.push({ name: "home" });
    },
    navigateGames() {
      this.$router.push({ name: "games" });
    },
    navigateMyList() {
      this.$router.push({ name: "MyList" });
    },
    clearField() {
      this.searchQuery = "";
      document.getElementById("search").value = "";
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    if (localStorage.getItem('jwt')) {
      this.getUserDetails();
    }
  },
  watch: {
    $route(to, from) {
      if (localStorage.getItem('jwt')) {
        this.getUserDetails();
      }
    }
  },
};
</script>

<style>
#header {
  width: 100%;
  height: 30%;
  background: #9655ff;
  display: flex;
  align-items: center;
}

.logoHeader {
  margin: 5px;
  margin-left: 30px;
  max-width: 5%;
  height: auto;
}

.logoHeader:hover {
  cursor: pointer;
}

nav {
  width: 70vw;
  color: #963333;
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

li {
  color: #fff;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  font-family: "Segoe UI";
  font-size: 100%;
}

li a {
  color: #fff;
  cursor: default;
}

li:hover {
  cursor: pointer;
}

.items:hover {
  color: #ccc;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

ul li ul li {
  clear: both;
  width: 100%;
}

#navigate {
  opacity: 0;
  height: 0;
}

#options {
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  width: 60%;
}

#eachOptions {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
}

#search {
  width: 1px;
  border: none;
  border-radius: 15px;
  color: #e5e5e5;
  border-bottom: 2px solid #ccc;
  font-size: 15px;
  background-color: #141414;
  background-image: url("../assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 7px 12px 40px;
  width: 100%;
  /* -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out; */
}

#textForm {
  width: 50%;
}

#icons {
  width: 10%;
  margin-left: 5px;
}

.pi {
  color: #000000;
}

@media only screen and (max-width: 906px) {
  nav {
    width: 80vw;
  }
}

@media only screen and (max-width: 900px) {

  ul li:hover>ul,
  ul li:focus-within>ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    font-size: 15px;
    position: absolute;
    z-index: 9999;
  }

  li :hover {
    color: #ccc;
  }

  #navigate {
    color: white;
    opacity: 10;
    height: auto;
    margin-left: -10px;
  }

  .items {
    opacity: 0;
    height: 0;
    font-size: 0;
  }

  li a {
    cursor: pointer;
  }

  nav {
    width: 30%;
    height: 30px;
    padding-top: 3px;
  }

  #icons {
    width: 20%;
  }
}

@media only screen and (max-width: 626px) {
  #selections {
    padding-top: 30px;
  }
}

@media only screen and (max-width: 541px) {
  #selections {
    padding-top: 50px;
  }
}

@media only screen and (max-width: 500px) {
  .logoHeader {
    width: 80px;
  }

  nav {
    width: 30%;
    padding-top: 40px;
  }

  #selections {
    padding-top: 30px;
  }
}

@media only screen and (max-width: 320px) {
  .logoHeader {
    margin-left: 0px;
  }

  #selections {
    padding-top: 60px;
  }
}
</style>
