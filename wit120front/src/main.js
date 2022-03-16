import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'
import request from '@/utils/request';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false

Vue.use(ElementUI, {size: "small"});

Vue.use(MuseUI);

Vue.prototype.request=request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
