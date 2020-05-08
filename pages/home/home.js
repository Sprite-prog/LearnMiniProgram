// pages/home/home.js
//getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);
//注册一个页面
//页面也有自己的生命周期
Page({

  /**
   * 页面的初始数据
   */
  //-----------------------------2.初始化数据--------------------------------
  data: {
    name: "Coderwhy",
    age: 18,
    students: [{
        id: 110,
        name: "123",
        age: 30
      },
      {
        id: 110,
        name: "123",
        age: 30
      },
      {
        id: 110,
        name: "123",
        age: 30
      },
      {
        id: 110,
        name: "123",
        age: 30
      }
    ],
    count: 0
  },
//---------------------------------1.监听页面生命周期--------------------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad");
    wx.request({
      url: '',
      success(res){

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //------------------------------------3.监听wxml中的事件----------------------
  handleBtnClick() {
    //1.错误做法，界面是不会监听数据更新
    // this.data.count += 1;
    // console.log(this.data.count);

    //2.this.setData()
    this.setData({
      count: this.data.count + 1
    })
  },
  handleSubtraction() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleUserInfo(event) {
    console.log(event);
  },
  //编程范式：
  //1.命令式编程：原生操作DOM
  //2.声明式编程：Vue/React/Angular
  //------------------------------------4.监听其他事件--------------------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部');
  },
  //监听下拉刷新onPullDownRefresh()
})