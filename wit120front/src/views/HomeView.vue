<template>
  <div style="height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="display: flex">
          <el-button type="text" @click="dialogFormVisible1 = true" style="font-size: 20px">注册</el-button>
          <el-button type="text" @click="dialogFormVisible2 = true" style="font-size: 20px">登录</el-button>
        </el-header>
      </el-container>
      
      <el-dialog title="用户注册" :visible.sync="dialogFormVisible1" width="35%">
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
            <el-button type="primary" style="margin-left: 20px" @click="sendVerificationCode">发送验证码</el-button>
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

      <el-dialog title="用户登录" :visible.sync="dialogFormVisible2" width="35%">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off" style="width: 200px" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" style="width: 200px" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer2">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
        </div>
        </el-dialog>

      
    </el-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'LoginView',
  data() {
    return {
      dialogFormVisible1: false,
      dialogFormVisible2: false,
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
