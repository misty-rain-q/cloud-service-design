<template>
  <div class="orderIndex">
    <div class="orderTable">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 1002px"
                :header-cell-style="{'background-color':'#e6f1ff'}">
        <el-table-column type="selection" width="58" align="center"></el-table-column>
        <el-table-column label="工单ID" prop="id" width="98" align="center">
          <template slot-scope="scope">
            <span class="toBeBlue">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="工单标题" prop="title" width="141" align="center"></el-table-column>
        <el-table-column label="工单渠道" prop="channel" width="141" align="center"></el-table-column>
        <el-table-column label="工单状态" prop="status" width="141" align="center">
          <template slot-scope="scope">
            <!-- hit="true" -->
            <el-tag type="danger"  style="width:64px;height:24px;
                  border-radius:0px;top:9px;line-height: 24px;">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="客户姓名" prop="servicerName" width="141" align="center"></el-table-column>
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
      <span>共100条</span>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <el-select class="pageSelect" v-model="pageValue">
        <el-option
          v-for="item in pageOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span>到第</span>
      <el-input class="jumpNum" v-model="input" placeholder="1"></el-input>
      <span>页</span>
      <el-button type="primary" plain class="buttonJump"><span>确定</span></el-button>
  </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        tableData: [
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          },
          {
            id: '32533819',
            title: '客服报价',
            channel: '手动录入',
            status: '未分配',
            servicerName: '客服书记',
            latestTime:"2020/7/6 20:17",
            opration1: '查看详情',
            opration2: '接单'
          }
        ],
        pageOptions: [
          {
            value: '选项1',
            label: '10条/页'
          },
          {
            value: '选项2',
            label: '20条/页'
          },
          {
            value: '选项3',
            label: '30条/页'
          },
          {
            value: '选项4',
            label: '40条/页'
          },
          {
            value: '选项5',
            label: '50条/页'
          }
        ],
        pageValue:'',
        input: "",
      }
    },
    created:function(){
      this.pageValue = this.pageOptions[0].value;
    },
    methods:{
      check(){
        this.$router.push('/specificOrder');
      }
    }
  }
</script>

<style scoped>
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
