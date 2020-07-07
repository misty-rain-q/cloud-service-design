<template>
  <div class="orderDetail">
    <!-- 六个选择下拉框 -->
    <!-- 需注意，此处的显示为placeholder,并非默认选项 -->
    <div class="select">
      <el-select class="orderFirstRow" v-model="statusValue" placeholder="全部状态" >
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="priorityValue" placeholder="全部优先级">
        <el-option
          v-for="item in priorityOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="categoryValue" placeholder="全部分类">
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="channelValue" placeholder="全部渠道">
        <el-option
          v-for="item in channelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="groupValue" placeholder="全部客服组">
        <el-option
          v-for="item in groupOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="servicerValue" placeholder="全部客服">
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
              label: '全部'
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
          input: '',
          // created(){
          //   this.value = this.statusOptions[0].label
          // }
        }
    }
  }


</script>

<style>
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

</style>
