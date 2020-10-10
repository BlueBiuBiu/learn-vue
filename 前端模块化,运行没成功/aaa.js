 var flag=true
 var name='小李'
 function sum(sum1, sum2){
    return sum1 + sum2
 }
 class Person{
     run(){
         console.log('在奔跑');
         
     }
     
 }
//第一种导出
 export{
     flag,name,sum,Person
 }
 //第二种导出
 export var flag=true
 //第三种导出 只能有一个
 export default flag
