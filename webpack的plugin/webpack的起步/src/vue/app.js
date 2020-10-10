export default{
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click='btnClick'>按钮</button>
    </div>
    `,
    data(){
        return{
            message:'你好，我是配置在webpack的Vue',
        }
    },
    methods:{
        btnClick(){
        }
    }
}