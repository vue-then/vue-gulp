import Vue from 'vue';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import router from "./router";






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