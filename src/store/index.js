import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    title: '点餐平台'
  },
  mutations: {
    changeAuthor: function (state, newValue) {
      state.author = newValue
    }
  },
  actions: {
    getData(context) {
      axios.get('static/data.json').then((res) => {
        context.state.author = res.data.author
      });
    }
  }
})

export default store
