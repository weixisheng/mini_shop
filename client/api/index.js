var host = 'https://api.it120.cc/';
var app = getApp();
var url = `${host}${app.globalData.subDomain}`
var api = {
  // 首页
  bannerList:`${url}/banner/list`,
  categoryAll: `${url}/shop/goods/category/all`,
  goodsList: `${url}/shop/goods/list`,
  //我的
  bindMobile: `${url}/user/wxapp/bindMobile`,
  userDetail: `${url}/user/detail`,
  userAmount: `${url}/user/amount`,
  signToday: `${url}/score/today-signed`,
  scoreSign: `${url}/score/sign`,
  signLogs: `${url}/score/sign/logs`,

  //地址管理
  addressList: `${url}/user/shipping-address/list`,
  addressAdd: `${url}/user/shipping-address/add`,
  addressUpdate: `${url}/user/shipping-address/update`,
  addressDelete: `${url}/user/shipping-address/delete`,
  addressDetail: `${url}/user/shipping-address/detail`,
  addressDefault: `${url}/user/shipping-address/default`,

  //商品
  goodsDetail: `${url}/shop/goods/detail`,
  goodsPrice: `${url}/shop/goods/price`,
  goodsReputation: `${url}/shop/goods/reputation`,
  goodsVideo: `${url}/media/video/detail`,

  //资讯
  noticeList: `${url}/notice/list`,
  noticeDetail: `${url}/notice/detail`,

  //优惠券
  discountCoupons: `${url}/discounts/coupons`,
  fetchDiscount: `${url}/discounts/fetch`,
  myCoupons: `${url}/discounts/my`,

  //订单
  orderList: `${url}/order/list`,
  createOrder: `${url}/order/create`,
  orderDetail: `${url}/order/detail`,
  orderDelivery: `${url}/order/delivery`,
  orderReputation: `${url}/order/reputation`,
  orderClose: `${url}/order/close`,
  orderPay: `${url}/order/pay`,
  orderStatistics: `${url}/order/statistics`,

  //提现
  withDraw: `${url}/user/withDraw/apply`,
}
module.exports = api;