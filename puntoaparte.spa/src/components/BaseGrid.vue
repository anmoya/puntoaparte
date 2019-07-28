<template>
  <b-container class="bv-example-row">
    <b-row class="text-center">
      <b-col cols="8">
          <div class="book" v-for="book in books" :key="book.book_details[0].primary_isbn10">
              <p> {{ book.book_details[0].title }} </p>
              <p> {{ book.book_details[0].description }} </p>
              <p> {{ book.book_details[0].author }} </p>
              <a v-bind:href="book.amazon_product_url"> Amazon  </a>
          </div>
          
          

      </b-col>
      <b-col>
          <div class="book" v-for="book in booksWithThe" :key="book.book_details[0].primary_isbn10">
              <p> {{ book.book_details[0].title }} </p>
              <p> {{ book.book_details[0].description }} </p>
              <p> {{ book.book_details[0].author }} </p>
              <a v-bind:href="book.amazon_product_url"> Amazon  </a>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    props: {
        books: Array
    },
    computed: {
        booksWithThe(){
            return this.books.filter( item => item.book_details[0].title.substring(0,3).toLowerCase() === "the");
        }
    }
}
</script>

