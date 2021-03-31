// pages/tags/tags.js
// 通过page()函数设置页面的数据和逻辑，参数是一个对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students:[1,2,3,4]

  },
  // 在data字段下面，写自定义函数
  btnClick:function(){

  },
  btnClick2:()=>{

  },
  btnClick3(){

  },

  /**
   * 生命周期函数--监听页面加载 相当于vue的created
   */
  onLoad: function (options) {
    // options参数用于接收路由跳转时url路径传值
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成  相当于vue中的mouted
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示 相当于vue中的reactive
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏  相当于vue中的dereactive
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载  相当于vue中的destoryed
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户下拉');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面触底');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})