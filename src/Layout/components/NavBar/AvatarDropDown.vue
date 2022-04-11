<template>
  <el-dropdown trigger="click" @command="handleClick">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="36" :src="avatar"></el-avatar>
    </span>
    <el-dropdown-menu>
      <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
      <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      avatar: this.$store.getters.userInfo.avatar
    };
  },
  methods: {
    handleClick(command) {
      if (command === "userInfo") this.goUserInfo();
      else if (command === "changePassword") this.changePassword();
      else if (command === "logout") this.logout();
    },
    goUserInfo() {
      this.$router.push({ name: "UserInfo" });
    },
    changePassword() {
      this.$router.push({ name: "ChangePassword" });
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>
