<template>
  <div>
    <div class="shopcart">
    	<div class="content" v-on:click="toggleList">
    	  <div class="content-left">
    	  	<div class="logo-wrap">
    	  	  <div class="logo" v-bind:class="{'highlight':totalCount > 0}">
    	  	  	<span class="icon-shopping_cart" v-bind:class="{'highlight':totalCount > 0}"></span>
    	  	  </div>
    	  	  <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
    	  	</div>
    	  	<div class="price" v-bind:class="{'highlight':totalPrice > 0}">￥{{ totalPrice }}</div>
    	  	<div class="description">另需配送费￥{{ deliveryPrice }}元</div>
    	  </div>
    	  <div class="content-right" v-bind:class="payClass" v-on:click.stop.prevent="pay">{{ payDesc }}</div>
    	</div>
    	<div class="ball-container">
    	  <template v-for="ball in balls">
    	  	<transition name="drop" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
    	  	  <div v-show="ball.show" class="ball">
    	  	    <div class="inner inner-hook"></div>
    	  	  </div>
    	    </transition>
    	  </template>
    	</div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" v-on:click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{ food.name }}</span>
                <div class="price">
                  <span>￥{{ food.price * food.count}}</span>
                </div>
                <div class="cartcontrol-wrap">
                  <cartcontrol v-bind:food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
      </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-on:click="hideList" v-show="listShow"></div>
    </transition>
    <transition name="bounce">
      <div class="Alipay" v-show="payShow"></div>
    </transition>
    <transition name="fade">
      <div class="pay-mask" v-on:click="hidePay" v-show="payShow"></div>
    </transition>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  import cartcontrol from '../../components/cartcontrol/cartcontrol.vue'

  export default {
  	props: {
      deliveryPrice: {
      	type: Number,
      	default: 0
      },
      minPrice: {
      	type: Number,
      	default: 0
      },
      selectFoods: {
      	type: Array,
      	default () {
      	  return []
      	}
      }
  	},
    components: {
      cartcontrol
    },
  	data () {
  	  return {
  	  	balls: [
  	  	  {
  	  	  	show: false
  	  	  },
  	  	  {
  	  	  	show: false
  	  	  },
  	  	  {
  	  	  	show: false
  	  	  },
  	  	  {
  	  	  	show: false
  	  	  },
  	  	  {
  	  	  	show: false
  	  	  }
  	  	],
        dropBalls: [],
        fold: true,
        payShow: false
  	  }
  	},
  	computed: {
  	  totalPrice () {
  	  	let total = 0
  	  	this.selectFoods.forEach((food) => {
  	  	  total += food.price * food.count
  	  	})
  	  	return total
  	  },
  	  totalCount () {
  	  	let count = 0
  	  	this.selectFoods.forEach((food) => {
  	  	  count += food.count
  	  	})
  	  	return count
  	  },
  	  payDesc () {
  	  	if (this.totalPrice === 0) {
  	  	  return `满￥${this.minPrice}元起送`
  	  	} else if (this.totalPrice < this.minPrice) {
  	  	  return `还差￥${Math.ceil(this.minPrice - this.totalPrice)}元起送`
  	  	} else if (this.totalPrice >= this.minPrice) {
  	  	  return `前去结算`
  	  	}
  	  },
  	  payClass () {
  	  	if (this.totalPrice < this.minPrice) {
  	  	  return 'not-enough'
  	  	} else if (this.totalPrice >= this.minPrice) {
  	  	  return 'enough'
  	  	}
  	  },
      listShow () {
        if (!this.totalCount) {
          this.fold = true
          return false
        }
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BSscroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      }
  	},
  	methods: {
  	  drop (el) {
  	  	for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
  	  },
      beforeEnter (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            /**
             * getBoundingClientRect() 获取el相对视窗的位置集合 返回TextRectangle对象
             * recrObject: top/bottom 元素上/下边到视窗上边的距离
             * recrObject: left/right 元素左/右边到视窗左边的距离
             */
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)

            el.style.display = ''
            el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
            el.style.transform = `translate3d(0, ${y}px, 0)`

            let inner = el.getElementsByClassName('inner-hook')[0]
            inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
            inner.style.transform = `translate3d(${x}px, 0, 0)`
          }
        }
      },
      enter (el) {
        /* 触发浏览器重绘 rf定义了但没被使用会报错，需要加下面那行注释 */
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0, 0, 0)'
          el.style.transform = 'translate3d(0, 0, 0)'

          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translate3d(0, 0, 0)'
          inner.style.transform = 'translate3d(0, 0, 0)'
        })
      },
      afterEnter (el) {
        let ball = this.dropBalls.shift()
        if (ball) {
          ball.show = false
          el.style.display = 'none'
        }
      },
      toggleList () {
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
      empty () {
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      hideList () {
        this.fold = true
      },
      pay () {
        if (this.totalPrice < this.minPrice) {
          return
        }
        this.payShow = true
      },
      hidePay () {
        this.payShow = false
      }
  	}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/icon.css"
  @import "../../common/stylus/mixins"
  
  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 48px
    .content
      margin 0
      font-size 0
      display flex
      background-color #141d27
      color rgba(255,255,255,0.5)
      .content-left
        flex 1
        .logo-wrap
          display inline-block
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background-color #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            text-align center
            background-color #2b343c
            &.highlight
              background-color rgb(0,160,220)
            .icon-shopping_cart
              font-size 24px
              line-height 44px
              color #80858a
              &.highlight 
                color #FFF
          .num
            position absolute
            top 0
            right 0
            width 24px
            height 16px
            line-height 16px
            text-align center
            border-radius 16px
            font-size 9px
            font-weight 700
            color #FFF
            background-color rgb(240,20,20)
            box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display inline-block
          vertical-align top
          margin-top 12px
          padding-right 12px
          line-height 24px
          border-right 1px solid rgba(255,255,255,0.1)
          box-sizing border-box
          font-size 16px
          font-weight 700
          &.highlight
          	color #FFF
        .description
          display inline-block
          vertical-align top
          line-height 24px
          margin 12px 0 0 12px
          font-size 10px
          font-weight 700
      .content-right
        flex 0 0 105px
        width 105px
        text-align center
        line-height 48px
        font-size 12px
        font-weight 700
        &.not-enough
          background-color #2b333b
        &.enough
          background-color #00b43c
          color #FFF
    .ball-container
      .ball
        position fixed
        left 32px
        bottom 22px
        z-inedx 101
        .inner
          width 16px
          height 16px
          border-radius 50%
          background-color rgb(0,160,200)
        &.drop-enter-active
          transition all 0.4s cubic-bezier(.49, -0.29, .75, .41)
          .inner
          	transition all 0.4s linear
    .shopcart-list
      position absolute
      top 0
      left 0
      z-index -1
      width 100%
      transform translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition all 0.5s
      &.fold-enter, &.fold-leave-active
        transform translate3d(0, 0, 0)
      .list-header
        line-height 40px
        height 40px
        padding 0 18px
        background #f3f5f7
        border-bottom 1px solid rgba(7,17,27,0.1)
        .title
          font-size 14px
          float left
          color rgb(7,17,27)
        .empty
          font-size 12px
          float right
          color rgb(0,160,220)
      .list-content
        padding 0 18px
        max-height 217px
        overflow hidden
        background #fff
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height 24px
            font-size 14px
            color rgb(7,17,27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240,20,20)
          .cartcontrol-wrap
            position absolute
            right 0
            bottom 6px
  .list-mask, .pay-mask
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 40
    background-color rgba(7, 17, 27, 0.6)
    backdrop-filter blur(10px)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    .fade-enter, .fade-leave-active
      opacity 0
  .pay-mask
    z-index 500
  .Alipay
    position fixed
    left 50%
    top 50%
    width 300px
    height 300px
    margin-top -150px
    margin-left -150px
    background-image url('shopcartMaterical/Alipay.jpg')
    background-size 100%
    z-index 1000
    &.bounce-enter-active 
      animation: bounce-in .5s
    &.bounce-leave-active
      animation: bounce-in .5s reverse
    @keyframes bounce-in
      0%
        transform: scale(0)
      50% 
        transform: scale(1.5)
      100%
        transform: scale(1)
</style>
