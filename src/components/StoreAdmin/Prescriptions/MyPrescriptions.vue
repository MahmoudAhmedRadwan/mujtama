<template>
    <div>
        <HeaderBg :img="img" title="الوصفات الطبية" :links="links" />
        <!-- <header class="admin_content_header">
            <div class="filter">
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
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            
        </header> -->
        <RequestSpinner v-if="loadingRequest == true" />
        <div class="detailsTable" v-if="loadingRequest == false">
            <div class="table_header">
                <div class="block">
                    رقم الطلب
                </div>
                <div class="block">
                    العنوان
                </div>
                <div class="block">
                    الحالة
                </div>
                <div class="block">
                    معلومات الاتصال
                </div>
                <div class="block">
                    رقم الوصفة
                </div>
                <div class="block">

                </div>
            </div>
            <div class="table_row" v-for="(prescription, index) in prescriptions" :key="prescription.id">
                <div class="block">
                    <span>#{{prescription.prescription_no}}</span>
                </div>
                <div class="block">
                    <p>جدة,الروضة شارع الأمير سعود الفيصل</p>
                </div>
                <div class="block">
                    <h4>Processing</h4>
                    <h3>{{prescription.date}}</h3>
                </div>
                <div class="block">
                    <h5>{{prescription.user}}</h5>
                    <h3>{{prescription.mobile}}</h3>
                </div>
                <div class="block">
                    <h3>{{prescription.national_id}}</h3>
                </div>
                <div class="block">
                    <div class="print" @click="() => toggleCollapse(index)">
                        <img src="../../../assets/images/print.png" alt="">
                        <div class="detailsClick">
                            التفاصيل    
                        <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                        </div>
                    </div>
                </div>
                <div class="details_container" v-if="prescription.isCollapsed == true">
                    <div class="details_table">
                        <div class="table_header">
                            <div class="block">
                                رقم الهوية
                            </div>
                            <div class="block">
                                شركة التامين
                            </div>
                            <div class="block">
                                رقم الموافقة
                            </div>
                            <div class="block">
                                رقم العضوية
                            </div>
                            <div class="block">
                                تنزيل الوصفة
                            </div>
                        </div>

                        <div class="table_row">
                            <div class="block">
                                <span>21515</span>
                            </div>
                            <div class="block">
                                <p>يوبا</p>
                            </div>
                            <div class="block">
                                <p>213135</p>
                            </div>
                            <div class="block">
                                <p>#121515</p>
                            </div>
                            <div class="block">
                                <div class="print">
                                    <img src="../../../assets/images/download.png" alt="">
                                    <div class="detailsClick">
                                        تنزيل المرفقات
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
import Request from '../../../services/Request';
export default {
    name: 'MyPrescriptions',
    components: {HeaderBg, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            details: false,
            img: require('../../../assets/images/prescriptionLarg.png'),
            links: [
                {
                    to:"/store-admin/prescriptions/mine",
                    link: 'وصفاتي',
                    active: 'active'
                },
                {
                    to:"/store-admin/prescriptions/cash",
                    link: 'نقدا',
                },
                {
                    to:"/store-admin/prescriptions/insurance",
                    link: 'تأمين'
                }
            ],
            prescriptions: []
        }
    },
    mounted(){
        this.getPrescriptions();    
    },
    methods:{
        openDetails(){
            this.details = !this.details
        },
        getPrescriptions(){
            axios.get(`https://app.almujtama.com.sa/admin/prescriptions`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                params:{
                    type: 'mine'
                }
            })
            .then((response) => {
                console.log(response.data.data.data, 'mmmmmm')
                this.prescriptions = response.data.data.data.map(developer => {
                    return {
                        ...developer,
                        isCollapsed: false
                    };
                });
                this.loadingRequest = false;
            
            })
            .catch(err => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
        toggleCollapse(index) {
            this.prescriptions[index].isCollapsed = !this.prescriptions[index].isCollapsed;
        },
    }
}
</script>
<style lang="scss" scoped>
.table_header{
    background-color: #FFF;
    display: flex;
    margin-bottom: 20px;
    border-radius: 10px;
    .block{
        width: calc(100% / 6);
        text-align: center;
        padding: 15px 0;
        font-weight: 600;
    }
}
.table_row{
    flex-wrap: wrap;
}
.block{
    width: calc(100% / 6);
}
.details_container{
    width: 100%;
    padding: 10px 40px;
    .details_table{
        .table_header{
            .block{
                color: #1D4D90;
                font-weight: 900;
                font-family: flatMedium;
                width: calc(100% / 5) !important;        
            }
        }
    }
    .table_row{
        .block{
            width: calc(100% / 5) !important;
        }
    }
}
</style>