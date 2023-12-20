<template>
    <div>
        <HeaderBg :img="img" title="إدارة الفروع" />
        <div class="largForm">
            <div class="form_container">
                <form action="" @submit.prevent="addBranch">
                    <div class="upload_img">
                        <span>إرفاق صورة الفرع</span>
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
                        <label>كود الفرع:</label>
                        <input type="text" placeholder="Username" v-model="branch.code">
                    </div>
                    <div class="input_container">
                        <label>اسم الفرع :</label>
                        <input type="text" placeholder="User Role" v-model="branch.translation[0].name">
                    </div>
                    <div class="input_container">
                        <label>الاسم بالانجليزية :</label>
                        <input type="text" placeholder="Full Name" v-model="branch.translation[1].name">
                    </div>
                    <div class="input_container">
                        <label>العنوان:</label>
                        <input type="text" placeholder="Language" v-model="branch.address">
                    </div>
                    <div class="input_container">
                        <label>المدينة:</label>
                        <input type="text" placeholder="Language" v-model="branch.city">
                    </div>
                    <div class="input_container">
                        <label>الحي :</label>
                        <input type="text" placeholder="Company" v-model="branch.region">
                    </div>
                    <div class="input_container">
                        <label>رقم الجوال :</label>
                        <input type="text" placeholder="Company" v-model="branch.mobile">
                    </div>
                    <div class="input_container">
                        <label>رابط خرائط جوجل</label>
                         <input type="text" placeholder="google map" v-model="branch.google_map_url">
                    </div>
                    <div class="input_container">
                        <label> اوقات الدوام من : </label>
                         <b-time v-model="branch.time_from" locale="en"></b-time>
                    </div>
                    <div class="input_container">
                        <label>أوقات الدوام إلي</label>
                         <b-time v-model="branch.time_to" locale="en"></b-time>
                    </div>
                    <div class="checkBox_container">
                        <h3>خدمات الفرع</h3>
                        <div class="checkLine" v-for="singleServicesData in servicesData" :key="singleServicesData.id">
                            <!-- :checked="branch.services.find(singleServicesData.id)" -->
                            <input type="checkbox" :checked="branch.services.includes(singleServicesData.id)" :value="singleServicesData.id" :id="singleServicesData.id"  @change="() => handleCheckboxChange(singleServicesData.id)">
                            <label>{{ singleServicesData.translation[0].name }}</label>
                        </div>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                        <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                    </div>
                    <button class="saveBtn" v-if="postLoaded == false && pageType == 'add'">حفظ</button>
                    <button class="saveBtn" v-if="postLoaded == false && pageType == 'edit'">تعديل</button>
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
    name: 'AddBranch',
    components: {HeaderBg},
    data(){
        return{
            pageType: 'add',
            postLoaded: false,
            img: require('../../../assets/images/branches-main-logo.png'),
            branch: {
                services: [],
                image: '',
                active: '',
                translation: [
                    {
                        name: '',
                        local: 'ar'
                    },
                    {
                        name: '',
                        local: 'en'
                    }
                ],
                mobile: '',
                address: '',
                google_map_url: '',
                time_from: '',
                time_to: '',
                city: '',
                region: '',
                code: '',
                latitude: '',
                longitude: ''
            },
            imgUrl: '',
            servicesData: [],
            errors: [],
            ErrorCheck: false,
        }
    },
    mounted(){
        console.log(this.$route.params.id ,'test')
        if(this.$route.params.id == undefined ){
            this.pageType = 'add'
        } else{
            this.pageType = 'edit'
        }
        
        this.fetchData();
        this.getBranchData();
    },
    methods:{
        getBranchData(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/branch/${this.$route.params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                    .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.branch.imgUrl = response.data.data.image
                    this.branch.translation[0].name = response.data.data.translation[0].name
                    this.branch.translation[1].name = response.data.data.translation[1].name
                    this.branch.mobile = response.data.data.mobile
                    this.branch.time_from = response.data.data.time_from
                    this.branch.time_to = response.data.data.time_to
                    this.branch.city = response.data.data.city
                    this.branch.region = response.data.data.region
                    this.branch.code = response.data.data.code
                    this.branch.address = response.data.data.address
                    this.branch.google_map_url = response.data.data.google_map_url
                    response.data.data.services.map(data => {
                        this.branch.services.push(data.id)
                    })
                    
                    
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
        },
        addBranch(){
            this.postLoaded = true
            // this.error = {}
            console.log(this.branch.services[0])
            const formData = new FormData();
                if(this.$route.params.id !== undefined){
                    formData.append('_method', 'PUT');
                }
                for (let i = 0; i<this.branch.services.length; i++) {
                    formData.append(`services[${i}]`, this.branch.services[i]);
                }
                formData.append('image', this.branch.image);
                formData.append('active', 1);
                formData.append('translation[0][name]', this.branch.translation[0].name);
                formData.append('translation[0][local]', this.branch.translation[0].local);
                formData.append('translation[1][name]', this.branch.translation[1].name);
                formData.append('translation[1][local]', this.branch.translation[1].local);
                formData.append('mobile', this.branch.mobile);
                formData.append('time_from', this.branch.time_from.substring(0, 5));
                formData.append('time_to', this.branch.time_to.substring(0, 5));
                formData.append('city', this.branch.city);
                formData.append('region', this.branch.region);
                formData.append('code', this.branch.code);
                formData.append('address', this.branch.address);
                formData.append('google_map_url', this.branch.google_map_url);

            if(this.$route.params.id !== undefined){
                axios.post(`https://app.almujtama.com.sa/admin/branch/${this.$route.params.id}`, formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                this.$router.push('/admin/branches')
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
            } else{
                axios.post('https://app.almujtama.com.sa/admin/branch', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                this.$router.push('/admin/branches')
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
        typeArName(e, lang){
            if(e.target.value !== ''){
            this.branch.translation.push({
                name: e.target.value,
                local: lang
            })
            console.log(this.branch.translation)
        }
            
        },
        uploadBranchImg(e) {
            this.branch.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        },
        handleCheckboxChange(id) {
            console.log(id)
            this.branch.services.push(id)
            console.log(this.branch.services)
        },
        choseServices(e){
            console.log(e)
        },
        fetchData() {
        axios.get('https://app.almujtama.com.sa/admin/services', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        })
            .then((response) => {
            console.log(response)
            this.servicesData = response.data.data
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
    }
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

</style>