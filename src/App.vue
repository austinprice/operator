<template>
  <div id="app">
    <div class="type-area">
      <calculation-row v-for="calc in calculations"
                       v-bind:key="calc.order"
                       :calc="calc"
                       :calcString="calc.calc"
                       v-on:add-calculation="addNewCalculation"
                       v-on:delete-calculation="deleteCalculation"></calculation-row>
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
                calculations: [{calc: '', order: 1}],
                nextOrder: 2,
            }
        },
        methods: {
            addNewCalculation: function () {
                this.nextOrder = this.calculations.length + 1;

                this.calculations.push({
                    calc: '',
                    order: this.nextOrder
                });
                this.$nextTick(function() {
                    document.getElementById('calculation-input-' + this.nextOrder).focus()
                });
            },
            deleteCalculation: function (calc) {
                if(calc.order === this.calculations.length) {
                    this.calculations.pop();
                    this.nextOrder -= 1;
                }
                this.$nextTick(function() {
                    document.getElementById('calculation-input-' + this.nextOrder).focus()
                });
            }
        }
    }
</script>