import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/style.css'; 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App);

app.use(router);
app.use(Toast); 

app.mount('#app');
