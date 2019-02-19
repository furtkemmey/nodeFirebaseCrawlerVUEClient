<template>
    <tr>
        <td>{{item.Rank}}</td>    
        <!-- 圖片加上連結     -->
        <td>
            <a v-bind:href="item.href" target="_blank">
                <img :src="item.img">
            </a>
        </td>
        <td>{{item.year}}</td>
        <!-- 名稱 -->
        <td>
            <a v-bind:href="item.href" target="_blank">{{item.title}}</a>
        </td>
        <td>{{item.Dir}}</td>
        <td>{{item.Rating}}</td>
    </tr>
</template>

<script>
    import * as todoTypes from '../store/todo-types.js';
    export default {
        props: [
            "item"
        ],
        data() {
            return {
                
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>