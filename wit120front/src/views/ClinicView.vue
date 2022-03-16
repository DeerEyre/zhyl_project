<template>
  <div style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <MyHeader></MyHeader>
      <NavMenu isActive="3"></NavMenu>
      <el-main style="background-color: #FFFFFF">
        <div style="height: 100%">
          <el-page-header @back="goBack" content="科室坐诊表界面" style="margin-left: 168px">
          </el-page-header>
          <el-input placeholder="请输入医生姓名" v-model="input1" style="width: 20%;margin-left: 1057px;margin-top: 20px">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div style="display: flex;justify-content: center;margin-top: 50px">
          <div style="display: flex;justify-content: center;width: 78%">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
            <el-table-column
                prop="date"
                label="科室">
            </el-table-column>
            <el-table-column
                prop="name"
                label="时间段">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/17">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/18">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/19">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/20">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/21">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/22">
            </el-table-column>
            <el-table-column
                prop="address"
                label="03/23">
            </el-table-column>
          </el-table>
          </div>
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
  name: "ClinicView",
  components: {NavMenu, MyHeader},
  data() {
    return {
      tableData: [{
        date: '心血管内科',
        name: '上午',
        address: '刘南植'
      }, {
        date: '心血管内科',
        name: '上午',
        address: '杨育珍'
      }, {
        date: '心血管内科',
        name: '下午',
        address: '王波'
      }, {
        date: '心血管内科',
        name: '下午',
        address: '田德英'
      }]
    }
  },
  methods: {
    goBack(){
      this.$router.push('/')
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