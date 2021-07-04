<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe604;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe7e5;</span>
    </div>
  </div>
  <div class="docker">
    <!--
    BEM CSS
    block__element--Modifier
    -->
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker_title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xec90;</div>
      <div class="docker_title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker_title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61f;</div>
      <div class="docker_title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
  //background: blue;
}

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;

  .position__icon {
    position: relative;
    top: .02rem;
    font-size: .2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }

  color: $content-fontcolor;
}

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
  color: $content-fontcolor;
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
    font-size: .2rem;
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
