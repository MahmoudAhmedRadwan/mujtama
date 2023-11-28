<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أضف قسم" />

        <div class="form_container">
            <form>
                <div class="input_container">
                    <label>العنوان بالعربية:</label>
                    <input type="text" placeholder="Username">
                </div>
                <div class="input_container">
                    <label>االعنوان بالانجليزية:</label>
                    <input type="text" placeholder="User Role">
                </div>
                <button>حفظ + </button>
            </form>
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'ArticlesSections',
    components: {HeaderBg}
}
</script>
<style lang="scss" scoped>
.form_container{
    width: 427px;
    background-color: #FFF;
    border-radius: 10px;
    margin: auto;
    padding: 100px 20px;
    margin-top: 150px;
    .input_container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        label{
            font-size: 16px;
            color: #656565;
            margin-left: 20px;
            width: 37%;
        }
        input{
            border: 10px;
            padding: 5px 10px;
            border: 1px solid #C5C5C5;
            width: 80%;
        }
    }
    button{
        display: block;
        width: 153px;
        margin: auto;
        text-align: center;
        background-color: #D8D253;
        border: 0;
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
    }
}
</style>