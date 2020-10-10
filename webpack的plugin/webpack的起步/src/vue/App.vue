<template>
    <div>
        <h2 class='title'>{{message}}</h2>
        <button @click='btnClick'>按钮</button>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    //引用Cpn.vue的模板,得注册Cpn组件
     data(){
        return{
            message:'你好，我是配置在webpack的Vue',
        }
    },
    methods:{
        btnClick(){
        }
    },
    components:{
        Cpn
    }
}
</script>

<style scoped>
    .title{
        color:green
    }
</style>

