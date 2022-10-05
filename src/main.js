// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

// import router from '@/router';
import router from '@/router.js'
// import { Chart } from 'chart.js'

createApp(App).use(router).use(VueChartkick).use(RingLoader).mount('#app')
