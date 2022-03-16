  <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%" @cell-click="handle">
      <el-table-column
        prop="doctor"
        label="医师"
        width="180">
      </el-table-column>
      <el-table-column
        prop="department"
        label="科室"
        width="180">
      </el-table-column>
      <el-table-column
        prop="habit"
        label="资历">
      </el-table-column>
    </el-table>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            doctor: '甘舒',
            department: '内科',
            habit: '英语六级430分'
          }, {
            doctor: '腰腰',
            department: '外科',
            habit: '有瑶的情人节皮肤'
          }, {
            doctor: '巴子',
            department: '耳鼻喉科',
            habit: '未来群主'
          }, {
            doctor: '硕硕',
            department: '妇科',
            habit: '野爹'
          }]
        }
      },
      methods: {
        handle(row,column,event,cell){
        console.log(row)
        console.log(column)
        console.log(event)
        console.log(cell)
    }
  }
    }
  </script>