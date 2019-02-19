<template>
    <div>
        <table border="1">
            <caption>IMDB</caption>
            <tr>
                <th>排名</th>
                <th>圖片</th>
                <th>年份</th>
                <th>名稱</th>
                <th>導演</th>
                <th>分數</th>
            </tr>
            <tr is='table-td' v-for="item in movieslist" :item='item'></tr>
        </table>
    </div>
</template>

<script>
    import TableTd from "./TableTd.vue";
    import * as todoTypes from '../store/todo-types.js';

    export default {
        components: {
            TableTd
        },
        data() {
            return {

            }
        },
        computed: {
            movieslist() {
                return this.$store.state.movies;    
            }
        },
        mounted() { // 生命週期 創建之後
            this.$store.dispatch(todoTypes.INIT);
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>