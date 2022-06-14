<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <vue-navigation-bar :options="navbarOptions" /> -->
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "#661c23",
        collapseButtonCloseColor: "#661c23",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        tooltipPlacement: "bottom",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Why Dunder Mifflin",
            arrowColor: "#659CC8",
          },
          {
            type: "link",
            text: "Contact",
            subMenuOptions: [
              {
                type: "link",
                text: "Customer Service",
              },
              {
                type: "link",
                text: "Accounting",
              },
            ]
          },
        ],
        menuOptionsRight: [
          {
            type: "button",
            text: "Signup",
            class: "button-red"
          },
          {
            type: "button",
            text: "Login",
            iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
          }
        ]
      }
    }
  }
}
</script>
<style>
@import '@/assets/base.css';

/* #app {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: center;
  font-weight: normal;
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  justify-content: flex-start;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

.hello-world {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
