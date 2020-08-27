<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>收费</el-breadcrumb-item>
      <el-breadcrumb-item>当面收</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <!-- 搜索区域 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="input3">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4"> </el-col>
      </el-row>
      <!-- 账单区域 -->
      <el-table> </el-table>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
