//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData: {
    userInfo: null,
    subDomain: "hishion",
    version: "1.0",
    token: ""
  },
  onLaunch: function () {
    var that = this;
    qcloud.setLoginUrl(config.service.loginUrl)
    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: '1'
      },
      success: function (res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
  }
})