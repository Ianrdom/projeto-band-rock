import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./plugins/axios";
// import "./plugins/audio";
const app = createApp(App);

// import AudioVisual from "vue-audio-visual";

// app.use(AudioVisual);

app.use(createPinia());
app.use(router);

app.mount("#app");
