<template>
  <div class="row">
    <div class="col-6">
      <img :src="Item.config.image" class="card-img" alt="..." />
    </div>
    <div class="col-6">
      <h1>{{ Item.title }}</h1>
       <p class="category-link" v-for="(category, index) in Item.themes" :key="index">
        {{ category.theme }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Item: Object
  },
  data() {
    return {};
  },
  methods: {
    orderList: function(arr) {
      return arr
        .map(item => item)
        .sort(function(a, b) {
          return a.value - b.value;
        });
    },
    getThemes: function(obj) {
      return this.orderList(obj.themes)
    },
    getConfig: function(obj) {
      return obj.config;
    }
  }
};
</script>

<style scoped>
.category {
  margin-bottom: 10px;
}
.category-link {
  list-style: none;
  font-size: 11px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: left;
}
.category-link:hover {
  font-size: 18px;
}
</style>