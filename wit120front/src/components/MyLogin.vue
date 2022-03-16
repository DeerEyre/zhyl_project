<template>
  <div>
    <el-dialog title="用户登录" :visible.sync="formVisible1" width="35%" @close="closeDialog">
      <el-form :model="form1" :rules="rules1" ref="loginForm">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form1.username" autocomplete="off" style="width: 200px"
                    prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form1.password" autocomplete="off" style="width: 200px" show-password
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" style="margin-right: 140px;font-size: 20px" @click="showRegister">没有账号？点击注册</el-button>
        <el-button type="danger" @click="closeDialog1">取 消</el-button>
        <el-button type="primary" @click="login">登 录</el-button>
      </div>
    </el-dialog>
    <el-dialog title="用户注册" :visible.sync="formVisible2" width="35%">
      <el-form :model="form2" :rules="rules2" ref="registerForm">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form2.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form2.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item label="确定密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form2.rePassword" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form2.phone" autocomplete="off" style="width: 200px" prefix-icon="el-icon-phone"></el-input>
          <el-button type="primary" style="margin-left: 20px" @click="sendVerificationCode">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth" prop="verificationCode">
          <el-input v-model="form2.verificationCode" autocomplete="off" style="width: 200px" prefix-icon="el-icon-key"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" style="margin-right: 140px;font-size: 20px" @click="showLogin">已有帐号？返回登录</el-button>
        <el-button @click="showLogin">取 消</el-button>
        <el-button type="primary" @click="register">注 册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      formVisible1: this.isVisible1,
      formVisible2: false,
      formLabelWidth: '160px',
      form1: {
        username: '',
        password: ''
      },
      rules1: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'}
        ]
      },
      form2: {
        username: '',
        password: '',
        phone: '',
        rePassword: '',
        verificationCode: '',
      },
      rules2: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入11位手机号', trigger: 'blur'},
          {min: 11, max: 11, message: '长度为11个字符', trigger: 'blur'}
        ],
        verificationCode: [
          {required: true, message: '请输入4位验证码', trigger: 'blur'},
          {min: 4, max: 4, message: '长度为4个字符', trigger: 'blur'}
        ]
      }
    };
  },
  props: ['isVisible1'],
  watch: {
    isVisible1(newV, oldV) {
      this.formVisible1 = newV
    }
  },
  methods: {
    closeDialog() {
      this.changeVisible()
    },
    closeDialog1(){
      this.formVisible1 = false
      this.changeVisible()
    },
    changeVisible: function () {
      this.$emit("changeVisible", false)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.request.post('/user/login', {
            username: this.form1.username,
            password: this.form1.password
          }).then(res => {
            if (res.code === '200') {
              this.formVisible1 = res.data.visble
              localStorage.setItem("user", JSON.stringify(res.data))
              this.formVisible1 = false
              this.changeVisible()
              this.changeUsername(res.data.username)
              this.changeAuthentication(true)
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            }else {
              this.$message.error(res.msg)
            }
          })
        } else {
          return false;
        }
      });
    },
    sendVerificationCode(){
      let params = new FormData()
      params.append('phone', this.form2.phone)
      this.request.post('/verification/register',params).then(res => {
        if (res.code === '200'){
          this.$message({
            message: '短信发送成功',
            type: 'success'
          })
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    register(){
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.request.post('/user', {
            username: this.form2.username,
            password: this.form2.password,
            phone: this.form2.phone,
            code: this.form2.verificationCode
          }).then(res => {
            if (res.code === '200') {
              localStorage.setItem("user", JSON.stringify(res.data))
              this.formVisible2 = false
              this.changeVisible()
              this.changeUsername(res.data.username)
              this.changeAuthentication(true)
              this.$message({
                message: '注册成功',
                type: 'success'
              })
            }else {
              this.$message.error(res.msg)
            }
          })
        } else {
          return false;
        }
      });
    },
    changeAuthentication: function (authentication) {
      this.$emit("changeAuthentication", authentication)
    },
    changeUsername(username) {
      this.$emit("changeUsername", username)
    },
    showRegister(){
      this.formVisible1 = false
      this.formVisible2 = true
    },
    showLogin(){
      this.formVisible2 = false
      this.formVisible1 = true
    }
  }
}
</script>

<style scoped>

</style>