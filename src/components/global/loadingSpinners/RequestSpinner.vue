<template>
    <div class="requestSpinner">
        <b-spinner></b-spinner>
    </div>
</template>
<script>
export default {
    name : 'RequestSpinner'
}
</script>
<style lang="scss" scoped>
.requestSpinner{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 80px 0;
}
</style>