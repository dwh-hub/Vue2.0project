<template>
  <div class="goods">
  	<div class="menu-wrap" ref="menuWrap">
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item" v-bind:class="{'current':currentIndex === index}" v-on:click="selectMenu(index)">
  				<span class="text border-1px">
  					<span v-show="item.type > 0" class="icon" v-bind:class="classMap[item.type]"></span>{{ item.name }}
  				</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrap" ref="foodsWrap">
     <ul>
       <li v-for="(item,index) in goods" class="food-list food-list-hook">
         <h1 class="title">{{ item.name }}</h1>
         <ul>
            <li v-on:click="selectFood(food, $event)" v-for="(food,index) in item.foods" class="food-item border-1px">
              <div class="icon"><img width="57" height="57" v-bind:src="food.icon"></div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p v-show="food.description" class="description">{{ food.description }}</p>
                <div class="extra">
                  <span>月售{{ food.sellCount }}份</span><span>好评率:{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="new">￥{{ food.price }}</span><span v-show="food.oldPrice" class="old">￥{{ food.oldPrice }}</span>
                </div>
                <div class="cartconttol-wrap">
                  <cartcontrol v-bind:food="food"></cartcontrol>
                </div>
              </div>
            </li>
         </ul>
       </li>
     </ul> 
    </div>
    <shopcart ref="shopcart" v-bind:select-foods="selectFoods" v-bind:delivery-price="seller.deliveryPrice" v-bind:min-price="seller.minPrice"></shopcart>
    <food v-bind:food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  import shopcart from '../../components/shopcart/shopcart.vue'
  import cartcontrol from '../../components/cartcontrol/cartcontrol.vue'
  import Bus from '../../common/js/eventBus'
  import food from '../../components/food/food.vue'

  const ERR_OK = 0

  export default {
  	props: {
  	  seller: {
  		type: Object
  	  }
  	},
    data () {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      }
    },
    components: {
      shopcart,
      cartcontrol,
      food
    },
    // events: {
    //   'cart.increase' (target) {
    //     this._drop(target)
    //   }
    // },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let nowHeight = this.listHeight[i]
          let nextHeight = this.listHeight[i + 1]
          if (!nextHeight || (this.scrollY >= nowHeight && this.scrollY < nextHeight)) {
            return i
          }
        }
        return 0
      },
      selectFoods () {
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']

      Bus.$on('cart.increase', el => {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(el)
        })
      })
      this.$http.get('/api/goods').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.goods = response.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculate()
          })
        }
      })
    },
    methods: {
      selectMenu (index) {
        let foodList = this.$refs.foodsWrap.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el, 300)
      },
      _initScroll () {
        this.menuScroll = new BSscroll(this.$refs.menuWrap, {
          click: true
        })
        this.foodsScroll = new BSscroll(this.$refs.foodsWrap, {
          click: true,
          probeType: 3
        })
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculate () {
        let foodList = this.$refs.foodsWrap.getElementsByClassName('food-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          height += foodList[i].clientHeight
          this.listHeight.push(height)
        }
      },
      _drop (target) {
        // 异步执行下落动画，优化体验
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target)
        })
      },
      selectFood (food) {
        this.selectedFood = food
        this.$refs.food.show()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins"

  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrap
      flex 0 0 80px
      width 80px
      background-color #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        cursor pointer
        &.current
          position  relative
          margin-top -1px
          z-index 10
          background-color #FFF
          font-weight bold
          .text
            border-none()
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('./goodsMaterial/decrease_3')
          &.discount
            bg-image('./goodsMaterial/discount_3')
          &.guarantee
            bg-image('./goodsMaterial/guarantee_3')
          &.invoice
            bg-image('./goodsMaterial/invoice_3')
          &.special
            bg-image('./goodsMaterial/special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7,17,27,0.1))
          font-size 12px
          font-weight 200
          line-height 14px
    .foods-wrap
      flex 1
      .food-list
        .title
          height 26px
          width 100%
          font-size 12px
          line-height 26px
          color rgb(147,153,159)
          border-left 2px solid #d9dde1
          padding-left 12px
          background-color #f3f5f7
        .food-item
          display flex
          margin 18px
          padding-bottom 18px
          border-1px(rgba(7,17,27,0.1))
          &:last-child
            border-none
            margin-bottom 0
          .icon
            flex 0 0 57px
          .content
            flex 1
            margin-left 10px
            .name
              margin 2px 0 8px 0
              font-size 14px
              line-height 14px
              color rgb(7,17,27)
            .description
              color rgb(147,153,159)
              font-size 12px
              line-height 14px
            .extra
              margin-top 8px
              font-size 10px
              line-height 10px
              color rgb(147,153,159)
              span
                margin-right 12px
            .price
              margin-top 8px
              .new
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
            .cartconttol-wrap
              position absolute
              right 0
              bottom 10px
</style>
