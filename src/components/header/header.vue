<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar"><img style="width:64px; height:64px; border-radius: 2px" v-bind:src="seller.avatar" alt=""></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" v-on:click="showpopup">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrap" v-on:click="showpopup">
        <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
        <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
        <img width="100%" height="100%" v-bind:src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <div class="popup" v-show="popupshow" transition="fade">
        <div class="popup-wrap clearfix">
          <div class="popup-content">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star-wrap">
              <star v-bind:size="48" v-bind:score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" v-bind:class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{ seller.supports[index].description }}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{ seller.bulletin }}</p>
            </div>
          </div>
        </div>
        <div class="popup-close" v-on:click="closepopup">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import star from '../../components/star/star.vue'

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star
    },
    data () {
      return {
        popupshow: false
      }
    },
    methods: {
      showpopup () {
        this.popupshow = true
      },
      closepopup () {
        this.popupshow = false
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins"
  @import "../../common/icon.css"
  
  .header
    color: #fff
    position: relative
    background: rgba(7, 17 ,27 ,0.5)
    overflow: hidden
    .content-wrap
      padding: 24px 12px 18px 24px
      font-size: 0
      position: relative
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('./headerMaterial/brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          margin-bottom: 10px
          font-size: 12px
          font-weight: 200
          line-height: 12px
        .support
          margin-bttom: 2px
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('./headerMaterial/decrease_1')
            &.discount
              bg-image('./headerMaterial/discount_1')
            &.guarantee
              bg-image('./headerMaterial/guarantee_1')
            &.invoice
              bg-image('./headerMaterial/invoice_1')
            &.special
              bg-image('./headerMaterial/special_1')
          .text
            vertical-align: top
            margin-bottom: 2px
            font-size: 10px
            font-weight: 200
            line-height: 12px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background-color: rgba(0, 0, 0, 0.2)
        text-align: center
        &:active
          background-color: rgba(0, 0, 0, 0.6)
        .count
          color: rgb(255,255,255)
          font-size: 10px
          font-weight: 200
          vertical-align: top  
        .icon-keyboard_arrow_right
          line-height: 24px
          font-size: 10px
          font-weight: 200
          margin-left: 2px
    .bulletin-wrap
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background-color: rgba(7,17,27,0.2)
      position: relative
      &:active
        rgba(7,17,27,0.6)
      .bulletin-title
        display: inline-block
        vertical-align: 0px
        // margin-top: 8px
        width: 22px
        height: 12px
        bg-image('./headerMaterial/bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        font-size: 10px
        vertical-align: top
        margin: 0 4px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 14px
        right: 10px
        top: 8px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .popup
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 100
      overflow: auto
      backdrop-filter: blur(10px)
      background-color: rgba(7,17,27,0.8)
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
      // &.fade-enter-to
      //   opacity: 1
      // &.fade-enter, &.fade-leave-to
      //   opacity: 0
      .clearfix
        display: inline-block
        &:after
          content: '.'
          display: block
          height: 0
          line-height: 0
          clear: both
          visibility: hidden
      .popup-wrap
        min-height: 100%
        width: 100%
        .popup-content
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size: 16px
            font-weight: 700
            line-height: 16px
            text-align: center
          .star-wrap
            text-align: center
            margin-top: 18px
          .title
            display: flex
            margin: 38px auto 24px auto
            padding: 0 36px
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,0.2)
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &last-chlid
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 16px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('./headerMaterial/decrease_2')
                &.discount
                  bg-image('./headerMaterial/discount_2')
                &.guarantee
                  bg-image('./headerMaterial/guarantee_2')
                &.invoice
                  bg-image('./headerMaterial/invoice_2')
                &.special
                  bg-image('./headerMaterial/special_2')
              .text
                line-height: 16px
                font-size: 12px
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              font-size: 12px
              font-weight: 200
              padding: 0 12px
              line-height: 24px
      .popup-close
        position: relative
        height: 32px
        width: 32px
        margin: -64px auto 0 auto
        clear: both 
        font-size: 32px
        border-radius: 15px
        &:active
          background-color: rgba(7,17,27,1)
</style>