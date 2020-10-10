import { mul } from './js/mathUtils';
console.log(mul(20,30));
require('./css/normal.css')
require('./css/special.less')
document.writeln('你好呀！less')
// import Vue from 'vue'
// new Vue({
//     el:'#app',
//     template:`
//     <div>
//         <h2>{{message}}</h2>
//         <button>按钮</button>
//     </div>
//     `,
//     data:{
//         message:'你好，我是配置在webpack的Vue',
//     }
// })
import Vue from 'vue'
//把下面的代码搬到vue的app.js中
// const App={
//     template:`
//     <div>
//         <h2>{{message}}</h2>
//         <button @click='btnClick'>按钮</button>
//     </div>
//     `,
//     data(){
//         return{
//             message:'你好，我是配置在webpack的Vue',
//         }
//     },
//     methods:{
//         btnClick(){
//         }
//     }
// }
// import App from './vue/app'
import App from './vue/App.vue'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})