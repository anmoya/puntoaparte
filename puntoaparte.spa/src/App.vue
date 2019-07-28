<template>
  <div id="app">
    <TheNavBar />
    <BaseGrid :books="books" />
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'
import BaseGrid from './components/BaseGrid'
import axios from 'axios'



export default {
  name: 'app',
  components: {
    TheNavBar,
    BaseGrid
  },
  data () {
    return {
      books: []
    }
  },
  mounted: function() {
    axios.get('https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=blAqKba8iuT9CvGIw4G0JFVjKdpjlj3D')
      .then(response => {
        //console.log(response)
        this.books = response.data.results
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
