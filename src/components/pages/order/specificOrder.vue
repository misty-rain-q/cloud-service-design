<template>
  <div class="specificOutContainer">
    <!-- 上方按钮 -->
    <div class="specificOrderTopButton">
      <el-button class="backButton">< 返回</el-button>
      <el-button class="changeStatushButton">更改状态</el-button>
      <el-button class="passingButton">转交工单</el-button>
      <el-button class="editButton">编辑工单</el-button>
    </div>

    <div style="display: flex;margin-bottom: 60px;">
      <!-- 左侧界面 -->
      <div class="specificOrderLeft">

        <!-- 回复操作 -->
        <div class="specificOrderDetail">
          <div class="specificOrderTitle">客户报价</div>
          <div class="specificOrderDesc">客户需要型号SU-CC8990的产品的详细报价，请速联系。</div>
          <el-input class="replyBox" type="textarea" v-model="replyContent" placeholder="请输入回复内容"></el-input>
          <el-button type="text" style="float: left;">添加附件（最多上传5个附件，单个文件最大20M)</el-button>
          <br/>
          <br/>
          <br/>
          <br/>
          <el-button class="replyButton" style="float: left;">回复</el-button>
        </div>

        <!-- 导航菜单 -->
        <el-menu default-active="/specificOrder/replyContent" mode="horizontal" style="margin-bottom: 5px;" router>
          <el-menu-item index="/specificOrder/replyContent">回复记录</el-menu-item>
          <el-menu-item index="/specificOrder/operatingLog">操作日志</el-menu-item>
        </el-menu>

        <router-view></router-view>

      </div>

      <!-- 右侧界面 -->
      <div class="specificOrderRight">
         <div class="order-info">
           <div class="c-i-header">工单信息信息</div>
           <div class="c-i-detail">
             <div class="row">
               <span class="row-one">工单分类</span>
               <span class="row-two">分类一</span>
             </div>
             <div class="row">
               <span class="row-one">抄送人</span>
               <span class="row-two">大闯子，书记儿</span>
             </div>
             <div class="row">
               <span class="row-one">优先级</span>
               <span class="row-two">低</span>
             </div>
             <div class="row">
               <span class="row-one">工单状态</span>
               <span class="row-two">处理中</span>
             </div>
             <div class="row">
               <span class="row-one">受理客服组</span>
               <span class="row-two">客服组一</span>
             </div>
             <div class="row">
               <span class="row-one">受理客户</span>
               <span class="row-two">大锐子</span>
             </div>
             <div class="row">
               <span class="row-one">创建时间</span>
               <span class="row-two">2020/06/09 20:09</span>
             </div>
             <div class="row">
               <span class="row-one">更新时间</span>
               <span class="row-two">2020/06/09 20:09</span>
             </div>
           </div>
         </div>

         <div class="customer-info">
           <div class="c-i-header">
            <span>客户信息</span>
            <i class="iconfont icon-bianji" style="font-size: 14px;"> 编辑</i>
           </div>
           <div class="c-i-detail">
             <div class="row">
               <span class="row-one">客户名称</span>
               <span class="row-two">北京市客户</span>
             </div>
             <div class="row">
               <span class="row-one">真实姓名</span>
               <span class="row-two">王伟</span>
             </div>
             <div class="row">
               <span class="row-one">客户电话</span>
               <span class="row-two">——</span>
             </div>
             <div class="row">
               <span class="row-one">客户邮箱</span>
               <span class="row-two">—— </span>
             </div>
             <div class="row">
               <span class="row-one">客户公司</span>
               <span class="row-two">——</span>
             </div>
             <div class="row">
               <span class="row-one">客户地址</span>
               <span class="row-two">——</span>
             </div>
             <div class="row">
               <span class="row-one">客户等级</span>
               <span class="row-two">普通客户</span>
             </div>
             <div class="row">
               <span class="row-one">客户来源</span>
               <span class="row-two">访客转化</span>
             </div>
             <div class="row">
               <span class="row-one">客户备注</span>
               <span class="row-two">——</span>
             </div>
             <div class="row">
               <span class="row-one r-o-tag">客户标签</span>
               <span class="row-two-tag">已上市</span>
               <span class="row-two-tag">潜在客户</span>
             </div>
           </div>
         </div>

      </div>

    </div>

  </div>
</template>

<script>

  export default {
      name: 'specificOrder',
      data(){
          return{
            replyContent:''

          }
      }
  }
</script>

<style>
  .specificOutContainer{
    position: fixed;
    height:100%;
    overflow: auto;
  }

  .specificOrderTopButton{
    display: flex;
    margin-bottom: 10px;
  }

  .changeStatushButton,.passingButton,.editButton,.replyButton{
    background-color: rgb(0,110,255);
    color:#FFFFFF;
  }

  .changeStatushButton:hover,.passingButton:hover,.editButton:hover,.replyButton:hover{
    background-color: rgb(23,123,255);
    color:#FFFFFF;
  }

  .backButton{
    margin-right: 542px;
    background-color: transparent;
    float: left;
    color: rgb(153,153,153);
  }

  .backButton:hover{
    background-color: transparent;
    color: rgb(0,110,255);
    border: 1px solid rgb(0,110,255);
  }

  .specificOrderLeft{
    width: 942px;
    height:830px;
    padding-top: 25px;
    padding-right: 26px;
    padding-bottom: 30px;
    padding-left: 25px;
    background-color: #FFFFFF;
    box-sizing: border-box;
  }

  .specificOrderDetail{
    height: 430px;
  }

  .specificOrderTitle{
    width: 354px;
    height: 48px;
    font-size: 28px;
    font-weight: 400;
    color: #333333;
    line-height: 48px;
    font-feature-settings: "kern";
    text-align: left;
  }

  .specificOrderDesc{
    width: 360px;
    height: 48px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 48px;
    font-feature-settings: "kern";
    text-align: left;
  }

  .replyBox .el-textarea__inner{
    width: 891px;
    height: 211px;
    background-color: #F2F2F2;
    border-radius: 2px;
  }


  .specificOrderRight{
    width: 340px;
    height: 700px;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 1px;
    margin-left: 10px;
    margin-right: 148px;
    background-color: #FFFFFF ;
    box-sizing: border-box;
  }

  .order-info{
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 10px;
  }

  .c-i-header{
    margin-top: 20px;
    margin-bottom: 14px;
    display: flex;
  }

  .c-i-header p{
    margin: 0;
    flex: 1;
  }

  .c-i-header i{
    flex: 1;
    text-align: right;
    color: blue;
    font-size: 16px;
    /* margin-right: 20px; */
  }

  .c-i-header i:hover{
    cursor: pointer;
  }


  .row{
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 8px;
    display: flex;
  }

  .row-one{
    color: rgb(204, 204, 204);
    width: 80px;
    margin: auto 0;
  }

  .row-two{

  }

  .row-two-tag{
    background-color: rgb(46, 212, 119);
    color: white;
    margin-right: 20px;
    border-radius: 2px;
    padding: 4px 12px;

  }


</style>
