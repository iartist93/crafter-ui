import Vue from 'vue';
import App from './App.vue';
import './index.css';

import VueCompositionAPI from '@vue/composition-api';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
