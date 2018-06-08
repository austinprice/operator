<template>
  <div id="app">
    <div class="type-area">
      <calculation-row v-for="calc in calculations"
                       v-bind:key="calc.order"
                       :calc="calc"
                       :calcString="calc.calc"
                       v-on:switch-focused-row-up="switchFocusedRowUp"
                       v-on:switch-focused-row-down="switchFocusedRowDown"
                       v-on:add-calculation="addNewCalculation"
                       v-on:delete-calculation="deleteCalculation"></calculation-row>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/app.scss';
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
                const calculationsLength = this.calculations.length;
                if (this.calculations[calculationsLength - 1].calc.length > 0) {
                    this.nextOrder = this.calculations.length + 1;

                    this.calculations.push({
                        calc: '',
                        order: this.nextOrder
                    });
                    this.$nextTick(function() {
                        document.getElementById('calculation-input-' + this.nextOrder).focus()
                    });
                } else {
                    document.getElementById('calculation-input-' + this.nextOrder).focus();
                }
            },
            deleteCalculation: function (calc) {
                if(calc.order === this.calculations.length && this.calculations.length > 1) {
                    if (calc.calc.length < 1) {
                        this.calculations.pop();
                        this.nextOrder -= 1;
                    }
                    this.$nextTick(function() {
                        document.getElementById('calculation-input-' + this.nextOrder).focus()
                    });
                }
            },
            switchFocusedRowUp: function (newRow) {
                const currentOrder = newRow.order;
                if (currentOrder > 1) {
                    const newOrder = currentOrder - 1;
                    document.getElementById('calculation-input-' + newOrder).focus();
                }
            },
            switchFocusedRowDown: function (newRow) {
                const currentOrder = newRow.order;
                const totalRows = this.calculations.length;
                if (currentOrder < totalRows) {
                    const newOrder = currentOrder + 1;
                    document.getElementById('calculation-input-' + newOrder).focus();
                }
            }
        }
    }
</script>