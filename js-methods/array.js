Array.prototype.myLength = 0;
function Array1(arr) {
  console.log("初始化");
}
Array.prototype.constructor = Array1;
/**
 * 打印数组实例的时候，为什么会调用push方法呢？
 */
Array.prototype.push = function() {
  var len = arguments.length;
  var nowLen = this.length;
  for (var i = 0; i < len; i++) {
    this[nowLen + i] = arguments[i];
  }
  console.log("调用push方法");
  //   this.myLength = len + nowLen;  // 加在数组身上
  this.__proto__.myLength = len + nowLen; // 加载数组原型上
  return this.length;
};

Array.prototype.unshift = function() {
  console.log("unshift--", arguments, Array.prototype.slice.apply(arguments));
  this.splice.apply(
    this,
    [0, 0].concat(Array.prototype.slice.apply(arguments))
  );
  return this.length;
};

Array.prototype.unshift = function() {
  var len = arguments.length;
  var nowLen = this.length;
  for (var i = 0; i < nowLen; i++) {
    this[len + i] = this[i];
  }
  for (var j = 0; j < len; j++) {
    this[j] = arguments[j];
  }
  console.log("调用unshift方法");
  this.__proto__.myLength = len + nowLen;
  return this.length;
};

Array.prototype.pop = function() {
  var len = this.length - 1;
  var last = this[len];
  this.__proto__.myLength = len;
  this.length = len;
  return last;
};
// 需要改变数组才能实现，
Array.prototype.shift = function() {
  var len = this.length - 1;
  var first = this[0];
  this.__proto__.myLength = len;

  this.length = len;
  return first;
};
const arr = [1, 9, 8];
// arr.push(2, 4, 56, 7);
arr.unshift(2, 3, 5, 6);

// var pop = arr.pop();
// console.log("pop--", pop);

console.log(arr, arr.length, arr.myLength);
