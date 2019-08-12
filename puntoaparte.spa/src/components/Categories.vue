<template>
  <div>
    <div class="row">
      <div class="col-4" v-for="(value, name, index) in List" :key="index">
        <CategoryCardBase :title="name" :List="value" />
      </div>
    </div>
  </div>
</template>
<script>
import CategoryCardBase from './CategoryCardBase'
export default {
    data () {
      return {
        List: {
          Literatura: [{text:'Clasicos',value:5}, {text:'Ficción Historica',value:6}, {text:'Poesía',value:3}, {text:'Literatura Contemporanea',value:1}, {text:'Por Generos', value:100}],
          //Historia: ['Antigua', 'Medieval', 'Contemporanea', ,'Teoría', 'Por Tema'],
          //Filosofia: ['Antigua', 'Medieval', 'Contemporanea', 'Teoría', 'Por Escuela']
        }
      }
    },
    components: {
        CategoryCardBase
    }
}
</script>