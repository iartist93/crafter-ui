import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './index.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
