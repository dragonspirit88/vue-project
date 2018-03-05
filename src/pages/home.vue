<template>
    <div class="home">
        <view-header></view-header>
        <div class="container">
            <view-menus></view-menus>
            <view-mains></view-mains>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.home {
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
}
</style>