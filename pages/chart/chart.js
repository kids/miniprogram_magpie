// chart.js

Page({
  data: {
    code: '',
    img_path: ''
  },
  onLoad(options) {
    var that = this;
    that.setData({
      code: options.code
    });
    wx.request({
      url: 'https://service-kn1xxsqt-1301040519.sh.apigw.tencentcs.com/fig/'+options.code,
      header: {
        'content-type': 'application/text'
      },
      success (res) {
        console.log(res.data);
        that.setData({img_path: 'https://service-5hj3ytsz-1301040519.sh.apigw.tencentcs.com'+res.data})
      }
    })
  },
  imgPreview(){
    var img_path = this.data.img_path;
    wx.previewImage({
      urls: [img_path]
    })
  }
})
