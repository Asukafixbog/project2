// search模块的小仓库
import { reqGetSearchInfo } from "@/api";
// state:仓库存储数据的地方
const state = {
    searchList:{}
}
// mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
// actions:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少需要传递一个参数（空对象）
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code === 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    // 当前形参state，是当前仓库的中的state，而非大仓库中的state
    goodsList(state){
        // 为防止网络较差而引起的state.searchList数据未从服务器返回,从而显示undefined,导致报错,需加上一个||
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}