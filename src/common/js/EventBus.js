/**
 * Created by Kunkka on 2016/12/8.
 * 在要相互通信的兄弟组件之中，都引入一个新的vue实例，
 * 然后通过分别调用这个实例的事件触发和监听来实现通信和参数传递。
 */
import Vue from 'vue/dist/vue.common.js'
export default new Vue()
