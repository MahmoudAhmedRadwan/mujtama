<template>
    <!-- Branches.vue -->
    <div>
        <HeaderBg title="المقالات" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteCourse" 
            messege="هل أنت متأكد من مسح المقال   ؟"
        />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <router-link to="/admin/articles/add-articles"> + إضافة مقال </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> العنوان</th>
                        <th> القسم الرئيسى</th>
                        <th> القسم الفرعي</th>
                        <!-- <th> اضاف بواسطة</th> -->
                        <th> حالة الخبر</th>
                        <th> التعليقات</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="article in articles" :key="article.id">
                        <td>{{article.translation[0].name}}</td>
                        <td> {{article.category.name}} </td>
                        <td>{{article.subcategory.name}}</td>
                        <!-- <td>المكتب العلمي 2023-06-24 12:26:09</td> -->
                        <td> {{article.active ? 'مفعل' : 'غير مفعل'}} </td>
                        <td>مشاهدة ......</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button @click="() => editArticle(article.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button @click="() => deleteData(article.id)"> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
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
    name:'Articles',
    components: {HeaderBg, Alert},
    data(){
        return{
            articles: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getArticles();
    },
    methods:{
        editArticle(id){
            this.$router.push(`/admin/articles/add-articles/${id}`)
        },
        getArticles() {
        axios.get('https://app.almujtama.com.sa/admin/article', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        })
            .then((response) => {
            console.log(response)
            this.articles = response.data.data
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteCourse(){
            Request.delete('admin/article',this.deleteID)
            .then( () => {
                this.getArticles();
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.filter{
    select{
        background-color: #FFF;
        border: 0;
        width: 89px;
        text-align: center;
        font-size: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
}


</style>