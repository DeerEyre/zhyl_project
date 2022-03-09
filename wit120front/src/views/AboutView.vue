<template>
    <div class="login-wrap">
        <el-form class="login-container">
            <h1 class="title">用户登录</h1>
            <el-form-item label="">
                <el-input type="text" v-model="username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="password" v-model="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="doSubmit()">提交</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;;">
                <el-link type="primary">忘记密码</el-link>
                <el-link type="primary" @click="doRegister()">用户注册</el-link>
            </el-row>
        </el-form>
    </div>
</template>
