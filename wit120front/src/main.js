import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Button, Select } from 'element-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')