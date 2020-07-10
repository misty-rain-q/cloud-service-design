<template>
  <div class="container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="个人库" name="person">
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

        <el-collapse v-model="activeItem" accordion>
          <el-collapse-item name="1" title="欢迎语"></el-collapse-item>
          <el-collapse-item name="2" title="业务相关用语"></el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="公共库" name="public">

      </el-tab-pane>
    </el-tabs>

    
  </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            activeTab: 'person',
            activeItem: '1',
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
  width: 700px;
}
.btn{
  background-color: rgb(0,110,255);
}
.inline-input{
  display: inline;
  width: 200px;
}
</style>