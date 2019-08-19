<template>
  <div v-if="Special" class="card mb-3" style="max-width: 740px;">
    <div class="row">
      <div class="col-md-4">
        <img :src="Special.cover" class="card-img special-img" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{Special.title}}</h5>
          <p class="card-text">{{ cutAbstract(Special["abstract"]) }}</p>
          <p class="card-text">
            <small class="text-muted">More info...</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      Special: "getSpecial",
      SepecialLength: "getSpecialLength"
    }),
    encualvoy() {
      return this.getSpecial
    }
  },
  methods: {
    ...mapActions({
      changeSp: "changeSp"
      }),
    cutAbstract: function(text) {
      return text.substring(0, 360) + "...";
    }
  },
  mounted() {
    setInterval(() => {
      this.changeSp();
    }, 6000);
  }
};
</script>

<style scoped>
.special-img {
  min-height: 350px;
  max-height: 350px;
}
</style>

