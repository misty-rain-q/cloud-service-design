<template>
  <div class="container">
    <!-- 统计页面菜单 -->
    <!-- 此处的default-active仅适用于不刷新的情况，使用$router.path未达到预期 -->
    <el-menu class="statistics-menu" default-active="/statistics/statisticsOverall" router>
      <el-menu-item-group>
        <template slot="title">在线客服</template>
        <el-menu-item index="/statistics/statisticsOverall">数据总览</el-menu-item>
        <el-menu-item index="/statistics/workQuantityStats">工作量统计</el-menu-item>
        <el-menu-item index="/statistics/workQualityStats">工作质量统计</el-menu-item>
        <el-menu-item index="/statistics/checkInStats">考勤统计</el-menu-item>
        <el-menu-item index="/statistics/accessStats">访问统计</el-menu-item>
      </el-menu-item-group>
    </el-menu>
    <!-- 详细数据 -->
    <div class="statistics-detail">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Statistics',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
  .container{
    position: fixed;
  }

  .statistics-menu{
    width: 242px;
    height: 700px;
    text-align: left;
    padding-top: 10px;
    border-radius: 4px;
  }

  .el-menu-item.is-active{
    border-left: solid rgb(0,110,255) 4px;
  }

  .statistics-detail{
    border-radius: 5px;
    background-color: white;
    margin-left: 10px;
    width: 1040px;
    height: 100%;
    position: absolute;
    left: 244px;
    top: 5px;
    padding: 20px;
  }


</style>
