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
  let groupList = await db.collection('user-group').where({ //groupList返回的形式： {data: {...}}
    userId: openId
  }).get()
  let returnResult = []
  for ( let item of groupList.data) {
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted:false
    }).get()
    
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a,b) =>a.createTime < b.createTime ? 1 : -1)  //降序排列
}