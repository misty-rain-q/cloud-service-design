<template>
  <div class="container">
    <!-- 验证码此处需要特定的依赖库. 此处我写好了功能, 大亮子拿来用就行了 -->
        <div class="confirm">
            <canvas id="canvas" 
                    width="150px" 
                    height="40px" 
                    @click.prevent="drawPic">
                    </canvas>
            <!-- <el-input   class="text" 
                        v-model="confirm" 
                        placeholder="请输入验证码" 
                        maxlength="4" 
                        @keyup.enter.native="login">
                        </el-input> -->
        </div><br>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>