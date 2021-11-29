import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import './assets/css/main.css';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);
app.use(mdiVue, {icons: mdijs})
app.use(router);
app.use(store, key);
app.mount('#app');
