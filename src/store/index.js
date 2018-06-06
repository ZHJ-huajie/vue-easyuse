import Vue from 'vue'
import Vuex from 'vuex'

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {		//类似data
    msg:"Welcome to Your Vue.js App",
  },
  getters: {		//类似computed
    count: (state) => {
      return state.msg.length
    }
  },
  mutations: {		//类似methods
		plusCount (state,num){
			state.msg +=num;
		}
  }
})
