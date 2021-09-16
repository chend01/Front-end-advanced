/**
 * @desc 采用回调函数的方式
 */

function add (getX,getY,cb) {
    var x, y;
    getX( function (xVal) {
        x = xVal;
        if(y != undefined){
            cb(x + y)
        }
    });

    getY( function (yVal) {
        y = yVal;
        if(x != undefined){
            cb(x + y)
        }
    })
}


add(fetchX,fetchY,function(sum){
    console.log(sum)
})