<template>
  <div class="cartcontrol">
  	<transition name="move">
  	  <div class="cart-decrease" v-show="food.count > 0" v-on:click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
  	</transition>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-increase icon-add_circle" v-on:click.stop.prevent="increaseCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Bus from '../../common/js/eventBus'

  export default {
  	props: {
  	  food: {
  	  	type: Object
  	  }
  	},
  	created () {
  	},
  	methods: {
  	  increaseCart (event) {
        if (!event._constructed) {
          return
        }
  	  	if (!this.food.count) {
  	  	  // 添加food不存在的字段时 需要调用vue.set方法添加，这样才可以通过vue观测到这个字段的变化
  	  	  Vue.set(this.food, 'count', 1)
  	  	} else {
  	      this.food.count++
  	  	}
  	  	Bus.$emit('cart.increase', event.target)
  	  },
  	  decreaseCart () {
  	  	if (this.food.count) {
  	  	  this.food.count --
  	  	}
  	  }
  	}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/icon.css"

  .cartcontrol
    font-size 0
    .cart-decrease, .cart-increase
      display inline-block
      padding 6px
      .inner
        display inline-block
        font-size 24px
        line-height 24px
        color rgb(0,160,220)
      &.move-enter-active, &.move-leave-active
        transition all 0.3s linear
        transform translate3d(0,0,0,)
        .inner
          transition all 0.3s linear
          transform rotate(0deg)
      &.move-enter, &.move-leave-active
        opacity 0
        transform translate3d(24px,0,0)
        .inner
        	transform rotate(180deg)
    .cart-count
      display inline-block
      font-size 10px
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      color rgb(143,153,159)
    .cart-increase
      display inline-blockpadding 6px
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
</style>
