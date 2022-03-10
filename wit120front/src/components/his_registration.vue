  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="病情详情"
        width="180">
      </el-table-column>
      <el-table-column
        prop="doctor"
        label="主治医师">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2022-03-02',
            detail: '脑瘫',
            doctor: '与世弈'
          }, {
            date: '2016-05-04',
            detail: '阳痿',
            doctor: '腰腰'
          }, {
            date: '2016-05-01',
            detail: '痔疮',
            doctor: '巴子'
          }, {
            date: '2016-05-03',
            detail: '早泄',
            doctor: '硕硕'
          }]
        }
      }
    }
  </script>