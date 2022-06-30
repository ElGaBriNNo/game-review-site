/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router.ts'
import 'vite/modulepreload-polyfill'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import PrimeVue from 'primevue/config';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import Carousel from 'primevue/carousel';
import store from "./store";
import axios from "axios";
//import VueYoutube from "node_modules/vue-youtube/src/vue-youtube.js";
//import Vuex from "vuex";
//import { createStore } from 'vuex'
const app = createApp(App)
app.use(store);
app.use(VueToast)

app.use(PrimeVue);
//app.use(VueYoutube);
app.use(createPinia())
app.use(router)
app.use(ConfirmationService);
app.use(ToastService);
//app.use(Vuex);
app.component('ProgressBar', ProgressBar);
//app.component('Youtube', VueYoutube);
app.component('Button', Button);
app.component('Divider', Divider);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Toast', Toast);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('Carousel', Carousel);
app.component('vue-navigation-bar', VueNavigationBar);

app.mount('#app')


