<template>
  <div style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <MyHeader></MyHeader>
      <NavMenu isActive="0"></NavMenu>
      <el-main style="height: 100%">
        <div style="background-color: #eee;display: flex;align-items: center;justify-content: center;height: 100%">
          <div style="width: 70%;background-color: #FFFFFF;height: 100%">
            <el-page-header @back="goBack" content="修改密码界面">
            </el-page-header>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 30px;margin-left: 200px">
              <el-form-item label="旧密码" prop="old_pass">
                <el-input type="password" v-model="ruleForm.old_pass" autocomplete="off" style="width: 40%"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width: 40%"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width: 40%"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code">
                <el-input type="text" v-model="ruleForm.code" autocomplete="off" style="width: 40%"></el-input>
                <el-button type="primary" style="margin-left: 20px" @click="sendVerificationCode">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import MyHeader from "@/components/MyHeader";
  import NavMenu from "@/components/NavMenu";
  export default {
    name: 'PasswordView',
    components: {NavMenu, MyHeader},
    data() {
    var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        old_password:"ganshu990711",
        ruleForm: {
          old_pass:'',
          pass: '',
          checkPass: '',
          code: ''
        },
        rules: {
          old_pass:[
            { validator: validatePass1, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass3, trigger: 'blur' }
          ],
          code: [
            {required: true, message: '请输入4位验证码', trigger: 'blur'},
            {min: 4, max: 4, message: '长度为4个字符', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
            this.request.put('/user/password', {
              username: user.username,
              oldPassword: this.ruleForm.old_pass,
              newPassword: this.ruleForm.pass,
              code: this.ruleForm.code
            }).then(res => {
              if (res.code === '200'){
                this.$message({
                  message: '密码修改成功',
                  type: 'success'
                })
              }else{
                this.$message(res.msg)
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goBack() {
        this.$router.push('/')
      },
      sendVerificationCode(){
        let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
        let params = new FormData()
        params.append("phone", user.phone)
        this.request.post('/verification/password', params).then(res =>{
          if (res.code === '200'){
            this.$message({
              message: '短信发送成功',
              type: 'success'
            })
          }else{
            this.$message(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>
.el-main {
  padding: 0;
  flex-grow: 1;
}
</style>