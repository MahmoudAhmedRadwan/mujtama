<template>
    <div>
        <HeaderBg title="تفاصيل الوظيفة" :description="'طلب رقم ' + application.id" />
        <RequestSpinner v-if="loadingRequest == true" />

        <div class="job_details_section">
            <div class="job_details_container">
                <table width="100%">
                    <thead>
                    <tr>
                        <th> الوظيفة المطلوبة</th>
                        <th>كباتن توصيل الطلبات</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>الإسم</td>
                        <td>{{application.name}}</td>
                    </tr>
                    <tr>
                        <td>رقم جواز السفر / الهوية</td>
                        <td>{{application.id_number}}</td>
                    </tr>
                    <tr>
                        <td>تاريخ الإنتهاء</td>
                        <td>{{application.expiry_date}}</td>
                    </tr>
                    <tr>
                        <td>عدد الابناء</td>
                        <td>{{application.number_of_children}}</td>
                    </tr>
                    <tr>
                        <td>الحالة الاجتماعية</td>
                        <td>{{application.marital_status}}</td>
                    </tr>
                    <tr>
                        <td>العنوان</td>
                        <td>{{application.home_address}}</td>
                    </tr>
                    <tr>
                        <td>الهاتف</td>
                        <td>{{application.phone_number}}</td>
                    </tr>
                    <tr>
                        <td>البريد الالكتروني</td>
                        <td>{{application.email}}</td>
                    </tr>
                    <tr>
                        <td>الموْهل</td>
                        <td>{{application.scientific_qualifications}}</td>
                    </tr>
                    <tr>
                        <td>التخصص</td>
                        <td>{{application.specialization}}</td>
                    </tr>
                    <tr>
                        <td>المدرسة / المعهد / الجامعة</td>
                        <td>{{application.school_institute_university}}</td>
                    </tr>
                    <tr>
                        <td>سنة الحصول عليها</td>
                        <td>{{application.graduation_year}}</td>
                    </tr>
                    <tr>
                        <td>المعدل / التقدير</td>
                        <td>{{application.gpa}}</td>
                    </tr>
                    <tr>
                        <td>عدد الخبرات العملية</td>
                        <td>{{application.years_of_work}}</td>
                    </tr>
                    <tr>
                        <td>الوظائف</td>
                        <td>{{application.number_of_jobs_worked}}</td>
                    </tr>
                    <tr>
                        <td>الشركه</td>
                        <td>{{application.workplace}}</td>
                    </tr>
                    <tr>
                        <td>مكان العمل</td>
                        <td>{{application.workplace_country_city}}</td>
                    </tr>
                    <tr>
                        <td>المسمي الوظيفي</td>
                        <td>{{application.job_title}}</td>
                    </tr>
                    <tr>
                        <td>اسباب ترك العمل</td>
                        <td>{{application.leaving_work_reason}}</td>
                    </tr>
                    <tr>
                        <td>المهام الرئيسية : امن</td>
                        <td>{{application.main_tasks}}</td>
                    </tr>
                    <tr>
                        <td>اسم الدورة</td>
                        <td>{{application.course_name_1}}</td>
                    </tr>
                    <tr>
                        <td>الجهة القائمة عليها </td>
                        <td>{{application.course_name_1_party_of_charge}}</td>
                    </tr>
                    <tr>
                        <td>اسم الدورة</td>
                        <td>{{application.course_name_2}}</td>
                    </tr>
                    <tr>
                        <td>الجهة القائمة عليها</td>
                        <td>{{application.course_name_2_party_of_charge}}</td>
                    </tr>
                    <tr>
                        <td>هل تحمل شهادة التصنيف المهني من الهيئة السعودية للتخصصات الطبية ؟</td>
                        <td>{{application.have_scfhs_accreditation_certificate == 0 ? 'لا' : 'نعم'}}</td>
                    </tr>
                    <tr>
                        <td>هل تجيد قيادة السيارات ؟ </td>
                        <td>{{application.good_at_driving_cars == 0 ? 'لا' : 'نعم'}}</td>
                    </tr>
                    <tr>
                        <td>هل تحمل رخصة قيادة ؟ </td>
                        <td>{{application.have_driving_license == 0 ? 'لا' : 'نعم'}}</td>
                    </tr>
                    <tr>
                        <td>درجة إجادة اللغة الإنجليزية</td>
                        <td>
                            {{application.english_fluency_degree == 'excellent' ? 'ممتاز' : ''}}
                            {{application.english_fluency_degree == 'middle' ? 'متوسط' : ''}}
                            {{application.english_fluency_degree == 'weak' ? 'ضعيف' : ''}}
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg'
import Request from '../../../services/Request';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
export default {
    name: 'JobDetails',
    components: {HeaderBg, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            application: {}
        }
    },
    mounted(){
        this.getApplication();
    },
    methods:{
        getApplication() {
            axios.get(`https://app.almujtama.com.sa/admin/employmentRequests/${this.$route.params.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data.data)
                this.application = response.data.data
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
.job_details_section{
    box-shadow: 0px 10px 50px #21343014;
    border-radius: 10px;
    padding: 20px;
    background-color: #F8F8F8;
    width: 700px;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
    .job_details_container{
        background-color: #FFF;
        padding: 20px;
        border-radius: 10px;
    }
}

table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

table thead th {
  color: #78A28F;
  padding: 15px;
  border-bottom: 2px solid #ebebec;
  font-weight: 500;
}
table thead th:last-child{
    border-left: 0;
}

table tr {
  background: #ffffff;
}

table tr td {
    border-bottom: 2px solid #e6edf1;
    padding: 15px;
    color: #78A28F;
    font-weight: 600;
}


</style>