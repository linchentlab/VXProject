Page({
  data: {
    menuList: [
      {
        title: '开胃菜',
        desc: '法式鹅肝、海参花开、鱼翅翅皇、甜汤醃桃蘑、凤爪柠檬芥茉汁',
        price: 178.00
      },
      {
        title: '靓汤',
        desc: '浓汤海鲜桂花翅',
        price: 80.00
      },
      {
        title: '主食',
        desc: '红烧和牛、鲍鱼冬菇烩饭、红烧和牛、鲍汁虫草花烩面、四喜烤鸭',
        price: 288.00
      },
      {
        title: '冷热菜',
        desc: '鲍汁花菇蒸鲟鱼、清蒸鲈鱼、银鱼豆腐煲、干煸豆角香干、干烧伊面',
        price: 168.00
      },
      {
        title: '甜品',
        desc: '黑芝麻汤圆、马蹄鲜果、奇异果燕菜、红豆沙',
        price: 48.00
      }
    ]
  },
  gotoInvate : function(){
    wx.navigateTo({
      url: '../invate/invate',
    })
  }
});