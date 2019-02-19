import Vuex from 'vuex';
import Vue from 'vue';
import createLogger from './logger/logger.js';
import todoActions from './actions/todoActions.js';
import * as todoTypes from './todo-types.js';
Vue.use(Vuex);

const store = new Vuex.Store({
// state, mutations, getters, actions
    state: {
        movies: []
    },
    mutations: {
        [todoTypes.INIT](state, val) {   
            state.movies = val;
            // console.log(state.movies);
        }
        
    },
    actions: {
        ...todoActions // 插件 "babel-plugin-transform-object-rest-spread": "^6.23.0"
    },
    plugins: [
        createLogger() //logger
    ],
    getters: {

    }
});
export default store;