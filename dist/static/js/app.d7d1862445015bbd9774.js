webpackJsonp([1],{0:function(t,s){},"43ti":function(t,s){},"7KQg":function(t,s){},"9D8F":function(t,s){},Ey4l:function(t,s){},N5vB:function(t,s){},NHnr:function(t,s,e){"use strict";function i(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:function(t){return("00"+t).substr(t.length)}(a))}return s}Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("woOf"),o=e.n(n),r={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemclasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemclasses,function(t,e){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]},c=e("VU/8")(r,l,!1,function(t){e("XPqC")},null,null).exports,v={props:{seller:{type:Object}},components:{star:c},data:function(){return{popupshow:!1}},methods:{showpopup:function(){this.popupshow=!0},closepopup:function(){this.popupshow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"avatar"},[e("img",{staticStyle:{width:"64px",height:"64px","border-radius":"2px"},attrs:{src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showpopup}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrap",on:{click:t.showpopup}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar,alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.popupshow,expression:"popupshow"}],staticClass:"popup",attrs:{transition:"fade"}},[e("div",{staticClass:"popup-wrap clearfix"},[e("div",{staticClass:"popup-content"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrap"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"popup-close",on:{click:t.closepopup}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]},p={name:"app",data:function(){return{seller:{id:function(){var t={},s=window.location.search.match(/[?&][^?&]+=[^?&]+/g);return s&&s.forEach(function(s){var e=s.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}),t}().id}}},components:{"v-header":e("VU/8")(v,d,!1,function(t){e("U8qm")},null,null).exports},created:function(){var t=this;this.$http.get("/api/seller?id="+this.seller.id).then(function(s){0===(s=s.body).errno&&(t.seller=o()({},t.seller,s.data))})}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-header",{attrs:{seller:this.seller}}),this._v(" "),s("div",{staticClass:"tab border-1px"},[s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/goods"}},[this._v("商品")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/ratings"}},[this._v("评论")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"/seller"}},[this._v("商家")])],1)]),this._v(" "),s("keep-alive",[s("router-view",{attrs:{seller:this.seller}})],1)],1)},staticRenderFns:[]},h=e("VU/8")(p,u,!1,function(t){e("Uauv")},null,null).exports,f=e("/ocq"),_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]},C=e("VU/8")({},_,!1,function(t){e("9D8F")},null,null).exports,m=e("GQaK"),g=e("mvHQ"),w=e.n(g),y={props:{seller:{type:Object}},data:function(){return{favorite:function(t,s,e){var i=window.localStorage._seller_;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}(this.seller.id,"favorite",!1)}},components:{star:c,split:C},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{toggleFavorite:function(){this.favorite=!this.favorite,function(t,s,e){var i=window.localStorage._seller_;i?(i=JSON.parse(i))[t]||(i[t]={}):(i={})[t]={},i[t][s]=e,window.localStorage._seller_=w()(i)}(this.seller.id,"favorite",this.favorite)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},mounted:function(){var t=this;if(this.scroll=new m.a(this.$refs.seller,{click:!0}),this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll=new m.a(t.$refs.picWrap,{scrollX:!0,eventPassthrough:"vertical"})})}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",attrs:{id:"seller"}},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellerCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{actiive:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrap border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrap",staticClass:"pic-wrap"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]},b=e("VU/8")(y,x,!1,function(t){e("7KQg")},null,null).exports,k=e("I3G/"),T=new(e.n(k).a),$={props:{food:{type:Object}},created:function(){},methods:{increaseCart:function(t){t._constructed&&(this.food.count?this.food.count++:a.a.set(this.food,"count",1),T.$emit("cart.increase",t.target))},decreaseCart:function(){this.food.count&&this.food.count--}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-increase icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.increaseCart(s)}}})],1)},staticRenderFns:[]},N=e("VU/8")($,P,!1,function(t){e("Ey4l")},null,null).exports,S={props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectFoods:{type:Array,default:function(){return[]}}},components:{cartcontrol:N},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0,payShow:!1}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"满￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+Math.ceil(this.minPrice-this.totalPrice)+"元起送":this.totalPrice>=this.minPrice?"前去结算":void 0},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":this.totalPrice>=this.minPrice?"enough":void 0},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new m.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+n+"px, 0)",t.style.transform="translate3d(0, "+n+"px, 0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.webkitTransform="translate3d("+a+"px, 0, 0)",o.style.transform="translate3d("+a+"px, 0, 0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||(this.payShow=!0)},hidePay:function(){this.payShow=!1}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrap"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"description"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:t.payClass,on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[t._v(t._s(t.payDesc))])]),t._v(" "),e("div",{staticClass:"ball-container"},[t._l(t.balls,function(s){return[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])]})],2),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrap"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.payShow,expression:"payShow"}],staticClass:"Alipay"})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.payShow,expression:"payShow"}],staticClass:"pay-mask",on:{click:t.hidePay}})])],1)},staticRenderFns:[]},E=e("VU/8")(S,F,!1,function(t){e("p5h1")},null,null).exports,M={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{oSelectType:this.selectType,oOnlyContent:this.onlyContent}},methods:{select:function(t){this.oSelectType=t,T.$emit("ratingtype.select",t)},toggleContent:function(){this.oOnlyContent=!this.oOnlyContent,T.$emit("content.toggle",this.oOnlyContent)}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"rating-content",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]},U=e("VU/8")(M,R,!1,function(t){e("hoec")},null,null).exports,D={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},components:{cartcontrol:N,split:C,ratingselect:U},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new m.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){T.$emit("cart.add",t.target),a.a.set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||this.selectType===t)}},created:function(){var t=this;T.$on("ratingtype.select",function(s){t.selectType=s}),T.$on("content.toggle",function(s){t.onlyContent=s})},filters:{formatDate:function(t){return i(new Date(t),"yyyy-MM-dd hh:mm")}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"i-wrap",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrap"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings}}),t._v(" "),e("div",{staticClass:"ratings-wrap"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}},[t._v(t._s(s.text))])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]},H=e("VU/8")(D,O,!1,function(t){e("43ti")},null,null).exports,B={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},components:{shopcart:E,cartcontrol:N,food:H},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],T.$on("cart.increase",function(s){t.$nextTick(function(){t.$refs.shopcart.drop(s)})}),this.$http.get("/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculate()}))})},methods:{selectMenu:function(t){var s=this.$refs.foodsWrap.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(s,300)},_initScroll:function(){var t=this;this.menuScroll=new m.a(this.$refs.menuWrap,{click:!0}),this.foodsScroll=new m.a(this.$refs.foodsWrap,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculate:function(){var t=this.$refs.foodsWrap.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++)s+=t[e].clientHeight,this.listHeight.push(s)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectFood:function(t){this.selectedFood=t,this.$refs.food.show()}}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrap",staticClass:"menu-wrap"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n\t\t\t\t")])])}))]),t._v(" "),e("div",{ref:"foodsWrap",staticClass:"foods-wrap"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率:"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartconttol-wrap"},[e("cartcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]},W=e("VU/8")(B,V,!1,function(t){e("a1Wc")},null,null).exports,j={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},components:{star:c,split:C,ratingselect:U},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scorll=new m.a(t.$refs.ratings,{click:!0})}))}),T.$on("ratingtype.select",function(s){t.selectType=s}),T.$on("content.toggle",function(s){t.onlyContent=s})},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||this.selectType===t)}},filters:{formatDate:function(t){return i(new Date(t),"yyyy-MM-dd hh:mm")}}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",attrs:{id:"ratings"}},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"socre-wrap"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"socre-wrap"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrap"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings}}),t._v(" "),e("div",{staticClass:"rating-wrap"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrap"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}))])],1)])},staticRenderFns:[]},L=e("VU/8")(j,z,!1,function(t){e("N5vB")},null,null).exports,A=e("8+8L");a.a.config.productionTip=!1,a.a.use(f.a),a.a.use(A.a);var q=new f.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:W},{path:"/ratings",component:L},{path:"/seller",component:b}],linkActiveClass:"active"});new a.a({el:"#app",router:q,template:"<App/>",components:{App:h}})},U8qm:function(t,s){},Uauv:function(t,s){},XPqC:function(t,s){},a1Wc:function(t,s){},hoec:function(t,s){},p5h1:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d7d1862445015bbd9774.js.map