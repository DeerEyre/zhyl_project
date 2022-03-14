<template>
  <div style="height: 100%;z-index:9999">
    <!-- <el-button type="text" @click="dialogFormVisible1 = true" style="font-size: 20px">注册</el-button> -->
    <el-button type="text" @click="dialogFormVisible = true" style="font-size: 25px;color:red">登录</el-button>
    
      <el-dialog title="用户注册" :visible.sync="dialogFormVisible1" width="45%">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="确定密码" :label-width="formLabelWidth">
            <el-input v-model="rePassword" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off" style="width: 200px" prefix-icon="el-icon-phone"></el-input>
            <el-button type="primary" style="position:absolute;right:40px" @click="sendVerificationCode">发送验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="verificationCode" autocomplete="off" style="width: 200px" prefix-icon="el-icon-key"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
        </div>
        </el-dialog>

      <el-dialog title="用户登录" :visible.sync="dialogFormVisible" width="45%">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer2">
          <el-button  type="success"  @click="dialogFormVisible1 = true" style="font-size: 15px;position:absolute;left:40px">注册</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="getstatus" >确 定</el-button>
        </div>
        </el-dialog>

  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data() {
    return {
      dialogFormVisible1: false,
      dialogFormVisible: false,
      Authentication:false,
      
      form: {
        username: '',
        password: '',
        phone: '',
        character: 1
      },
      rePassword: '',
      verificationCode: '',
      formLabelWidth: '160px'
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    sendVerificationCode(){
      console.log(this.verificationCode)
    },

    getstatus:function(){
      this.Authentication=true
      this.$emit('getstatus',this.Authentication)

    }
  }
}
</script>
