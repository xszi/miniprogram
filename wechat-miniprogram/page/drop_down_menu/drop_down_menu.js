Page({
  data: {
    content: [],
    px: [],
    pxopen: false,
    imgUrl: "../../images/down.png"
  },
  onLoad: function () {
    this.setData({
      px: ['>分类1', '>分类2']
    })
  },
  listpx: function (e) {
    console.log(e)
    if (this.data.pxopen) {
      this.setData({
        pxopen: false,
        imgUrl: "../../images/down.png"
      })
    } else {
      this.setData({
        content: this.data.px,
        pxopen: true,
        imgUrl: "../../images/up.png"
      })
    }
    console.log(e.target)
  }
})