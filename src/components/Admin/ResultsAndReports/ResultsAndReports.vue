<template>
    <!-- Branches.vue -->
    <div>
        <HeaderBg title="النتائج و التقارير" />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <router-link to="/admin/results-and-reports/add-results-and-reports"> + إضافة نتائج تقارير </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="reportsResult in reportsResults" :key="reportsResult.id">
                        <td>{{reportsResult.translation[0].title}}</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
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
import axios from 'axios';
export default {
    name:'ResultsAndReports',
    components: {HeaderBg},
    data(){
        return{
            reportsResults: []
        }
    },
    mounted(){
        this.getResultsAndReports();
    },
    methods:{
        getResultsAndReports() {
            axios.get('https://app.almujtama.com.sa/admin/reportsResults', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response)
                this.reportsResults = response.data.data
                // this.loadingRequest = false;
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


</style>