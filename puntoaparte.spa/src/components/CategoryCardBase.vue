<template>
  <div class="row category">
    <div class="col-6">
      <img
        src="https://imagessl1.casadellibro.com/a/l/t5/11/9788483463611.jpg"
        class="card-img"
        alt="..."
      />
    </div>
    <div
      class="col-6"
    >
    <h1>{{title}}</h1>
    <ul v-for="(tema, index) in orderList(List)" :key="index">
      <li>{{ tema.text }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    List: Array,
    title: String
  },
  data () {
    return {
      listado: null
    }
  },
  methods: {
    orderList: function(arr) {
      return arr.map(item => item).sort(function(a,b) {
        return a.value - b.value;
      })
    }
  }

};
</script>

<style scoped>
.category {
    margin-bottom: 10px
}
</style>