<template>
    <div class="headerBg">
        <img :src="img" alt="">
        <h2>{{title}}</h2>
        <h3>{{description}}</h3>
        <div class="links">
            <router-link :class="link.active" v-for="(link, index) in links" :key="index" :to="link.to"> {{link.link}} </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderBg',
    props: ['img', 'title', 'description', 'links']
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
    .links{
        display: flex;
        justify-content: center;
        a{
            font-size: 18px;
            color: #FFF;
            border: 2px solid #D8D253;
            padding: 7px 40px;
            margin-left: 20px;
            border-radius: 10px;
        }
        a:last-child{
            margin-left: 0;
        }
    }
    .active{
        background-color: #D8D253;
    }
}

</style>