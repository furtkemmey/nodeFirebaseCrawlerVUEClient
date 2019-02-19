// npm install --save-dev vue-loader
import Vue from "vue";
// 引入自訂components
import MyApp from "./componets/MyApp.vue";
import store from "./store/index.js";

new Vue({
    el: "#app",
    store,
    data: {
        
    },
    components: {  // 組件 註冊在根節點
        MyApp
    },
    computed: {
    }
});