<template>
    <div>
        <HeaderBg title="تعديل المؤشرات الرئيسية" />
        <div class="form_container">
            <form @submit.prevent="editIndicatorPerformance">
                <div class="input_container">
                    <label> الاسم باللغة العربية</label>
                    <input type="text" v-model="indicatorPerformance.translation[0].title">
                </div>
                <div class="input_container">
                    <label> الاسم باللغة الإنجليزية</label>
                    <input type="text" v-model="indicatorPerformance.translation[1].title">
                </div>
                <div class="input_container">
                    <label>الرقم</label>
                    <input type="text" v-model="indicatorPerformance.value">
                </div>
                <div class="input_container">
                    <label>الوصف باللغة العربية</label>
                    <input type="text" v-model="indicatorPerformance.translation[0].description">
                </div>
                <div class="input_container">
                    <label>الوصف باللغة الإنجليزية</label>
                    <input type="text" v-model="indicatorPerformance.translation[1].description">
                </div>
                <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                    <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                </div>
                <div class="action">
                    <button class="saveBtn" v-if="postLoaded == false">حفظ</button>
                    <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'EditIndicatorPerformance',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            indicatorPerformance: {
                translation: [
                    {
                        title: '',
                        description: '',
                        locale: 'ar'
                    },
                    {
                        title: '',
                        description: '',
                        locale: 'en'
                    }
                ],
                value: ''
            },
            category: '',
            errors: [],
            ErrorCheck: false,
        }
    },
    mounted(){
        this.getIndicatorPerformance();
    },
    methods:{
        getIndicatorPerformance(){
            axios.get(`https://app.almujtama.com.sa/admin/indicatorPerformance/${this.$route.params.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
                .then((response) => {
                console.log(response, 'mmmmmm')
                this.indicatorPerformance.translation[0].title = response.data.data.translations[0].title
                this.indicatorPerformance.translation[1].title = response.data.data.translations[1].title
                this.indicatorPerformance.value = response.data.data.value
                this.indicatorPerformance.translation[0].description = response.data.data.translations[0].description
                this.indicatorPerformance.translation[1].description = response.data.data.translations[1].description
                this.category = response.data.data.category
                })
                .catch((error) => {
                console.error('Error fetching data from API:', error);
                });
        },
        editIndicatorPerformance(){
            this.postLoaded = true
            axios.put(`https://app.almujtama.com.sa/admin/indicatorPerformance/${this.$route.params.id}`, this.indicatorPerformance, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then( res => {
                if(this.category == "key_metrics"){
                    this.$router.push('/admin/key-metrics')
                } else if(this.category == "kpis"){
                    this.$router.push('/admin/indicator-performance')
                }
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
    }
}
</script>
<style lang="scss" scoped>
.form_container{
    background-color: #FFF;
    border-radius: 10px;
    padding: 30px 30%;
    .input_container{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        label{
            font-size: 16px;
            color: #656565;
            margin-left: 10px;
            width: 100px;
        }
        input{
            padding: 5px 10px;
            border-radius: 10px;
            border: 1px solid #C5C5C5;
            width: calc(100% - 70px);
        }
    }
    button{
        margin: auto;
        display: block;
    }
}
</style>