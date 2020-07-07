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


    <!-- 浏览量 -->
    <div id="dialog" ref="dialog" style="width: 100%;height:400px;"></div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
    name: 'AccessStats',
    data() {
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
    },
    mounted() {
        this.getEchartData1();
    },
    methods: {
        getEchartData1() {
            const chart = this.$refs.dialog;
            if (chart) {
                const myChart = this.$echarts.init(dialog);
                const option = {
                    title: {
                        text: '会话数'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['浏览量', '访客量']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [ '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00',
                                '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
                                '17:00']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '浏览量',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234,201, 154,150,220, 182,]
                        },
                        {
                            name: '访客量',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310,134, 90, 230,330, 410, 182,410, 182,]
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
#dialog{
    background-color: white;
    border-radius: 10px;
    padding: 4px;
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
