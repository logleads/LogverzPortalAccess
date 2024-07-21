import { createApp } from 'vue';

import App from '~/components/app.vue';
import { store } from './store';
const app = createApp(App);
app.use(store);
app.mount('#root');
// console.log('PORTAL ACCESS VUE VERSION: ', app.version);
