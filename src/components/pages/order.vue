<template>
  <div class="container">
    <!-- 工单菜单 -->
    <el-menu class="order-menu" default-active="/order/allOrder" router>
      <el-menu-item-group>
        <template slot="title">工单</template>
        <el-menu-item index="/order/allOrder">全部工单(1000)</el-menu-item>
        <el-menu-item index="/order/waiting">待我处理的(100)</el-menu-item>
        <el-menu-item index="/order/created">我创建的(0)</el-menu-item>
        <el-menu-item index="/order/copied">抄送我的(0)</el-menu-item>
        <el-menu-item index="/order/dealing">我处理的(0)</el-menu-item>
        <el-menu-item index="/order/finished">我解决的(0)</el-menu-item>
      </el-menu-item-group>
    </el-menu>

    <!-- 工单界面右上角按钮 -->
    <div class="topButton">
      <el-button class="addButton">添加工单</el-button>
      <el-button class="batchButton">批量修改状态</el-button>
      <el-button class="exportButton">导出工单</el-button>
    </div>

    <orderDetail></orderDetail>

  </div>
</template>

<script>
import orderDetail from './order/orderDetail.vue'

export default {
    name: 'order',
    components:{orderDetail},
    data(){
        return{

        }
    }
}
</script>

<style scoped>
  .container{
  position: fixed;
  display:flex;
  flex-direction: row;
  }
  .order-menu{
    width: 240px;
    height: 892px;
    text-align: left;
    padding-top: 10px;
  }

  .el-menu-item.is-active{
  border-left: solid rgb(0,110,255) 4px;
  }

  .topButton{
    position: fixed;
    left: 1019px;
    display: flex;
    flex-direction: row;
    float: right;
  }


  .batchButton,.exportButton{
    background-color: transparent;
    color: rgb(153,153,153);
  }
  .addButton{
    background-color: rgb(0,110,255);
    color:#FFFFFF;
  }


</style>
