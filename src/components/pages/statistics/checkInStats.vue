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

      <div class="checkInTable">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 1003px"
                  :header-cell-style="{'background-color':'#e6f1ff'}">
          <el-table-column label="客服昵称" prop="servicerName" width="129" align="center"></el-table-column>
          <el-table-column label="登陆时长" prop="loginTime" width="184" align="center"></el-table-column>
          <el-table-column label="空闲时长" prop="freeTime" width="184" align="center"></el-table-column>
          <el-table-column label="忙碌时长" prop="busyTime" width="184" align="center"></el-table-column>
          <el-table-column label="在线时长" prop="onlineTime" width="184" align="center"></el-table-column>
          <el-table-column label="离线时长" prop="offlineTime" width="138" align="center"></el-table-column>
        </el-table>
        <div class="pageJump">
          <span>共100条</span>
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          <el-select class="pageSelect" v-model="pageValue" placeholder="10条/页">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>到第</span>
          <el-input class="jumpNum" v-model="input" placeholder="1"></el-input>
          <span>页</span>
          <el-button type="primary" plain class="buttonJump"><span>确定</span></el-button>
        </div>
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
          value2:'',
          tableData: [
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
            {
              servicerName: '客服书记',
              loginTime: '12h',
              freeTime: '3h',
              busyTime: '8h',
              onlineTime: '7h',
              offlineTime:"1h"
            },
          ],
          options: [
            {
              value: '选项1',
              label: '10条/页'
            },
            {
              value: '选项2',
              label: '20条/页'
            },
            {
              value: '选项3',
              label: '30条/页'
            },
            {
              value: '选项4',
              label: '40条/页'
            },
            {
              value: '选项5',
              label: '50条/页'
            }
          ],
          pageValue:''
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

  .el-input--prefix .el-input__inner{
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

  .selectBox .el-input__inner{
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

  .el-table{
    margin-top: 19px;
  }

  .pageJump{
    display: flex;
    margin-top: 26px;
    float: right;
  }

  .pageJump span{
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: 400;
    margin-top: -2px;
    color: #666666;
    /* line-height: normal; */
    font-feature-settings: "kern";
  }
  .pageSelect{
     width: 75px;
     height: 32px;
     margin-left: 10px;
     margin-right: 10px;
     border: 1px solid rgb(118, 118, 118);
     border-radius: 2px;
  }

  .pageSelect .el-input__inner{
    background-color: #FFFFFF;
    height: 32px;
    padding: 0px;
    font-size: 13px;
    color: #000000;
    border: transparent;
  }

  .jumpNum{
    width: 48px;
    height: 30px;
    margin-top: 2px;
    box-sizing: border-box;
  }

  .jumpNum .el-input__inner{
    width: 41px;
    height: 30px;
    background-color: #FFFFFF ;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 2px;
  }

  .buttonJump{
    width: 48px;
    height: 30px;
    margin-left: 10px;
    margin-right: 18px;
    padding: 0;
    box-sizing: content-box;
  }

  .buttonJump span{
    text-align: center;
    line-height: 30px;
  }

</style>
