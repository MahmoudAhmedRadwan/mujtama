<template>
    <div class="headerBg">
        <img :src="img" alt="">
        <h2>{{title}}</h2>
        <h3>{{description}}</h3>
    </div>
</template>
<script>
export default {
    name: 'HeaderBg',
    props: ['img', 'title', 'description']
}
</script>
<style lang="scss" scoped>
.headerBg{
    background-color: #78A28F;
    text-align: center;
    padding: 50px;
    border-radius: 20px;
    margin: 20px 0;
    img{
        margin-bottom: 20px;
    }
    h2{
        font-size: 30px;
        font-weight: 800;
        color: #FFF;
        margin-bottom: 30px;
    }
    h3{
        font-size: 26px;
        color: #FFF;
    }
}
</style>