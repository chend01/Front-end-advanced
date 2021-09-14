/**
 * @desc 使用工厂模式创建对象
 * 使用场景： 解决创建多个类似对象的问题
 * 存在问题： 新创建的对象的类型无法判断
 */

function createPerson (name, age) {
    let yObj = new Object();
    yObj.name = name;
    yObj.age = age;
    yObj.sayName = function () {
        console.log(this.name)
    }
    return yObj
}

let person1 = createPerson('aaa',18)
let person2 = createPerson('bbb',22)