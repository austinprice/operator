<template>
  <div id="app">
    <div class="type-area">
      <calculation-row v-for="calc in calculations" v-bind:key="calc.id" :calcString="calc.calc"></calculation-row>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'public/scss/app.scss';
</style>

<script>
    import CalculationRow from './components/CalculationRow.vue'

    export default {
        name: 'app',
        components: {
            CalculationRow
        },
        data () {
            return {
                calculations: [{calc: '(4 / 2) + 3', answer: null}, {calc: '2 + 2', answer: null}]
            }
        }
    }
</script>