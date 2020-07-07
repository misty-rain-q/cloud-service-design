<template>
  <div class="container">
    <div v-for="single in singleMsg" class="oneMsg" :key="single.id">
      <span class="title">{{single.title}}</span>
      <span class="time">{{single.time}}</span>
      <br/>
      <span class="content">{{single.content}}</span>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            singleMsg: [
              {
                id: '1',
                title: '账户即将到期提醒',
                time: '2020/09/09 10:55',
                content: '系统将于3天后到期，请尽快续费，以免影响您正常使用。'
              },
              {
                id: '2',
                title: '账户即将到期提醒',
                time: '2020/09/09 10:55',
                content: '系统将于3天后到期，请尽快续费，以免影响您正常使用。'
              },
              {
                id: '3',
                title: '账户即将到期提醒',
                time: '2020/09/09 10:55',
                content: '系统将于3天后到期，请尽快续费，以免影响您正常使用。'
              },
              {
                id: '4',
                title: '账户即将到期提醒',
                time: '2020/09/09 10:55',
                content: '系统将于3天后到期，请尽快续费，以免影响您正常使用。'
              },
              {
                id: '5',
                title: '产品上新通知',
                time: '2020/09/09 10:55',
                content: 'WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。'
              },
              {
                id: '6',
                title: '产品上新通知',
                time: '2020/09/09 10:55',
                content: 'WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。'
              },
              {
                id: '7',
                title: '产品上新通知',
                time: '2020/09/09 10:55',
                content: 'WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。'
              }
            ]
        }
    }
}
</script>

<style scoped>
.container{
  padding: 20px;
}
.title{
  font-size: 16px;
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 30px;
}
.time{
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 30px;
  font-size: 12px;
  color: #CCCCCC;
}
.content{
  color: #999999;
  font-size: 14px;
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 30px;
}
</style>