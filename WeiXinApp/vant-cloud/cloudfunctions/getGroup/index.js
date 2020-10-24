// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yxm-6618-9g7ebb8jcba8f59b'

cloud.init()
const db = cloud.database({ env })  //指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库，里面是否具有该openId //查找where()  .get()
  // 按照这个openId把user-group里对应的数据取出
  // 去group这个库里面查找所有_id和groupId相同的数据
  // 返回给前端
}