// component/news_day.js.js


// 小程序中页面和组件是不同的，页面使用Page()创建,组件使用Component()创建
Component({
  /**
   * 组件的属性列表 用于父组件向子组件传值
   */
  properties: {
    // 睡醒定义时，值是属性数据类型（vue属性验证写法）
    dayList:Array
  },

  /**
   * 组件的初始数据  组件内部的动态数据
   */
  data: {

  },

  /**
   * 组件的方法列表  定义组件中的自定义函数
   */
  methods: {
    tapNews(e){
      console.log("点击了新闻",e.currentTarget.dataset);
      this.triggerEvent("myclick",e.currentTarget.dataset)
    }
  },
  // 组件的生命周期函数
  lifetimes:{
    created(){console.log("组件已创建");},
    attached(){console.log("组件将要渲染")},
    ready(){console.log("组件已经渲染")},
     moved(){console.log("组件在DOM中的位置发生变化")},
     detached(){console.log("组件被销毁")},
     error(){console.log("组件报错")},
  },
  // 组件所在页面上的生命周期
  pageLifetimes:{ 
    show(){console.log("页面显示");},
    hide(){console.log("页面隐藏");},
    resize(){console.log("页面重置");}
  },
  



})
