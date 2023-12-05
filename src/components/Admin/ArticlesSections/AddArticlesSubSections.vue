<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أضف قسم" />

        <div class="form_container">
            <form @submit.prevent="addArticlesSections">
                <div class="input_container">
                    <label>العنوان بالعربية:</label>
                    <input type="text" placeholder="Username" v-model="magazineSubCategory.translation[0].name">
                </div>
                <div class="input_container">
                    <label>االعنوان بالانجليزية:</label>
                    <input type="text" placeholder="User Role" v-model="magazineSubCategory.translation[1].name">
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
    name: 'AddArticlesSubSections',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            magazineSubCategory: {
                magazine_category_id: this.$route.params.id,
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
        this.type = localStorage.getItem('editArticleSubCategory') 
        this.getArticlesSections();
    },
    methods:{
    addArticlesSections(){
            this.postLoaded = true
            this.error = {}
            if(this.type == 'edit'){
                axios.post(`https://app.almujtama.com.sa/admin/magazineSubcategory/${this.$route.params.subID}`, this.magazineSubCategory, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push(`/admin/articles-sub-sections/${this.$route.params.id}`)
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
                axios.post('https://app.almujtama.com.sa/admin/magazineSubcategory', this.magazineSubCategory, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push(`/admin/articles-sub-sections/${this.$route.params.id}`)
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
        getArticlesSections(){
            if(this.type == 'edit'){
                axios.get(`https://app.almujtama.com.sa/admin/magazineSubcategory/${this.$route.params.subID}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Authorization': 'Bearer '+ localStorage.getItem('token'),
                    },
                })
                    .then((response) => {
                    console.log(response, 'mmmmmm')
                    this.magazineSubCategory._method = 'PUT'
                    this.magazineSubCategory.translation[0].name = response.data.data.translation[0].name          
                    this.magazineSubCategory.translation[1].name = response.data.data.translation[1].name          
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
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
</style>