<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe604;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe7e5;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe611;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="不允许点击我哦！">
  </div>
  <div class="icons">
    <div v-for="(item) in iconsList"
         :key="item.id"
         class="icons__item">
      <img
        class="icons__item__img"
        :src="item.img"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      {
        id: 1,
        img: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        id: 2,
        img: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        id: 3,
        img: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        id: 4,
        img: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        id: 5,
        img: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        id: 6,
        img: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      },
      {
        id: 7,
        img: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘培蛋糕'
      },
      {
        id: 8,
        img: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        id: 9,
        img: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        id: 10,
        img: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      }
    ]
    return {
      iconsList
    }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

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

.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;

  .iconfont {
    position: relative;
    top: .02rem;
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .2rem;
  }

  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

.banner {
  @include stop_img_shake;

  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item {
    width: 20%;

    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }

    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
