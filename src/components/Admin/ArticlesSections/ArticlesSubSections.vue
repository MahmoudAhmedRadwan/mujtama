<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أقسام المقالات" description="أقسام فرعية" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteCourse" 
            messege="هل أنت متأكد من مسح القسم   ؟"
        />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                
            </div>
            <router-link :to="'/admin/articles-sub-sections/'+this.$route.params.id+'/add-articles-sub-sections'"> أضف قسم جديد </router-link>
        </header>
        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الأسم </th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="articlesSubSection in articlesSubSections" :key="articlesSubSection.id">
                        <td>{{articlesSubSection.translation[0].name}}</td>
                        <td>
                            <div class="actionsContainer">
                                <div class="options_container">
                                    <img src="../../../assets/images/selectIcon.png" alt="">
                                    <div class="hidden_options">
                                        <button @click="() => editArticleSubCategory(articlesSubSection.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                        <button @click="() => deleteData(articlesSubSection.id)"> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import Alert from '../../global/Alert/Alert';
import Request from '../../../services/Request';
import axios from 'axios';
export default {
    name: 'ArticlesSubSections',
    components: {HeaderBg, Alert},
    data(){
        return{
            articlesSubSections: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getArticlesSubSections();
        localStorage.removeItem('editArticleSubCategory')
    },
    methods:{
        getArticlesSubSections(){
            axios.get(`https://app.almujtama.com.sa/admin/magazineSubcategory`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                params:{
                    magazine_category_id : this.$route.params.id
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
        editArticleSubCategory(id){
            this.$router.push(`/admin/articles-sub-sections/${this.$route.params.id}/add-articles-sub-sections/${id}`)
            localStorage.setItem('editArticleSubCategory', 'edit')
        },
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteCourse(){
            Request.delete('admin/magazineSubcategory',this.deleteID)
            .then( () => {
                this.getArticlesSubSections();
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.actionsContainer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button{
        background-color: #78A28F;
        border: 10px;
        padding: 5px 20px;
        color: #FFF;
        border: 0;
        margin-left: 20px;
        border-radius: 10px;
    }
}
</style>