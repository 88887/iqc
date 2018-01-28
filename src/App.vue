<template>
  <div id="app" class="app container-fluid">
    <main-menu /> 
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}

</script>

<style lang = "scss">
@import "./shared/custom";
@import "~bootstrap/scss/bootstrap";
@import './node_modules/@progress/kendo-theme-bootstrap/scss/all';
@import "./components/dashboard";
#app {

  .container {
      margin:40px;
  }

  html, body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    margin:0;

  }

  span.active {
      background-color: gray;
  }

  .col-xs {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%
  }

  .col-xs-12 {
      flex: 0 0 100%;
  }

  .nav-toggle .k-i-hamburger {
      font-size: 32px;
  }
}
</style>
