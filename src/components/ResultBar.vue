<template>
  <div class="current-sum">
  {{this.displayValue()}}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'ResultBar',
  computed: mapGetters({
    result: 'getCurrent'
  }),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getResult(){
      let result = parseFloat(this.result.portions[0])
      for(let index = 2; index < this.result.portions.length; index+=2){
        if(this.result.portions[index-1]=='+'){
          result += parseFloat(this.result.portions[index]);
        }else if(this.result.portions[index-1]=='-'){
          result -= parseFloat(this.result.portions[index]);
        }else if(this.result.portions[index-1]=='X'){
          result *= parseFloat(this.result.portions[index]);
        }else if(this.result.portions[index-1]=='/'){
          result /= parseFloat(this.result.portions[index]);
        }
      }
      return result
    },
    displayValue(){
      if(this.result.currentvalue === '='){
        return this.getResult()
      }else if(
        this.result.currentvalue === '+' ||
        this.result.currentvalue === '-' ||
        this.result.currentvalue === '/' ||
        this.result.currentvalue === 'X'){
        return (this.getResult() + "  " + this.result.currentvalue)
      }
      return this.result.currentvalue
    }
  }
}
</script>

<style>
  @font-face{
    font-family: calculatorFont;
    src: url('../styles/digital-7.ttf');
  }
  .current-sum{
    font-family: calculatorFont, Arial, sans-serif;
    font-size: 48px;
    width: 100%;
    padding: 0px 16px;
    text-align: right;
    background-color: #CCC;
    height: 64px;
  }
</style>
