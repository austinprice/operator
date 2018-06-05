<template>
  <div id="app">
    <div class="type-area">
      <calculation-row v-for="calc in calculations" v-bind:key="calc.order" :calc="calc" :calcString="calc.calc" v-on:add-calculation="addNewCalculation"></calculation-row>
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
                calculations: [{calc: '2+2', order: 1}]
            }
        },
        methods: {
            addNewCalculation: function () {
                const nextOrder = this.calculations.length + 1;
                
                this.calculations.push({
                    calc: '',
                    order: nextOrder
                });
                if (this.calculations.length == nextOrder) {
                    console.log(document.getElementById('calculation-input-' + nextOrder));
                }
            }
        }
    }
</script>