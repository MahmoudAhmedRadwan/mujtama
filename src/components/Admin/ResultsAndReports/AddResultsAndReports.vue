<template>
    <div>
        <HeaderBg title="النتائج و التقارير" />
        <div class="largForm">
            <div class="form_container">
                <div class="input_container">
                    <label>العنوان الرئيسي عربي :</label>
                    <input type="text" placeholder="Username" v-model="results.translation[0].title">
                </div>
                <div class="input_container">
                    <label>العنوان الرئيسي انجليزي :</label>
                    <input type="text" placeholder="User Role" v-model="results.translation[1].title">
                </div>
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
                                            <input type="file" v-on="{ change: [uploadResultsImg] }">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div class="multi_inputs" v-for="(result, index) in results.files" :key="index">
                    <div class="input_container">
                        <label>عنوان الملف عربي</label>
                        <input type="text" placeholder="Full Name" v-model="result.translation[0].title">
                    </div>
                    <div class="input_container">
                        <label>عنوان الملف انجليزي</label>
                        <input type="text" placeholder="Language" v-model="result.translation[1].title">
                    </div>
                    <div class="input_container">
                        <label> الملف</label>
                        <input type="file" placeholder="Language" @change="uploadFile(index, $event)">
                    </div>
                </div>
                <div class="addNew">
                    <button @click="addNew"> إضافة نتائج و تقارير إضافية </button>
                </div>

                <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                        <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                    </div>

                <div class="actions">
                    <button class="saveBtn" @click="addReportsResults" v-if="postLoaded == false && this.$route.params.id == undefined">حفظ</button>
                    <button class="saveBtn" @click="addReportsResults" v-if="postLoaded == false && this.$route.params.id !== undefined">تعديل</button>
                    <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button>
                </div>
                  
            </div>
            
            
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import axios from 'axios';
export default {
    name: 'AddResultsAndReports',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            imgUrl: '',
            results: {
                image: '',
                translation: [
                    {
                        title: '',
                        local: 'ar',
                    },
                    {
                        title: '',
                        local: 'en'
                    }
                ],
                files: [
                    {
                        file: '',
                        id: '',
                        translation: [
                            {
                                title: '',
                                local: 'ar',
                            },
                            {
                                title: '',
                                local: 'en'
                            }
                        ],
                    }
                ]
            },
            errors: [],
            ErrorCheck: false,
        }
    },
    mounted(){
        this.getReportsResults();
    },
    methods:{
        getReportsResults(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/reportsResults/${this.$route.params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                .then((response) => {
                    console.log(response, 'mmmmmm')
                    // this.results = response.data.data.image
                    this.results.translation[0].title = response.data.data.translation[0].title
                    this.results.translation[1].title = response.data.data.translation[1].title
                    this.imgUrl = response.data.data.image
                    response.data.data.files.map((data, index) => {
                        if(index == 0){
                            this.results.files[0].id = data.id;
                            this.results.files[0].translation[0].title = data.translation[0].title;
                            this.results.files[0].translation[1].title = data.translation[1].title;

                        } else if(index > 0){
                            this.results.files.push({
                                file: '',
                                id: data.id,
                                translation: [
                                    {
                                        title: data.translation[0].title,
                                        local: 'ar',
                                    },
                                    {
                                        title: data.translation[1].title,
                                        local: 'en'
                                    }
                                ],
                            })
                        }
                    })
                })
                .catch((error) => {
                console.error('Error fetching data from API:', error);
                });
            }
        },
        addReportsResults(){
            // this.postLoaded = true
            const formData = new FormData();
            if(this.$route.params.id !== undefined){
                formData.append('_method', 'PUT');
            }
            formData.append('image', this.results.image);
            formData.append('translation[0][title]', this.results.translation[0].title);
            formData.append('translation[0][locale]', this.results.translation[0].local);
            formData.append('translation[1][title]', this.results.translation[1].title);
            formData.append('translation[1][locale]', this.results.translation[1].local);

            for (let i = 0; i<this.results.files.length; i++) {
                formData.append(`attachments[${i}][file]`, this.results.files[i].file);
                formData.append(`attachments[${i}][id]`, this.results.files[i].id);
                formData.append(`attachments[${i}][translation][0][title]`, this.results.files[i].translation[0].title);
                formData.append(`attachments[${i}][translation][0][locale]`, this.results.files[i].translation[0].local);
                formData.append(`attachments[${i}][translation][1][title]`, this.results.files[i].translation[1].title);
                formData.append(`attachments[${i}][translation][1][locale]`, this.results.files[i].translation[1].local);
            }
            if(this.$route.params.id !== undefined){
                axios.post(`https://app.almujtama.com.sa/admin/reportsResults/${this.$route.params.id}`, formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                // this.$router.push('/admin/branches')
                    console.log(res)
                    // this.error = {}
                    this.postLoaded = false
                    this.$router.push('/admin/results-and-reports')
                })  
                .catch(err =>  {
                    console.log(err.response.data.errors)
                    this.errors = err.response.data.errors;
                    this.ErrorCheck = true;
                    this.postLoaded = false;
                    
                })
            } else {
                const formData = new FormData();
                formData.append('image', this.results.image);
                formData.append('translation[0][title]', this.results.translation[0].title);
                formData.append('translation[0][locale]', this.results.translation[0].local);
                formData.append('translation[1][title]', this.results.translation[1].title);
                formData.append('translation[1][locale]', this.results.translation[1].local);

                for (let i = 0; i<this.results.files.length; i++) {
                    formData.append(`attachments[${i}][file]`, this.results.files[i].file);
                    formData.append(`attachments[${i}][translation][0][title]`, this.results.files[i].translation[0].title);
                    formData.append(`attachments[${i}][translation][0][locale]`, this.results.files[i].translation[0].local);
                    formData.append(`attachments[${i}][translation][1][title]`, this.results.files[i].translation[1].title);
                    formData.append(`attachments[${i}][translation][1][locale]`, this.results.files[i].translation[1].local);
                }

                axios.post('https://app.almujtama.com.sa/admin/reportsResults', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                // this.$router.push('/admin/branches')
                    console.log(res)
                    // this.error = {}
                    this.postLoaded = false
                    this.$router.push('/admin/results-and-reports')
                })  
                .catch(err =>  {
                    console.log(err.response.data.errors)
                    this.errors = err.response.data.errors;
                    this.ErrorCheck = true;
                    this.postLoaded = false;
                    
                })
            }
            
        },


        addNew(){
            this.results.files.push({
                file: '',
                id: '',
                translation: [
                    {
                        title: '',
                        local: 'ar'
                    },
                    {
                        title: '',
                        local: 'en'
                    }
                ],
            })
        },
        uploadResultsImg(e) {
            this.results.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        },
        uploadFile(id, event){
        this.results.files.map((data, index) => {
            if(id == index){
            data.file = event.target.files[0];
            }
            // console.log(data, id, event, index)

                // console.log(event.target.files[0])
                // data[id].file = event.target.files[0];
            
        })
        
        },
    }
}
</script>
<style lang="scss" scoped>
.multi_inputs{
    border-bottom: 1px solid #DDD;
    margin-bottom: 40px;
    width: 90%;
}
.addNew button{
    background-color: #78A28F;
    border: 0;
    font-size: 16px;
    color: #FFF;
    padding: 10px 30px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin: 20px auto;
        display: block;
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