<template>
  <div class="container">
        <h1>登陆</h1>
        <el-button  type="primary"
                    @click="login">登陆</el-button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            comfirm: '',
        }
    },
    methods: {
        // 登陆
        login(data){
            // console.log("---")
            // console.log(data);
            // console.log("---")
            // this.$axios.
            //     // 由于login的界面和后端controller未写.. 此处blacklist做前后端接口对接测试
            //     post('/servicer/login',data) // 注意理解此处 data: data (ES6机制)
            //     .then(response=>{
            //         console.log(response); 
            //         this.$message({
            //             message: '登陆成功',
            //             type: 'success'
            //         });
            //         this.$router.push('/index');
            //     })
            //     .catch(err=>{ 
            //         console.log(err);
            //         this.$message({
            //             message: '登陆失败',
            //             type: 'error'
            //         });
            //     })
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    this.$router.push('/index');

        },  

    },
}
</script>

<style scoped>

</style>