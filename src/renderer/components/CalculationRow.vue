<template>
    <div class="calculation-row">
        <input :id="'calculation-input-' + calc.order"
               type="text"
               placeholder="Type a calculation..."
               autofocus v-model="calc.calc"
               @keyup.up="$emit('switch-focused-row-up', calc)"
               @keyup.down="$emit('switch-focused-row-down', calc)"
               @keyup.enter="$emit('add-calculation')"
               @keyup.delete="$emit('delete-calculation', calc)"/>
        <span v-if="answer" class="answer">= {{answer}}</span>
    </div>
</template>

<script>
export default {
    name: 'CalculationRow',
    props: {
        calcString: String,
        calc: Object
    },
    computed: {
        answer: function() {
            let calc = this.calc.calc;
            if (calc.includes('a')) {
                this.calc.calc.replace('a', '');
            }
            if (calc.match(/[a-z]/)) {
                calc.replace(/[^a-z]/g, '+');
            }
            if (eval(this.calc.calc)) {
                return eval(this.calc.calc).toLocaleString({ minimumFractionDigits: 0 });
            }
        }
    }
}
</script>

<style lang="scss">
    @import 'src/scss/config/variables';
    .calculation-row {
        position: relative;
    }

    .answer {
        color: $grey-dark;
        float: right;
        font-size: 1rem;
        line-height: 1.35;
        position: absolute;
        text-align: right;
        top: 0rem;
        right: 0;
    }
</style>