// function identify () {
//     return this.name.toUpperCase()
// }

// function speak() {
//     var greeting = "Hello I am " + identify.call(this)
//     console.log(greeting)
// }

// var me = {
//     name: "wn"
// }

// var you = {
//     name: "yb"
// }

// speak.call(me);

// function foo() {
//     console.log(this.a);
// }
// var a =2;

// (function() {
//     "use strict"
//     foo(); // 严格模式下，foo()调用与位置无关
// })


// 隐式绑定
// function foo() {
//     console.log(this.a);
// }

// var obj2 = {
//     a: 3,
//     foo: foo // function foo() {console.log(this.a);}
        
// }

// var obj1 = {
//     a : 2,
//     obj2: obj2
// }


// obj2.foo()
// obj1.obj2.foo()


// 多次引用，导致隐式丢失,最后应用默认引用
function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 3,
    foo: foo // function foo() {console.log(this.a);}
        
}

var bar = obj.foo
var a = 'hello'
bar()