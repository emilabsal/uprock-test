import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/styles.scss';
import { VueCookieNext } from 'vue-cookie-next';
import router from './router';
import store from './store';

VueCookieNext.config({ expire: '1d' });

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCookieNext);
app.mount('#app');
