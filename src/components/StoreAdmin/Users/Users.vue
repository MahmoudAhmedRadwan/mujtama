<template>
    <div>
        <HeaderBg :img="img" title="المستخدمين" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteUser" 
            messege="هل أنت متأكد من مسح المستخدم ؟"
        />
        <header class="admin_content_header">
            <div></div>
            <!-- <div class="filter">
                <select>
                    <option value="" selected disabled>المدينة</option>
                </select>
                <div class="tabs_filter">
                    <div class="active_tap">الكل</div>
                    <div>الأكثر شراء</div>
                    <div>النقاط</div>
                </div>
            </div>
            <div class="search">
                <input type="text" placeholder="البحث  ">
            </div> -->
            <router-link to="/store-admin/users/add-user"> + إضافة مستخدم </router-link>
            
        </header>
        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> رقم الجوال</th>
                        <th> البريد</th>
                        <th> الشراء</th>
                        <th> النقاط </th>
                        <th>اخر دخول</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td> {{user.name}} </td>
                        <td> {{user.mobile}} </td>
                        <td> {{user.email}} </td>
                        <td>24 ر.س</td>
                        <td class="blueColor">مشاهدة ......</td>
                        <td>2023-06-24</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button @click="() => editUser(user.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button @click="() => deleteData(user.id)"> <img src="../../../assets/images/delete-text.png" alt="" > حذف </button>
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
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import Alert from '../../global/Alert/Alert';
import Request from '../../../services/Request';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
export default {
    name: 'Users',
    components: {HeaderBg, Alert, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            img: require('../../../assets/images/GroupWhite.png'),
            users: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getUsers();
    },
    methods:{
        getUsers(){
            axios.get(`https://app.almujtama.com.sa/admin/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response, 'mmmmmm')
                this.users = response.data.data
                this.loadingRequest = false;
            })
            .catch(err => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
        editUser(id){
            this.$router.push(`/store-admin/users/add-user/${id}`)
        },
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteUser(){
            Request.delete('admin/user',this.deleteID)
            .then( () => {
                this.getUsers();
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.blueColor{
    color: #2081FF;
}
</style>