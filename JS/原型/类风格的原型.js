/**
 * 编写类风格的代码
 */

var Person = Object.subClass({      // 使用subClass() 创建一个Person类作为Object的一个子类
    init: function (isDancing) {
        this.dancing = isDancing
    },
    
    dance: function () {
        return this.dancing
    }
});

var Ninja = Person.subClass({   // 继承Person类创建一个新类
    init: function() {
        this._super(false)      // 调用父类构造器的方法
    },
    dance: function () {
        return this._super()
    },
    swingSword: function () {
        return true
    }
})

