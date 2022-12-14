import { reqGoodsInfo,reqAddOrUpdataShopCar } from "@/api";
const state={
    goodsInfo:{}
}
const mutations={
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}
const actions={
    //获取产品信息的action
    async getGoodsInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId)
        if(result.code === 200){
            commit('GETGOODSINFO',result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdataShopcar({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdataShopCar(skuId,skuNum)
        // 当前函数执行后返回的是Promise
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
// 简化数据
const getters={
    // 路径导航简化数据
    categoryView(state){
        // 当前计算出来的categoryView属性至少是个空对象，这样才不会出现假警告
        return state.goodsInfo.categoryView || {}
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    actions,
    mutations,
    getters,
    state
}