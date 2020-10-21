// const cfw = {
//     name: '陈方文',
//     company: '百度',
//     sex: '男'

// }

// var describ = function(obj) {
//     document.write(this.name+"的个人信息：\n"+"公司："+this.company + "\n性别"+this.sex)
// }

// describ(cfw);

// console.log(`${cfw.name},性别${cfw.sex},就职于${cfw.company}`)

// const yds = {
//     name: '叶红风',
//     company: '滴滴',
//     sex: '男'
// }
// console.log(`${yds.name},性别${yds.sex},就职于${yds.company}`)

/*
方法一：（不常用）
var getUserInfo = function(user) {
    if(!user){
        return;
    }
    console.log(`${user.name},性别${user.sex},就职于${user.company}`)
}
getUserInfo(yds)
*/

//主流方法：
// getUserInfo = function (user) {
//     if(!user) return;
//     console.log(`${user.name},性别${user.sex},就职于${user.company}`)
// }