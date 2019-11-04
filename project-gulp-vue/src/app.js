import Vue from 'vue';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import router from "./router";

//适配
import '../assets/js/flexible';




var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello Vue!'
    },
    components: {
        Hello2
    }
});