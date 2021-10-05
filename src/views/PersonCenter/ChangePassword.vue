<template>
  <div class="change_password">
    <div class="fontsize_20 t_center">修改密码</div>
    <el-form
      ref="form"
      :model="param"
      :rules="rules"
      label-width="100px"
      class="center"
    >
      <el-form-item label="原密码" prop="oldPassword">
        <el-input v-model="param.oldPassword" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="param.newPassword" />
      </el-form-item>
    </el-form>
    <div class="flex flex_justify_center">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" :loading="submitLoading" @click="submit"
        >确定</el-button
      >
    </div>
  </div>
</template>
<script>
import {apiChangePassword} from '@/api/user'
export default {
  name:'ChangePassword',
  components: {},
  data () {
    return {
      param:{
        userId: this.$store.getters.userInfo.userId,
        oldPassword: "",
        newPassword: "",
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],  
      },
      submitLoading:false
    }
  },
  methods:{
    submit(){
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submitLoading = true;
          apiChangePassword(this.param)
            .then(() => {
              this.$router.push({ name: "Home" });
              this.$message.success("密码修改成功！");
            })
            .finally(() => {
              this.submitLoading = false;
            });
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.change_password{
  > .fontsize_20 {
    padding: 100px 0 30px;
  }
  .el-form{width: 500px;}
}
</style>