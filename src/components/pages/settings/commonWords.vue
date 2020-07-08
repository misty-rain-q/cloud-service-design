<template>
  <div class="container">
    常用语
    <el-input v-model="search" placeholder="搜索常用语"></el-input>
    <el-button type="primary" class="btn">搜索</el-button>

    <el-button type="primary" @click="classfication=true" class="btn">添加分类</el-button>
    <el-button type="primary" class="btn">添加常用语</el-button>
    <el-button plain>导入常用语</el-button>

    <el-dialog  title="添加分类"
                :visible.sync="classfication"
                width="30%">
                <span>分类名称</span>
                <el-input class="inline-input" v-model="classficationName" placeholder="请输入分类名称"></el-input>
                <span slot="footer" class="dialog-footer">
                <el-button @click="classfication = false" plain>取消</el-button>
                <el-button type="primary" class="btn" @click="classfication = false">确定</el-button>
                </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            search: '',
            classfication: false,
            commonWords: false,
            classficationName: '',
        }
    }
}
</script>

<style scoped>
.container{
  padding: 20px;
}
.btn{
  background-color: rgb(0,110,255);
}
.inline-input{
  display: inline;
  width: 200px;
}
</style>