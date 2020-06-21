//index.js
const app = getApp()

Page({
  data: {

  },
  toStart: function () {
    wx.switchTab({
      url: '../videos/videos',
    })
  },
  onLoad: function() {
    this.initData();
  },

  initData() {
    console.log("haha")
    let baseUrl = 'http://wangjiuhua.com';
    let api = '/user/register'
    let url = baseUrl + api
    wx.request({
      url,
      data: {
        username: '111',
        password: '222',
        repassword: '222'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success(res) {
        console.log(res, "biubiu")
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})
