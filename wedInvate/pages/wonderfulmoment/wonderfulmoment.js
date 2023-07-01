Page({
  data: {
    imageSrc: '',
    showImage: false,
  },
  uploadPhoto() {
    const that = this;
    wx.chooseImage({
      success: function (res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imageSrc: tempFilePaths[0],
          showImage: true,
        });
      },
      fail: function () {
        console.log('上传图片失败');
      }
    })
  },
  hideImage() {
    this.setData({
      showImage: false,
    });
  }
})