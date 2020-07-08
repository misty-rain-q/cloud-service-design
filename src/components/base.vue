<template>
  <div>
  <el-container>
    <el-aside width="64px">
      <div @click="logo_click" class="logo_bg">
          <el-avatar  class="logo_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593320237430&di=6162b84f971b2172d4d995373b89786a&imgtype=0&src=http%3A%2F%2Fimg1.iyiou.com%2FCompany%2F2016-05-11%2Fcf-yichuangyunkefu.jpg"></el-avatar>
      </div>

      <el-menu  class="aside-menu"
                background-color="#171C3A"
                default-active="/index"
                router>

        <el-tooltip content="首页" placement="right">
          <el-menu-item @click="getTitle" index="/index">
            <i class="el-icon-s-home"></i>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="会话" placement="right">
          <el-menu-item @click="getTitle" index="/dialog">
            <i class="el-icon-s-comment"></i>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="访客" placement="right">
          <el-menu-item  @click="getTitle" index="/visitor">
            <i class="el-icon-s-custom"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="历史" placement="right">
          <el-menu-item @click="getTitle" index="/history">
            <i class="el-icon-more"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="客户" placement="right">
          <el-menu-item @click="getTitle" index="/customer">
            <i class="el-icon-s-check"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="工单" placement="right">
          <el-menu-item @click="getTitle" index="/order/allOrder">
            <i class="el-icon-s-order"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="统计" placement="right">
          <el-menu-item @click="getTitle" index="/statistics/statisticsOverall">
            <i class="el-icon-s-data"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-divider class="divider"></el-divider>

        <el-tooltip content="设置" placement="right">
          <el-menu-item @click="getTitle" index="/settings">
            <i class="el-icon-s-tools"></i>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="退出" placement="right">
          <el-menu-item @click="exit" index="login">
            <i class="el-icon-right"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

      </el-menu>
    </el-aside>
  </el-container>

  <el-container>
    <el-header class="header">
      <span class="title">{{title}}</span>

      <div class="header-right">
        <div class="msg">
          <i class="el-icon-message-solid"></i>
          <img class="has_new" src="https://ccs.it-doesnt.work/images/%E9%A6%96%E9%A1%B5/u101.svg">
        </div>
        <div class="my_info">
          <el-avatar class="avatar" src="https://ccs.it-doesnt.work/images/%E9%A6%96%E9%A1%B5/u94.svg"></el-avatar>
          <img class="state_dot" src="https://ccs.it-doesnt.work/images/%E9%A6%96%E9%A1%B5/u95.svg">
          <div class="user_name">{{user_name}}</div>
          <img class="pull_down" src="https://ccs.it-doesnt.work/images/%E9%A6%96%E9%A1%B5/u93.svg">
          <!-- TODO -->
          <el-dropdown>
            <el-dropdown-menu>在线</el-dropdown-menu>
            <el-dropdown-menu>离线</el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
  </el-container>


  <div class="main">
      <router-view></router-view>
  </div>

</div>
</template>

<script>
  export default{
    name: 'Base',
    data(){
      return {

        title: '404',
        user_name: '客服七尾'
      }
    },
    watch: {

    },
    computed: {

    },
    mounted(){
      this.getTitle();
    },
    methods: {
      getTitle(){
        let title_list=new Array('placehoder','首页','会话','访客','历史','客户','工单','统计','设置')
        let index=this.$route.path;
        if(index=='/index'){
          this.title=title_list[1];
        }else if(index=='/dialog'){
          this.title=title_list[2];
        }else if(index=='/visitor'){
          this.title=title_list[3];
        }else if(index=='/history'){
          this.title=title_list[4];
        }else if(index=='/customer'){
          this.title=title_list[5];
        }else if(index=='/order'){
          this.title=title_list[6];
        }else if(index=='/statistics'){
          this.title=title_list[7];
        }else if(index=='/settings'){
          this.title=title_list[8];
        }
      },
      logo_click(){
        this.$router.push("/index");

      },
      exit(){
        this.$message({
          message: '已经安全退出',
          type: 'success'
        });

      }
    },

  }
</script>

<style scoped>
.aside-menu{
  position: fixed;
  top: 97px;
  left: 0;
  width: 64px;
  height: 100%;
  z-index: 1;
}

.logo_bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #171C3A;
  height: 97px;
  width: 64px;
  z-index: 1;
  cursor: pointer;
}

.logo_img{
  margin-top: 30px;
}

.el-menu-item.is-active{
  border-left: solid rgb(0,110,255) 4px;
}

.divider{
  width: 32px;
  margin-left: 16px;
}

.header{
  position: fixed;
  top: 0;
  left: 64px;
  width: 1470px;
  height: 64px;
  background-color: white;
  z-index: 1;
}

.title{
  position: absolute;
  top: 20px;
  left: 50px;
}

.header-right{
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 50px;
  width: 200px;
}

.my_info{
  display: flex;
  flex-direction: row;
  width: 180px;
  height: 53px;
}

.msg{
  margin-top: 13px;
}

.has_new{
  position: absolute;
  top: 12px;
  right: 180px;
}

.state_dot{
  position: absolute;
  top: 32px;
  right: 113px;
}

.user_name{
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  top: 13px;
  right: 43px;
}

.pull_down{
  position: absolute;
  right: 20px;
  top: 20px
}

.avatar{
  position: absolute;
  top: 3px;
  right: 113px;
}

.main{
  position: relative;
  left: 60px;
  padding: 0;
  width:1420px;
  padding: 10px;
}

</style>
