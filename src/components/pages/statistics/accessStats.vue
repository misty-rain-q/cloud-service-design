<template>
  <div class="container">
      <h1>统计->访问统计</h1>
      <!-- 浏览量 -->
      <div id="dialog" ref="dialog" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
export default {
    name: 'AccessStats',
    data() {
        return{

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
</style>