import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/style.css'; 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Crie a instância do Vue e use o Toast
const app = createApp(App);

app.use(router);
app.use(Toast); // Adicione esta linha para usar o toast

app.mount('#app');
