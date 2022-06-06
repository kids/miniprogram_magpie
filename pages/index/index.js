// index.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
  },

  onClickCode(event) {
    const ccode = event.currentTarget.dataset.value;
    console.log(ccode);
    wx.navigateTo({
      url: '../chart/chart?code=' + ccode
    })
  },

  onClickGoX() {
    wx.navigateTo({
      url: '../chart/chart'
    })
  },

  onClickScan(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
        wx.showModal({
          title: res.scanType,
          content: res.result + '\n\n' + res.rawData
        })
      }
    })
  },

  onLoad() {
    var that = this;
    wx.request({
      url: 'https://service-kn1xxsqt-1301040519.sh.apigw.tencentcs.com/selects',
      data: {
        'date': ''
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data);
        that.setData({
          tb: res.data
        })
      }
    });
    wx.request({
      url: 'https://service-kn1xxsqt-1301040519.sh.apigw.tencentcs.com/majorfall',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data);
        that.setData({
          imgfall: res.data
        })
      }
    })
  }
})
