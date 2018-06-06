// pages/sign-list/index.js
const app = getApp()
var api = require('../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    page:1,
    total:0,
    noData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.page < this.totalPage) {
      this.page++;
      this.getInfo();
    }
    else{
      this.setData({
        noData:true
      })
    }
  },
  getInfo(){
    var that = this;
    wx.request({
      url: api.signLogs,
      data:{
        token:wx.getStorageSync('token'),
        page:that.data.page,
        pageSize:10
      },
      success:function(res){
        var r = res.data;
        if(r.code==0){
          r.data.result.forEach((item)=>{
            item.dateAdd = item.dateAdd.slice(0,10);
          })
          that.setData({
            list: [...that.data.list,...r.data.result],
            total: r.data.totalPage,
            noData: r.data.result.length > 0 || that.data.page == r.data.totalPage
          })
        }
        else{
          wx.showModal({
            title: '错误',
            content: r.msg,
            showCancel: false
          })
        }
      }
    })
  }
})