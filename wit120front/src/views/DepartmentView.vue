<template>
  <div style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <MyHeader></MyHeader>
      <NavMenu isActive="3"></NavMenu>
      <el-main style="background-color: #FFFFFF">
        <div style="height: 100%">
          <el-page-header @back="goBack" content="选择科室界面" style="margin-left: 168px">
          </el-page-header>
          <el-input placeholder="请输入医生姓名" v-model="input1" style="width: 20%;margin-left: 1057px;margin-top: 20px">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div style="display: flex;justify-content: center;margin-top: 50px">
            <mu-button full-width style="width: 15%" @click="goNext">心血管内科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">消化内科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">内分泌内科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">血液内科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">肾病内科门诊</mu-button>
          </div>
          <div style="display: flex;justify-content: center;margin-top: 30px">
            <mu-button full-width style="width: 15%">风湿免疫内科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">神经外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">小儿外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">骨科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">泌尿外科门诊</mu-button>
          </div>
          <div style="display: flex;justify-content: center;margin-top: 30px">
            <mu-button full-width style="width: 15%">胸外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">器官移植门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">胆胰外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">胃肠外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">肝脏外科门诊</mu-button>
          </div>
          <div style="display: flex;justify-content: center;margin-top: 30px">
            <mu-button full-width style="width: 15%">整形外科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">儿科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">感染科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">中医科门诊</mu-button>
            <mu-button full-width style="width: 15%;margin-left: 10px">神经内科门诊</mu-button>
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
  name: "DepartmentView",
  components: {NavMenu, MyHeader},
  methods: {
    goBack(){
      this.$router.push('/')
    },
    goNext(){
      this.$router.push('/Clinic')
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