<template>
  <div class="container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="个人库" name="person">
        <div class="btn-group">
          <el-input v-model="search" placeholder="搜索常用语"></el-input>
          <el-button type="primary" class="btn-search">搜索</el-button>

          <el-button type="primary" @click="classfication=true" class="btn">添加分类</el-button>
          <el-button type="primary" class="btn">添加常用语</el-button>
          <el-button plain>导入常用语</el-button>
        </div>
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
          <el-collapse-item name="1" title="欢迎语">

            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              class="tags"
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">增加常用语</el-button>

          </el-collapse-item>
          <el-collapse-item name="2" title="业务相关用语"></el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="公共库" name="public">
        <!-- TODO -->
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
            dynamicTags: [
              '您好，请问有什么可以帮您？',
              '您好, 请问您的问题得以解决了吗',
              '再见, 祝您生活愉快, 工作顺利',
            ],
            inputVisible: false,
            inputValue: ''
        }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
 
    },
    created(){
      
      this.$axios
            .get('/commonword')
            .then(response=>{
              console.log(response)
            })
            .catch(err=>{
              console.log(err);
            })
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
.btn-search{
  background-color: rgb(0,110,255);
  /* display: inline; */
}
.inline-input{
  display: inline;
  width: 200px;
}
.btn-group{
  display: flex;
  flex-direction: row;
}
.el-tag + .el-tag {
  margin-top: 10px;
}
.button-new-tag {
  /* margin-left: 10px; */
  margin-top: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-top: 10px;
  vertical-align: bottom;
}
.tags{
  display: block;
  font-size: 16px;
}
</style>