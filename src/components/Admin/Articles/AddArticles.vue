<template>
    <div>
        <HeaderBg title="المقالات" />
        <div class="content_container">
            <div class="form_container">
                <form action="" @submit.prevent="addArticle">
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
                        <label>العنوان بالعربية</label>
                        <input type="text" placeholder="Username" v-model="article.translation[0].name">
                    </div>
                    <div class="input_container">
                        <label>العنوان بالانجليزية</label>
                        <input type="text" placeholder="User Role" v-model="article.translation[1].name">
                    </div>
                    <div class="input_container">
                        <label>القسم الرئيسى</label>
                        <select v-model="article.subcategory_id">
                            <option :value="articlesSection.id" v-for="articlesSection in articlesSubSections" :key="articlesSection.id">
                                {{articlesSection.translation[0].name}}
                            </option>
                        </select>
                    </div>
                    <div class="input_container">
                        <label>القسم الفرعى</label>
                        <input type="text" placeholder="Language">
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
            articlesSubSections: []
        }
    },
    mounted(){
        this.getArticlesSubSections();
    },
    methods:{

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
                formData.append('subcategory_id', this.article.subcategory_id);
                

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
header{
    margin: 30px 0 42px 0;
    h2{
        font-size: 28px;
        color: #1E1E1E;
        font-family: flatMedium;
        font-weight: 800;
    }
}
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
            textarea{
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
            textarea{
                width: 80%;
            }
        }
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
            }
        }
    }
}

</style>