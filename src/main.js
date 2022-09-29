// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 全局组件：第一个参数为组件名字，第二个参数为组件
// 定义全局组件：在入口文件中引入一次之后便可以在任意组件中使用
// 三级联动组件---注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
// 对轮播图进行全局注册
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name,Carousel)
// 对分页器进行全局注册
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name,Pagination)
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServe.js---mock数据
import "@/mock/mockServe"
// 引入swiper样式
import 'swiper/swiper-bundle.min.css'
// 测试
// import { reqCategoryList } from "@/api";
// reqCategoryList()


// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 全局事件总线$bus的配置
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    // 注册路由:底下的写法KV一致省略V【router是小写的】
    // 注册路由信息：当这里书写router的时候，组件身上都拥有$route，$router属性
    router,
    // 注册仓库:组件实例的身上会多一个属性$store
    store
})