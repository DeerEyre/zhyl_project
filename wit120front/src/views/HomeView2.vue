<template>
  <div style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <MyHeader></MyHeader>
      <NavMenu isActive="1"></NavMenu>
      <el-main style="background-color: #FFFFFF">
        <div>
          <mu-carousel transition="fade" style="height: 836px">
            <mu-carousel-item>
              <img src="../assets/img/1.jpg">
            </mu-carousel-item>
            <mu-carousel-item>
              <img src="../assets/img/2.jpg">
            </mu-carousel-item>
            <mu-carousel-item>
              <img src="../assets/img/3.jpg">
            </mu-carousel-item>
            <mu-carousel-item>
              <img src="../assets/img/4.jpg">
            </mu-carousel-item>
            <mu-carousel-item>
              <img src="../assets/img/5.jpg">
            </mu-carousel-item>
          </mu-carousel>
        </div>
        <div style="display: flex;align-items: center;justify-content: center;margin-top: 80px">
          <mu-button full-width style="width: 18%;height: 207px;font-size: 30px;background-color: cadetblue">
            <mu-icon left value="date_range"></mu-icon>
            <span>门诊出诊表</span>
          </mu-button>
          <mu-button full-width style="width: 18%;height: 207px;margin-left: 20px;font-size: 30px;background-color: burlywood">
            <mu-icon left value="book"></mu-icon>
            <span>就医须知</span>
          </mu-button>
          <mu-button full-width style="width: 18%;height: 207px;margin-left: 20px;font-size: 30px">
            <mu-icon left value="room"></mu-icon>
            <span>医院位置</span>
          </mu-button>
          <mu-button full-width style="width: 18%;height: 207px;margin-left: 20px;font-size: 30px;background-color: forestgreen">
            <mu-icon left value="youtube_searched_for"></mu-icon>
            <span>专科专病</span>
          </mu-button>
        </div>
        <div style="display: flex;align-items: center;justify-content: center;margin-top: 80px">
            <mu-card style="width: 100%; max-width: 370px">
              <mu-card-media title="医院公告">
                <img src="../assets/img/6.jpg">
              </mu-card-media>
              <mu-card-title title="医院公告"></mu-card-title>
              <mu-card-text>
                <el-link>1.本院2022年春节门诊安排，请注意查收</el-link><br/><br/>
                <el-link>2.这是一段测试内容这是一段测试内容</el-link><br/><br/>
                <el-link>3.这是一段测试内容这是一段测试内容</el-link>
              </mu-card-text>
            </mu-card>
            <mu-card style="width: 100%; max-width: 370px;margin-left: 20px">
              <mu-card-media title="重大新闻">
                <img src="../assets/img/3.jpg">
              </mu-card-media>
              <mu-card-title title="重大新闻"></mu-card-title>
              <mu-card-text>
                <el-link>1.这是一段测试内容这是一段测试内容</el-link><br/><br/>
                <el-link>2.这是一段测试内容这是一段测试内容</el-link><br/><br/>
                <el-link>3.这是一段测试内容这是一段测试内容</el-link>
              </mu-card-text>
            </mu-card>
            <mu-card style="width: 100%; max-width: 370px;margin-left: 20px">
              <mu-card-media title="医生说">
                <img src="../assets/img/6.jpg">
              </mu-card-media>
              <mu-card-title title="医生说"></mu-card-title>
              <mu-card-text>
                <el-link>1.这是一段测试内容这是一段测试内容</el-link><br/><br/>
                <el-link>2.这是一段测试内容这是一段测试内容</el-link><br/><br/>
                <el-link>3.这是一段测试内容这是一段测试内容</el-link>
              </mu-card-text>
            </mu-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import NavMenu from "@/components/NavMenu";
export default {
  name: "HomeView2",
  components: {NavMenu, MyHeader}
}
</script>

<style scoped>
.el-main {
  padding: 0;
  flex-grow:1;
}
</style>