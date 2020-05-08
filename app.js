App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次），更多用来获取用户信息，也可以用来进行网络请求
   * 注册App时，我们一般会做什么
   * 1.判断小程序的进入场景（群聊会话打开、小程序列表中打开、微信扫一扫打开、另一个小程序打开）
   * 2.监听生命周期函数
   * 3.保存全局变量
   */
  onLaunch: function () {
    
    console.log('小程序初始化完成：onLaunch');
    //异步调用
    wx.getUserInfo({
      //数据拿到之后，在进行回调的
      success:function(res){
        console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来：onShow');
    // 演示1.查看场景值并判断小程序的场景值
    console.log(options);
    switch(options.scene){
      case 1001:
        break;
    }
    //演示2.获取用户信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('程序发生错误时会执行');
  },
  //演示3.保存全局数据
  globalData:{
    name:"hello world",
    age:18,
  }
})
