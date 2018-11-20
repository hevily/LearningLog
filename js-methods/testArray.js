/*
测试数组性能
https://zhuanlan.zhihu.com/p/29650254
https://mp.weixin.qq.com/s/z4lgwOfFiXpcSMtrHQxhbA
http://es6.ruanyifeng.com/#docs/arraybuffer
*/


// 大量数据的时候预设值数组长度，性能大幅提升
const num = 10000000
var arr =  []
arr.length = num 
console.time('Array time1');
for(let i = 0;i<num;i++) {
    arr[i] = i
}
console.timeEnd('Array time1');

// 测试ArrayBuffer
const num2 = 10000000
const buffer = new ArrayBuffer(num2*4)
var arr2 = new Int32Array(buffer)
console.time('Array time2');
for(let i = 0;i<num2;i++) {
    arr2[i] = i
}
console.timeEnd('Array time2');

// 数组存不同类型的数据，非常耗时
const num3 = 10000000
var arr3 =  []
arr3.length = num3
arr3.push({test: 1212})
console.time('Array time3');
for(let i = 0;i<num3;i++) {
    arr3[i] = i
}
console.timeEnd('Array time3');

