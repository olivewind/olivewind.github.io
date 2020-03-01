import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Components from './components';
import router from './router';
import './plugins/daovoice';

Vue.use(Components);
Vue.use(VueRouter);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
});
