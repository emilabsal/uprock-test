import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import router from './router';
import store from './store';
import { VueCookieNext } from 'vue-cookie-next';

VueCookieNext.config({ expire: '7d', secure: '', sameSite: 'Lax' });

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCookieNext);
app.mount('#app');
