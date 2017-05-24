<template>
  <div id="app">
    <div class="row">
      <div class="col-md-12">
        <result-bar></result-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-12">
        <router-view></router-view>
      </div>
      <div class="col-md-3 col-sm-12">
        <saved-results></saved-results>
      </div>
    </div>
  </div>
</template>

<script>
import SavedResults from './components/SavedResults'
import ResultBar from './components/ResultBar'
export default {
  name: 'app',
  components: {
    SavedResults,
    ResultBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
}
</style>
