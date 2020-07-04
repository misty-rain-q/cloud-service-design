<template>
    <div class = "rigister">
      <div class = "container">
        <div class = "box">
          <img src = "../assets/u41.svg" alt = "">
          <div class="form">
              <form action = "">
                <h3>注册极客营客服云</h3>
                <div class = "item"><label for = "">账号</label><input type = "text"></div>
                <div class = "item"><label for = "">密码</label><input type = "password"></div>
                <div class = "item"><label for = "">验证码</label><input type="number"></div>
                <el-row>
                   <el-button class="item btn"
                   @click="register">注册</el-button>
                </el-row>
                <div class="login">
                   <router-link to='/login' style="font-size: 15px;text-decoration: none;color:white">已有账号，现在去登录</router-link>
                </div>
             </form>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
      name: 'register',
      data(){
          return{
              comfirm: ''
          }
      },
      methods: {
          // 登陆
          register(){
              this.$router.replace('/login');
              this.$message({
                  message: '注册成功',
                  type: 'success'
              })
          }
    },
  }
</script>

<style>
  .container{
    width: 1169px;
    height: 864px;
    margin:0 auto;
  }
  .box{
     margin-top: 160px;
     height: 507px;
  }
  img{
    width: 600px;
    height: 479px;
  }
  .form{
    float:right;
    width:439px;
    height:507px;

  }
  form{
    background-color: rgb(0,110,255);
    padding:85px 40px;
    color: #fff;
     }
  h3{
    text-align: left;
    font-family: PingFangSC-Semibold,"PingFang SC Semibold", "PingFang SC", sans-serif;
    font-size: 32px;
    font-weight: 650px;
    margin-bottom: 47px;
  }
  .item{
    width: 358px;
    height:48px;
    background-color: #fff;
    margin-bottom: 16px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .item label{
    font-size: 14px;
    font-weight: 400;
    color:#333333;
    line-height: normal;
    font-feature-settings: "kern";
  }
  .item input{
    width: 280px;
    height: 23px;
    padding: 3px 2px 3px 2px;
    border-radius: 0px;
    border-style: none;
    outline-style: none;
   }
    .item.btn{
        background-color: rgb(225,145,56);
        text-align: center;
     }
    .login{
         color: white;
         margin-top: 15px;
         font-size: 13px;
         height: 40px;
         text-align: center;
      }
</style>
