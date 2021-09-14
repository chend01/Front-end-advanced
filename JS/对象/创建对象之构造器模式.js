/**
 * @desc 使用构造器模式创建对象
 * 与工厂模式的区别：
 * 1.没有显式的创建对象
 * 2.没有return
 * 3.对象的属性和方法都赋值给this
 * 
 * 存在问题：
 * 1.构造函数定义的方法会在每个实例上都创建一遍
 * 2.定义的方法本质上都是new Function() 重新创建的，相当于每个实例化对象上都有同名但新实例化出来的函数
 * 
 * 优化方式就是可以把函数定义放在构造函数外部，但是这样会污染全局作用域
 * 
 */
function CreatePerson (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}

let person1 = new CreatePerson('aaa',25);
let person2 = new CreatePerson('bbb',28);

person1.sayName();
person2.sayName();