// Example 1

// function a1(){
//     var x1=20;
//     function b1(){
//         console.log(x1)
//     }
//     return b1;
// }
// a1()();
// Output: 20

// Example 2

// function a2(){
//     var i=1;
//     setTimeout(()=>{
//         console.log(i)
//     },3000)
//     console.log("hello")
// }
// a2();

// output: hello 
//         1

// Example 3

// function a3(){
//     for(var i =1;i<6;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// a3();

// output: 6
// to correct it we use let

// function a4(){
// for(let i =1;i<6;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
//     }
// }
// a4();

// output: 1
//         2
//         3
//         4
//         5

// or we can also do without let

// function a() {
//     for (var i = 1; i < 6; i++) {
//         function b(x) {
//             setTimeout(() => {
//                 console.log(x)
//             }, x * 1000)
//         }
//         b(i);
//     }

// }
// a();

// output: 1
//         2
//         3
//         4
//         5