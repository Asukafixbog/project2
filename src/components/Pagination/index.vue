<template>
  <div class="pagination">
    <!-- <h1>{{startNumAndEndNum}}---当前页码{{pageNo}}</h1> -->
    <button :disabled="pageNo === 1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo===1}">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <!-- 中间部分 -->
    <template v-for="(page,index) in startNumAndEndNum.end" >
        <button :class="{active:pageNo === page}" :key="index" v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)">{{page}}</button>
    </template>
    

    <button v-if="startNumAndEndNum.end < totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo===totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo === totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    // 总共页数
    totalPage(){
        // 向上取整
        return Math.ceil(this.total / this.pageSize)
    },
    // 计算连续页码的起始数字和结束数字[连续页码数字最少是5]
    startNumAndEndNum(){
        // 先定义两个变量存储起始数字和结束数字
        let start = 0, end = 0;
        // 连续页码数为5，如果总页数小于连续页码数
        if(this.continues > this.totalPage){
            start = 1
            end = this.totalPage
        }else{
            start = this.pageNo - (this.continues-1)/2
            end = this.pageNo + (this.continues-1)/2
            // 不正常现象：start出现0或负数
            if(start < 1){
                start = 1
                end = this.continues
            }
            if(end > this.totalPage){
                start = this.totalPage+1-this.continues
                end = this.totalPage
            }
        }
        return {start,end}
    },
  },

};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
       background-color: #feb568;
        color: #fff;
    }
  }
}
</style>
