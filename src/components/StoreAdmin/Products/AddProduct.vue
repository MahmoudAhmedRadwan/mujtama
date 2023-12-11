<template>
    <div>
        <HeaderBg :img="img" title="إضافه منتج" />
        <div class="content_container">
            <div class="form_container">
                <form action="" @submit.prevent="addBranch">
                    <div class="upload_img">
                        <span> صورة المنتج</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="" v-if="imgUrl == ''">
                            <img :src="imgUrl" alt="" v-if="imgUrl !== ''">
                            <div class="photo_upload">
                                <div class="upladImg">
                                    <div class="upload">
                                        <label for="">
                                            <img src="../../../assets/images/inputFile.svg" alt="">
                                            <input type="file" v-on="{ change: [uploadBranchImg] }">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input_container">
                        <label>اسم المنتج :</label>
                        <input type="text">
                    </div>
                    <div class="input_container">
                        <label>الحالة :</label>
                        <select>
                            <option value="">متوفر</option>
                            <option value="">غير متوفر</option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الرئيسي :</label>
                        <select>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الفرعي :</label>
                        <select>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>سعر المنتج:</label>
                        <input type="text">
                    </div>

                    <div class="input_container radio">
                        <label> النوع : </label>
                        <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                            <b-form-radio :aria-describedby="ariaDescribedby" name="activate_promo_code" :value="1">وصفي</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="activate_promo_code" :value="0">غير وصفي</b-form-radio>
                        </b-form-group>
                    </div>
              
                 
                    <!-- <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                        <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                    </div> -->
                    <button class="saveBtn">حفظ</button>
                    <!-- <button class="saveBtn" v-if="postLoaded == false && pageType == 'edit'">تعديل</button> -->
                    <!-- <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button> -->
                </form>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg';
export default {
    name : 'AddProduct',
    components: {HeaderBg},
       data(){
        return{
            postLoaded: false,
            img: require('../../../assets/images/products_headTitle.png'),
            imgUrl: '',
        }
    },
    methods:{
        uploadBranchImg(e) {
            this.branch.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        }, 
    }
}
</script>
<style lang="scss" scoped>
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
                img{
                    width: 100%;
                }
                .photo_upload{
                    
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
            input,
            select{
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
    }
}
.radio{
    justify-content: flex-start !important;
    div{
        display: flex;
    }
}
</style>