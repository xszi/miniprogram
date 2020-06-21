// 使用了 async await 语法

const cloud = require('wx-server-sdk')
cloud.init({})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "o9DoZ4wYl4fUqCeDH1fzO2n6caHA"
    })
      .update({
        data: {
          price: "100元"
        },
      })
  } catch (e) {
    console.error(e)
  }
}