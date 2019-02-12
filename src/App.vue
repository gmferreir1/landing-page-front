<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    
    require('./assets/js/creative.js')
  },
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/mdbootstrap/css/mdb.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
@import "../node_modules/magnific-popup/dist/magnific-popup.css";
@import "./assets/css/creative.css";
</style>
