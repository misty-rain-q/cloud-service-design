<template>
  <div class="container">
      <div class="d-aside">
        <div class="aside">

          <div class="aside-t"><p>当前会话</p></div>

          <div v-for="(item, index) in items" @click="greet(index)"  v-bind:class="{ active: index == isActive }">
            <div class="user">
              <div class="usr-img">
                <i class="el-icon-chat-dot-round"></i>
              </div>
              <div class="tile">
                <div class="now">
                  <span class="name">北京客户</span>
                  <span class="time">12:10</span>
                </div>
                <div class="u-msg">您好，我想咨询一下</div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-main" style="background-color: white;">
          <div class="d-header" height="53px" style="">
            <div class="main-title">
              <span class="user_name">北京客户</span>
              <span class="d-count">首次会话</span>
            </div>
            <div class="button-group">
              <span class="top-button" @click="createWorkOrder()">
                <i class="iconfont icon-icon-"></i>
                <span>创建工单</span>
              </span>
              <span class="top-button"  @click="serviceTurnTo()">
                <i class="iconfont icon-chehuisekuai"></i>
                <span>转接</span>
              </span>
              <span class="top-button"  @click="intoBlacklist()">
                <i class="iconfont icon-lahei"></i>
                <span>拉黑</span>
              </span>
              <span class="top-button"  @click="turnOff()">
                <i class="iconfont icon-jieshu"></i>
                <span>结束会话</span>
              </span>
            </div>
          </div>

          <div class="commu-main" style="">
            <div class="communicate">

              <div class="show" style="padding: 0;">
                <div class="more" @click="moremsg()">
                  <span>更多记录</span>
                </div>
                <div class="s-msg customer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span style="">
                        您好，请问有什么可以帮助您呢？请问有什么可以帮助您呢请问有什么可以帮助您呢请问有什么可以帮助您呢请问有什么可以帮助您呢
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>

                <div class="s-msg servicer">
                  <div class="s-c-img">
                    <i class="el-icon-chat-dot-round"></i>
                  </div>
                  <div class="s-c-info">
                    <div class="s-c-i-title">
                      <span class="title-name">北京客户</span>
                      <span class="title time">2020/06/09 12:10</span>
                    </div>
                    <div class="s-c-i-content">
                      <span>
                        您好，请问有什么可以帮助您呢？
                      </span>
                    </div>
                  </div>
                </div>


              </div>


              <div class="write">
                <div class="shortcut">
                  <el-upload
                    class="avatar-uploader"
                    action="#"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <i class="iconfont icon-biaoqing"></i>
                  </el-upload>

                  <el-upload
                    class="avatar-uploader"
                    action="#"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <i class="iconfont icon-tupian1"></i>
                  </el-upload>

                </div>
                <div class="inputArea">
                  <textarea placeholder="请输入内容" class="textarea" name="" id="input-content" cols="" rows=""></textarea>
                </div>
                <div class="commit">
                  <el-button native-type="submit" class="c-button" type="primary">发送</el-button>
                </div>
              </div>

            </div>

            <div class="info">
              <div class="info-title">
                <div v-for="(title, indexT) of titles" @click="getinfo(indexT)" class="tbutton" v-bind:class="{ tActive: indexT == TActive }">
                  <div class="tspecial">{{title.name}}</div>
                </div>
              </div>
              <div class="info-main">
                <div v-if="TActive == 0" class="info-content info-con">
                   <div class="visitor-info">
                     <div class="c-i-header">
                       <p>访客信息</p>
                     </div>
                     <div class="c-i-detail">
                       <div class="row">
                         <span class="row-one">来源</span>
                         <span class="row-two">113.128.230.51</span>
                       </div>
                       <div class="row">
                         <span class="row-one">IP地址</span>
                         <span class="row-two">113.128.230.51</span>
                       </div>
                       <div class="row">
                         <span class="row-one">浏览器</span>
                         <span class="row-two">Chrome 81.0.4044.138</span>
                       </div>
                       <div class="row">
                         <span class="row-one">屏幕尺寸</span>
                         <span class="row-two">1440 x 900 </span>
                       </div>
                       <div class="row">
                         <span class="row-one">设备</span>
                         <span class="row-two">Mac</span>
                       </div>
                     </div>

                   </div>
                   <div class="customer-info">
                     <div class="c-i-header">
                      <p>客户信息</p>
                      <i class="iconfont icon-bianji" @click="editCusInfo">编辑</i>
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
                         <span class="row-two">——</span>
                       </div>
                       <div class="row">
                         <span class="row-one">客户来源</span>
                         <span class="row-two">——</span>
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

                <div v-else-if ="TActive == 1" class="info-content com-con">
                  <div class="com-title">
                    <div class="com-button" v-for="(com, comIn) of coms" @click="comPubOrPer(comIn)" v-bind:class="{ comActive: comIn == comNum }">
                      <span>{{com.name}}</span>
                    </div>
                  </div>
                  <div class="search">
                    <el-input placeholder="搜索常用语" prefix-icon="el-icon-search"></el-input>
                  </div>
                  <div v-if="comNum == 0" class="commen-use person">
                      <el-menu>
                        <el-submenu>
                          <template slot="title">

                            <span>我的常用语分类一</span>
                          </template>
                          <el-menu-item index="1-1">你好，请问有什么可以帮您？</el-menu-item>
                          <el-menu-item index="1-2">你好，请问有什么可以帮您？</el-menu-item>
                        </el-submenu>
                      </el-menu>
                      <el-menu>
                        <el-submenu>
                          <template slot="title">

                            <span>我的常用语分类二</span>
                          </template>
                          <el-menu-item index="1-1">你好，请问有什么可以帮您？</el-menu-item>
                          <el-menu-item index="1-2">你好，请问有什么可以帮您？</el-menu-item>
                        </el-submenu>
                      </el-menu>
                  </div>
                  <div v-else class="commen-use public">
                    <el-menu>
                      <el-submenu>
                        <template slot="title">

                          <span>公共常用语分类一</span>
                        </template>
                        <el-menu-item index="1-1">你好，请问有什么可以帮您？</el-menu-item>
                        <el-menu-item index="1-2">你好，请问有什么可以帮您？</el-menu-item>
                      </el-submenu>
                    </el-menu>
                    <el-menu>
                      <el-submenu>
                        <template slot="title">

                          <span>公共常用语分类二</span>
                        </template>
                        <el-menu-item index="1-1">你好，请问有什么可以帮您？</el-menu-item>
                        <el-menu-item index="1-2">你好，请问有什么可以帮您？</el-menu-item>
                      </el-submenu>
                    </el-menu>
                  </div>

                </div>

                <div v-else class="info-content order-con">
                  <!-- 引用资料窗口的ccs样式 -->
                  <div class="customer-info his-order">
                    <div class="c-i-header">
                     <p>工单信息</p>
                    </div>
                    <div class="c-i-detail">
                      <div class="row">
                        <span class="row-one">工单标题 </span>
                        <span class="row-two"> 分类一</span>
                      </div>
                      <p class="row">
                        <span class="row-one">工单描述</span>
<!-- 超过一行的解决方案 -->
                        <span class="row-two moreOneQue">
                          客户需要型号SU-CC8990的产品的详细报价，请速联系。
                        </span>
                      </p>
                      <div class="row">
                        <span class="row-one">工单分类 </span>
                        <span class="row-two">分类一</span>
                      </div>
                      <div class="row">
                        <span class="row-one">抄送人 </span>
                        <span class="row-two">王涛，吴敏儿</span>
                      </div>
                      <div class="row">
                        <span class="row-one">优先级 </span>
                        <span class="row-two">低</span>
                      </div>
                      <div class="row">
                        <span class="row-one">工单状态 </span>
                        <span class="row-two">处理中</span>
                      </div>
                      <div class="row">
                        <span class="row-one">受理客服组 </span>
                        <span class="row-two">客服组一</span>
                      </div>
                      <div class="row">
                        <span class="row-one">受理客户 </span>
                        <span class="row-two">王先生</span>
                      </div>
                      <div class="row">
                        <span class="row-one">创建时间 </span>
                        <span class="row-two">2020/06/09 20:09</span>
                      </div>
                      <div class="row">
                        <span class="row-one">更新时间 </span>
                        <span class="row-two">2020/06/09 20:09</span>
                      </div>
                      <div class="his-order-view">
                        <span class="view-button">
                          <span>查看工单详情</span>
                          <i class="el-icon-arrow-right"></i>
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>




      </div>


  </div>
</template>


<script>
export default {
    name: 'Dialog',
    data(){
        return {
            isActive: 0,
            message: "hello",
            TActive: 1,
            comNum: 0,
            items: [
              {name: 'usr1'},
              {name: 'usr2'},
              {name: 'usr3'},
              {name: 'usr4'},
              {name: 'usr5'},
            ],
            titles: [
              {name: '资料'},
              {name: '常用语'},
              {name: '历史工单'},
            ],
            coms: [
              {name: '个人库'},
              {name: '公共库'},
            ]
        }
    },

   methods: {
      greet: function (index) {

        this.isActive = index;

        // let $(this) = $(this);

    },

      createWorkOrder() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },

      turnOff() {
        this.$confirm('是否确认结束会话?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '会话结束!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },

      getinfo: function (indexT) {
        this.TActive = indexT;
      },

      comPubOrPer: function (comIn) {
        this.comNum = comIn;
      },

      moremsg() {

      },

      intoBlacklist() {

      },

      serviceTurnTo() {

      },

      editCusInfo() {

      }

   }


}

</script>



<style scoped>

.container{
  padding-top: 10px;
  padding-left: 10px;
  /* margin-top: 10px; */
}

.d-aside{
  display: flex;
}

.aside{
  text-align: left;
  width: 300px;
  height: 700px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
}

.aside-t{


  padding-left: 17px;
  height: 64px;
  border-bottom: 1px solid #f2f2f2;
}

.aside-t p{
  font-size: 16px;
  line-height: 64px;
  margin: 0;
}

.user{
  width: 300px;
  height: 64px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;

}

.usr-img{
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #e4e4e4;
  color: white;
  margin: 12px 20px;
}

.usr-img i{
  /* font-size: 25px; */
}

.tile{
  margin: 12px 0;
  flex: 1;
}

.tile .now{
  display: flex;
  /* flex: 1; */

}

.tile .now .name{
  font-size: 16px;
  font-weight: 400;
  font-family: 'PingFangSC-Regular', 'PingFang SC';
  color: rgb(51, 51, 51);
}

.tile .now .time{
  font-size: 12px;
  color: rgb(153, 153, 153);
  flex: 1;
  text-align: right;
  margin-right: 14px;
}

.tile .u-msg{
  margin-top: 4px;
  font-size: 12px;
  color: rgb(153, 153, 153);
}

.active{
  background-color: rgba(0, 110, 255, 0.098);
  border-right: 2px solid blue;
}

.d-body{
  height: 700px;
  width: 1040px;
  padding: 0;
}

.d-main{
  height: 700px;
  width: 1040px;
  padding: 0;
  margin-left: 10px;
}

.d-header{
  height: 53px;
  display: flex;
  line-height: 53px;
  padding: 0 25px 0 20px;
  border-bottom: 2px solid rgba(242, 242, 242, 0.498);
}

.d-count{
  color: gray;
  font-size: 14px;
}

.button-group{
  flex: 1;
  text-align: right;


}

.top-button{
  margin-left: 34px;
  color: blue;
}

.top-button span{
  font-size: 14px;
}

.top-button:hover{
  cursor: pointer;
}

/* 聊天主体区 */
.commu-main{
  width: 1040px;
  height: 647px;
  display: flex;
}

.communicate{
  width: 700px;
  height: 647px;


}

.info{
  width: 340px;
  height: 647px;

}

.show{
  height: 500px;
  background-color: rgba(242, 242, 242, 0.498);
  overflow: auto;
}

.more{
  margin: 0 auto;
  padding-top: 11px;
  margin-bottom: 20px;
  cursor: pointer;
}

.show .more span{
  font-size: 12px;
  color: lightgray;
}

.s-msg{
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: left;
}

.s-c-img{
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: blue;
  color: white;
  font-size: 20px;

}

.customer{

}

.s-c-info{

}

.s-c-i-title{
  color: lightgray;
  font-size: 12px;
  margin-bottom: 7px;

}

.s-c-i-content{
  font-size: 14px;
  background-color: white;
  padding: 10px 12px;
  box-shadow: rgb(204, 204, 204) 0px 0px 5px 0px;
  border-radius: 4px;
  display: inline-block;


}

.servicer{
  flex-direction: row-reverse;
}

.s-c-i-content span{

}


.customer .s-c-img{
  margin-right: 8px;
}
.servicer .s-c-img{
    /* margin-left: 20px; */
    margin-left: 8px;
}

.servicer .s-c-i-title{
  text-align: right;
}

.customer .s-c-i-content{

}

/* 输入区域 */
.write{

}

.shortcut{
  display: flex;
  margin-left: 19px;
  margin-top: 16px;
  margin-bottom: 11px;
}

.shortcut .avatar-uploader i{
  margin-right: 23px;
  font-size: 20px;
}

.inputArea{
  margin-left: 15px;
}

.textarea{
  width: 100%;
  height: 33px;
  resize: none;
  border: none;
}

.textarea:focus{
  outline: none;
}

.commit{
  text-align: right;
}

.c-button{
  height: 40px;
  width: 100px;
  background-color: rgb(67, 160, 255);
}

.c-button:hover{
  background-color: rgba(0, 110, 255, 0.8);
}

.c-button:active{
  background-color: rgb(0, 110, 255);
}

/* 右侧三个头部区域 */
.info-title{
  display: flex;
  text-align: center;
  height: 63px;
  border-bottom: 1px solid #f2f2f2;


}

.tbutton{
  flex: 1;
  height: 63px;
  display: flex;
}

.tspecial{

  margin: auto auto;
}

.tActive{
  border-bottom: 3px solid blue;
  background-color: rgba(0, 110, 255, 0.098);
}


.tbutton:hover{
  cursor: pointer;
}

/* 右侧信息区域 */

.info-content{
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
}

.info-con{
  /* display: none; */
}

.common-con{
  /* display: none; */
}

.order-con{
  /* display: none; */
}


/* 右侧信息区域   常用语 */
.com-title{
  display: flex;
}

.com-button{
  /* width: 20px; */

  padding: 2px 12px;
  border-radius: 12px;
  /* border-color: blue; */
  border: 1.5px solid blue;
  margin: 20px 12px;
}

.com-button:hover{
  cursor: pointer;
}

.comActive{
  background-color: blue;
  color: white;
}

.com-button span{
  font-size: 14px;
  margin: auto 0;
}

.search{
  margin-bottom: 20px;
  /* padding-bottom: 20px;
  border-bottom: 1px solid #F2F2F2; */
}

/* 右侧信息区域   历史工单 */
.moreOneQue{

}

.his-order-view{
  text-align: right;
  margin-top: 20px;
}

.view-button{
  color: blue;
  cursor: pointer;
}
.view-button span{
/*  margin: auto 0; */
  font-size: 14px;
}
.view-button i{
  font-size: 16px;
}
/* 右侧信息区域   资料 */
.visitor-info{
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
