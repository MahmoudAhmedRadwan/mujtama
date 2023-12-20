<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أقسام المقالات" description="أقسام رئيسية" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteCourse" 
            messege="هل أنت متأكد من مسح القسم   ؟"
        />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                
            </div>
            <router-link to="/admin/articles-sections/add-articles-sections"> أضف قسم جديد </router-link>
        </header>
        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الأسم </th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="articlesSection in articlesSections" :key="articlesSection.id">
                        <td> {{articlesSection.translation[0].name}} </td>
                        <td>
                            <div class="actionsContainer">
                                <button @click="() => subSections(articlesSection.id)">أقسام فرعية</button>
                                <div class="options_container">
                                    <img src="../../../assets/images/selectIcon.png" alt="">
                                    <div class="hidden_options">
                                        <button @click="() => editBranch(articlesSection.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                        <button @click="() => deleteData(articlesSection.id)"> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
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
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
import axios from 'axios';
export default {
    name: 'ArticlesSections',
    components: {HeaderBg, Alert, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            articlesSections: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getArticlesSections();
    },
    methods:{
        subSections(id){
            this.$router.push(`/admin/articles-sub-sections/${id}`)
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
                this.articlesSections = response.data.data
                this.loadingRequest = false;
            })
            .catch(err => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }
            });
        },
        editBranch(id){
            this.$router.push(`/admin/articles-sections/add-articles-sections/${id}`)
        },
            // delete data
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteCourse(){
            Request.delete('admin/magazineCategory',this.deleteID)
            .then( () => {
                this.getArticlesSections();
            })
        },
    },
        
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