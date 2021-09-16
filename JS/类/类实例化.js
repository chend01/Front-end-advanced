/**
 * @desc  使用new操作符+构造函数实例化对象
 * 1、在内存中创建一个对象
 * 2、新对象的__proto__指向构造函数的原型对象
 * 3、构造函数内部this指向新对象
 * 4、执行构造函数内部代码
 * 5、如果构造函数返回非空对象，则返回，否则返回刚创建的多谢
 * 
 */

class Animal {

}

class Person {
    constructor(){
        console.log('person color');
    }
}

class Vegetable {
    constructor () {
        this.color = "blue"
    }
}

let  a = new Animal();
let p = new Person();

let v = new Vegetable();