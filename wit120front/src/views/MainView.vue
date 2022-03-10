<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <!-- <el-menu :default-openeds="['1']"> -->
    <el-menu>
      <el-submenu index="1">  
        <template slot="title"><i class="el-icon-setting"></i>我的面板</template>
        <el-menu-item-group>
          <template slot="title">个人信息</template>
          <el-menu-item index="1-1" @click="dialogFormVisible = '1-1'">登录日志</el-menu-item>
          <el-menu-item index="1-2" >修改密码</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="预约信息">
          <el-menu-item index="1-3">查看挂号信息</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>医疗信息咨询</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="2-1">科室信息</el-menu-item>
          <el-menu-item index="2-2">医生信息</el-menu-item>
          <el-menu-item index="2-3">排班信息</el-menu-item>
          </el-menu-item-group>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>预约挂号</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="3-1">修改挂号信息</el-menu-item>
          <el-menu-item index="3-2" @click="dialogFormVisible = 'fuck'">查看历史挂号</el-menu-item>
          <el-menu-item index="3-3">预约挂号</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>您的用户名</span>
    </el-header>
    
    <el-main >

      <div v-if="dialogFormVisible==='Welcome'">
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      </div>

      <div v-else-if="dialogFormVisible==='1-1'">
        <template>
          <logindate></logindate>
        </template>
      </div>

      <div v-else-if="dialogFormVisible==='fuck'">
        <template>
          <his_registration></his_registration>
        </template>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>


<script>
  import His_registration from "../components/his_registration.vue"
  import Logindate from "../components/logindate.vue"
  export default {
    components:{
      His_registration,
      Logindate
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '甘舒',
        address: '河南省信阳市'
      };
      return {
        dialogFormVisible :'Welcome',
        tableData: Array(20).fill(item)
      }
    }
  };
</script> 