/**
 * @desc 原型模式: 将属性和方法都直接添加到prototype属性上，
 * 构造函数上什么都没有，使用构造函数实例化的对象仍然拥有属性和方法
 * 所以通过构造函数实例化的对象共享原型上的属性和方法
 */

function Person ();
Person.prototype.name = "aaa";
Person.prototype.age = 26;
Person.prototype.sayName = function () {
    console.log(this.name)
}


let person1 = new Person();
person1.sayName();

let person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName)   // true