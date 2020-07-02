<template>
  <div class="container">
      <h1>工作量统计->工作质量统计</h1>
      <div class="barChart">
        <!-- 首次响应时长会话量统计 -->
        <div id="first" ref="first" style="width: 50%;height:400px;"></div>
        <!-- 首次响应时长会话量统计 -->
        <div id="second" ref="second" style="width: 50%;height:400px;"></div>
      </div>

      <!-- 饼状图 -->
      <div class="pie">
        <!-- 问题解决率占比 -->
        <div id="third" ref="third" style="width: 50%;height:400px;"></div>
        <!-- 评价占比 -->
        <div id="forth" ref="forth" style="width: 50%;height:400px;"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WorkQualityStats',
    data(){
        return {

        }
    },
    mounted() {
        this.getEchartData1();
        this.getEchartData2();
        this.getEchartData3();
        this.getEchartData4();
    },
    methods: {
        getEchartData1() {
        const chart = this.$refs.first;
        if (chart) {
            const myChart = this.$echarts.init(first);
            const option = {
                title: {
                        text: '首次响应时长会话量统计'
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
        const chart = this.$refs.second;
        if (chart) {
            const myChart = this.$echarts.init(second);
            const option = {
                title: {
                        text: '首次响应时长会话量统计'
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

        getEchartData3() {
        const chart = this.$refs.third;
        if (chart) {
            const myChart = this.$echarts.init(third);
            const option = {
                title: {
                    text: '问题解决率占比',
                    left: 'left',
                    top: 20,
                    textStyle: {
                        color: '#000'
                    }
                    },                
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    data: ['未解决', '已解决']
                },
                series: [
                    {
                        name: '问题解决率占比',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 880, name: '未解决'},
                            {value: 300, name: '已解决'}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
            myChart.resize();
            });
            }
        },

        getEchartData4() {
        const chart = this.$refs.forth;
        if (chart) {
            const myChart = this.$echarts.init(forth);
            const option = {
                title: {
                    text: '评价占比',
                    left: 'left',
                    top: 20,
                    textStyle: {
                        color: '#000'
                    }
                    },                
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    data: ['好评', '中评', '差评']
                },
                series: [
                    {
                        name: '评价占比',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 880, name: '好评'},
                            {value: 300, name: '中评'},
                            {value: 130, name: '差评'}
                        ]
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
#first {
    background-color: white;
    border-radius: 10px;
    padding: 4px;
}
#second {
    background-color: white;
    border-radius: 10px;
    padding: 4px;
}
#third {
    background-color: white;
    border-radius: 10px;
    padding: 4px;
}
#forth {
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
.pie{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
}
</style>