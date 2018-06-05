<template>
    <div class="calculation-row">
        <input type="text" v-bind:key="calc" v-model="calcString" autofocus>
        <span class="answer">= {{answer}}</span>
    </div>
</template>

<script>
export default {
    name: 'CalculationRow',
    props: {
        calculation: Object,
        calcString: String
    },
    computed: {
        answer: function() {
            return eval(this.calcString)
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