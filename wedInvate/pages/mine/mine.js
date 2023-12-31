Page({
  data: {
       hiddenBlean1:true,
       hiddenBlean2:false,
       userInfo:'',//用户信息
       nickName:'',//用户姓名
       avatarUrl:'',//用户头像地址
       m:0,//用户的登录状态
       array:['','1','2','3','4','5人以上'],
       selectindex:0
  }, 
//退出登录
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
 
//获取用户信息
  getUersProfile:function() {
    if(this.data.m==0) {
      wx.getUserProfile({
        desc: '登陆后使用全部功能',
        success:(res)=> {
          let user = res.userInfo
          console.log('获取成功',res)
          wx.setStorage({
            data: res.userInfo,
            key:'userInfo',          
          });
 
          wx.login({//获取code向后端发送并请求token
            success(res) {
              console.log(res.code)
              let code = res.code            
              wx.request({
                url: '' + res.code,
                method:'POST',
                header: {
                    'Content-Type':'application/json'
                },             
                success:res=>{
                   console.log(res)
                   console.log(res.data.data.token)
                   wx.setStorageSync('token', res.data.data.token)
                }
              })
            }
          });         
        console.log('用户信息',res.userInfo),
        console.log(res.userInfo.nickName),
          this.setData({
            m:1,
            nickName : res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
            hiddenBlean2:true,
            hiddenBlean1:false
          })
          wx.showToast({
            title: '登陆成功',
          })
          wx.hideToast()
          this.onShow();
        },
        fail:(res)=> {
          console.log('授权失败',res)
        }
      })
    }
    else {
      wx.showToast({
        title: '您已经登录了',
      })
    }
  },
  onPicker:function(e){
    this.setData({selectindex:e.detail.value})
  },
//跳转到info页面
  gotoInfo: function (options) {
    wx.navigateTo({
      url: '../info/info',//要跳转到的页面路径
    })  
  },
  gotoServices : function(){
    wx.navigateTo({
      url: '../services/services',
    })
  },
  gotoWonderfulMoment : function(){
    wx.navigateTo({
      url: '../wonderfulmoment/wonderfulmoment',
    })
  }
})