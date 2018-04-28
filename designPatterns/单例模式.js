/**
 * 单例模式
 * 尽管单例模式有着合理的使用需求，但是通常当我们发现自己需要在javascript使用它的时候，
 * 这是一种信号，表明我们可能需要去重新评估自己的设计。
 * 这通常表明系统中的模块要么紧耦合要么逻辑过于分散在代码库的多个部分。
 * 单例模式更难测试，因为可能有多种多样的问题出现，例如隐藏的依赖关系，很难去创建多个实例，很难清理依赖关系，等等
 * 
 */

var SingletonTester = (function () {

    // options: an object containing configuration options for the singleton
    // e.g var options = { name: "test", pointX: 5};  
    function Singleton(options) {

        // set options to the options supplied 
        // or an empty object if none are provided
        options = options || {};

        // set some properties for our singleton
        this.name = "SingletonTester";

        this.pointX = options.pointX || 6;

        this.pointY = options.pointY || 10;

    }

    // our instance holder  
    var instance;

    // an emulation of static variables and methods
    var _static = {

        name: "SingletonTester",

        // Method for getting an instance. It returns 
        // a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }

            return instance;

        }
    };

    return _static;

})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5
});

// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log(singletonTest.pointX);  