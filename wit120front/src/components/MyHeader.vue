<template>
  <el-header>
    <img src="../assets/img/headerIcon.png" style="width: 80px;height: 80px;margin-left: 140px">
    <span style="font-size: 40px">智慧医疗信息系统</span>
    <div style="margin-left: 200px">
      <el-link :underline="false" style="font-size: 20px">患者版</el-link>
      <el-link :underline="false" style="font-size: 20px;margin-left: 20px">医生版</el-link>
      <el-link :underline="false" style="font-size: 20px;margin-left: 20px">管理员版</el-link>
    </div>
    <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2" style="width: 150px;margin-left: 20px">
    </el-input>
    <div v-if="Authentication===false" style="margin-left: 230px">
      <span style="font-size: 20px">您好!请</span>
      <el-button type="text" style="font-size: 20px" @click="dialogFormVisible1=true">登录</el-button>
      <MyLogin :isVisible1="dialogFormVisible1" @changeVisible="changeVisible" @changeUsername="changeUsername" @changeAuthentication="changeAuthentication"></MyLogin>
    </div>
    <el-dropdown style="margin-left: 200px" v-if="Authentication===true">
      <el-button type="text" style="font-size: 25px">{{ username }}</el-button>
      <el-dropdown-menu>
        <el-dropdown-item style="font-size: 25px" @click.native="infoView">个人信息</el-dropdown-item>
        <el-dropdown-item style="font-size: 25px;margin-top: 10px" @click.native="passwordView">修改密码</el-dropdown-item>
        <el-dropdown-item style="font-size: 25px; margin-top: 10px" @click.native="quit">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import MyLogin from "@/components/MyLogin";
export default {
  name: "MyHeader",
  components: {MyLogin},
  data(){
    return{
      Authentication: false,
      dialogFormVisible1: false,
      input2: '',
      username: ''
    }
  },
  mounted() {
    this.ifHasToken()
  },
  methods:{
    infoView(){
      this.$router.push('/UserInfo')
    },
    passwordView(){
      this.$router.push('/Password')
    },
    changeVisible(visible1){
      this.dialogFormVisible1 = visible1
    },
    changeUsername(username){
      this.username = username
    },
    changeAuthentication(authentication){
      this.Authentication = authentication
    },
    quit(){
      localStorage.removeItem("user")
      this.Authentication = false
    },
    ifHasToken(){
      let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
      if (user){
        this.Authentication = true
        this.username = user.username
      }
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #FFFFFF;
  color: #333;
  line-height: 100px;
  height: 100px !important;
  display: flex;
  align-items: center
}
</style>