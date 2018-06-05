<template>
    <div class="calculation-row">
        <textarea rows="2" v-bind:key="calc" v-model="calcString" autofocus></textarea>
        {{answer}}
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