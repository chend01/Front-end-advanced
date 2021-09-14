/**
 * @desc 原型作为对象的概览，有两种方式添加属性方法：
 * 1. 原型给对象实例添加属性
 * 2. 构造器函数内给对象实例添加属性方法
 * 
 * 优先级： 构造器内部添加的方式优先级最高，原因是构造器内部this上下文指向构造器本身，直接初始化
 */

function testY () {
    this.isYan = true;
    this.setYanVal = function () {
        console.log('构造器内部：',!this.isYan)
        return !this.isYan
    }
}
testY.prototype.setYanVal = function () {
     console.log('原型：',this.isYan)
    return this.isYan
}

let newYan = new testY();
newYan.setYanVal();



/**
 * @desc 第二种方式，结果与上面的是一致的，原因是，秉持最小复杂度原则，既然在函数构造器内部能找到属性方法，那么会直接使用，避免通过原型的方式再去找
 * 
 */
function testY () {
    this.isYan = true;
    this.setYanVal = function () {
        console.log('构造器内部：',!this.isYan)
        return !this.isYan
    }
}
let newYan2 = new testY();

testY.prototype.setYanVal = function () {
     console.log('原型：',this.isYan)
    return this.isYan
}
newYan2.setYanVal();