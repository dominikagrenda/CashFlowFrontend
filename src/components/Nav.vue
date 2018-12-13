<template>
  <el-row>
    <el-col :span="24">
      <el-menu mode="horizontal">
        <el-menu-item class="app-title" index="1">CashFlow</el-menu-item>
        <el-menu-item index="2">Balance</el-menu-item>
        <el-menu-item index="3">Categories</el-menu-item>
        <el-menu-item index="4">Statistics</el-menu-item>
        <el-submenu index="5" style="float: right">
          <template slot="title">Log in</template>
          <el-menu-item index="5-1">Sign in</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style>
.el-menu {
  background-color: #FFDBDA
}

.app-title {
  color: #333;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
</style>
