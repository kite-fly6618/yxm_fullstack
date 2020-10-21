function generateHashTagCapitalStringWithHashTag(str) {
//    1.是否为空  .length == 0  null "" !
//    2.是否超过140字 .length
//    3.#  # + 
//    4.每个单词首字母大写
    // if(str)
    // if(!str || str.length >140) return false;
    // else{
//     return str.length > 140 || str == ''? false : '#' + str
//         .split(' ')
//         // es6中，数组的新方法，遍历数组的每一项
//         // 并用一个函数处理， 返回新的数组
//         .map(function(word) {
//         // console.log(word);
//         // js string 内置的方法
//         // hello -> Hello
//             return word.charAt(0).toUpperCase() + word.slice(1)
//         // return word.toUpperCase()
//         })
//         .join(' ')
//     }
function generateHashTagCapitalStringWithHashTag(str) {
    return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitallize).join(' ')
}

function capitallize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
    
}

generateHashTagCapitalStringWithHashTag('hello world ')