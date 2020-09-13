// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await db.collection("newequip").doc(event._id).update({
      data: {
        status:1
      }
    })
  } catch (e) {
    console.error(e)
  }
}