// 第一种导入
import {flag,name,sum,Person} from './aaa'
console.log(flag);
console.log(name);
console.log(sum(10,20));
Person.run();
//第二种导入 会导入export defalut里面的变量,aaa是命名，可以随意取
import aaa from  './aaa'
//第三种导入 aaa为命名，可以随意取,表示导入全部值,到时候直接运用就好
import * as aaa from './aaa'
console.log(aaa.flag);

