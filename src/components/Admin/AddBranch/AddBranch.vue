<template>
    <div>
        <header>
            <h2>إدارة الفروع</h2>
        </header>
        <div class="content_container">
            <div class="form_container">
                <form action="">
                    <div class="upload_img">
                        <span>إرفاق صورة الفرع</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="">
                            <div class="input_file">
                                <img src="../../../assets/images/inputFile.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="input_container">
                        <label>كود الفرع:</label>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="input_container">
                        <label>اسم الفرع :</label>
                        <input type="text" placeholder="User Role">
                    </div>
                    <div class="input_container">
                        <label>الاسم بالانجليزية :</label>
                        <input type="text" placeholder="Full Name">
                    </div>
                    <div class="input_container">
                        <label>المدينة:</label>
                        <input type="text" placeholder="Language">
                    </div>
                    <div class="input_container">
                        <label>الحي :</label>
                        <input type="text" placeholder="Company">
                    </div>
                    <div class="input_container">
                        <label>رقم الجوال :</label>
                        <input type="text" placeholder="Company">
                    </div>
                    <div class="input_container">
                        <label>أوقات الدوام :</label>
                        <input type="text" placeholder="Company">
                    </div>
                    <div class="checkBox_container">
                        <h3>خدمات الفرع</h3>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>خدمة التطعيمات</label>
                        </div>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>صرف وصفات برنامج وصفتي</label>
                        </div>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>صرف وصفات خدمة ٩٣٧ تطبيق صحة</label>
                        </div>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>صرف وصفات التأمين الطبي للشركات المتعاقدة</label>
                        </div>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>الاستشارات الطبية ورصد المؤشرات الحيوية</label>
                        </div>
                        <div class="checkLine">
                            <input type="checkbox">
                            <label>اعرف ارقامك</label>
                        </div>
                    </div>
                </form>
            </div>
            
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddBranch'
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
                width: 10%;
            }
            input{
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
        }
        .checkBox_container{
            h3{
                font-size: 16px;
                color: #656565;
            }
            .checkLine{
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                margin-right: 20px;
                label{
                    font-size: 16px;
                    color: #656565;
                    white-space: nowrap;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>