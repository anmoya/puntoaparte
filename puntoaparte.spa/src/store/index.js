import Vue from "vue";
import Vuex from "vuex";
//import Axios from 'axios'

Vue.use(Vuex);

//const baseUrl = 'http://localhost:4200/api'
//const categoriesUrl = `${baseUrl}/categories`
//const booksUrl = `${baseUrl}/books`

export default new Vuex.Store({
  strict: true,
  state: {
    categories: [],
    books: [],
    categoriesPerPage: 3,
    special: 0
  },
  getters: {
    getCategories: state => state.categories,
    getProcessedCategories: (state, getters) => {
      return getters.getCategories.slice(0,state.categoriesPerPage);
    },
    getSpecial: state => state.books[state.special],
    getSpecialLength: state => state.books.length,
    getBooks: state => state.books
  },
  mutations: {
    setData(state, data) {
      (state.categories = data.cdata), (state.books = data.bdata);
    },
    setCategoriesPerPage(state, number){
      state.categoriesPerPage = number 
    },
    setSpecial(state, data){
      if (data.special === data.spLength)
        state.special = 0
      else
        state.special += 1
    }
  },
  // TODO: use database throug api
  actions: {
    async getData(context) {
      //let cdata = (await Axios.get(categoriesUrl)).data
      let bdata = [
        {
          cover:
            "https://http2.mlstatic.com/javascript-for-dummies-quick-reference-emily-a-vander--D_NQ_NP_969383-MLA29630555397_032019-F.jpg",
          title: "Las locuras de billy mouse",
          abstract: `JavaScript has evolved quite a bit since its earliest days, from a relatively basic scripting language to a full-blown programming language in its own right. You can use JavaScript to create even more breathtakingly cool Web sites than ever before. You've probably seen Web sites with the following features:
          Images that change when your mouse moves over them
          Slide-show animations
          Input forms with pop-up messages that help you fill in the fields correctly
          Customized messages that welcome repeat visitors
          All of these features (and much more) can be created with JavaScript. The thing is, JavaScript isn't easy to use. The JavaScript language itself has become more complex than its earlier incarnations – but that's where his new, improved, better-tasting edition of JavaScript For Dummies comes in! Even if you're not a crackerjack programmer, you can use the techniques and sample scripts in this book to create interactive, "intelligent" Web pages bursting with animated effects.`
        },
        {
          cover:
            "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496130007/a/f4/76/167678-ml-1401996.jpg",
          title: "Alice in wonderland",
          abstract: `Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures. The tale plays with logic, giving the story lasting popularity with adults as well as with children. It is considered to be one of the best examples of the literary nonsense genre. Its narrative course and structure, characters and imagery have been enormously influential in both popular culture and literature, especially in the fantasy genre.`
        },
        {
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Ckevfz6%2BL._SX329_BO1,204,203,200_.jpg",
          title: "War of the Spark",
          abstract: `Teyo Verada wants nothing more than to be a shieldmage, wielding arcane energies to protect his people from his world’s vicious diamondstorms. When he’s buried alive in the aftermath of his first real tempest, the young mage’s life is about to end before it can truly begin—until it doesn’t. In a flash, a power he didn’t know he had whisks him away from his home, to a world of stone, glass, and wonder: Ravnica. Teyo is a Planeswalker, one of many to be called to the world-spanning city—all lured by Nicol Bolas, the Elder Dragon. Bolas lays siege to the city of Ravnica, hungry for the ultimate prize: godhood itself. His unparalleled magic and unstoppable army appear poised to bring the city to utter ruin.`
        }
      ];

      //let bdata = (await Axios.get(booksUrl)).data
      let cdata = [
        {
          title: "Literatura",
          config: {
            image:
              "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496130007/a/f4/76/167678-ml-1401996.jpg"
          },
          themes: [
            { theme: "Clasicos", value: 5 },
            { theme: "Ficción Historica", value: 6 },
            { theme: "Poesía", value: 3 },
            { theme: "Literatura Contemporanea", value: 1 },
            { theme: "Por Generos", value: 100 }
          ]
        },
        {
          title: "Historia",
          config: {
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51XUxoVWtHL._SX331_BO1,204,203,200_.jpg"
          },
          themes: [
            { theme: "Antigua", value: 5 },
            { theme: "Medieval", value: 6 },
            { theme: "Contemporanea", value: 3 },
            { theme: "Historiografia", value: 1 },
            { theme: "Por Escuela", value: 100 }
          ]
        },
        {
          title: "Filosofia",
          config: {
            image:
              "https://images-na.ssl-images-amazon.com/images/I/41rxTo4rszL._SX306_BO1,204,203,200_.jpg"
          },
          themes: [
            { theme: "Clasica", value: 1 },
            { theme: "Medieval", value: 2 },
            { theme: "Contemporanea", value: 5 },
            { theme: "Moderna", value: 3 },
            { theme: "Por Escuela", value: 100 }
          ]
        },
        {
          title: "Cocina",
          config: {
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91PWAlenA3L.jpg"
          },
          themes: [
            { theme: "Vegana", value: 1 },
            { theme: "Vegetariana", value: 2 },
            { theme: "Postres", value: 5 },
            { theme: "Legumbres", value: 3 },
            { theme: "Mas...", value: 100 }
          ]
        }
      ];

      context.commit("setData", { cdata, bdata });
    },
    async changeSp({ commit, getters, state }){
      let special = state.special + 1
      let spLength = getters.getSpecialLength

      commit("setSpecial", { special, spLength });
    }
  }
});
