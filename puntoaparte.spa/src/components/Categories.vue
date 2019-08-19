<template>
  <div>
    <div class="row">
      <DisplayControl />
    </div>
    <div class="row">
      <div class="col-4" v-for="(item, index) in List" :key="index">
        <CategoryCardBase :Item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import DisplayControl from './DisplayControl'
import CategoryCardBase from "./CategoryCardBase"
export default {
    components: {
    CategoryCardBase,
    DisplayControl
  },
  computed: {
    ...mapGetters({ List: "getProcessedCategories" })
  }
};
</script>