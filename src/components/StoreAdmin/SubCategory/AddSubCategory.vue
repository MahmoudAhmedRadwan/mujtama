<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أضف قسم" />

        <div class="form_container">
            <form @submit.prevent="addSubCategory">
                <div class="upload_img">
                    <span>إرفاق صورة القسم</span>
                    <div class="img_container">
                        <img src="../../../assets/images/replaceImg.svg" alt="" v-if="imgUrl == ''">
                        <img :src="imgUrl" alt="" v-if="imgUrl !== ''">
                        <div class="photo_upload">
                            <div class="upladImg">
                                <div class="upload">
                                    <label for="">
                                        <img src="../../../assets/images/inputFile.svg" alt="">
                                        <input type="file" v-on="{ change: [uploadSubCategoryImg] }">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input_container">
                    <label>العنوان بالعربية:</label>
                    <input type="text" placeholder="Username" v-model="subCategory.translation[0].name">
                </div>
                <div class="input_container">
                    <label>االعنوان بالانجليزية:</label>
                    <input type="text" placeholder="User Role" v-model="subCategory.translation[1].name">
                </div>
                <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                    <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                </div>
                <button v-if="postLoaded == false && this.type !== 'edit'">حفظ +</button>
                <button v-if="postLoaded == false && this.type == 'edit'">حفظ +</button>
                <button v-if="postLoaded == true"><b-spinner></b-spinner></button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'AddSubCategory',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            imgUrl: '',
            subCategory: {
                image: '',
                active: 1,
                category_id: this.$route.params.id,
                translation : [
                    {
                        name : "",
                        local : "ar"
                    },
                    {
                        name : "",
                        local : "en"
                    },
                ]
            },
            errors: [],
            ErrorCheck: false,
            type: 'add'
        }
    },
    mounted(){
        this.type = localStorage.getItem('editSubCategory') 
        this.getSubCategory();
    },
    methods:{
        addSubCategory(){
            this.postLoaded = true
            this.error = {}
            const formData = new FormData();
            formData.append('image', this.subCategory.image);
            formData.append('active', this.subCategory.active);
            formData.append('category_id', this.$route.params.id);
            formData.append('translation[0][name]', this.subCategory.translation[0].name);
            formData.append('translation[0][local]', this.subCategory.translation[0].local);
            formData.append('translation[1][name]', this.subCategory.translation[1].name);
            formData.append('translation[1][local]', this.subCategory.translation[1].local);
            if(this.type == 'edit'){
                formData.append('_method', 'PUT');
                axios.post(`https://app.almujtama.com.sa/admin/subcategory/${this.$route.params.subID}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push(`/store-admin/sub-category/${this.$route.params.id}`)
                    console.log(res)
                    // this.error = {}
                    this.postLoaded = false
                })  
                .catch(err =>  {
                    console.log(err.response.data.errors)
                    this.errors = err.response.data.errors;
                    this.ErrorCheck = true;
                    this.postLoaded = false;
                    
                })
            } else {
                axios.post('https://app.almujtama.com.sa/admin/subcategory', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push(`/store-admin/sub-category/${this.$route.params.id}`)
                    console.log(res)
                    // this.error = {}
                    this.postLoaded = false
                })  
                .catch(err =>  {
                    console.log(err.response.data.errors)
                    this.errors = err.response.data.errors;
                    this.ErrorCheck = true;
                    this.postLoaded = false;
                    
                })
            }
            
        },  
        getSubCategory(){
            if(this.type == 'edit'){
                axios.get(`https://app.almujtama.com.sa/admin/subcategory/${this.$route.params.subID}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.subCategory._method = 'PUT'
                    this.imgUrl = response.data.data.image
                    this.subCategory.translation[0].name = response.data.data.translation[0].name          
                    this.subCategory.translation[1].name = response.data.data.translation[1].name          
                })
                .catch((error) => {
                    console.error('Error fetching data from API:', error);
                });
            }
        },
        uploadSubCategoryImg(e) {
            this.subCategory.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        },
    },

    
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
</style>