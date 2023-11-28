<template>
    <div>
        <HeaderBg title="النتائج و التقارير" />
        <div class="content_container">
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

                    <div class="upload_img">
                        <span> إرفاق الملف الاول :</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="">
                            <div class="input_file">
                                <img src="../../../assets/images/inputFile.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="input_container">
                        <label>عنوان الملف الثاني عربي</label>
                        <input type="text" placeholder="Language">
                    </div>
                    <div class="input_container">
                        <label>عنوان الملف الثاني اجليزي</label>
                        <input type="text" placeholder="Language">
                    </div>

                    <div class="upload_img">
                        <span> إرفاق الملف الثاني :</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="">
                            <div class="input_file">
                                <img src="../../../assets/images/inputFile.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="input_container">
                        <label>عنوان الملف الاول عربي</label>
                        <input type="text" placeholder="Language">
                    </div>
                    <div class="input_container">
                        <label>عنوان الملف الاول اجليزي</label>
                        <input type="text" placeholder="Language">
                    </div>

                    <div class="upload_img">
                        <span>إرفاق الملف الاول :</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="">
                            <div class="input_file">
                                <img src="../../../assets/images/inputFile.svg" alt="">
                            </div>
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
header{
    margin: 30px 0 42px 0;
    h2{
        font-size: 28px;
        color: #1E1E1E;
        font-family: flatMedium;
        font-weight: 800;
    }
}
.content_container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .form_container{
        width: 70%;
        background-color: #FFF;
        border-radius: 10px;
        padding: 30px 20px;
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
        .input_container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            label{
                font-size: 14px;
                white-space: nowrap;
                width: 17%;
            }
            input,
            textarea{
                background-color: #FFF;
                border-radius: 10px;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #C5C5C5;
                width: 90%;
                &::placeholder{
                    font-size: 14px;
                    color: #C5C5C5;
                }
            }
            textarea{
                width: 80%;
            }
        }
        .option_show{
            margin: 20px 0;
            p{
                font-size: 16px;
                color: #656565;
            }
        }
        .style_textarea_container{
            label{
                display: block;
                font-size: 14px;
                white-space: nowrap;
                margin-bottom: 20px;
            }
            textarea{
                background-color: #FFF;
                border-radius: 10px;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #C5C5C5;
                width: 90%;
            }
        }
    }
}

</style>