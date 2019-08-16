<template>
  <div id="app">
    <PuntoAparteStore />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PuntoAparteStore from './components/PuntoAparteStore'
export default {
  name: 'app',
  components: {
    PuntoAparteStore
  },
  methods: {
    ...mapActions(['getData'])
  },
  mounted() {
    this.getData()
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
  /*margin-top: 60px;*/
}
</style>
