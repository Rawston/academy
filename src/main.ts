import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import axios from 'axios'
import { URL_API } from './configs/api'

axios.defaults.baseURL = URL_API

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
