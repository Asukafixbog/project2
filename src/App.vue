<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件的出口位置 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录和注册时隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: "App",
  components:{
    Header,
    Footer
    },
  mounted(){
    // 通知Vuex发送请求，获取商品分类的三级列表的数据，并存储到仓库当中
    this.$store.dispatch("categoryList");
  }
};
</script>

<style>
 
</style>

