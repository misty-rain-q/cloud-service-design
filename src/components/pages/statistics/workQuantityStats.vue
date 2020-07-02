<template>
  <div class="container">
      <h1>工作量统计->工作量统计</h1>
      <div class="barChart">
        <!-- 单会话消息数统计 -->
        <div id="message" ref="message" style="width: 50%;height:400px;"></div>
        <!-- 单会话时长统计 -->
        <div id="time" ref="time" style="width: 50%;height:400px;"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WorkQuantityStats',
    data(){
        return {

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
</style>