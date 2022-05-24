/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.ts'
import 'vite/modulepreload-polyfill'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
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

const app = createApp(App)

app.use(PrimeVue);

app.use(createPinia())
app.use(router)
app.use(ConfirmationService);
app.use(ToastService);

app.component('ProgressBar', ProgressBar);
app.component('Button', Button);
app.component('Divider', Divider);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Toast', Toast);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);


app.mount('#app')


