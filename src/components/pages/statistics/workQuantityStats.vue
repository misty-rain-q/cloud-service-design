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

      <!-- 五个框框 -->
      <div class="statsSecondRow">
        <div class="statsBoxOverall">
          <div class="statsBoxName">总消息数</div>
          <div class="statsBoxTotalNum">230</div>
          <div class="statsBoxValidNum">有效消息数200</div>
        </div>
        <div class="statsBoxOverall">
          <div class="statsBoxName">总会话量</div>
          <div class="statsBoxTotalNum">30</div>
          <div class="statsBoxValidNum">结束会话数20</div>
        </div>
        <div class="statsBoxOverall">
          <div class="statsBoxName">单会话平均消息数</div>
          <div class="statsBoxTotalNum">8</div>
          <div class="statsBoxValidNum">单会话最大消息数50</div>
        </div>
        <div class="statsBoxOverall">
          <div class="statsBoxName">总会话时长</div>
          <div class="statsBoxTotalNum">60m</div>
          <div class="statsBoxValidNum">最大会话时长5m2s</div>
        </div>
        <div class="statsBoxOverall">
          <div class="statsBoxName">平均会话时长</div>
          <div class="statsBoxTotalNum">9m3s</div>
          <div class="statsBoxValidNum">最大会话时长5m2s</div>
        </div>
      </div>

      <div class="barChart">
        <!-- 单会话消息数统计 -->
        <div id="message" ref="message" style="width: 50%;height:400px;"></div>
        <!-- 单会话时长统计 -->
        <div id="time" ref="time" style="width: 50%;height:400px;"></div>
      </div>
      
      <div class="workQuantityTable">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 1002px"
                  :header-cell-style="{'background-color':'#e6f1ff'}">
          <el-table-column label="客服昵称" prop="servicerName" width="91" align="center"></el-table-column>
          <el-table-column label="消息总量" prop="allMsgNum" width="130" align="center"></el-table-column>
          <el-table-column label="会话总量" prop="allSessionNum" width="130" align="center"></el-table-column>
          <el-table-column label="有效会话数量" prop="validSessionNum" width="130" align="center"></el-table-column>
          <el-table-column label="结束会话数量" prop="finishedSessionNum" width="130" align="center"></el-table-column>
          <el-table-column label="会话总时长" prop="allSessionTime" width="130" align="center"></el-table-column>
          <el-table-column label="单会话平均消息数" prop="averageSessionNum" width="130" align="center"></el-table-column>
          <el-table-column label="单会话平均时长" prop="averageSessionTime" width="130" align="center"></el-table-column>
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
    name: 'WorkQuantityStats',
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
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          },
          {
            servicerName: '客服书记',
            allMsgNum: '300',
            allSessionNum: '26',
            validSessionNum: '18',
            finishedSessionNum: '10',
            allSessionTime:"50m",
            averageSessionNum: '9',
            averageSessionTime:'9m18s'
          }
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
    },
    mounted() {
        this.getEchartData1();
        this.getEchartData2();
    },
    methods: {
        getEchartData1() {
        const chart = this.$refs.message;
        if (chart) {
            const myChart = this.$echarts.init(message);
            const option = {
                title: {
                        text: '单会话消息数统计'
                    },
                    color: ['rgb(0,110,255)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['0~10', '10~20', '20~30', '30~40', '40y'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '会话数',
                            type: 'bar',
                            barWidth: '60%',
                            data: [7,8,10,6,5]
                        }
                    ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
            myChart.resize();
            });
            }
        },

        getEchartData2() {
        const chart = this.$refs.time;
        if (chart) {
            const myChart = this.$echarts.init(time);
            const option = {
                title: {
                        text: '单会话时长统计'
                    },
                    color: ['rgb(0,110,255)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['30s以下', '30s~20m', '2min~5m', '5min~10min', '10以上'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '会话数',
                            type: 'bar',
                            barWidth: '60%',
                            data: [7,8,10,6,5]
                        }
                    ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
            myChart.resize();
            });
            }
        },
    }
}
</script>

<style scoped>
#message {
    background-color: white;
    border-radius: 10px;
    padding: 4px;
}
#time {
    background-color: white;
    border-radius: 10px;
    padding: 4px;
}
.barChart {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
}

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

  .statsSecondRow{
    display:flex;
  }
  .statsBoxOverall{
    width: 161px;
    height: 178px;
    margin-top:21px;
    margin-right:9px;
    padding-top:14px;
    padding-left:6px;
    background-color:rgb(240,245,252);
    border:1px solid #E6F1FF;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .statsBoxName{
    width: 149px;
    height: 50px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 50px;
    font-feature-settings: "kern";
  }

  .statsBoxTotalNum{
    width: 149px;
    height: 50px;
    font-size: 36px;
    font-weight: 650;
    color: rgba(0, 110, 255, 0.898);
    line-height: 50px;
    font-feature-settings: "kern";
  }

  .statsBoxValidNum{
    width: 149px;
    height: 50px;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    line-height: 50px;
    font-feature-settings: "kern";
  }
  
  .el-table{
    margin-top: 10px;
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
