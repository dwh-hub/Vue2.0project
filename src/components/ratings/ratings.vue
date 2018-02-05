<template>
  <div id="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{ seller.rankRate }}</div>
        </div>
        <div class="overview-right">
          <div class="socre-wrap">
            <span class="title">服务态度</span>
            <star v-bind:size="36" v-bind:score="seller.serviceScore"></star>
            <span class="score">{{ seller.serviceScore }}</span>
          </div>
          <div class="socre-wrap">
            <span class="title">商品评分</span>
            <star v-bind:size="36" v-bind:score="seller.foodScore"></star>
            <span class="score">{{ seller.foodScore }}</span>
          </div>
          <div class="delivery-wrap">
            <span class="title">送达时间</span>
            <span class="delivery">{{ seller.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect v-bind:select-type="selectType" v-bind:only-content="onlyContent" v-bind:ratings="ratings"></ratingselect>
      <div class="rating-wrap">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="avatar">
              <img v-bind:src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{ rating.username }}</h1>
              <div class="star-wrap">
                <star v-bind:size="24" v-bind:score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{ rating.deliveryTime }}</span>
              </div>
              <p class="text">{{ rating.text }}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <i class="icon-thumb_up"></i>
                <span v-for="item in rating.recommend" class="item">{{ item }}</span>
              </div>
              <div class="time">{{ rating.rateTime | formatDate }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  import star from '../../components/star/star.vue'
  import ratingselect from '../../components/ratingselect/ratingselect.vue'
  import split from '../../components/split/split.vue'
  import {formatDate} from '../../common/js/date'
  import Bus from '../../common/js/eventBus'

  const ALL = 2
  const ERR_OK = 0

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      }
    },
    components: {
      star,
      split,
      ratingselect
    },
    created () {
      this.$http.get('/api/ratings').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.ratings = response.data
          this.$nextTick(() => {
            this.scorll = new BSscroll(this.$refs.ratings, {
              click: true
            })
          })
        }
      })
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
    methods: {
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
  
  #ratings
    position fixed
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overview
      display flex
      padding 18px 0
      .overview-left
        flex 0 0 137px
        padding 6px 0 
        width 137px
        border-right 1px solid rgba(7,17,27,0.1)
        text-align center
        @media only screen and (max-width: 380px)
          flex 0 0 120px
          width 120px
        .score
          margin-bottom 6px
          font-size 24px
          line-height 28px
          color rgb(255,153,0)
        .title
          margin-bottom 8px
          line-height 12px
          font-size 12px
          color rgb(7,17,27)
        .rank
          line-height 10px
          font-size 10px
          color rgb(147,153,159)
      .overview-right
        flex 1
        padding 6px 0 6px 24px
        @media only screen and (max-width: 380px)
          padding-left: 6px
        .socre-wrap
          margin-bottom 8px
          font-size 0
          .title
            display inline-block
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(7,17,27)
          .star
            display inline-block
            margin 0 12px
            vertical-align top
          .score
            display inline-block
            vertical-align top
            font-size 12px
            color rgb(147,153,159)
        .delivery-wrap
          font-size 0
          .title
            line-height 18px
            font-size 12px
            color rgb(7,17,27)
          .delivery
            margin-left 12px
            font-size 12px
            color rgb(147,153,159)
    .rating-wrap
      padding 0 18px
      .rating-item
        display flex
        padding 18px 0
        border-1px(rgba(7,17,27,0.1))
        .avatar
          flex 0 0 28px
          width 28px
          margin-right 12px
          img
            border-radius 50%
        .content
          position relative
          flex 1
          .name
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color rgb(17,17,27)
          .star-wrap
            margin-bottom 6px
            font-size 0
            .star
              vertical-align top
              font-size 10px
              line-height 10px
              color rgb(147,153,159)    
          .text
            margin-bottom 18px
            line-height 18px
            font-size 12px
            color rgb(7,17,27)
          .recommend
            line-height 16px
            font-size 0
            .icon-thumb_up, .item
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
            .icon-thumb_up
              color rgb(0,160,220)
            .item
              padding 0 6px
              border 1px solid rgba(7,17,27,0.1)
              border-radius 1px rgb(147,153,159)
              background-color #FFF
              display inline-block
              vertical-align top
              margin-right 6px
            .delivery
              display inline-block
          .time
          	position absolute
          	top 0
          	right 0
          	line-height 12px
          	font-size 10px
          	color rgb(7,17,27)
</style>
