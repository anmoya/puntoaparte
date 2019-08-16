<template>
  <div class="card mb-3" style="max-width: 740px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://imagessl1.casadellibro.com/a/l/t5/11/9788483463611.jpg"
          class="card-img"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{Special.title}}</h5>
          <p
            class="card-text"
          >{{ cutAbstract(Special["abstract"]) }}</p>
          <p class="card-text">
            <small class="text-muted">More info...</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ Special: "getSpecial" })
  },
  methods: {
    cutAbstract: function(text){
      return text.substring(0,360)+'...'
    }
  }
};
</script>

