// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   list:[],
   img:[],
   time:"",
   beforList:[],
   week:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],                                                                                          
  },
  
  onLoad() {
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success:(res)=>{
        console.log(res.data);
        this.setData({
          img:res.data.top_stories,
          list:res.data.stories,
          time:res.data.date,
        })
      }
    })
  },
  onShareAppMessage: function () {
    // 这个函数是分享功能的实现函数，页面有这个函数，即可实现分享 
  },
  onPullDownRefresh:function(){
  
  },
  week(date){
    date = date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)
    var newDate = new Date(date);
    var mouth =  newDate.getMonth() + 1;
    var day = newDate.getDay();
    var date = newDate.getDate()
    var weekArr = ["日","一","二","三","四","五","六"];
    return mouth+"月"+date+"日"+'星期'+weekArr[day]
  },
  onReachBottom:function(){
    
    wx.request({
      url: `https://news-at.zhihu.com/api/4/news/before/${this.data.time}`,
      success:(res)=>{

        var date = res.data.date.slice(0,4)+"-"+res.data.date.slice(4,6)+"-"+res.data.date.slice(6,8)
        var day = new Date(date).getDay();
        var weekArr = ["日","一","二","三","四","五","六"]
        this.data.beforList.push(...[{date:res.data.date.slice(4,6)+"月"+res.data.date.slice(6,8)+"日"+'星期'+weekArr[day],...[res.data.stories]}]);
        console.log(this.data.beforList);

        this.setData({
          time:res.data.date,
          beforList:this.data.beforList
        })
      }
    })
  }
})
