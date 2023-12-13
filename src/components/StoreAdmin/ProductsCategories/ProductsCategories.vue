<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أقسام المنتجات" description="أقسام رئيسية" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteCourse" 
            messege="هل أنت متأكد من مسح القسم   ؟"
        />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                
            </div>
            <router-link to="/store-admin/categories/add-category"> أضف قسم جديد </router-link>
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
                    <tr v-for="category in categories" :key="category.id">
                        <td> {{category.translation.length > 0 ? category.translation[0].name : ''}} </td>
                        <td>
                            <div class="actionsContainer">
                                <button @click="() => subSections(category.id)">أقسام فرعية</button>
                                <div class="options_container">
                                    <img src="../../../assets/images/selectIcon.png" alt="">
                                    <div class="hidden_options">
                                        <button @click="() => editBranch(category.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                        <button @click="() => deleteData(category.id)"> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
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
    name: 'ProductsCategories',
    components: {HeaderBg, Alert},
    data(){
        return{
            categories: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getCategories();
    },
    methods:{
        subSections(id){
            this.$router.push(`/store-admin/sub-category/${id}`)
        },
        getCategories(){
            axios.get(`https://app.almujtama.com.sa/admin/category`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response, 'mmmmmm')
                this.categories = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
        editBranch(id){
            this.$router.push(`/store-admin/categories/add-category/${id}`)
        },
            // delete data
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteCourse(){
            Request.delete('admin/category',this.deleteID)
            .then( () => {
                this.getCategories();
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