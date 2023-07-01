// pages/countDown/countDown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days: 8,
    hours: 23,
    minutes: 56,
    seconds: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onLoad: function () {
    var that = this;
    var targetTime = new Date('2023-06-09T00:00:00Z').getTime(); 
    setInterval(function () {
      var currentTime = new Date().getTime(); 
      var timeRemaining = targetTime - currentTime; 
      that.setData({
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
        seconds: Math.floor((timeRemaining / 1000) % 60)
      });
    }, 1000);
  },
  gotoIndex : function(){
    wx.switchTab({
      url: '/pages/index/index',
    }) 
  }
})