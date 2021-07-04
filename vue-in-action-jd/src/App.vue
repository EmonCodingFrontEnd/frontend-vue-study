<template>
  <div class="docker">
    <!--
    BEM CSS
    block__element--Modifier
    -->
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xec90;</div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61f;</div>
      <div class="docker_title">我的</div>
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
  //background: green;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    &--active {
      color: #1FA4FC;
    }
  }

  &__title {
    font-size: 20px;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}

/*.docker__item {
  flex: 1;
  text-align: center;

  .iconfont {
    margin: .07rem 0 .02rem 0;
    font-size: .18rem;
  }
}*/

/*.docker__item--active {
  color: #1FA4FC;
}*/

/*.docker_title {
  font-size: 20px;
  transform: scale(.5, .5);
  transform-origin: center top;
}*/
</style>
