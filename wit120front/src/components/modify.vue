<template>
<mu-form :model="form" ref="form" class="form" :label-width="100">
  <mu-form-item label="用户名" prop="name":rules="nameRules">
    <mu-text-field v-model="form.name":placeholder="old_form.name" prop="name"> </mu-text-field>
  </mu-form-item>
  <mu-form-item label="手机号" prop="phonenumber":rules="phonenumberRules">
    <mu-text-field v-model="form.phonenumber":placeholder="old_form.phonenumber" prop="phonenumber" max-length="11"></mu-text-field>
  </mu-form-item>

  <mu-form-item label="真实姓名" prop="truename">
    <mu-text-field v-model="form.truename":placeholder="old_form.truename" prop="truename"></mu-text-field>
  </mu-form-item>
  <mu-form-item label="性别" prop="gender">
      <mu-radio v-model="form.gender" value="male" label='男'></mu-radio>
      <mu-radio v-model="form.gender" value="female" label='女'></mu-radio>
  </mu-form-item>

  <mu-form-item label="年龄" prop="age":rules="ageRules">
    <mu-text-field v-model="form.age":placeholder="old_form.age" prop="age"></mu-text-field>
  </mu-form-item>
  <mu-form-item label="身份证号" prop="identification":rules="identificationRules">
    <mu-text-field v-model="form.identification":placeholder="old_form.identification" prop="identification"></mu-text-field>
  </mu-form-item>
  <mu-form-item>
  <el-button type="primary" @click="modify">确认修改</el-button>
  </mu-form-item>
</mu-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '梦比优斯奥特曼',
          phonenumber: '17354423823',
          age: '23',
          truename: '甘舒',
          gender:'男',
          identification: '411502199907110011',
        },
        old_form: {
          name: '梦比优斯奥特曼',
          phonenumber: '17354423823',
          age: '23',
          truename: '甘舒',
          gender:'男',
          identification: '411502199907110011',
        },
      nameRules: [
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'},
      ],
      phonenumberRules: [
        { validate: (val) => val.length == 11, message: '请输入正确长度的手机号码'},
        { validate: (val) => /^[0-9]*$/.test(val), message: '请输入数字'}
      ],
    ageRules: [
        { validate: (val) => /^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(val), message: '年龄为1-120岁'},
      ],
    identificationRules: [
        { validate: (val) => /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val), message: '身份证格式不正确'},
      ],

      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      modify(){
           this.$refs.form.validate().then((result) => {
         if(result!=false){
          if(this.form.name!=''){
            this.old_form.name=this.form.name;
          }
          if(this.form.phonenumber!=''){
            this.old_form.phonenumber=this.form.phonenumber;
          }         
          if(this.form.age!=''){
            this.old_form.age=this.form.age;
          }     
          if(this.form.truename!=''){
            this.old_form.truename=this.form.truename;
          }    
          if(this.form.gender!=''){
            this.old_form.gender=this.form.gender;
          }   
          if(this.form.identification!=''){
            this.old_form.identification=this.form.identification;
          }   
          }});
    
      }
    }
  }
</script>