<template>
  <div class="container">
    <el-scrollbar style="height:100%">

      <!-- 日期选择，客服选择，导出按钮等 -->
      <div class="statsFirstRow">
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
        <div class="select">
          <el-select class="selectBox" v-model="groupValue" placeholder="全部客服组">
            <el-option
              v-for="item in groupOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="selectBox" v-model="servicerValue" placeholder="全部客服">
            <el-option
              v-for="item in servicerOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-button class="statsExportButton">导出当前数据</el-button>
      </div>

    </el-scrollbar>
  </div>
</template>

<script>
  export default {
      name: 'StatisticsOverall',
      data(){
        return{
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
            }
          ],
          groupValue:'',
          servicerValue:'',
          value1:'',
          value2:''
        }
      }
  }
</script>

<style>
  .container{
    width: 1040px;
    height: 100%;
  }

.statsFirstRow{
    display:flex;
  }

  .clock{
    width: 301px;
    background-color: rgb(242,242,242);
    display: flex;
    float: left;
    border-radius: 2px;
  }

  .el-input--prefix >>>.el-input__inner{
    background-color: transparent;
    line-height: 40px;
    border: transparent;
  }

  .wave{
    height: 40px;
    line-height: 40px;
  }

  .select{
    display: flex;
  }

  .selectBox{
    margin-left:10px;
    width:160px;
    height:40px;
  }

  .selectBox >>>.el-input__inner{
      background-color: #F2F2F2;
      border: transparent;
  }


  .statsExportButton{
    margin-left: 143px;
    width: 120px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgb(204, 204, 204);
    color:rgb(204, 204, 204);
    text-align: center;
    border-radius: 2px;
  }

</style>
