
<template>
    <!-- EmploymentApplications.vue -->
    <div>
        <HeaderBg title="الموشرات الرئيسية" />

        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> الرقم</th>
                        <th> الوصف</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="indicatorPerformance in indicatorPerformances" :key="indicatorPerformance.id">
                        <td>{{indicatorPerformance.translations[0].title}}</td>
                        <td>{{indicatorPerformance.value}}</td>
                        <td>{{indicatorPerformance.translations[0].description}}</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button @click="() => editPerformance(indicatorPerformance.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
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
import HeaderBg from '../../global/HeaderBg/HeaderBg'
import Request from '../../../services/Request';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
export default {
    name:'IndicatorPerformance',
    components: {HeaderBg, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            indicatorPerformances: []
        }
    },
    mounted(){
        this.getPerformance();
    },
    methods:{
        editPerformance(id){
            this.$router.push(`/admin/indicator-performance/edit/${id}`)
            localStorage.setItem('type', 'IndicatorPerformance')
        },
        getPerformance() {
            axios.get('https://app.almujtama.com.sa/admin/indicatorPerformance', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                params:{
                    category: 'kpis'
                }
            })
            .then((response) => {
                console.log(response.data.data)
                this.indicatorPerformances = response.data.data
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
        color: #656565;
    }
}

</style>