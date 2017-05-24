<template>
  <div >
    <div v-for="result in results" class="results">
      <a href="#" class="result">
        {{getDate(result.date)}}<br/>
        {{printSaved(result.calculation)}}
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import '../styles/grid.css'


import dateFormat from 'dateformat'

export default {
  name: 'SavedResults',
  computed: mapGetters({
    results: 'fetchResults'
  }),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getDate(aDate){
      return dateFormat(aDate, "ddd, mmm dS, h:MM:ss TT");
    },
    printSaved(calc){
      let output = ''

      for(let i=0; i<calc.length; i++){
        output=(output + calc[i])
        if(i!=0 && i%2==0){
          output= "("+output+") "
        }
      }
      output+='= '

      output+=this.getResult(calc)

      return output

    },
    getResult(portions){
      let result = parseFloat(portions[0])
      for(let index = 2; index < portions.length; index+=2){
        if(portions[index-1]=='+'){
          result += parseFloat(portions[index]);
        }else if(portions[index-1]=='-'){
          result -= parseFloat(portions[index]);
        }else if(portions[index-1]=='X'){
          result *= parseFloat(portions[index]);
        }else if(portions[index-1]=='/'){
          result /= parseFloat(portions[index]);
        }
      }
      return result
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
