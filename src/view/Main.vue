<template>
 <el-container style="height:100%">
  <el-aside width="auto">
    <common-aside-vue></common-aside-vue>
  </el-aside>
  <el-container>
    <el-header>
   <common-header-vue></common-header-vue>
    </el-header>
    <common-tag></common-tag>
    <el-main>
       <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import CommonAsideVue from '../components/CommonAside.vue'
import commonHeaderVue from '../components/commonHeader.vue'
import CommonTagVue from '../components/CommonTag.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
  name:'Home',
  components:{
    CommonAsideVue,
    commonHeaderVue,
    CommonTagVue,
    CommonTag
},
  data() {
    return {
        
    }
  },
}
</script>

<style lang="less" scoped>
.el-header
{
  background-color: #333;
}
.el-main
{
  padding-top: 0;
}
</style>