

@testable(true)
class MyTestableClass {
}

function testable(isTestable) {
     return function (target) {
         target.isTestable = isTestable;
     }
}
// console.log(MyTestableClass.isTestable)
 
 // mixin
 import { mixins } from './mixins'

 const Foo = {
     foo () {
         console.log('foo')
     }
 }

 @mixins(Foo)

 class MyClass {}

 let obj = new MyClass()

//  obj.foo()

 

