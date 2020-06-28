<template>
    <div class="index-container">
        <span class="welcome">{{userName}}, 欢迎回来</span>
        <div class="abstract">
        <el-row class="abstract-el-row" :gutter="20">
          <el-col :span="6"><el-card class="card-color" shadow="hover">
              <div class="card-title">总会话量</div>
              <div class="big_num">{{total_dialog}}</div>
              <div class="increased">较昨日上涨{{total_dialog_percent}}%</div>
          </el-card></el-col>
          <el-col :span="6"><el-card class="card-color" shadow="hover">
              <div class="card-title">处理中的会话数量</div>
              <div class="big_num_1">{{processing_dialog}}</div>
              <div class="increased">较昨日上涨{{processing_dialog_percent}}%</div>
          </el-card></el-col>
          <el-col :span="6"><el-card class="card-color" shadow="hover">
              <div class="card-title">在线客服数</div>
              <div class="big_num_2">{{online_servicer}}</div>
              <div class="increased">较昨日上涨{{online_servicer_percent}}%</div>
          </el-card></el-col>
          <el-col :span="6"><el-card class="card-color" shadow="hover">
              <div class="card-title">今日消息数</div>
              <div class="big_num_3">{{today_msg}}</div>
              <div class="increased">较昨日上涨{{today_msg_percent}}%</div>
          </el-card></el-col>          
        </el-row>
        </div>

        <div class="middle">
        <div id="chart" ref="chart" style="width: 900px;height:400px;"></div>
        <div class="portal">

        </div>
    
        </div>
        <div class="spy">
            <span class="spy-txt">客服监控</span>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column  label="客服昵称"
                                    prop="name"
                                    width="180px">
                </el-table-column>
                <el-table-column  label="状态"
                                prop="state"
                                width="180px">
                </el-table-column>
                <el-table-column  label="在线时长"
                                prop="online_interval"
                                width="180px">
                </el-table-column>
                <el-table-column  label="会话数"
                                prop="dialog_num"
                                width="180px">
                </el-table-column>
                <el-table-column  label="消息数"
                                prop="msg_num"
                                width="180px">
                </el-table-column>
                <el-table-column  label="平均响应时长"
                                prop="avg_response_time"
                                width="180px">
                </el-table-column>
                <el-table-column  label="平均会话时长"
                                prop="avg_dialog_time"
                                width="180px">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data(){
        return{
            userName: '客服七尾',
            total_dialog: '230',
            processing_dialog: '200',
            online_servicer: '30',
            today_msg: '2300',
            total_dialog_percent: '10',
            processing_dialog_percent: '10',
            online_servicer_percent: '10',
            today_msg_percent: '10',
            tableData: [
                {
                    name: '客服家伟',
                    state: '在线',
                    online_interval: '6h',
                    dialog_num: '30',
                    msg_num: '389',
                    avg_response_time: '24s',
                    avg_dialog_time: '5min'
                },
                {
                    name: '客服家伟',
                    state: '在线',
                    online_interval: '6h',
                    dialog_num: '30',
                    msg_num: '389',
                    avg_response_time: '24s',
                    avg_dialog_time: '5min'
                },
                {
                    name: '客服家伟',
                    state: '在线',
                    online_interval: '6h',
                    dialog_num: '30',
                    msg_num: '389',
                    avg_response_time: '24s',
                    avg_dialog_time: '5min'
                },
                {
                    name: '客服家伟',
                    state: '在线',
                    online_interval: '6h',
                    dialog_num: '30',
                    msg_num: '389',
                    avg_response_time: '24s',
                    avg_dialog_time: '5min'
                },
                {
                    name: '客服家伟',
                    state: '在线',
                    online_interval: '6h',
                    dialog_num: '30',
                    msg_num: '389',
                    avg_response_time: '24s',
                    avg_dialog_time: '5min'
                }
            ]
        }
    },
    mounted(){
    this.getEchartData1()  
    },
    methods: {
        getEchartData1() {
        const chart = this.$refs.chart;
        if (chart) {
            const myChart = this.$echarts.init(chart);
            const option = {
                title: {
                    text: '访问量统计'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总访问量', '总会话量', '有效会话量']
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
                        name: '总访问量',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234,201, 154,150,220, 182,]
                    },
                    {
                        name: '总会话量',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310,134, 90, 230,330, 410, 182,410, 182,]
                    },
                    {
                        name: '有效会话量',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410, 182, 191,134, 90, 230,234,201,230]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
            myChart.resize();
            });
            }
        }
    }
}
</script>

<style scoped>
.welcome{
    margin-right: 1250px;
    font-weight: 800;
}
.spy-txt{
    margin-right: 1320px;
    margin-bottom: 30px;
}
.abstract{
    margin-top: 30px;
}
.card-title{
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-weight: 400;
    color: rgba(51, 51, 51, 0.898039215686275);
    font-size: 14px;

}
.big_num{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
    font-weight: 650;
    color: rgba(0, 110, 255, 0.898039215686275);
    font-size: 48px;
    margin-top: 30px;
}
.big_num_1{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
    font-weight: 650;
    color: #FF6262;
    font-size: 48px;
    margin-top: 30px;
}
.big_num_2{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
    font-weight: 650;
    color: #2ED477;
    font-size: 48px;
    margin-top: 30px;
}
.big_num_3{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
    font-weight: 650;
    color: #FF9138;
    font-size: 48px;
    margin-top: 30px;
}
.increased{
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-weight: 400;
    color: #999999;
    font-size: 12px;
    margin-top: 30px;
}
.card-color{
    background-color: rgb(242,247,254);
}
.abstract{
    background-color: white;
    padding: 20px;
}
.abstract-el-row{
    margin-top: 10px;
}
.spy{
    margin-top: 20px;
    background-color: #fff;
}
#chart{
    background-color: white;
    width: 900px;
    height:400px;
    
}
.middle{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.portal{
    background-color: white;
    width: 520px;
    height: 400px;
    margin-left: 10px;
}
</style>