// pages/guestWriting/guestWriting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  gotoMine : function(){
    wx.switchTab({
      url: '../mine/mine',
    })()
  },
  loginOut() {
    this.setData({
      userInfo:'',
      hiddenBlean1:true,
      hiddenBlean2:false,
      m:0
    })
    wx.request({
      url: '',
      method:'POST',
      header: {
        'Content-Type':'application/json'
      },
      success:res=> {
        console.log(res)
      }
    })
    wx.setStorageSync('user', null),
    wx.showToast({
      title: '已退出登录',
    })
  },
})