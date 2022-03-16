<template>
  <div style="height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="display: flex">
          <el-button type="text" @click="dialogFormVisible1 = true" style="font-size: 20px">登录</el-button>
          <el-button type="text" @click="dialogFormVisible2 = true" style="font-size: 20px">注册</el-button>
          <span>{{username}}</span>
        </el-header>
      </el-container>
      <el-dialog title="用户注册" :visible.sync="dialogFormVisible2" width="35%">
        <el-form :model="form2" ref="registerForm">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop=>
            <el-input v-model="form2.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form2.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="确定密码" :label-width="formLabelWidth">
            <el-input v-model="rePassword" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="form2.phone" autocomplete="off" style="width: 200px" prefix-icon="el-icon-phone"></el-input>
            <el-button type="primary" style="margin-left: 20px" @click="sendVerificationCode">发送验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="verificationCode" autocomplete="off" style="width: 200px" prefix-icon="el-icon-key"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="register">注 册</el-button>
        </div>
      </el-dialog>
      <el-dialog title="用户登录" :visible.sync="dialogFormVisible1" width="35%">
        <el-form :model="form1" :rules="rules1" ref="loginForm">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
            <el-input v-model="form1.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
            <el-input v-model="form1.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="login">登 录</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      username: '王小虎',
      dialogFormVisible2: false,
      dialogFormVisible1: false,
      form2: {
        username: '',
        password: '',
        phone: '',
        permission: 1
      },
      rePassword: '',
      verificationCode: '',
      formLabelWidth: '160px',
      form1: {
        username: '',
        password: ''
      },
      rules1: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ]
      }
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
      axios({
        method: 'post',
        url: 'http://localhost:8081/user',
        data: {
          username: this.form2.username,
          password: this.form2.password,
          phone: this.form2.phone,
          permission: this.form2.permission
        }
      }).then((res) => {
        console.log(res)
      })
    },
    login(){
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.request.post('/user/login', {
            username: this.form1.username,
            password: this.form1.password
          }).then(res => {
            if (res.code === '200'){
              localStorage.setItem("user", JSON.stringify(res.data))
              this.dialogFormVisible1 = false;
              this.username = res.data.username
            }
          })
          /*axios({
            method: 'post',
            url: 'http://localhost:8081/user/login',
            data: {
              username: this.form1.username,
              password: this.form1.password
            }
          }).then((res) => {
            if (res.data.code === '200'){
              localStorage.setItem("user", JSON.stringify(res.data.data))
              this.dialogFormVisible1 = false;
              this.username = res.data.data.username
            }
          })*/
        } else {
          return false;
        }
      });
    },
    register(){
      axios({
        method: 'post',
        url: 'http://localhost:8081/user',
        data: {
          username: this.form2.username,
          password: this.form2.password,
          phone: this.form2.phone,
          permission: this.form2.permission
        }
      }).then((res) => {
        console.log('数据：', res)
      })
      this.dialogFormVisible2 = false
    }
  }
}
</script>

<style>
.el-header {
  background-color: #eeeeee;
  color: #333;
  line-height: 80px;
  height: 80px!important;
}

.el-aside {
  color: #333;
}
.headerBg{
  background: #eee!important;
}
</style>
