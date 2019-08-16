import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:4200/api'
const categoriesUrl = `${baseUrl}/categories`
const booksUrl = `${baseUrl}/books`

export default new Vuex.Store({
    strict: true,
    state: {
        categories: [],
        books: []
    },
    getters: {
        getCategories: state => state.categories,
        getSpecial: state => state.books[0]
    },
    mutations: {
        setData(state, data){
            state.categories = data.cdata
            state.books = data.bdata
        }
    },
    actions: {
        async getData(context){
            let cdata = (await Axios.get(categoriesUrl)).data
            let bdata = (await Axios.get(booksUrl)).data
            context.commit('setData', { cdata, bdata })
        }
    }
})

