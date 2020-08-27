<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" @select="handleSelect" router>
        <el-menu-item :index="this.path.path1">
          <i class="el-icon-menu"></i>
          <span slot="title">总览</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

  <!-- 这是内容区域 -->
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/viewcontent",
      path: {
        path1: "/viewcontent",
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