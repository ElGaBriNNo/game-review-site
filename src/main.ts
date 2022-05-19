/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.ts'
import 'vite/modulepreload-polyfill'
import PrimeVue from 'primevue/config';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';

const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.mount('#app')

app.component('ProgressBar', ProgressBar);
app.component('Button', Button);
