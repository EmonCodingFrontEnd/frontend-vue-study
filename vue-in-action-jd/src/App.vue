<template>
  <div class="docker">
    <span class="docker__item">
      <div class="iconfont">&#xe60b;</div>
      首页
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xec90;</div>
      购物车
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      订单
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61f;</div>
      我的
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #F1F1F1;
}

.docker__item {
  flex: 1;
  text-align: center;
}
</style>
