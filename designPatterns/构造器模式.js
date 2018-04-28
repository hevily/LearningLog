function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

}


// 注意这里我们使用Note here that we are using Object.prototype.newMethod 而不是 
// Object.prototype ，以避免我们重新定义原型对象
Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// 使用:

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log('运行',civic.toString());
console.log(mondeo.toString());