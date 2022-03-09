<template>
  <div>
    <h1>Pagination</h1>
    <el-pagination
      layout="prev, pager, next"
      :total="111"
      @current-change="pageChange"
    >
    </el-pagination>
  </div>
</template>
 
<script>
export default {
  methods: {
    // 把当前点击的页数给传进来
    pageChange(page) {
      console.log(page)
    }
  }
}
</script>