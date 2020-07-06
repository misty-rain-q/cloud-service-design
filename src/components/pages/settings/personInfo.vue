<template>
  <div class="container">
      <div class="info-title">个人信息</div>
      <el-divider></el-divider>

      <form>
        <span class="input-label">上传头像</span>
        <div class="little-txt">建议上传图片尺寸为60px*60px，若不设置则使用系统默认头像</div>

        <span class="input-label">邮箱地址</span>
        <el-input v-model="email" placeholder="请输入"></el-input>
      </form>
  </div>
</template>

<script>
export default {
    name: 'PersonInfo',
    data(){
      return {
        form_data: 'd',
        email: '11938898@163.com',
      }
      
    }
}
</script>

<style scoped>
.input-label{
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: rgba(153, 153, 153, 0.847058823529412);
  text-align: right;
  line-height: 22px;
}
.little-txt{
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #CCCCCC;
  line-height: 22px;
}
</style>