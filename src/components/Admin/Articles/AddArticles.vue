<template>
    <div>
        <HeaderBg title="المقالات" />
        <div class="largForm">
            <div class="form_container">
                <form action="" @submit.prevent="addArticle">
                    <div class="upload_img">
                        <span>إرفاق صورة المقال</span>
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
                        <label>العنوان بالعربية</label>
                        <input type="text" placeholder="Username" v-model="article.translation[0].name">
                    </div>
                    <div class="input_container">
                        <label>العنوان بالانجليزية</label>
                        <input type="text" placeholder="User Role" v-model="article.translation[1].name">
                    </div>
                    <div class="input_container">
                        <label>القسم الرئيسى</label>
                        <select v-model="category_id" @change="getArticlesSubSections">
                            <option :value="articlesSection.id" v-for="articlesSection in articlesSections" :key="articlesSection.id">
                                {{articlesSection.translation[0].name}}
                            </option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الفرعي</label>
                        <select v-model="article.subcategory_id">
                            <option  :value="subCategory.id" v-for="subCategory in articlesSubSections" :key="subCategory.id"> {{subCategory.translation[0].name}} </option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>كلمات دلالية بالعربية<br> (اضغط Enter بعد كل كلمة)</label>
                        <textarea v-model="article.translation[0].tags"></textarea>
                    </div>
                    <div class="input_container">
                        <label>كلمات دلالية بالانجليزية<br> (اضغط Enter بعد كل كلمة)</label>
                        <textarea v-model="article.translation[1].tags"></textarea>
                    </div>
                    <div class="option_show">
                        <label class="switch">
                            <input type="checkbox" value="true">
                            <div class="slider round"></div>
                        </label>
                        <p>عرض المقال فى الموقع</p>
                    </div>
                    <div class="style_textarea_container">
                        <label> المحتوى بالعربية </label>
                        <textarea v-model="article.translation[0].description"></textarea>
                    </div>
                    <div class="style_textarea_container">
                        <label> المحتوى بالانجليزية </label>
                        <textarea v-model="article.translation[1].description"></textarea>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                        <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
                    </div>
                    <button class="saveBtn" v-if="postLoaded == false">حفظ</button>
                    <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button>
                </form>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'AddArticles',
    components: {HeaderBg},
    data(){
        return{
            postLoaded: false,
            category_id: '',
            article: {
                subcategory_id: '',
                image: '',
                active: '',
                translation: [
                    {
                        name: '',
                        description: '',
                        tags: '',
                        local: 'ar'
                    },
                    {
                        name: '',
                        description: '',
                        tags: '',
                        local: 'en'
                    }
                ],
            },
            imgUrl: '',
            errors: [],
            ErrorCheck: false,
            articlesSections: [],
            articlesSubSections: [],
            
        }
    },
    mounted(){
        this.getArticlesSections();
        this.getArticle();
    },
    methods:{
        getArticle(){
            if(this.$route.params.id !== undefined){
                axios.get(`https://app.almujtama.com.sa/admin/article/${this.$route.params.id}`, {
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
                    this.article.translation[0].name = response.data.data.translation[0].name          
                    this.article.translation[1].name = response.data.data.translation[1].name          
                    this.article.translation[0].description = response.data.data.translation[0].description          
                    this.article.translation[1].description = response.data.data.translation[1].description          
                    this.article.translation[0].tags = response.data.data.translation[0].tags          
                    this.article.translation[1].tags = response.data.data.translation[1].tags          
                    this.article.active = response.data.data.active
                    
                    this.category_id = response.data.data.category.id
                    this.getArticlesSubSections();
                    this.article.subcategory_id = response.data.data.subcategory.id
                    })
                    .catch((error) => {
                    console.error('Error fetching data from API:', error);
                    });
            }
        },
        getArticlesSections(){
            axios.get(`https://app.almujtama.com.sa/admin/magazineCategory`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response, 'mmmmmm')
                this.articlesSections = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
        addArticle(){
            this.postLoaded = true
            // this.error = {}
            const formData = new FormData();
                formData.append('image', this.article.image);
                formData.append('active', 1);
                formData.append('translation[0][name]', this.article.translation[0].name);
                formData.append('translation[0][local]', this.article.translation[0].local);
                formData.append('translation[1][name]', this.article.translation[1].name);
                formData.append('translation[1][local]', this.article.translation[1].local);
                formData.append('translation[0][description]', this.article.translation[0].description);
                formData.append('translation[1][description]', this.article.translation[0].description);
                formData.append('translation[0][tags]', this.article.translation[0].tags);
                formData.append('translation[1][tags]', this.article.translation[1].tags);
                formData.append('subcategory_id', this.article.subcategory_id);

                if(this.$route.params.id !== undefined){
                formData.append('_method', 'PUT');
                axios.post(`https://app.almujtama.com.sa/admin/article/${this.$route.params.id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                    this.$router.push('/admin/articles')
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
                axios.post(`https://app.almujtama.com.sa/admin/article`, formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                .then( res => {
                this.$router.push('/admin/articles')
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

        uploadBranchImg(e) {
            this.article.image = e.target.files[0];
            this.imgUrl = URL.createObjectURL(e.target.files[0]);
        },
        getArticlesSubSections(){
            axios.get(`https://app.almujtama.com.sa/admin/magazineSubcategory`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                }
            })
            .then((response) => {
                console.log(response, 'mmmmmm')
                this.articlesSubSections = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
    }
}
</script>
<style lang="scss" scoped>
.option_show{
            margin: 20px 0;
            p{
                font-size: 16px;
                color: #656565;
            }
        }
        .style_textarea_container{
            label{
                display: block;
                font-size: 14px;
                white-space: nowrap;
                margin-bottom: 20px;
            }
            textarea{
                background-color: #FFF;
                border-radius: 10px;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #C5C5C5;
                width: 90%;
                @media (max-width: 991px) {
                    width: 100%;
                }
            }
        }
</style>