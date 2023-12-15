<template>
    <div>
        <HeaderBg :img="img" title="المستخدمين" />
        <div class="content_container">
            <div class="form_container">
                <form action="" @submit.prevent="addUser">
                    <div class="upload_img">
                        <span> الصورة الرئيسية</span>
                        <div class="img_container">
                            <img src="../../../assets/images/replaceImg.svg" alt="" v-if="imgUrl == ''">
                            <img :src="imgUrl" alt="" v-if="imgUrl !== ''">
                            <div class="photo_upload">
                                <div class="upladImg">
                                    <div class="upload">
                                        <label for="">
                                            <img src="../../../assets/images/inputFile.svg" alt="">
                                            <input type="file" v-on="{ change: [uploadUserImg] }">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input_container">
                        <label>الاسم :</label>
                        <input type="text" v-model="user.name">
                    </div>
                    <div class="input_container" v-if="this.$route.params.id == undefined">
                        <label>الرقم السري :</label>
                        <input type="password" v-model="user.password">
                    </div>
                    <div class="input_container">
                        <label>نوع الحساب :</label>
                        <select v-model="user.role">
                            <option value="admin">مسئول</option>
                            <option value="customer">عميل</option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>رقم الجوال :</label>
                        <input type="text" v-model="user.mobile">
                    </div>
                    <div class="input_container">
                        <label>البريد الالكتروني :</label>
                        <input type="email" v-model="user.email">
                    </div>
                    <div class="input_container">
                        <label>تاريخ الميلاد :</label>
                        <b-form-datepicker id="example-datepicker" v-model="user.birth" class="mb-2"></b-form-datepicker>
                    </div>
                    <div class="input_container radio">
                        <label> الحالة : </label>
                        <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                            <b-form-radio v-model="user.active" :aria-describedby="ariaDescribedby" value="1">مفعل</b-form-radio>
                            <b-form-radio v-model="user.active" :aria-describedby="ariaDescribedby" value="0">غير مفعل</b-form-radio>
                        </b-form-group>
                    </div>
                    <div class="input_container radio">
                        <label> الجنس : </label>
                        <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                            <b-form-radio v-model="user.gender" :aria-describedby="ariaDescribedby" value="male">ذكر</b-form-radio>
                            <b-form-radio v-model="user.gender" :aria-describedby="ariaDescribedby" value="female">انثي</b-form-radio>
                        </b-form-group>
                    </div>
                    <div class="input_container">
                        <label>المدينة :</label>
                        <input type="text" v-model="user.city">
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
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import axios from 'axios';
export default {
    name : 'AddUsers',
    components: {HeaderBg},
       data(){
        return{
            postLoaded: false,
            img: require('../../../assets/images/GroupWhite.png'),
            imgUrl: '',
            user:{
                name: '',
                password: '',
                mobile: '',
                image: '',
                email: '',
                birth: '',
                role: '',
                gender: '',
                city: '',
                active: '',
            },
            errors: [],
            ErrorCheck: false,
        }
    },
    mounted(){
        this.getUser();
    },
    methods:{
        addUser(){
            this.postLoaded = true
            // this.error = {}
            const formData = new FormData();
            formData.append('image', this.user.image);
            formData.append('name', this.user.name);
            if(this.$route.params.id == undefined){
                formData.append('password', this.user.password);
            }
            formData.append('mobile', this.user.mobile);
            formData.append('email', this.user.email);
            formData.append('birth', this.user.birth);
            formData.append('gender', this.user.gender);
            formData.append('role', this.user.role);
            formData.append('city', this.user.city);
            formData.append('active', this.user.active);
            if(this.$route.params.id !== undefined){
                formData.append('_method', 'PUT');
                axios.post(`https://app.almujtama.com.sa/admin/user/${this.$route.params.id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/users')
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
                axios.post('https://app.almujtama.com.sa/admin/user', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/store-admin/users')
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
        getUser(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/user/${this.$route.params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                    .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.imgUrl = response.data.data.image   
                    this.user.name = response.data.data.name          
                    this.user.password = response.data.data.password          
                    this.user.mobile = response.data.data.mobile          
                    this.user.email = response.data.data.email          
                    this.user.birth = response.data.data.birth          
                    this.user.role = response.data.data.role          
                    this.user.gender = response.data.data.gender          
                    this.user.city = response.data.data.city          
                    this.user.active = response.data.data.active          
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
        },
        uploadUserImg(e) {
            this.user.image = e.target.files[0];
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