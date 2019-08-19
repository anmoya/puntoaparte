<template>
  <select class="form-control landing-element" v-on:change.prevent="changeCategoriesPerPage">
    <option value="0">Selecciona:</option>
    <option value="3">3 per page</option>
    <option value="6">6 per page</option>
    <option value="9">9 per page</option>
  </select>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
      ...mapState(['categoriesPerPage'])
  },
  methods: {
    ...mapMutations(["setCategoriesPerPage"]),
    changeCategoriesPerPage($event) {
        if (Number($event.target.value)!==0)
            this.setCategoriesPerPage(Number($event.target.value));
    }
  }
};
</script>

<style>
.landing-element {
  margin-bottom: 20px;
}
</style>