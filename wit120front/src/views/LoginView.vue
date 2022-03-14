<template>


<el-container style="height: 650px; border: 1px solid #eee">
<el-header style="text-align: left">
  <p style="font-size:30px;color:white;margin-right: 15px;">智慧医疗信息系统</p>
  <p style="font-size:15px;color:white;position:fixed;left:280px;top:25px">Intelligent medical information system</p>
</el-header>

<el-header>
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#094480"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" @click="dialogFormVisible = '1'">主页</el-menu-item>
  <el-menu-item index="2" @click="dialogFormVisible = '2'">科室介绍</el-menu-item>
  <el-menu-item index="3" @click="dialogFormVisible = '3'">医生介绍</el-menu-item>
  <!-- <el-menu-item index="4" @click="dialogFormVisible = '4'"><a href="https://www.ele.me" target="_blank">个人中心</a></el-menu-item> -->
  <el-menu-item index="5" disabled><a href="https://www.ele.me" target="_blank">病情交流</a></el-menu-item>
  <el-menu-item index="6" disabled><a href="https://www.ele.me" target="_blank">在线咨询</a></el-menu-item>
  <el-menu-item index="7" disabled><a href="https://www.ele.me" target="_blank">赞助我们</a></el-menu-item>

  <div v-if="Authentication===false">
    <p style="font-size:25px;position:fixed;right:210px;top:16px; color:white;">您好！请</p>
    <signin style="position:fixed;right:155px;top:45px;"  v-on:getstatus="getstatus"></signin>
  </div>
  
  <div v-if="Authentication===true">
  <el-dropdown style="position:absolute;right:150px;top:10px">
    <mu-chip class="demo-chip" color="green">
      <mu-avatar :size="32">
        <img src="../assets/logo.png">
      </mu-avatar>
      个人中心
    </mu-chip>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>登录日志</el-dropdown-item>
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item @click.native="Authentication = false">退出</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
  </div>
    <!-- <el-button type="danger"style="position:absolute;right:70px;top:12px" circle>退出</el-button> -->
  </el-menu>
  </el-header>


<el-container>
  <el-main>
    <div v-if="dialogFormVisible==='1'">
      <el-container>
        <el-aside width="200px" style="background-color: #E9EEF3;">
            <a href='/main' class="button">
            <el-button  type="primary" style="height:115px;width:160px;position:relative;top:25px;font-size:25px">医院介绍</el-button>
            </a>
            <br>
            <a href='/main' class="button">
            <el-button  style="height:115px;width:160px;position:relative;top:15px;font-size:25px">预约挂号</el-button>
            </a>
            <a href='/main' class="button">
            <el-button  type="primary" style="height:115px;width:160px;position:relative;top:15px;font-size:25px">信息管理</el-button>
            </a>
            <a href='/main' class="button">
            <el-button  style="height:115px;width:160px;position:relative;top:15px;font-size:25px">医技预约</el-button>
            </a>

        </el-aside>
      <el-main >
        <mu-carousel transition="fade">
        <mu-carousel-item>
          <img :src="picture1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="picture2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="picture3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="picture4">
        </mu-carousel-item>
      </mu-carousel>
      </el-main>
      </el-container>
    </div>


    <div v-if="dialogFormVisible==='2'">
    <el-container>
          <el-aside width="254px">              
            <mu-card style="width: 100%; max-width: 254px;margin-left: 0px;">
              <mu-card-media>
                <img src="../assets/neike.png" width="254" height="150">
              </mu-card-media>
              <mu-card-title title="内科" ></mu-card-title>
              <mu-card-text>
                内科的常见病有:1、呼吸系统疾病,包括呼吸道(鼻、咽、喉、气管、支气管)和肺,常见的疾病有支气管炎、慢性支气管炎、肺炎、肺源性心脏病、支气管扩张、支气管哮喘、慢性阻塞性肺疾病等。2、消化系统疾病包括食管、胃、小肠、大肠、肝、胆、胰腺等疾病。常见的疾病有急性胃炎、慢性胃炎、胃溃疡、十二指肠溃疡、肝硬化、上消化道出血、溃疡性结肠炎、结肠性息肉、急性胰腺炎等。这些病症潜移默化影响患者。
              </mu-card-text>
              <mu-card-actions>
                <mu-button color="primary">查看详情</mu-button>
              </mu-card-actions>
            </mu-card></el-aside>

          <el-aside width="254px">              
            <mu-card style="width: 100%; max-width: 254px;margin-left: 0px;">
              <mu-card-media>
                <img src="../assets/waike.png" width="254" height="150">
              </mu-card-media>
              <mu-card-title title="外科" ></mu-card-title>
              <mu-card-text>
                    外科疾病分为五大类：创伤，感染，肿瘤，畸形和功能障碍。这些疾病往往需要以手术或手法处理作为主要手段来治疗。因此，手术就成为外科所特有的一种治疗方法。人们也往往把是否需要手术治疗作为区别内科还是外科疾病的标准。但外科学并不等于手术学，手术只是外科疾病治疗方法中的一种。外科检查的意义在于：通过对皮肤、淋巴、甲状腺、脊柱四肢、关节、泌尿生殖器等检查，初步排除常见疾病。
              </mu-card-text>
              <mu-card-actions>
                <mu-button color="primary">查看详情</mu-button>
              </mu-card-actions>
            </mu-card></el-aside>

          <el-aside width="254px"><mu-card style="width: 100%; max-width: 254px;margin-left: 0px;">
              <mu-card-media>
                <img src="../assets/fuke.png" width="254" height="150">
              </mu-card-media>
              <mu-card-title title="妇科" ></mu-card-title>
              <mu-card-text>
                常见的妇科病主要包括外阴疾病du、特殊部位疾病、子宫疾zhi病、输卵管疾病、卵巢疾病等。但是—般常说的妇科病主要有宫颈炎、盆腔炎、外阴炎、附件炎等。妇科病症状常见的主要有出血、月经不调、白带异常、外阴瘙痒、下腹痛、下腹部包块等。妇科病如果不治疗或久治不愈，会给女性的生活和工作带来极大的不便。雷博士卡波姆妇科凝胶治疗炎症、糜烂、白带、疼痛。女性得了妇科炎症的症状表现不一。
              </mu-card-text>
              <mu-card-actions>
                <mu-button color="primary">查看详情</mu-button>
              </mu-card-actions>
            </mu-card></el-aside>

          <el-aside width="254px"><mu-card style="width: 100%; max-width: 254px;margin-left: 0px;">
              <mu-card-media>
                <img src="../assets/pifuke.png" width="254" height="150">
              </mu-card-media>
              <mu-card-title title="皮肤科" ></mu-card-title>
              <mu-card-text>
                皮肤科属于外科，主要治疗各种皮肤病，常见皮肤病有牛皮癣 、 疱疹 、酒渣鼻 、脓疱疮 、妇科疾病、化脓菌感染 、疤痕 、癣 、鱼鳞病 、腋臭 、青春痘 、毛囊炎 、斑秃脱发 、男科炎症 、婴儿尿布疹 、鸡眼 、雀斑 、汗疱疹 、螨虫性皮炎 、白癜风 、湿疹 、灰指甲 、硬皮病 、皮肤瘙痒 、前列腺炎 、口腔部护理 、脱毛 、黄褐斑等。病情对生活状况和生活质量影响极大，对身体和心理都有伤害。需要着重注意，改善生活习惯，及时治病。
              </mu-card-text>
              <mu-card-actions>
                <mu-button color="primary">查看详情</mu-button>
              </mu-card-actions>
            </mu-card></el-aside>

          <el-aside width="254px"><mu-card style="width: 100%; max-width: 254px;margin-left: 0px;">
              <mu-card-media>
                <img src="../assets/erbihouke.png" width="254" height="150">
              </mu-card-media>
              <mu-card-title title="耳鼻喉科" ></mu-card-title>
              <mu-card-text>
                常见的耳鼻咽喉科疾病主要有：耳部疾病：中耳炎、耳鸣、外耳炎、耳聋、鼓膜穿孔、鼓膜修补、听力障碍；鼻部疾病：急性鼻炎、慢性鼻炎、鼻窦炎、鼻息肉、过敏鼻炎、鼻部整形。咽喉疾病：喉炎、咽喉炎、急性咽喉炎、慢性咽炎、腺样体肥大、扁桃体炎、鼾症（打呼噜）声带息肉、声带息肉、急性咽炎以上为耳鼻咽喉科疾病分类中比较常见的病症,除这些之外，耳鼻咽喉科还有慢性中耳炎、鼻中隔偏曲等等。
              </mu-card-text>
              <mu-card-actions>
                <mu-button color="primary">查看详情</mu-button>
              </mu-card-actions>
            </mu-card></el-aside>
          
    </el-container>
    </div>


    <div v-if="dialogFormVisible==='3'">
        <logindate></logindate>
    </div>
      
</el-main>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</el-container>
</template>

<script>
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';
import picture3 from '../assets/picture3.jpg';
import picture4 from '../assets/picture4.jpg';
import Logindate from "../components/logindate.vue";
import Signin from "../components/signin.vue";
export default {
  components:{
      Logindate,Signin
    },
  data () {
    return {
      picture1,
      picture2,
      picture3,
      picture4,
      activeIndex: '1',
      activeIndex2: '1',
      Authentication :false,
      dialogFormVisible:'1'
      
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      getstatus: function(ev){
        console.log(ev)
        this.Authentication=ev
      }
    }
};
</script>

<style>
  .el-header, .el-footer {
    background-color: #094480;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
  
  body > .el-container {
    height: 100%;
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 3200px;
  }
</style>