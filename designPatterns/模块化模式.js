/**
 * 在JavaScript中，实现模块有几个选项，他们包括：
 * 模块化模式:
 * 模块化模式最初被定义为一种对传统软件工程中的类提供私有和公共封装的方法
 * 在JavaScript中，模块化模式用来进一步模拟类的概念，通过这样一种方式：
 * 我们可以在一个单一的对象中包含公共/私有的方法和变量，从而从全局范围中屏蔽特定的部分。
 * 这个结果是可以减少我们的函数名称与在页面中其他脚本区域定义的函数名称冲突的可能性。
 * 
 * 对象表示法
 * AMD模块
 * CommonJS 模块
 * ECMAScript Harmony 模块
 * 
 * 缺点：模块模式的缺点是因为我们采用不同的方式访问公有和私有成员，
 * 因此当我们想要改变这些成员的可见性的时候，
 * 我们不得不在所有使用这些成员的地方修改代码。
我们也不能在对象之后添加的方法里面访问这些私有变量。
也就是说，很多情况下，模块模式很有用，并且当使用正确的时候，潜在地可以改善我们代码的结构。
其它缺点包括不能为私有成员创建自动化的单元测试，
以及在紧急修复bug时所带来的额外的复杂性。根本没有可能可以对私有成员打补丁。相反地，
我们必须覆盖所有的使用存在bug私有成员的公共方法。开发者不能简单的扩展私有成员，因此我们需要记得，
私有成员并非它们表面上看上去那么具有扩展性。
 */

 // ExtJS关于模块化的例子

 

// create namespace
Ext.namespace("myNameSpace");

// create application
myNameSpace.app = function () {

    // do NOT access DOM from here; elements don't exist yet
    // private variables

    var btn1,
        privVar1 = 11;

    // private functions
    var btn1Handler = function (button, event) {
        console.log("privVar1=" + privVar1);
        console.log("this.btn1Text=" + this.btn1Text);
    };

    // public space
    return {
        // public properties, e.g. strings to translate
        btn1Text: "Button 1",

        // public methods
        init: function () {

            if (Ext.Ext2) {

                btn1 = new Ext.Button({
                    renderTo: "btn1-ct",
                    text: this.btn1Text,
                    handler: btn1Handler
                });

            } else {

                btn1 = new Ext.Button("btn1-ct", {
                    text: this.btn1Text,
                    handler: btn1Handler
                });

            }
        }
    };
}();