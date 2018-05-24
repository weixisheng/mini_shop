//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData: { userInfo: null, subDomain: "hishion" },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})