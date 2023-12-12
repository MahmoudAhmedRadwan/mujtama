<template>
    <div>
        <HeaderBg :img="img" title="إضافة مدينة" />

        <div class="form_container">
            <form>
                <div class="input_container">
                    <label>المدينة</label>
                    <input type="text">
                </div>
                <div class="input_container">
                    <label>سعر التوصيل</label>
                    <input type="text">
                </div>
                <button class="saveBtn">حفظ +</button>
            </form>
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg';
export default {
    name :'AddCity',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/locationLarg.png'),
        }
    }
}
</script>
<style lang="scss" scoped>
.form_container{
    background-color: #FFF;
    border-radius: 10px;
    margin: 40px auto;
    padding: 70px 100px;
    width: 482px;
    form{
        > div{
            label{
                display: block;
                text-align: center;
                font-size: 16px;
                color: #717171;
                font-weight: 600;
                margin-bottom: 10px;
            }
            input{
                border: 1px solid #71717191;
                font-size: 16px;
                padding: 5px 10px;
                border-radius: 10px;
                display: block;
                margin: auto;
                width: 100%;
            }
        }
        button{
            margin: 30px auto 0 auto;   
        }
    }
}
</style>