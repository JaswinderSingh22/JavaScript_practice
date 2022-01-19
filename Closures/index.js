// Example 1

function a(){
    var x=0;
    function b(){
        console.log(x)
    }
    return b;
}
a()();