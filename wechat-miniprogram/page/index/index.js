// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demos: [{
        title: '小程序使用CSS3实现过渡下拉菜单',
        url: '/page/drop_down_menu/drop_down_menu'
      },
      {
        title: '小程序XXX',
        url: '2'
      },
      {
        title: '小程序YYY',
        url: '3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 到各个demo演示页
   */
  toDemo (e) {
    debugger
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
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

  }
})