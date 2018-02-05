<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <keep-alive>
      <router-view v-bind:seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import {urlParse} from './common/js/util.js'

  const ERR_OK = 0

  export default {
    name: 'app',
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    components: {
      'v-header': header
    },
    created () {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          // this.seller = response.data
          this.seller = Object.assign({}, this.seller, response.data)
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.tab{
    display: flex;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-bottom: 1px rgba(7,17,27,0.1) solid;
    position: relative;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item router-link{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .tab-item a.active{
    color: rgb(240,20,20);
  }*/
 @import "common/stylus/mixins"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active 
          color: rgb(240, 20, 20)
</style>
