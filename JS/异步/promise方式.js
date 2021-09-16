/**
 * @desc 采用回调函数的方式
 */

 function add (xPromise, yPromise) {
    return Promise.all([xPromise,yPromise]).then(function(values) {
        return values[0] + values[1]
    })
}

add (fetchX(),fetchY()).then(function(sum){
    console.log(sum)
}) 