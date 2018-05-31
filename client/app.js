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
  },
  sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'order',
        business_id: orderId,
        trigger: trigger,
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {
        //console.log('*********************');
        //console.log(res.data);
        //console.log('*********************');
      }
    })
  },
  sendTempleMsgImmediately: function (template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'immediately',
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  goLoginPageTimeOut: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: "/pages/authorize/index"
      })
    }, 1000)
  },
})