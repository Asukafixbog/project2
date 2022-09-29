// 当前模块是对所有的api进行统一管理
import requests from "./request";
import mockRequsets from './mockRequest'

// 三级联动接口
/* /api/product/getBaseCategoryList  get  无参数 */
// 发请求:axios发请求的返回结果是一个Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequsets({url:'/banner',method:'get'})

// 获取floor数据
export const reqFloorList = ()=>mockRequsets({url:'/floor',method:'get'})

// 获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要参数
/* 
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// 当前这个函数需要接受外部传递参数
// 当前这个接口，给服务器传递参数params至少得是一个空对象
export const reqGetSearchInfo = (params) =>requests({url:'/list',method:'post',data:params})

// 获取产品详情信息的接口 /api/item/{ skuId } 请求方式：get
export const reqGoodsInfo = (skuId) =>requests({url:`/item/${skuId}`,method:'get'})

// 将产品添加到购物车中，或将购物车中的产品个数进行更新 /api/cart/addToCart/{ skuId }/{ skuNum } post请求
export const reqAddOrUpdataShopCar = (skuId,skuNum) =>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

