import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
const app=createApp(App)
getVant(app)//很重要，引入vant组件库
app.use(store)
app.use(router).mount('#app')
