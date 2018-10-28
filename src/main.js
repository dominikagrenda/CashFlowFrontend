import Vue from 'vue';
import ElementUI from 'element-ui';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Axios);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
});
