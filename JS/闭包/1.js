
// 1

function test () {
    const a = 1
    return function() {
        console.log('a',a)
    }
}

let fn = test()
const a = 2
fn()     // a,1


// 2

function test2 () {
    const b = 1;
    fn();
}

const b = 2;
function fn1 () {
    console.log('b',b)
}
test2()    // b,2
