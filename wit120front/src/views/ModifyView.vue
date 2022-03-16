<template>
  <div style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <MyHeader></MyHeader>
      <NavMenu isActive="0"></NavMenu>
      <el-main>
        <div style="background-color: #eee;display: flex;align-items: center;justify-content: center">
          <div style="width: 70%;background-color: #FFFFFF">
            <el-page-header @back="goBack" content="个人信息界面">
            </el-page-header>
            <mu-form :model="form" ref="form" class="form" :label-width="100"
                     style="margin-top: 30px;margin-left: 200px">
              <mu-form-item label="用户名" prop="name" :rules="nameRules">
                <mu-text-field v-model="form.username" :placeholder="old_form.username" prop="name"
                               style="width: 40%"></mu-text-field>
              </mu-form-item>
              <mu-form-item label="手机号" prop="phonenumber" :rules="phonenumberRules">
                <mu-text-field v-model="form.phoneNumber" :placeholder="old_form.phoneNumber" prop="phonenumber"
                               max-length="11" style="width: 40%"></mu-text-field>
              </mu-form-item>

              <mu-form-item label="真实姓名" prop="truename">
                <mu-text-field v-model="form.realName" :placeholder="old_form.realName" prop="truename"
                               style="width: 40%"></mu-text-field>
              </mu-form-item>
              <mu-form-item label="性别" prop="gender">
                <mu-radio v-model="form.gender" value="male" label='男'></mu-radio>
                <mu-radio v-model="form.gender" value="female" label='女'></mu-radio>
              </mu-form-item>

              <mu-form-item label="年龄" prop="age" :rules="ageRules">
                <mu-text-field v-model="form.age" :placeholder="old_form.age" prop="age"
                               style="width: 40%"></mu-text-field>
              </mu-form-item>
              <mu-form-item label="身份证号" prop="identification">
                <mu-text-field v-model="form.identificationNum" :placeholder="old_form.identificationNum"
                               prop="identification" style="width: 40%"></mu-text-field>
              </mu-form-item>
              <mu-form-item>
                <el-button type="primary" @click="modifyInfo">确认修改</el-button>
              </mu-form-item>
            </mu-form>
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
  name: "ModifyView",
  components: {NavMenu, MyHeader},
  data() {
    return {
      form: {
        username: '123',
        phoneNumber: '',
        age: 0,
        realName: '',
        gender: '',
        identificationNum: '',
      },
      old_form: {
        username: '123',
        phoneNumber: '',
        age: 0,
        realName: '',
        gender: '',
        identificationNum: '',
      },
      nameRules: [
        {validate: (val) => val.length >= 3, message: '用户名长度大于3'},
      ],
      phonenumberRules: [
        {validate: (val) => val.length === 11, message: '请输入正确长度的手机号码'},
        {validate: (val) => /^[0-9]*$/.test(val), message: '请输入数字'}
      ],
      ageRules: [
        {validate: (val) => /^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(val), message: '年龄为1-120岁'},
      ],
      identificationRules: [
        {
          validate: (val) => /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val),
          message: '身份证格式不正确'
        },
      ],

    }
  },
  mounted() {
    this.showInfo()
  },
  methods: {
    goBack(){
      this.$router.push('/')
    },
    onSubmit() {
      console.log('submit!');
    },
    modify() {
      this.$refs.form.validate().then((result) => {
        if (result != false) {
          if (this.form.username != '') {
            this.old_form.username = this.form.username;
          }
          if (this.form.phoneNumber != '') {
            this.old_form.phoneNumber = this.form.phoneNumber;
          }
          if (this.form.age != '') {
            this.old_form.age = this.form.age;
          }
          if (this.form.realName != '') {
            this.old_form.realName = this.form.realName;
          }
          if (this.form.gender != '') {
            this.old_form.gender = this.form.gender;
          }
          if (this.form.identificationNum != '') {
            this.old_form.identificationNum = this.form.identificationNum;
          }
        }
      });
    },
    showInfo() {
      let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
      this.request.get('/patient/patientInfo/' + user.username).then(res =>{
        if (res.code === '200'){
          this.form.username = user.username
          this.form.phoneNumber = user.phone
          this.form.realName = res.data.realName
          this.form.age = res.data.age
          this.form.identificationNum = res.data.identificationNum
          this.old_form.realName = res.data.realName
          this.old_form.age = res.data.age
          this.old_form.identificationNum = res.data.identificationNum
          if (res.data.gender === true){
            this.form.gender = 'male'
            this.old_form.gender = 'male'
          }else {
            this.form.gender = 'female'
            this.old_form.gender = 'female'
          }
        }else{
          this.$message(res.msg);
        }
      });
    },
    modifyInfo(){
      let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
      let curGender = false
      if (this.form.gender === 'male'){
        curGender = true
      }
      this.request.put('/patient/patientInfo', {
        username: user.username,
        realName: this.form.realName,
        identificationNum: this.form.identificationNum,
        gender: curGender,
        age: this.form.age
      }).then(res =>{
        if (res.code === '200'){
          this.$message({
            message: '修改成功',
            type: 'success'
          })
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