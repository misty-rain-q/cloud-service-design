<template>
  <div>
  <el-container>
    <el-aside width="64px">
      <div class="logo_bg">
          <el-avatar class="logo_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593320237430&di=6162b84f971b2172d4d995373b89786a&imgtype=0&src=http%3A%2F%2Fimg1.iyiou.com%2FCompany%2F2016-05-11%2Fcf-yichuangyunkefu.jpg"></el-avatar>
      </div>

      <el-menu  class="aside-menu" 
                default-active="1"
                background-color="#171C3A">

        <el-tooltip content="首页" placement="right">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="会话" placement="right">
          <el-menu-item index="2">
            <i class="el-icon-s-comment"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="访客" placement="right">
          <el-menu-item index="3">
            <i class="el-icon-s-custom"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="历史" placement="right">
          <el-menu-item index="4">
            <i class="el-icon-more"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="客户" placement="right">
          <el-menu-item index="5">
            <i class="el-icon-s-check"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="工单" placement="right">
          <el-menu-item index="6">
            <i class="el-icon-s-order"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="统计" placement="right">
          <el-menu-item index="7">
            <i class="el-icon-s-data"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-divider class="divider"></el-divider>

        <el-tooltip content="设置" placement="right">
          <el-menu-item index="8">
            <i class="el-icon-s-tools"></i>
            <span slot="title"></span>
          </el-menu-item>
        </el-tooltip>

        <el-tooltip content="退出" placement="right">
          <el-menu-item index="9">
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
</div>
</template>

<script>
  export default{
    name: 'Base',
    data(){
      return {
        title_list: ['placehoder','首页','会话','访客','历史','客户','工单','统计','设置'], // 无退出
        title: '首页',
        user_name: '客服七尾'
      }
    }
    
  }
</script>

<style scoped>
.aside-menu{
  position: absolute;
  top: 97px;
  left: 0;
  width: 64px;
  height: 100%;
}

.logo_bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #171C3A;
  height: 97px;
  width: 64px;
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

</style>