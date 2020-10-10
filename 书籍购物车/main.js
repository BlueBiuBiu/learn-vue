const app=new Vue({
    el:'#app',
    data: {
        list: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        increment(index){
            return this.list[index].count++;
        },
        decrement(index){
            return this.list[index].count--;
        },
        // getFinalPrice(){
        //     let total= 0
        //     for(let price of this.list){
        //         total += price.price*price.count; 
        //     }
        //     return total
        // }
        removeClick(index){
            this.list.splice(index,1);
        }
    },
    computed: {
        getFinalPrice(){
            let total= 0
            for(let price of this.list){
               total += price.price*price.count; 
           }
            return total
        },
        getFinalPrice2(){
            return this.list.reduce(function(pre,list){
                return pre+list.count*list.price;
            },0)
        },
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }
}
)