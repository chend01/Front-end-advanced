/**
 * @desc 契约的方式
 */

// 两者本质上是相等的
let p = new Promise((resolve,reject)=> resolve())
let p2 = Promise.resolve();


//