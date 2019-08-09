<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <TheSpecialOne />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar';
import TheSpecialOne from './TheSpecialOne'
export default {
  components: {
    TheNavbar,
    TheSpecialOne
  }
};
</script>

<style>
</style>
