// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在初始化函数中发起ajax请求 不用考虑同源策略
    // 默认情况下，小程序不允许跨域情趣，解决方案如下：
    // 1,在开发过程中，勾选上本地设置中的“不校验合法域名”选项，可以忽略跨域限制，可之子那个任意跨域地址的请求

    // 2,在项目上传发布之前，需要把项目中使用的跨域域名地址设置到小程序后台管理的合法域名列表

    this.ajax(false)
  },
  // 
  ajax(bottom) {
    // 请求之前先增加页码
    this.setData({
      page: this.data.page + 1
    })
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'https://m.douyu.com/api/room/list',
      data: {
        page: this.data.page
      },
      success: (res) => {
        console.log(res.data.data.list);
        if (bottom) {
          this.data.list.push(...res.data.data.list)
        } else {
          this.data.list.unshift(...res.data.data.list)
        }
        this.setData({
          list: this.data.list
        })
        // 立即结束下拉动作 并隐藏加载框
        wx.stopPullDownRefresh();
        wx.hideLoading()
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉");
    this.ajax(false)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上啦");
    this.ajax(true)
  },

  /**
   * 用户点击右上角分享
   */

  onShareAppMessage: function () {
    // 这个函数是分享功能的实现函数，页面有这个函数，即可实现分享 
  },
  onReady() {

  },
  // 子组件向父组件传值的时间函数
  childClick(data) {
    console.log(data);
    wx.showModal({
      content: data.detail.title + data.detail.url,
      title: "点击了直播房间",
      success: (res) => {

        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/newsdetail/newsdetail?detail=' + JSON.stringify(data.detail),
          })

          // 路由传值方法二：通过自定义事件传值
          wx.navigateTo({
            url: '/pages/newsdetail/newsdetail',
            success: (res) => {
              // 在成功的回调里面发送自定义事件
              res.eventChannel.emit("myevent", {
                name: 'zhangsan',
                age: 12,
                sex: '女'
              })
            }
          })
        }
      }
    })
  }
})