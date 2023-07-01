Page({
  /**
   * 页面的初始数据
   */
  data: {
    isPlayMusic:false
  },
  bgm:null,
  music_coverImg:'../../image/invate2.jpg',
  music_url:'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWSUtBcWRtNnZaTm5NTjJDeWVVWVk4QkYzSm02ZnJyY0lGRDg1SlR5ZGM0WXc.mp3',
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.bgm=wx.getBackgroundAudioManager();
    this.bgm.title='世界这么大还是遇见你';
    this.bgm.epname='wedding';
    this.bgm.singer='程响';
    this.bgm.coverImgUrl='this.music_coverImg';
    this.bgm.src=this.music_url;
    this.bgm.onCanplay(()=>{
      this.bgm.pause()
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //组件的事件函数\
  onPlayMusic:function(){
    if(this.data.isPlayMusic){
      this.bgm.pause()
    }else{this.bgm.play()}
    this.setData({isPlayMusic:!this.data.isPlayMusic})
  },
  gotoCountDown : function(){
    wx.navigateTo({
      url: '../countDown/countDown',
    })  
  },
  gotoSchedule : function(){
    wx.navigateTo({
      url: '../Schedule/Schedule',
    })
  },
  gotoMenu : function(){
    wx.navigateTo({
      url: '../menu/menu',
    })
  },
  gotoAck1 : function(){
    wx.navigateTo({
      url: '../acknowledgments1/acknowledgments1',
    })
  },
  gotoAck2 : function(){
    wx.navigateTo({
      url: '../acknowledgments2/acknowledgments2',
    })
  },
  gotoWedPhoto : function(){
    wx.navigateTo({
      url: '../Wedding photo/Wedding photo',
    })
  }
})