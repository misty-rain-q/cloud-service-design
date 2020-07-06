<template>
  <div class="container">
    <span>通知创建工单人</span>
    <el-switch v-model="noticeCreator"
                 active-color="rgb(0,110,255)"
                 inactive-color="rgb(204,204,204)">
    </el-switch>

    <br/>
    <span>工单被更新时，同步通知工单创建人</span>
  </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            noticeCreator: 'true'
        }
    }
}
</script>

<style scoped>
.container{
  display: none;
}
</style>