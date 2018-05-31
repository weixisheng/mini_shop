//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addressList: []
  },

  selectTap: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/update',
      data: {
        token: wx.getStorageSync('token'),
        id: id,
        isDefault: 'true'
      },
      success: (res) => {
        wx.showToast({
          title: "已设为默认地址",
          icon: 'success',
          mask: true,
          duration: 1500,
          success: function () {
            setTimeout(function () {
              wx.navigateBack({
              })
            }, 1500)
          }
        })
      }
    })
  },

  addAddress: function () {
    wx.navigateTo({
      url: "/pages/address-add/index"
    })
  },

  editAddress: function (e) {
    wx.navigateTo({
      url: "/pages/address-add/index?id=" + e.currentTarget.dataset.id
    })
  },

  onLoad: function () {
  },
  onShow: function () {
    this.initShippingAddress();
  },
  initShippingAddress: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/list',
      data: {
        token: wx.getStorageSync('token')
      },
      success: (res) => {
        if (res.data.code == 0) {
          that.setData({
            addressList: res.data.data
          });
        } else if (res.data.code == 700) {
          that.setData({
            addressList: []
          });
        }
      }
    })
  }

})
