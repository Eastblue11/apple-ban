// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
Vue.use(Vuex)

//创建实例化仓库
const store = new Vuex.Store({
    //这个就是状态(数据)，统一用vuex来管理的数据放在//这里
    state: {
        //总价钱
        money: 0
    },
    //我们要修改vuex仓库中的state 的状态的话，必须通过mutations中的方法来操作  
    mutations: {
        //我们习惯吧mutations的方法名字写成大写
        ADD(state, price) {
            //mutations的所有方法的第一个参数就是我们仓库中的state 不要使用this.state
            //price是自己传过来的参数 这里表示价钱
            //进行价格的增加
            state.money += price
        },
        REDUCE(state, price) {
            state.money -= price
        },

    },
    //如果涉及到异步 需要把方法写到actions里面
    actions: {
        add(context, price) {
            //context是默认的参数 context可以操作comm it
            setTimeout(() => {
                context.commit('ADD', price)
            }, 1000)
        },
        reduce(context, price) {
            //context是默认的参数 context可以操作commit
            setTimeout(() => {
                context.commit('REDUCE', price)
            }, 1000)
        }

    }


})






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    //关联vuex的仓库
    store,
    template: '<App/>',
    components: { App }
})