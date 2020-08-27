<template>
  <!-- 这是侧边栏 -->
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">学生管理</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">班级管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>