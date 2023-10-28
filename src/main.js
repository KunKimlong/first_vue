import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
// import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css';
import 'primevue/resources/themes/lara-light-teal/theme.css'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App);
app.mount("#app");
app.use(PrimeVue);
