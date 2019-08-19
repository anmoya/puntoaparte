<template>
  <div class="row">
    <div v-for="(book,index) in RecentBooks" :key="index" class="pasarela">
      <img :src="book.cover" alt="asdf" class="recent-element" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      RecentBooks: "getBooks"
    })
  }
};
</script>

<style scoped>
.recent-element {
  min-height: 350px;
  max-height: 350px;
}
.pasarela {
  padding: 25px 10px 25px 10px;
  background-color: lightslategray;
}
</style>