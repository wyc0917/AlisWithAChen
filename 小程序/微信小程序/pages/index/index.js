// index.js  是存放小程序数据和逻辑的文件
// 获取应用实例
const app = getApp()

Page({
  data: {
    name:"请输入你的姓名",
    ageRange:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
    index:0,
    sex:"男"
  },
  alert1(){
    // 1,消息提示框
    wx.showToast({
      title: '消息提示框最多7字',
      icon:"none" //取消图标，文字可以多余7个 
    })
  },
  alert2(){
    // 2，模态框
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'模态对话框',
      content:"内容",
      success:(res)=>{
        console.log(res.confirm);
      }
    })
  },
  alert3(){
    // 3,加载框
    wx.showLoading({
      title: '正在加载中...',
      // mask:true
    })
  },
  alert4(){
    // 4，操作菜单
    wx.showActionSheet({
      itemList: ["阿狸","妲己","貂蝉"],
      alertText:"请选择",
      success:(res)=>{
        console.log(res.tapIndex);
      }
    })
  },
  goNext(){
    // 页面跳转，不能跳转到tabBar这值得页面
    // 只能跳转二级页及以下页面
    wx.navigateTo({
      url: `/pages/tags/tags?name=${this.data.name}&age=${this.data.ageRange[this.data.index]}&sex=${this.data.sex}`,
    })
  },
  changeName(e){
    console.log(e.detail.value);
    this.setData({
      name:e.detail.value
    })
  },
  changeAge(e){
    console.log(e.detail.value*1);
    this.setData({
      index:e.detail.value*1
    })
  },
  changeSex(e){
    console.log(e.detail);
    this.setData({
      sex:e.detail.value
    })
  },
  onLoad() {
  
  },
  getUserProfile(e) {
   
  },
  getUserInfo(e) {
   
  },
  onReady(){
    // 开启当前页的分享功能
    wx.showShareMenu()
  }
})
