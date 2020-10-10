<template>
    <div>
        <h2 class='title'>{{message}}</h2>
        <button @click='btnClick'>按钮</button>
    </div>
</template>

<script>
export default {
     data(){
        return{
            message:'你好，我是Cpn的message',
        }
    },
    methods:{
        btnClick(){
        }
    }
}
</script>

<style scoped>
    .title{
        color:black;
    }
</style>
