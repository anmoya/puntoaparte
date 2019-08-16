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
import { mapGetters } from "vuex";
import CategoryCardBase from "./CategoryCardBase";
export default {
  computed: {
    ...mapGetters({ List: "getCategories" })
  },
  components: {
    CategoryCardBase
  }
};
</script>