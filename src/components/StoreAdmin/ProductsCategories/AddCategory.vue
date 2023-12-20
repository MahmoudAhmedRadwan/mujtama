<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أضف قسم" />

        <div class="form_container">
            <form @submit.prevent="addCategory">
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
                                        <input type="file" v-on="{ change: [uploadCategoryImg] }">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input_container mt-4">
                    <label>العنوان بالعربية:</label>
                    <input type="text" placeholder="Username" v-model="category.translation[0].name">
                </div>
                <div class="input_container">
                    <label>االعنوان بالانجليزية:</label>
                    <input type="text" placeholder="User Role" v-model="category.translation[1].name">
                </div>
                <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                    <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                </div>
                <button v-if="postLoaded == false">
                    {{this.$route.params.id !== undefined ? ' تعديل' : 'حفظ +' }}
                     </button>
                <button v-if="postLoaded == true"><b-spinner></b-spinner></button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'AddCategory',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            imgUrl: '',
            category: {
                image: '',
                active: 1,
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
        }
    },
    mounted(){
        this.getCategory();
    },
    methods:{
    addCategory(){
            this.postLoaded = true
            // this.error = {}
            const formData = new FormData();
            formData.append('image', this.category.image);
            formData.append('active', this.category.active);
            formData.append('translation[0][name]', this.category.translation[0].name);
            formData.append('translation[0][local]', this.category.translation[0].local);
            formData.append('translation[1][name]', this.category.translation[1].name);
            formData.append('translation[1][local]', this.category.translation[1].local);
            if(this.$route.params.id !== undefined){
                formData.append('_method', 'PUT');
                axios.post(`https://app.almujtama.com.sa/admin/category/${this.$route.params.id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/categories')
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
                axios.post('https://app.almujtama.com.sa/admin/category', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/categories')
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
        getCategory(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/category/${this.$route.params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                    .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.category._method = 'PUT'
                    this.imgUrl = response.data.data.image
                    this.category.translation[0].name = response.data.data.translation[0].name          
                    this.category.translation[1].name = response.data.data.translation[1].name          
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
        },
        uploadCategoryImg(e) {
            this.category.image = e.target.files[0];
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
    @media (max-width: 576px) {
        width: 100%;
    }
    .input_container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        @media (max-width: 576px) {
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        label{
            font-size: 16px;
            color: #656565;
            margin-left: 20px;
            width: 37%;
            @media (max-width: 576px) {
                width: 100%;
            }
        }
        input{
            border: 10px;
            padding: 5px 10px;
            border: 1px solid #C5C5C5;
            width: 80%;
            @media (max-width: 576px) {
                width: 100%;
            }
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