<template>

  <div id="app">
    <el-header style="text-align: left">
  <p style="font-size:30px;color:white;margin-right: 15px;">智慧医疗信息系统</p>
  <p style="font-size:15px;color:white;position:absolute;left:280px;top:25px">Intelligent medical information system</p>
</el-header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
