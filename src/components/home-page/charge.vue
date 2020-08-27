<template>
  <el-container>
    <el-aside width="200px">
      <!-- <el-menu> -->
      <el-menu :default-active="activeIndex" @select="handleSelect" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>收费</span>
          </template>
          <el-menu-item :index="this.path.path1">账单发送</el-menu-item>
          <el-menu-item :index="this.path.path2">当面收</el-menu-item>
          <el-menu-item index="1-3">当面付</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>账单管理</span>
          </template>
          <el-menu-item index="2-1">账单查询</el-menu-item>
          <el-menu-item index="2-2">批次管理</el-menu-item>
          <el-menu-item index="2-3">账单回收站</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>资金管理</span>
          </template>
          <el-menu-item index="3-1">结算记录</el-menu-item>
          <el-menu-item index="3-2">结算管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>电子发票</span>
          </template>
          <el-menu-item index="4-1">电子发票</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/sendbill",
      path: {
        path1: "/sendbill",
        path2: "/faceget",
      },
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>