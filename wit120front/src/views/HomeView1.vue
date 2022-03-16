<template>
  <div style="height: 100%">
    <mu-appbar style="width: 100%; height: 100px" color="#fafafa">
      <mu-button icon slot="left">
        <mu-icon value="home" color="black"></mu-icon>
      </mu-button>
      <img src="../assets/img/headerIcon.png" slot="left" style="width: 64px; margin-left: 20px">
      <span style="color: #333333;font-size: 40px">智慧医疗信息系统</span>
      <div slot="right" style="margin-right: 40px">
        <el-link :underline="false" style="font-size: 20px;margin-right: 10px">患者版</el-link>
        <el-link :underline="false" style="font-size: 20px;margin-right: 10px">医生版</el-link>
        <el-link :underline="false" style="font-size: 20px">管理员版</el-link>
      </div>
      <mu-text-field v-model="value" placeholder="Please input......" slot="right"
                     style="margin-top: 20px"></mu-text-field>
      <mu-button icon slot="right" style="margin-right: 40px">
        <mu-icon value="search" color="black"></mu-icon>
      </mu-button>
      <mu-menu slot="right">
        <mu-button flat style="font-size: 20px;color: #333333">{{ menuValue }}</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>个人信息</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>退出登录</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" style="font-size: 20px;margin-left: 348px">医院首页</el-menu-item>
      <el-menu-item index="2" style="font-size: 20px">科室导航</el-menu-item>
      <el-menu-item index="3" style="font-size: 20px">预约挂号</el-menu-item>
      <el-menu-item index="4" style="font-size: 20px">医技预约</el-menu-item>
      <el-menu-item index="5" style="font-size: 20px">报告查询</el-menu-item>
      <el-menu-item index="6" style="font-size: 20px">挂号查询</el-menu-item>
      <el-menu-item index="7" style="font-size: 20px">病历查询</el-menu-item>
    </el-menu>
    <div style="height: 100%;display: flex;justify-content: center;align-items: center">
    <el-container style="background-color: #FFF;height: 100%;max-width: 75%">
      <span>测试</span>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView1",
  data() {
    return {
      menuValue: '登录/注册'
    }
  }
}
</script>

<style scoped>

</style>