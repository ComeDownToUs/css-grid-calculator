<template>
  <div >
    <div v-for="result in results" class="results">
      <a href="#" class="result">
        {{result.date.toLocaleString('en-us', date_options)}}
        {{result.calculation.toString()}}
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import '../styles/grid.css'

export default {
  name: 'SavedResults',
  computed: mapGetters({
    results: 'fetchResults'
  }),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date_options: {
          weekday: "long", year: "numeric", month: "short",
          day: "numeric", hour: "2-digit", minute: "2-digit"
      }
    }
  }
}
</script>

<style>
  .results{
    text-align: left;
  }
  .result{
    color: #777;
    display: block;
    padding: 4px;
    border-bottom: 1px solid #999;
  }
</style>
