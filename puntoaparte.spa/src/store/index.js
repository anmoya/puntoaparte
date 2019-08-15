import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:4200/api'
const categoriesUrl = `${baseUrl}/categories`

export default new Vuex.Store({
    strict: true,
    state: {
        categories: []
    },
    getters: {
        bruteCategories: state => state.categories
    },
    mutations: {
        setData(state, data)
        {
            state.categories = data.c
        }
    },
    actions: {
        async getCategories(context){
            let c = (await Axios.get(categoriesUrl)).data.List
            context.commit('setData', { c })
        }
    }
})

