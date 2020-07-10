<template>
  <div class="container">
    <!-- 工单菜单 -->
    <!-- 此处的default-active仅适用于不刷新的情况，使用$router.path未达到预期 -->
    <el-menu class="order-menu" default-active="/order/allOrder" router>
      <el-menu-item-group>
        <template slot="title">工单</template>
        <el-menu-item class="orderMenuItem" index="/order/allOrder">全部工单(1000)</el-menu-item>
        <el-menu-item class="orderMenuItem" index="/order/waiting">待我处理的(100)</el-menu-item>
        <el-menu-item class="orderMenuItem" index="/order/created">我创建的(0)</el-menu-item>
        <el-menu-item class="orderMenuItem" index="/order/copied">抄送我的(0)</el-menu-item>
        <el-menu-item class="orderMenuItem" index="/order/dealing">我处理的(0)</el-menu-item>
        <el-menu-item class="orderMenuItem" index="/order/finished">我解决的(0)</el-menu-item>
      </el-menu-item-group>
    </el-menu>

    <!-- 工单界面右上角按钮 -->
    <div class="orderTopButton">
      <el-button class="addButton">添加工单</el-button>
      <el-button class="batchButton">批量修改状态</el-button>
      <el-button class="exportButton">导出工单</el-button>
    </div>

    <div class="orderDetail">

      <!-- 六个选择下拉框 -->
      <div class="select">
        <el-select class="orderFirstRow" v-model="statusValue">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="orderFirstRow" v-model="priorityValue">
          <el-option
            v-for="item in priorityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="orderFirstRow" v-model="categoryValue">
          <el-option
            v-for="item in categoryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="orderFirstRow" v-model="channelValue">
          <el-option
            v-for="item in channelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="orderFirstRow" v-model="groupValue">
          <el-option
            v-for="item in groupOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="orderFirstRow" v-model="servicerValue">
          <el-option
            v-for="item in servicerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <!-- 日期选择及关键字搜索 -->
      <div class="orderSecondLine">
        <div class="clock">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
          <div class="wave">~</div>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </div>
        <div class="search">
          <el-input class="searchContent" v-model="input" placeholder="请输入关键词搜索"></el-input>
          <el-button class="searchButton">搜索</el-button>
        </div>
      </div>

      <!-- 工单表 -->
      <div class="orderTable">
         <router-view></router-view>
      </div>

    </div>
  </div>



</template>

<script>
  export default{
    data(){
        return{
          statusOptions: [
            {
              value: '选项1',
              label: '全部状态'
            },
            {
              value: '选项2',
              label: '未分配'
            },
            {
              value: '选项3',
              label: '待处理'
            },
            {
              value: '选项4',
              label: '处理中'
            },
            {
              value: '选项5',
              label: '已解决'
            },
            {
              value: '选项6',
              label: '已关闭'
            },
          ],
          priorityOptions: [
            {
              value: '选项1',
              label: '全部优先级'
            },
            {
              value: '选项2',
              label: '低'
            },
            {
              value: '选项3',
              label: '中'
            },
            {
              value: '选项4',
              label: '高'
            },
            {
              value: '选项5',
              label: '紧急'
            },
          ],
          categoryOptions: [
            {
              value: '选项1',
              label: '全部分类'
            },
            {
              value: '选项2',
              label: '分类一'
            },
            {
              value: '选项3',
              label: '分类二'
            },
            {
              value: '选项4',
              label: '分类三'
            },
          ],
          channelOptions: [
            {
              value: '选项1',
              label: '全部渠道'
            },
            {
              value: '选项2',
              label: '手动录入'
            },
            {
              value: '选项3',
              label: '即时聊天'
            },
            {
              value: '选项4',
              label: '客户管理'
            },
          ],
          groupOptions: [
            {
              value: '选项1',
              label: '全部客服组'
            },
            {
              value: '选项2',
              label: '客服组一'
            },
            {
              value: '选项3',
              label: '客服组二'
            },
            {
              value: '选项4',
              label: '客服组三'
            },
          ],
          servicerOptions: [
            {
              value: '选项1',
              label: '全部客服'
            },
            {
              value: '选项2',
              label: '李书记'
            },
            {
              value: '选项3',
              label: '大锐子'
            },
            {
              value: '选项4',
              label: '大亮子'
            },
          ],
          statusValue:'',
          priorityValue:'',
          categoryValue:'',
          channelValue:'',
          groupValue:'',
          servicerValue:'',
          value1:'',
          value2:'',
          input:''
        }
    },
    created: function(){
      this.statusValue = this.statusOptions[0].value;
      this.priorityValue = this.priorityOptions[0].value;
      this.categoryValue = this.categoryOptions[0].value;
      this.channelValue = this.channelOptions[0].value;
      this.groupValue = this.groupOptions[0].value;
      this.servicerValue = this.servicerOptions[0].value;
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

  .orderMenuItem .is-active{
  border-left: solid rgb(0,110,255) 4px;
  }

  .orderTopButton{
    position: fixed;
    left: 1019px;
    display: flex;
  }

  .addButton{
    background-color: rgb(0,110,255);
    color:#FFFFFF;
  }

  .addButton:hover{
    background-color: rgb(23,123,255);
    color:#FFFFFF;
  }

  .batchButton,.exportButton{
    background-color: transparent;
    color: rgb(153,153,153);
  }

  .batchButton:hover,.exportButton:hover{
    background-color: transparent;
    color: rgb(0,110,255);
    border: 1px solid rgb(0,110,255);
  }

  .orderDetail{
    border-radius: 5px;
    background-color: white;
    margin-top:50px;
    margin-left: 10px;
    width: 1040px;
  }

  .select{
    margin-top: 19px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
  }

  .orderFirstRow{
    margin-left: 5px;
    margin-right: 5px;
    width: 160px;
    height: 40px;
    border-radius: 2px;
  }
  .orderFirstRow .el-input__inner{
      background-color: #F2F2F2;
      border: transparent;
  }

  .orderSecondLine{
    display: flex;
  }

  .clock{
    width: 301px;
    margin-top: 14px;
    margin-left: 20px;
    background-color: rgb(242,242,242);
    display: flex;
    float: left;
    border-radius: 2px;
  }

  .el-input--prefix .el-input__inner{
    background-color: transparent;
    line-height: 40px;
    border: transparent;
  }

  .wave{
    height: 40px;
    line-height: 40px;
  }

  .search{
    display: flex;
  }

  .searchContent{
    width: 300px;
    height: 40px;
    margin-top: 14px;
    margin-left: 13px;
    border-radius: 2px;
  }

  .searchContent .el-input__inner{
    background-color: #F2F2F2;
    border: transparent;
  }

  .searchButton{
    background-color: rgb(0,110,255);
    color: #FFFFFF;
    margin-top: 14px;
    height: 40px;
    border-radius: 2px;
  }

  .searchButton:hover{
    background-color: rgb(23,123,255);
    color:#FFFFFF;
  }

</style>
