// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoMine: function (options) {   
    wx.switchTab({      
      url: '../mine/mine',    //要跳转到的页面路径
    })  
  },
  gotoGuestWriting : function(){
    wx.redirectTo({
      url: '../guestWriting/guestWriting',
    })
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
   //清除缓存
 
  clear:function(){
    wx.clearStorageSync();//清除缓存
    wx.showToast({
      title: '退出登录成功',
      icon: 'none',
      duration: 2000,
      success: function () {
        setTimeout(function () {
          wx.reLaunch({
            url: '/pages/mine/mine',
          })
        }, 0);
     }
  })

},
})