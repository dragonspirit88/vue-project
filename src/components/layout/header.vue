<template>
    <div class="header">
        <div class="logo">
            logo
        </div>
        <div class="userInfo">
            用户信息
            <span>请先登录</span>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-flow:row nowrap;
  justify-content: flex-start;
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid red;
  }
  .userInfo{
      flex:1;
      text-align: right;
  }
}
</style>