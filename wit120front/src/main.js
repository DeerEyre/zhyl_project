import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Button, Select } from 'element-ui';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.use(MuseUI);

Vue.config.productionTip = false
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')