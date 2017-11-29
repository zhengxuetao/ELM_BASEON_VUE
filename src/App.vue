<template>
  <div id="app">
    <el-container>
      <el-header>点餐平台</el-header>
      <el-main  v-loading="false">
        <router-view/>
      </el-main>
      <el-footer>
        <foot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import foot from '@/components/common/Footer'
  export default {
    name: 'app',
    components: {
      foot
    }
  }
</script>

<style>
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
  }
  .el-header {
    top: 0;
  }
  .el-footer {
    bottom: 0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    text-align: center;
    margin-top: 60px;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
