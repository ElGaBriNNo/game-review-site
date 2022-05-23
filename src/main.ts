/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.ts'
import 'vite/modulepreload-polyfill'
import PrimeVue from 'primevue/config';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
const app = createApp(App)

app.use(PrimeVue);

app.use(createPinia())
app.use(router)

app.component('ProgressBar', ProgressBar);
app.component('Button', Button);

app.mount('#app')


