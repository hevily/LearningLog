/* 
    零宽断言
断言：在正则中可以指明在指定的内容的前面或后面会出现满足指定规则的内容，
正则也可以像人类那样断定什么什么，比如"ss1aa2bb3", 正则可以用断言找出 
aa2 前面有 bb3，也可以找出 aa2 前面有 ss1.

零宽：就是没有宽度，在正则中，断言只是匹配位置，不占字符，也就是说，匹
配结果里是不会返回断言本身。
*/

/* 
    正向先行断言（正前瞻）
语法：(?=pattern)
作用：匹配pattern表达式的前面内容，不返回本身。
*/

var str = '<span class="read-count">阅读数：641</span><div>dfd</div>';
var reg = /.+(?=<\/span>)/;
console.log(reg.exec(str));
// '<div>aaa</div><span class="read-count">阅读数：641'
reg = /\d+(?=<\/span>)/;
console.log("reg====", reg.exec(str));
// '641'

/* 
    正向后行断言（正后顾）
语法：(?<=pattern)
作用：匹配pattern表达式的后面内容，不返回本身。
*/
var reg2 = /(?<=<span class="read-count">阅读数：)\d+/;
console.log("reg2====", reg2.exec(str));

/* 
    负向先行断言（负前瞻）
语法：（?!pattern）
作用：匹配非pattern表达式的前面内容，不返回本身。
*/
var str3 = "我爱祖国，我是祖国的花朵";
var reg3 = /祖国(?!的花朵)/;
console.log("reg3====", reg3.exec(str3));

var str4 = "ABC我爱祖国，我是祖国的花朵 Qwq我";
var reg4 = /(?!^)[A-Z]/g;
console.log(reg4.exec(str4));

/* 
    负向后行断言
语法：（?<!pattern）
作用：匹配非pattern表达式的后面内容，不返回本身
*/
var str4 = "我爱祖国，我是祖国的花朵";
var reg4 = /(?<!祖国)/;
console.log("reg4====", reg4.exec(str4));

/* 
文章链接：https://mp.weixin.qq.com/s/CBexZfG1DHYji_Pk6Zo38w
*/
