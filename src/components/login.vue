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
            comfirm: ''
        }
    },
    methods: {
        // 登陆
        login(){
            this.$router.replace('/index');
            this.$message({
                message: '登陆成功',
                type: 'success'
            })
        },  

        // 登陆可能会用到验证码
        randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        },
        //生成随机颜色RGB分量
        randomColor(min, max) {
            var _r = this.randomNum(min, max);
            var _g = this.randomNum(min, max);
            var _b = this.randomNum(min, max);
            return "rgb(" + _r + "," + _g + "," + _b + ")";
        },
        drawPic() {
        //获取到元素canvas
        var $canvas = document.getElementById("canvas");
        var _str = "23456789abcdefghjkmnpqrstuvwxyz"; //设置随机数库
        var _picTxt = ""; //随机数
        var _num = 4; //4个随机数字
        var _width = $canvas.width;
        var _height = $canvas.height;
        var ctx = $canvas.getContext("2d"); //获取 context 对象
        ctx.textBaseline = "bottom"; //文字上下对齐方式--底部对齐
        ctx.fillStyle = this.randomColor(180, 240); //填充画布颜色
        ctx.fillRect(0, 0, _width, _height); //填充矩形--画画
        for (var i = 0; i < _num; i++) {
            var x = ((_width - 10) / _num) * i + 10;
            var y = this.randomNum(_height / 2, _height);
            var deg = this.randomNum(-45, 45);
            var txt = _str[this.randomNum(0, _str.length)];
            _picTxt += txt; //获取一个随机数
            ctx.fillStyle = this.randomColor(10, 100); //填充随机颜色
            ctx.font = this.randomNum(16, 40) + "px SimHei"; //设置随机数大小，字体为SimHei
            ctx.translate(x, y); //将当前xy坐标作为原始坐标
            ctx.rotate((deg * Math.PI) / 180); //旋转随机角度
            ctx.fillText(txt, 0, 0); //绘制填色的文本
            ctx.rotate((-deg * Math.PI) / 180);
            ctx.translate(-x, -y);
        }
        for (var i = 0; i < _num; i++) {
            //定义笔触颜色
            ctx.strokeStyle = this.randomColor(90, 180);
            ctx.beginPath();
            //随机划线--4条路径
            ctx.moveTo(this.randomNum(0, _width), this.randomNum(0, _height));
            ctx.lineTo(this.randomNum(0, _width), this.randomNum(0, _height));
            ctx.stroke();
        }
        for (var i = 0; i < _num * 10; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            //随机画原，填充颜色
            ctx.arc(
            this.randomNum(0, _width),
            this.randomNum(0, _height),
            1,
            0,
            2 * Math.PI
            );
            ctx.fill();
        }

        this.identifyCode = _picTxt;
        }
    },
    created() {
        this.$nextTick(() => {
           this.drawPic();
        });
    }
}
</script>

<style scoped>

</style>