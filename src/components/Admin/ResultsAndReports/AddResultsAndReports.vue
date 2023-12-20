<template>
    <div>
        <HeaderBg title="النتائج و التقارير" />
        <div class="largForm">
            <div class="form_container">
                <form action="">
                    <div class="input_container">
                        <label>العنوان الرئيسي عربي :</label>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="input_container">
                        <label>العنوان الرئيسي انجليزي :</label>
                        <input type="text" placeholder="User Role">
                    </div>

                    <div>
                        <div class="upload_img">
                            <span>الصورة الرئيسية :</span>
                            <div class="img_container">
                                <img src="../../../assets/images/replaceImg.svg" alt="">
                                <div class="input_file">
                                    <img src="../../../assets/images/inputFile.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="input_container">
                            <label>عنوان الملف الاول عربي</label>
                            <input type="text" placeholder="Full Name">
                        </div>
                        <div class="input_container">
                            <label>عنوان الملف الاول اجليزي</label>
                            <input type="text" placeholder="Language">
                        </div>
                    </div>
                  
                </form>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'AddResultsAndReports',
    components: {HeaderBg},
}
</script>
<style lang="scss" scoped>
.upload_img{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    span{
        font-size: 16px;
        color: #656565;
        margin-left: 50px;
    }
    .img_container{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #FAFAFA;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .input_file{
            border-radius: 50%;
            background-color: #28C66F;
            width: 22px;
            height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 0;
            right: 0;
            img{
                width: 70%;
            }
        }
    }
}


</style> 