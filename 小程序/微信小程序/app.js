// app.js 这个文件时小程序的入口文件，类似于vue中 main.js
App({
  // onLaunch()全局声明周期函数，程序启动后自动执行 类似于vue中的mounted
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
