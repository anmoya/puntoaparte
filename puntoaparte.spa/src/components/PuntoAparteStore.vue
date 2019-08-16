<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <TheSpecialOne />
        </div>
      </div>
      <div>
        <Categories />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar';
import TheSpecialOne from './TheSpecialOne'
import Categories from './Categories'
export default {
  components: {
    TheNavbar,
    TheSpecialOne,
    Categories
  }
};
</script>

<style>
</style>
