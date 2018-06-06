var host = 'https://api.it120.cc/';
var app = getApp();
var url = `${host}${app.globalData.subDomain}`
var api = {
  // 首页
  bannerList:`${url}/banner/list`,
  categoryAll: `${url}/shop/goods/category/all`,
  noticeList: `${url}/notice/list`,
  discountCoupons: `${url}/discounts/coupons`,
  goodsList: `${url}/shop/goods/list`,
  fetchDiscount: `${url}/discounts/fetch`,
  //我的
  bindMobile: `${url}/user/wxapp/bindMobile`,
  userDetail: `${url}/user/detail`,
  userAmount: `${url}/user/amount`,
  signToday: `${url}/score/today-signed`,
  scoreSign: `${url}/score/sign`,
  signLogs: `${url}/score/sign/logs`,
}
module.exports = api;