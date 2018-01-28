<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <kendo-calendar :value="new Date()"></kendo-calendar>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Hello Kendo UI for Vue.js'
            }
        }
    }
</script>