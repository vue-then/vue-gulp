<template>
    <div class="index">{{ greeting }} <span></span>!</div>
</template>
 
<script>
    import Vue from 'vue';
 
    export default Vue.component('index', {
        data() {
            return {
                greeting: 'index'
            }
        }
    });
</script> 
 
<style lang="less">
    .index {
        color: red;
        
        span {
            color: blue;
        }
    }
</style>