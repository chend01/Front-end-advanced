/**
 * @desc 普通构造函数与类构造函数
 * 1.调用方式不同，类构造函数必须使用new调用
 * 2.类构造函数必须使用class标识符
 */


// 普通构造函数

function aaaFun () {}

let p = aaaFun()

// 类构造函数

class aaaFun {
    constructor() {

    }
}

let s = new aaaFun()