
<template>
    <!-- EmploymentApplications.vue -->
    <div>
        <HeaderBg title="طلبات التوظيف" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteApp" 
            messege="هل أنت متأكد من مسح الطلب   ؟"
        />
        <header class="admin_content_header">
            <div class="filter">
                <select>
                    <option value="" selected disabled>المدينة</option>
                </select>
            </div>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <div></div>
            
        </header>
        
        <div class="option_show">
            <p>استقبال الطلبات</p>
            <label class="switch">
                <input type="checkbox" v-model="isChecked" @change="toggleForm">
                <div class="slider round"></div>
            </label>
        </div>
        <div class="formActions">
            <button class="saveBtn" @click="downloadExcel"> تصدير </button>
            <button class="selectAllBtn" @click="selectedAllFunction"> تحديد الكل </button>
            <button class="deleteBtn" @click="deleteData"> حذف <b-icon icon="trash-fill" aria-hidden="true"></b-icon></button>
        </div>
        <div>
            <b-alert variant="success" v-if="succesMessage == true" show> تم تغيير حالة استقبال الطلبات بنجاح </b-alert>
        </div>

        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> </th>
                        <th> رقم الطلب</th>
                        <th> الاسم</th>
                        <th> الهاتف</th>
                        <th> الوظيفة المطلوبة</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="application in applications" :key="application.id">
                        <td><input type="checkbox"  class="selectedAll" :value="application.id" v-model="checkAll" @change="(e) => getDeleteID(e)" checked></td>
                        <td>{{application.id}}</td>
                        <td>{{application.name}}</td>
                        <td>{{application.phone_number}}</td>
                        <td>{{application.job}}</td>
                        <td class="link_to">
                            <router-link :to="'/admin/employment-applications/job-details/'+application.id"> <img src="../../../assets/images/bin.png11.png" alt=""> معاينة </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
import Request from '../../../services/Request';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
import Alert from '../../global/Alert/Alert';
export default {
    name:'EmploymentApplications',
    components: {HeaderBg, RequestSpinner, Alert},
    data(){
        return{
            checkAll: [],
            isChecked: false,
            succesMessage: false,
            loadingRequest: true,
            applications: [],
            IdsToDelete: [],
            deleteID: [],
            alertToggle: false,
        }
    },
    mounted(){
        this.getApplications();
        this.getSettings();
    },
    methods:{
        selectedAllFunction(){
            const checkboxes = document.querySelectorAll('.selectedAll');

            // Loop through each checkbox and set 'checked' property to true
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
                this.IdsToDelete.push(checkbox.value)
            });
            console.log(this.IdsToDelete)
        },
         // delete data
        deleteData(){
            this.deleteID = this.IdsToDelete;
            this.alertToggle = true;
        },
        acceptedDeleteApp(){
            Request.deleteAll('admin/employmentRequest/bulkDelete',this.IdsToDelete)
            .then( () => {
                this.getApplications();
                this.IdsToDelete = []
            })
        },
        getDeleteID(e){
            
            if(this.IdsToDelete.includes(e.target.value)){
                const indexToRemove = this.IdsToDelete.indexOf(e.target.value);
                if (indexToRemove !== -1) {
                    // If found, remove it using splice
                    this.IdsToDelete.splice(indexToRemove, 1);
                    console.log(this.IdsToDelete)
                }
                } else{
                    this.IdsToDelete.push(e.target.value)
                    console.log(this.IdsToDelete)
                }
        },
        toggleForm(){
            console.log('Checkbox is checked:', this.isChecked);
            axios.post('https://app.almujtama.com.sa/admin/settings', {
                receive_employment_request : this.isChecked
            },
            {
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                }
            })
            .then(() => {
                this.succesMessage = true
                setTimeout(() => {
                    this.succesMessage = false
                }, 3000)
            })
        },
        downloadExcel(){
            window.open(`https://app.almujtama.com.sa/admin/employmentRequest/export?token=${localStorage.getItem('token')}`, '_blank');
        },
        getApplications() {
            axios.get('https://app.almujtama.com.sa/admin/employmentRequests', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data.data)
                this.applications = response.data.data
                this.loadingRequest = false;
            })
            .catch((err) => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
        getSettings() {
            axios.get('https://app.almujtama.com.sa/admin/settings', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data.data.receive_employment_request)
                this.isChecked = response.data.data.receive_employment_request
            })
            .catch((err) => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
    }
}
</script>
<style lang="scss" scoped>
.deleteBtn,
.selectAllBtn{
    border-radius: 10px;
    border: 0;
    font-size: 16px;
    color: #FFF;
    font-weight: 600;
    padding: 8px 0;
    background-color: #DA372E;
    margin-right: 30px;
    width: 100px;
    text-align: center;
}
.selectAllBtn{
    background-color: #78A28F;
}
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
.formActions{
    display: flex;
    align-items: center;
    .saveBtn{
        margin: 0;
    }
    
}
.option_show{
    display: flex;
    margin-bottom: 30px;
    p{
        margin-left: 20px;
    }
}
.link_to{
    a{
        font-size: 12px;
        color: #0000E0;
        font-weight: 600;
        
        img{
            width: 30px;
        }
    }
}

</style>