<template>
  <div class="orderIndex">

    <!-- 六个选择下拉框 -->
    <div class="select">
      <el-select class="orderFirstRow" v-model="statusValue">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="priorityValue">
        <el-option
          v-for="item in priorityOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="categoryValue">
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="channelValue">
        <el-option
          v-for="item in channelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="groupValue">
        <el-option
          v-for="item in groupOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="orderFirstRow" v-model="servicerValue">
        <el-option
          v-for="item in servicerOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <!-- 日期选择及关键字搜索 -->
    <div class="orderSecondLine">
      <div class="clock">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="请选择日期">
        </el-date-picker>
        <div class="wave">~</div>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="请选择日期">
        </el-date-picker>
      </div>
      <div class="search">
        <el-input class="searchContent" v-model="input" placeholder="请输入关键词搜索"></el-input>
        <el-button class="searchButton">搜索</el-button>
      </div>
    </div>


    <div class="orderTable">
      <el-table :data="page.list" tooltip-effect="dark" style="width: 1002px"
                :header-cell-style="{'background-color':'#e6f1ff'}">
        <el-table-column type="selection" width="58" align="center"></el-table-column>
        <el-table-column label="工单ID" prop="id" width="98" align="center">
          <template slot-scope="scope">
            <span class="toBeBlue">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="工单标题" prop="title" width="141" align="center"></el-table-column>
        <el-table-column label="工单渠道" prop="channel" width="141" align="center"></el-table-column>
        <el-table-column label="工单状态" prop="state" width="141" align="center">
          <template slot-scope="scope">
            <!-- hit="true" -->
            <el-tag type="danger"  style="width:64px;height:24px;
                  border-radius:0px;top:9px;line-height: 24px;">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="客户姓名" prop="customerName" width="141" align="center"></el-table-column>
        <el-table-column label="最后更新时间" prop="latestTime" width="141" align="center"></el-table-column>
        <el-table-column label="操作" prop="opration" width="141" align="center">
          <template slot-scope="scope">
            <el-button type="text" v-on:click='check' style="color: rgb(0,110,255);padding: 0px;">{{ scope.row.opration1 }}</el-button>
            <el-button type="text" style="color: rgb(0,110,255);padding: 0px;">{{ scope.row.opration2 }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageJump">
      <el-pagination v-if="page"
                     background
                     layout="total, prev, pager, next,sizes, jumper"
                     :total="page.total"
                     :page-size="page.pageSize"
                     :page-sizes="[10, 20, 30, 40,50]"
                     :current-page="page.currentPage"
                     @current-change="currentChange"
                     @prev-click="prevChange"
                     @next-click="nextChange"
                     @size-change="handleSizeChange">
      </el-pagination>
  </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        statusOptions: null,
        priorityOptions: null,
        categoryOptions: null,
        channelOptions: null,
        groupOptions: null,
        servicerOptions: null,
        statusValue:'',
        priorityValue:'',
        categoryValue:'',
        channelValue:'',
        groupValue:'',
        servicerValue:'',
        value1:'',
        value2:'',
        input:'',
        page:null,
        currentPage:1,
        pageSize:10,
        // tableData: [
        //   {
        //     id: '32533819',
        //     title: '客服报价',
        //     channel: '手动录入',
        //     status: '未分配',
        //     servicerName: '客服书记',
        //     latestTime:"2020/7/6 20:17",
        //     opration1: '查看详情',
        //     opration2: '接单'
        //   }
        // ],
      }
    },
    watch:{
      currentPage:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          this.page=response.data
        })
      },
      pageSize:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          this.page=response.data
        })
      },
      statusValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
      priorityValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
      categoryValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
      channelValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
      servicerValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
      groupValue:function(){
        this.$axios
        .get(`/work_order/selectPage?currentPage=${this.currentPage}
                                    &pageSize=${this.pageSize}
                                    &state=${this.statusValue}
                                    &priority=${this.priorityValue}
                                    &type=${this.categoryValue}
                                    &channel=${this.channelValue}
                                    &nickName=${this.servicerValue}
                                    &serviceGroup=${this.groupValue}`)
        .then(response=>{
          console.log(response);
          this.page=response.data
        })
      },
    },
    beforeCreate:function() {
      console.log("--->begin");
      this.$axios
          .get('/work_order/page')
          .then(response=>{
              console.log(response);
              this.page=response.data
          })
      this.$axios
          .get('/work_order/stateOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.statusOptions=response.data.result.ElOption;
            this.statusValue = response.data.result.ElOption[0].value;
          })
      this.$axios
          .get('/work_order/priorityOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.priorityOptions=response.data.result.ElOption;
            this.priorityValue = response.data.result.ElOption[0].value;
          })
      this.$axios
          .get('/work_order/typeOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.categoryOptions=response.data.result.ElOption;
            this.categoryValue = response.data.result.ElOption[0].value;
          })
      this.$axios
          .get('/work_order/channelOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.channelOptions=response.data.result.ElOption;
            this.channelValue = response.data.result.ElOption[0].value;
          })
      this.$axios
          .get('/work_order/servicerOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.servicerOptions=response.data.result.ElOption;
            this.servicerValue = response.data.result.ElOption[0].value;
          })
      this.$axios
          .get('/work_order/groupOptions')
          .then(response=>{
            console.log(response.data.result.ElOption);
            this.groupOptions=response.data.result.ElOption;
            this.groupValue = response.data.result.ElOption[0].value;
          })
    },

    methods:{
      check(){
        this.$router.push('/specificOrder');
      },
      currentChange(event){
        this.currentPage = event;
      },
      prevChange(event){
        this.currentPage = event;
      },
      nextChange(event){
        this.currentPage = event;
      },
      handleSizeChange(event){
        this.pageSize = event;
      },
    }
  }
</script>

<style scoped>

  .select{
    margin-top: 19px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
  }

  .orderFirstRow{
    margin-left: 5px;
    margin-right: 5px;
    width: 160px;
    height: 40px;
    border-radius: 2px;
  }
  .orderFirstRow>>>.el-input__inner{
      background-color: #F2F2F2;
      border: transparent;
  }

  .orderSecondLine{
    display: flex;
  }

  .clock{
    width: 301px;
    margin-top: 14px;
    margin-left: 20px;
    background-color: rgb(242,242,242);
    display: flex;
    float: left;
    border-radius: 2px;
  }

  .el-input--prefix>>>.el-input__inner{
    background-color: transparent;
    line-height: 40px;
    border: transparent;
  }

  .wave{
    height: 40px;
    line-height: 40px;
  }

  .search{
    display: flex;
  }

  .searchContent{
    width: 300px;
    height: 40px;
    margin-top: 14px;
    margin-left: 13px;
    border-radius: 2px;
  }

  .searchContent>>>.el-input__inner{
    background-color: #F2F2F2;
    border: transparent;
  }

  .searchButton{
    background-color: rgb(0,110,255);
    color: #FFFFFF;
    margin-top: 14px;
    height: 40px;
    border-radius: 2px;
  }

  .searchButton:hover{
    background-color: rgb(23,123,255);
    color:#FFFFFF;
  }



  .el-table{
    margin-top: 10px;
    margin-left: 20px;
  }

  .pageJump{
    display: flex;
    margin-top: 26px;
    float: right;
  }

  .pageJump span{
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: 400;
    margin-top: -2px;
    color: #666666;
    /* line-height: normal; */
    font-feature-settings: "kern";
  }
  .pageSelect{
     width: 75px;
     height: 32px;
     margin-left: 10px;
     margin-right: 10px;
     border: 1px solid rgb(118, 118, 118);
     border-radius: 2px;
  }

  .pageSelect>>>.el-input__inner{
    background-color: #FFFFFF;
    height: 32px;
    padding: 0px;
    font-size: 13px;
    color: #000000;
    border: transparent;
  }

  .jumpNum{
    width: 48px;
    height: 30px;
    margin-top: 2px;
    box-sizing: border-box;
  }

  .jumpNum>>>.el-input__inner{
    width: 41px;
    height: 30px;
    background-color: #FFFFFF ;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 2px;
  }

  .buttonJump{
    width: 48px;
    height: 30px;
    margin-left: 10px;
    margin-right: 18px;
    padding: 0;
    box-sizing: content-box;
  }

  .buttonJump span{
    text-align: center;
    line-height: 30px;
  }

  .toBeBlue{
    color: rgb(0,110,255);
  }



</style>
