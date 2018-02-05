<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img v-bind:src="food.image" alt="">
          <div class="i-wrap" v-on:click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{ food.name }}</h1>
          <div class="detail">
            <span class="sell-count">月售{{ food.sellCount }}份</span>
            <span class="rating">好评率{{ food.rating }}</span>
          </div>
          <div class="price">
            <span class="now">￥{{ food.price }}</span><span class="old" v-show="food.oldPrice">￥{{ food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrap">
            <cartcontrol v-bind:food="food"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-on:click.stop.prevent="addFirst" v-show="!food.count || food.count === 0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{ food.info }}</p>
        </div>
        <split></split> 
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect v-bind:select-type="selectType" v-bind:only-content="onlyContent" v-bind:desc="desc" v-bind:ratings="food.ratings"></ratingselect>
          <div class="ratings-wrap">
            <ul v-show="food.ratings && food.ratings.length">
              <li class="rating-item border-1px" v-show="needShow(rating.rateType, rating.text)" v-for="rating in food.ratings">
                <div class="user">
                  <span class="name">{{ rating.username }}</span>
                  <img class="avatar" v-bind:src="rating.avatar" width="12" height="12">
                </div>
                <div class="time">{{ rating.rateTime | formatDate }}</div>
                <p class="text">
                  <span v-bind:class="{'icon-thumb_up': rating.rateType === 0,'icon-thumb_down': rating.rateType === 1}">{{ rating.text }}</span>
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue'
  import BSscroll from 'better-scroll'
  import cartcontrol from '../../components/cartcontrol/cartcontrol.vue'
  import Bus from '../../common/js/eventBus'
  import split from '../../components/split/split.vue'
  import ratingselect from '../../components/ratingselect/ratingselect.vue'
  import {formatDate} from '../../common/js/date'

  // const POSITIVE = 0
  // const NEGATIVE = 1
  const ALL = 2

  export default{
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    components: {
     cartcontrol,
      split,
      ratingselect
    },
    methods: {
      show () {
        this.showFlag = true
        // 切入food组件时初始化显示内容
        this.selectType = ALL
        this.onlyContent = true
        this.$nextTick(() => {
          if (!this.scroll) {
           this.scroll = new BSscroll(this.$refs.food, {
             click: true
           })
          } else {
           this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      },
      addFirst (event) {
       // 为上级组件--goods监听事件
       Bus.$emit('cart.add', event.target)
       Vue.set(this.food, 'count', 1)
      },
      needShow (type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return this.selectType === type
        }
      }
    },
    created () {
      // 获取子组件ratingselect的selectType和onlyContent的更新
      Bus.$on('ratingtype.select', selectType => {
        this.selectType = selectType
        // this.$nextTick(() => {
        //   this.scroll.refresh()
        // })
      })

      Bus.$on('content.toggle', onlyContent => {
        this.onlyContent = onlyContent
        // this.$nextTick(() => {
        //   this.scroll.refresh()
        // })
      })
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/icon.css"
  @import "../../common/stylus/mixins"

  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    width 100%
    background-color #FFF
    &.move-enter-active, &.move-leave-active
      transition all 0.2s linear
    &.move-enter, &.move-leave-active
      // -100%: 从左往右移动 100%从右往左移动
      transform translate3d(-100%, 0, 0)
    .image-header
      position relative
      width 100%
      height 0
      /* padding,margin设置百分比时， 时参照参照其包含块的宽度进行计算
       * 相当于一个宽高相等的盒子模型
       */
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .i-wrap
        position absolute
        top 10px
        left 0
        .icon-arrow_lift
          display block
          padding 10px
          font-size 20px
          color #FFF
    .content
      margin 0
      width 100%
      padding 18px
      position relative
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700px
        color tgb(7,17,27)
      .detail
        margin-bottom 18px
        height 10px
        line-height 10px
        font-size 0
        .sell-count
          font-size 10px
          color rgb(147,153,159)
          margin-right 12px
        .rating
          font-size 10px
          color rgb(147,153,159)
      .price
        margin-top 8px
        .now
          font-size 14px
          line-height 14px
          font-weight 700
          color red
        .old
          font-size 10px
          line-height 28px
          font-weight normal
          color rgb(147,153,159)
          text-decoration line-through
      .cartcontrol-wrap
        position absolute
        right 48px
        bottom 12px
      .buy
        position absolute
        right 56px
        bottom 18px
        z-index 10
        height 24px
        line-height 24px
        padding 0 12px
        box-sizing border-box
        font-size 10px
        border-radius 12px
        color #FFF
        background-color rgb(0,160,220)
        &.fade-enter-active, &.fade-leave-active
          transition opacity 0.5s
        &.fade-enter, &.fade-leave-active
            opacity 0
    .info
      padding 18px
      .title
        line-height 14px
        margin-bottom 6px
        font-size 14px
        color rgb(7,17,27)
      .text
        line-height 24px
        padding 0 8px
        font-size 12px
        font-weight 200
        color rgb(77,85,93)
    .rating
      padding-top: 18px
      .title
        line-height 14px
        margin-left 18px
        font-size 14px
        color rgb(7,17,27)
      .ratings-wrap
        padding 0 18px
        .rating-item
          padding 16px 0
          border-1px(rgba(7,17,27,0.1))
          .user
            position absolute
            right 0
            top 16px
            font-size 0
            line-height 12px
            .name
              display inline-block
              vertical-align top
              margin-right 6px
              font-size 10px
              color rgb(147,153,159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 6px
            font-size 10px
            line-height 12px
            color rgb(147,153,159)
          .text
            line-height 16px
            font-size 12px
            color rgb(7,17,27)
            .icon-thumb_up, .icon-thumb_down
              line-height 16px
              margin-right 4px
              font-size 12px
            .icon-thumb_up
              color rgb(0,160,220)
            .icon-thumb_down
              color rgb(147,153,159)
        .no-rating
          padding 16px 0
          font-size 12px
          color rgb(147,153,159)
</style>