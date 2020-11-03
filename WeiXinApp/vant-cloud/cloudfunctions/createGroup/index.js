// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yxm-6618-9g7ebb8jcba8f59b'

cloud.init()
const db = cloud.database({ env })  //指明云函数生效的环境
// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo // event不仅包含前端传递的参数，还会携带用户信息
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
  .then(res => { //只有一个参数可以省略括号
    return db.collection('user-group').add({
      data: {
        groupID: res._id,
        userID: userInfo.openId,
        invalid: false
      }
    })
  })
}