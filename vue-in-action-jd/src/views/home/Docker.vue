<template>
  <div class="docker">
    <!--
    BEM CSS
    block__element--Modifier
    -->

    <div v-for="(item,  index) in dockerList"
         :key="item.icon"
         :class="{'docker__item':true, 'docker__item--active': index===0}"
    >
      <div class="iconfont" v-html="item.icon"/>
      <div class="docker_title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe60b;',
        text: '首页'
      },
      {
        icon: '&#xec90;',
        text: '购物车'
      },
      {
        icon: '&#xe61e;',
        text: '订单'
      },
      {
        icon: '&#xe61f;',
        text: '我的'
      }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $content-bgColor;
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
