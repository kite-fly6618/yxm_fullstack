// function doSomething(a) {
//     b = a + doSomethingElse(a * 2)
//     console.log(b*3)
//     var b;
//     function doSomethingElse(c) {
//         return c - 1
//     }
// }

// doSomething(2)


// var a = 2;

// (function () {
//     var a = 3
//     console.log(a);
// })()

// console.log(a);

// 块级作用域

// for (let i = 0;i< 10; i++) {
//     console.log(i);
// }
// console.log(i);

// var a = 1
// var a; 变量声明，会出现声明提升，变成全局变量，出现在页面顶部
// a = 1; 变量赋值
let a = 2
a = 3
console.log(a);
