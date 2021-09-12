<template>
  <div class="login h_100 flex flex_justify_center">
    <div class="inner_box">
      <div class="title c_fff bold t_center">系统登录</div>
      <el-form ref="form" :model="param" :rules="rules">
        <el-form-item prop="name">
          <el-input
            v-model="param.name"
            placeholder="用户名"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="name">
          <el-input
            type="passwrod"
            prefix-icon="el-icon-lock"
            v-model="param.password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
        <el-button
          class="w_100"
          type="primary"
          :loading="loginLoading"
          @click="login('form')"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      param: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: blur }],
        password: [{ required: true, message: "请输入密码", trigger: blur }],
      },
      loginLoading: false,
    };
  },
  created() {},
  methods: {
    login(formName) {
      console.log("login");
      this.loginLoading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setTimeout(() => {
            this.loginLoading = false;
            this.$router.push({ name: "Home" });
          }, 500);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #2d3a4b;
  .inner_box {
    width: 450px;
    margin-top: 260px;
    .title {
      padding-bottom: 40px;
      font-size: 26px;
    }
  }
}
</style>
