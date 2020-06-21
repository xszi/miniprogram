// pages/mall/mall.js
const db = wx.cloud.database()
const book = db.collection('mybook')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    db.collection('mybook').get({
      success: res => {
        console.log(res.data)
        // console.log(this);
        this.setData({
          book_list: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 到查看详情页
   */
  toBookDetail: function (event) {
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: './bookDetail/bookDetail?id=' + id
    })
  },
  /**
   * 扫码加书
   * https://api.douban.com/v2/book/isbn/9787121177408
   */
  scanCode: function (event) {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: (res) => {
        wx.cloud.callFunction({
          name: 'bookinfo',
          //传递给云函数的参数
          data: {
            isbn: res.result
          },
          success: res => {
            var bookString = res.result;
            console.log(JSON.parse(bookString))
            const db = wx.cloud.database()
            const book = db.collection('mybook')
            db.collection('mybook').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookString)
            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
          },
          fail: err => {
            console.log(err)
          }
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
})