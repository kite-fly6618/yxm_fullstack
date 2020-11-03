// function foo() {
//     console.log(this.a)
// }
// var bar = {
//     a: 2
// }
// foo.call(bar)

var a = {
    user: 'woniu',
    fn: function(q,w) {
        console.log(this.user);
        console.log(q+w);
    }
}
// a.fn()
var b = a.fn
// b.call(a,2,3)
// b.apply(a,[2,3])
// b.bind(a) //bind返回一个函数，但是没有执行,需要手动调用执行
var c = b.bind(a,2,3)
c(21,23)
