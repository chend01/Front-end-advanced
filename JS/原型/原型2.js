/**
 * @desc 原型的理解 《JavaScript高级程序设计第四版》
 * 
 * 1.只要创建一个函数，默认就会创建prototype属性，指向原型对象
 * 2.原型对象自动获取constructor属性，指向构造函数
 */

function Person () {}

Person.prototype.name = 'aa';             // 给原型对象上添加属性
Person.prototype.sayName = function () {  // 给原型对象上添加方法
    console.log(this.name)
}

let person1 = new Person();      // new + 构造函数实例化创建新对象
let person2 = new Person();      // new + 构造函数实例化创建新对象


console.log(Person.prototype.constructor ==  Person)    // 原型对象的constructor指向构造函数
console.log(person1.__proto__ == Person.prototype)      // 实例化对象__proto__指向原型对象


// isPrototypeOf()
// Obejct.getPrototypeOf()
// Object.setPrototypeOf()
// Object.create()  
