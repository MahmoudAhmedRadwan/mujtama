<template>
    <div class="loading flex_all_center">
            <b-spinner></b-spinner>
        </div>
</template>
<script>
export default {
    name : 'Spinner'
}
</script>
<style lang="scss" scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #DDD;
    
}
</style>