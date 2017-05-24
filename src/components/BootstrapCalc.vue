<template>
  <div>
    <div class="row">
      <div class="col-sm-9">
        <div class="row">
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(7)" class="num seven">7</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(8)" class="num eight">8</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(9)" class="num nine">9</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(4)" class="num four">4</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(5)" class="num five">5</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(6)" class="num six">6</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(1)" class="num one">1</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(2)" class="num two">2</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(3)" class="num three">3</a>
          </div>
          <div class="col-xs-4">
            <a href='#' v-on:click.prevent="onClick(0)" class="num zero">0</a>
            <a href='#' v-on:click.prevent="onClick('.')" class="num decimal">.</a>
          </div>
          <div class="col-xs-8">
            <div class="row hidden-xs">
              <div class="col-sm-6">
              <a href='#' v-on:click.prevent="saveRes()"
                v-bind:class="'logg save '+((result.currentvalue === '=')?'':'disabled')"><span class="savetext">SAVE</span></a>
              </div>
              <div class="col-sm-6">
              <a href='#' v-on:click.prevent="cancelRes()" class="logg cancel"><span class="canceltext"></span></a>
              </div>
            </div>
            <div class="row visible-xs">
              <div class="col-xs-6">
                <a href='#' v-on:click.prevent="onClick('+')" class="opera add">+</a>
              </div>
              <div class="col-xs-6">
                <a href='#' v-on:click.prevent="onClick('-')" class="opera subtract">-</a>
              </div>
              <div class="col-xs-6">
                <a href='#' v-on:click.prevent="onClick('X')" class="opera multiply">X</a>
              </div>
              <div class="col-xs-6">
                <a href='#' v-on:click.prevent="onClick('/')" class="opera divide">/</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row  visible-xs">
          <div class="col-xs-12">
            <a href='#' v-on:click.prevent="onClick('=')" class="opera equals">=</a>
          </div>
          <div class="col-xs-6">
            <a href='#' v-on:click.prevent="saveRes()"
              v-bind:class="'logg save '+((result.currentvalue === '=')?'':'disabled')"><span class="savetext">SAVE</span></a>
          </div>
          <div class="col-xs-6">
            <a href='#' v-on:click.prevent="cancelRes()" class="logg cancel"><span class="canceltext"></span></a>
          </div>
        </div>
      </div>
      <div class="col-sm-3 hidden-xs">
        <div class="row">
          <div class="col-md-12">
            <a href='#' v-on:click.prevent="onClick('+')" class="opera add">+</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a href='#' v-on:click.prevent="onClick('-')" class="opera subtract">-</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a href='#' v-on:click.prevent="onClick('X')" class="opera multiply">X</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a href='#' v-on:click.prevent="onClick('/')" class="opera divide">/</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a href='#' v-on:click.prevent="onClick('=')" class="opera equals">=</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

//import '../styles/grid.css'

export default {
  name: 'hello',
  computed: mapGetters({
    result: 'getCurrent'
  }),
  methods: {
    ...mapActions([
      'updateCurrent',
      'saveResult',
      'cancelResult'
    ]),
    onClick(option){
      this.updateCurrent(option)
    },
    saveRes(){
      this.saveResult()
    },
    cancelRes(){
      this.cancelResult()
    }
  }
}
</script>

<style>
.opera, .logg, .num{
  display: block;
  width: 100%;
  background-color: #444;
  border: 1px solid #555;
  padding: 24px;
  color: white;
}

[class*="col-"]{
  padding-left: 0px;
  padding-right: 0px;
}
.row{
  margin-left:0px;
  margin-right:0px;
}
.logg.save.disabled{
  background-color: #999;
}
</style>

