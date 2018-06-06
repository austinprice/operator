<template>
    <div class="calculation-row">
        <input :id="'calculation-input-' + calc.order"
               type="text"
               placeholder="Type a calculation..."
               autofocus v-model="calc.calc"
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
            if (eval(this.calc.calc)) {
                return eval(this.calc.calc);
            }
        }
    }
}
</script>

<style lang="scss">
    @import 'public/scss/config/variables';
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