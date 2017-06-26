<template>
  <div>
    <div class="calculator">
      <a href='#' v-on:click.prevent="onClick('.')" class="number decimal">.</a>
      <a href='#' v-on:click.prevent="onClick(0)" class="number zero">0</a>
      <a href='#' v-on:click.prevent="onClick(1)" class="number one">1</a>
      <a href='#' v-on:click.prevent="onClick(2)" class="number two">2</a>
      <a href='#' v-on:click.prevent="onClick(3)" class="number three">3</a>
      <a href='#' v-on:click.prevent="onClick(4)" class="number four">4</a>
      <a href='#' v-on:click.prevent="onClick(5)" class="number five">5</a>
      <a href='#' v-on:click.prevent="onClick(6)" class="number six">6</a>
      <a href='#' v-on:click.prevent="onClick(7)" class="number seven">7</a>
      <a href='#' v-on:click.prevent="onClick(8)" class="number eight">8</a>
      <a href='#' v-on:click.prevent="onClick(9)" class="number nine">9</a>
      <a href='#' v-on:click.prevent="onClick('+')" class="operation add">+</a>
      <a href='#' v-on:click.prevent="onClick('-')" class="operation subtract">-</a>
      <a href='#' v-on:click.prevent="onClick('X')" class="operation multiply">X</a>
      <a href='#' v-on:click.prevent="onClick('/')" class="operation divide">/</a>
      <a href='#' v-on:click.prevent="onClick('=')" class="operation equals">=</a>
      <a href='#' v-on:click.prevent="saveRes()"
        v-bind:class="'log save '+((result.currentvalue === '=')?'':'disabled')"><span class="savetext">SAVE</span></a>
      <a href='#' v-on:click.prevent="cancelRes()" class="log cancel"><span class="canceltext"></span></a>
    </div>
    <div>

      <router-link
        v-bind:to="{name: 'BootstrapCalc'}"
        class="bootstrap-link"
        >
        Looking weird? If your browser doesn't support CSS Grid then try the Bootstrap version!
      </router-link>
    </div>
    <div class="status-grid">
      Status: {{status}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import '../styles/grid.css'

export default {
  name: 'hello',
  computed: mapGetters({
    result: 'getCurrent',
    status: 'getStatus'
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

