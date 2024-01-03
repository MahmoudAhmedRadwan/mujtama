<template>
    <div>
        <HeaderBg :img="img" title="إضافه منتج" />
        <div class="content_container">
            <div class="form_container">
                <form action="" @submit.prevent="addProduct">
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
                                            <input type="file" v-on="{ change: [uploadProductImg] }">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input_container">
                        <label> اسم المنتج باللغة العربية : </label>
                        <input type="text" v-model="product.translation[0].name">
                    </div>
                    <div class="input_container">
                        <label> اسم المنتج باللغة الإنجليزية : </label>
                        <input type="text" v-model="product.translation[1].name">
                    </div>
                    <div class="input_container">
                        <label>الحالة :</label>
                        <select v-model="product.active">
                            <option value="1">متوفر</option>
                            <option value="0">غير متوفر</option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الرئيسي :</label>
                        <select v-model="category_id" @change="getSubCategory">
                            <option  :value="category.id" v-for="category in categories" :key="category.id"> {{category.translation[0].name}} </option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الفرعي :</label>
                        <select v-model="product.subcategory_id">
                            <option  :value="subCategory.id" v-for="subCategory in subCategories" :key="subCategory.id"> {{subCategory.translation[0].name}} </option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>سعر المنتج:</label>
                        <input type="text" v-model="product.price">
                    </div>

                    <div class="input_container radio">
                        <label> النوع : </label>
                        <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                            <b-form-radio :aria-describedby="ariaDescribedby" v-model="product.wasfy" name="activate_promo_code" :value="1">وصفي</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" v-model="product.wasfy" name="activate_promo_code" :value="0">غير وصفي</b-form-radio>
                        </b-form-group>
                    </div>
              
                 
                    <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                        <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                    </div>
                   <button class="saveBtn" v-if="postLoaded == false">
                        {{this.$route.params.id !== undefined ? ' تعديل' : 'حفظ +' }}
                    </button>
                    <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button>
                </form>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
export default {
    name : 'AddProduct',
    components: {HeaderBg},
       data(){
        return{
            postLoaded: false,
            img: require('../../../assets/images/products_headTitle.png'),
            imgUrl: '',
            category_id: '',
            product: {
                image: '',
                active: 1,
                subcategory_id: '',
                price: '',
                wasfy: '',
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
            categories: [],
            subCategories: []
        }
    },
    mounted(){
        this.getCategories();
        this.getProduct();
    },
    methods:{
        addProduct(){
            this.postLoaded = true
            // this.error = {}
            const formData = new FormData();
            formData.append('image', this.product.image);
            formData.append('active', this.product.active);
            formData.append('price', this.product.price);
            formData.append('wasfy', this.product.wasfy);
            formData.append('subcategory_id', this.product.subcategory_id);
            formData.append('translation[0][name]', this.product.translation[0].name);
            formData.append('translation[0][local]', this.product.translation[0].local);
            formData.append('translation[1][name]', this.product.translation[1].name);
            formData.append('translation[1][local]', this.product.translation[1].local);
            if(this.$route.params.id !== undefined){
                formData.append('_method', 'PUT');
                axios.post(`https://app.almujtama.com.sa/admin/product/${this.$route.params.id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/products')
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
                axios.post('https://app.almujtama.com.sa/admin/product', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/products')
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
         getProduct(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/product/${this.$route.params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                    .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.product.translation[0].name = response.data.data.translation[0].name          
                    this.product.translation[1].name = response.data.data.translation[1].name          
                    this.product.active = response.data.data.active
                    this.product.subcategory_id = response.data.data.subcategory_id
                    this.product.price = response.data.data.price
                    this.product.wasfy = response.data.data.wasfy
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
        },
        uploadProductImg(e) {
            this.product.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        }, 
        getCategories(){
            axios.get(`https://app.almujtama.com.sa/admin/category`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data.data, 'getCategories')
                this.categories = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
        getSubCategory(){
            axios.get(`https://app.almujtama.com.sa/admin/subcategory`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                params:{
                    category_id : this.category_id
                }
            })
            .then((response) => {
                console.log(response, 'sub')
                this.subCategories = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
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
        width: 90%;
        background-color: #FFF;
        border-radius: 10px;
        padding: 30px 20px;
        @media (max-width: 1400px) {
            width: 100%;
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
        .input_container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
            label{
                font-size: 14px;
                white-space: nowrap;
                width: 10%;
                @media (max-width: 768px) {
                    width: 100%;
                }
            }
            input,
            select{
                background-color: #FFF;
                border-radius: 10px;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #C5C5C5;
                width: 80%;
                @media (max-width: 1200px) {
                    width: 70%;
                }
                @media (max-width: 768px) {
                    width: 100%;
                }
                &::placeholder{
                    font-size: 14px;
                    color: #C5C5C5;
                }
            }
        }
    }
    .saveBtn{
        margin: auto;
        display: block;
    }
}

.radio{
    justify-content: flex-start !important;
    div{
        display: flex;
    }
}
</style>