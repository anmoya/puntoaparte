<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row justify-content-md-center landing-element">
        <div class="col-md-auto">
          <TheSpecialOne />
        </div>
      </div>
      <div class="landing-element">
        <Categories />
      </div>
      <div class="landing-element row">
        <div class="col-8">
          <Recent />
        </div>
        <div class="col-4">
          <!-- TODO -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
import TheSpecialOne from "./TheSpecialOne";
import Categories from "./Categories";
import Recent from './Recent'
export default {
  components: {
    TheNavbar,
    TheSpecialOne,
    Categories,
    Recent
  }
};
</script>

<style scoped>
.landing-element {
  margin-top: 20px
}
</style>
