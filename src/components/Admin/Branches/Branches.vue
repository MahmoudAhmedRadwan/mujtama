
<template>
    <!-- Branches.vue -->
    <div>
        <HeaderBg :img="img" title="إدارة الفروع" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteCourse" 
            messege="هل أنت متأكد من مسح الفرع   ؟"
        />
        <header class="admin_content_header">
            <div class="filter">
                <select>
                    <option value="" selected disabled>المدينة</option>
                </select>
            </div>
            <div class="search">
                <input type="text" placeholder="البحث بالإسم" v-model="branchName" @change="NameFilter">
            </div>
            <router-link to="/admin/add-branch"> + أضف فرع جديد </router-link>
            
        </header>

        <RequestSpinner v-if="loadingRequest == true" />

        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> رقم الفرع</th>
                        <th> أسم الفرع</th>
                        <th> الهاتف</th>
                        <th> المدينة</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="branche in branches" :key="branche.id">
                        <td>{{branche.code}}</td>
                        <td>{{branche.translation[0].name}}</td>
                        <td>{{branche.mobile}}</td>
                        <td>{{branche.city}}</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button @click="() => editBranch(branche.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button @click="() => deleteData(branche.id)"> <img src="../../../assets/images/delete-text.png" alt="" > حذف </button>
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
    name:'Branches',
    components: {HeaderBg, Alert, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            img: require('../../../assets/images/branches-main-logo.png'),
            branches: [],
            deleteID: '',
            alertToggle: false,
            branchName: '',
        }
    },
    mounted(){
        localStorage.removeItem('editBranch')
        this.getBranches();
        
    },
    methods:{
        getBranches() {
            axios.get('https://app.almujtama.com.sa/admin/branch', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                this.branches = response.data.data
                this.loadingRequest = false;
            })
            .catch((err) => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
        editBranch(id){
            this.$router.push(`/admin/add-branch/${id}`)
        },
         // delete data
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteCourse(){
            Request.delete('admin/branch',this.deleteID)
            .then( () => {
                this.getBranches();
            })
        },
        NameFilter(){
            Request.getFilteredData('admin/branch', {
                name: this.branchName
            })
            .then(res => {
                console.log(res)
                this.branches = res.data.data
            })
            // .catch(err => this.setErrorResponse(err))     
        },
        CityFilter(){
            Request.getFilteredData('admin/branch', {
                city: this.city
            })
            .then(res => {
                console.log(res)
                this.branches = res.data.data
            })
            // .catch(err => this.setErrorResponse(err))     
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
    }
}

</style>