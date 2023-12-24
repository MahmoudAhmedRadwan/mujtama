
<template>
    <!-- EmploymentApplications.vue -->
    <div>
        <HeaderBg title="طلبات التوظيف" />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <div></div>
            
        </header>
        <div class="filter">
            <select>
                <option value="" selected disabled>المدينة</option>
            </select>
        </div>

        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> رقم الطلب</th>
                        <th> الاسم</th>
                        <th> الهاتف</th>
                        <th> الوظيفة المطلوبة</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="application in applications" :key="application.id">
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
export default {
    name:'EmploymentApplications',
    components: {HeaderBg, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            applications: []
        }
    },
    mounted(){
        this.getApplications();
    },
    methods:{
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