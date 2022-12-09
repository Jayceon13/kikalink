import store from "./store";
import Axios from "axios";
import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

// importing AOS css style globally
import 'aos/dist/aos.css'

const app = createApp(App);

app.mount('#app')


Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
