console.log('promise start');

function myPromise(cb) {
    cb && cb(this.resolve,this.reject)
    this.then = function (resFn,rejFn) {
        resFn && resFn(this.resolveInfo)
        rejFn && rejFn(this.rejectInfo)
    }
}

myPromise.prototype.resolve = function () {
    console.log('resolve==',arguments,this);
    this.resolveInfo = arguments[0]
}
myPromise.prototype.reject = function () {
    console.log('reject==', arguments);
    this.rejectInfo = arguments[0]
}


new myPromise(function (resolve,reject) {
    if(true) {
        resolve('成功')
    } else {
        reject('失败')
    }
}).then()