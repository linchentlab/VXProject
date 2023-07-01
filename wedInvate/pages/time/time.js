Page({
  data: {
    danmuTxt:'',
    list: [{
      id: '0001',
      title: '示例视频1',
      videoUrl: 'http://www.hnuit.edu.cn/u/cms/www/202207/01165214gaku.mp4'  /*真滴尬*/
    },
    {
      id: '0002',
      title: '示例视频2',
      videoUrl: 'https://video.699pic.com/videos/69/42/42/a_xmc4ecAM1bUH1683694242_10s.mp4'
    },
    {
      id: '0003',
      title: '示例视频3',
      videoUrl: 'https://video.699pic.com/videos/65/01/14/b_iDb8k62vs1kQ1683650114_10s.mp4'
    },
    {
      id: '0004',
      title: '示例视频4',
      videoUrl: 'https://video.699pic.com/videos/85/85/67/a_PkuZpgfUSwjG1682858567_10s.mp4'
    }
  ]
  },
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('myVideo')
  },
  playVideo: function (e) {
    this.videoCtx.stop()
    // 停止播放之前正在播放的视频
    this.setData({
      src: e.currentTarget.dataset.url
    })
    // 更新视频地址
    this.videoCtx.play()
    // 播放新的视频
  },
  sendDanmu:function(e){
    let text=this.data.danmuTxt
    this.videoCtx.sendDanmu({
      text:text
    })
  },
  gotoCoupleProfile : function(){
    wx.navigateTo({
      url: '../Couple Profile/Couple Profile',
    })
  }
})
