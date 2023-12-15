<template>
  <div>
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>الوظائف</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">الرئيسية</router-link>
              <span>>></span>
              <h3>الوظائف</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <div class="form_container">
      <div class="container">
        <div class="form">
          <h3>نموذج طلب التوظيف</h3>
          <div class="line"></div>

          <form @submit.prevent="send">
            <div class="input_container">
              <label>
                الوظيفة المطلوبة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.job" />
            </div>
            <div class="input_container">
              <label>الاسم (حسب جواز السفر)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.name" />
            </div>
            <div class="input_container">
              <label>تاريخ الميلاد
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-datepicker v-model="form.birth_date" class="mb-2"></b-form-datepicker>
            </div>
            <div class="input_container">
              <label>محل الاقامة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا"  v-model="form.residence"/>
            </div>
            <div class="input_container">
              <label>رقم الهوية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.id_number" />
            </div>
            <div class="input_container">
              <label>الجنسية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا"  v-model="form.nationality"/>
            </div>
            <div class="input_container">
              <label>تاريخ الانتهاء
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-datepicker v-model="form.expiry_date" class="mb-2"></b-form-datepicker>
            </div>
            <div class="input_container">
              <label>الديانة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.religion" value="muslim">مسلم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.religion" value="other">غير دلك</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>الحالة الاجتماعية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.marital_status" value="single">أعزب</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.marital_status" value="married">متزوج</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>عدد الابناء
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="number" placeholder="اكتب هنا" v-model="form.number_of_children"/>
            </div>
            <div class="input_container">
              <label>عنوان السكن
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا"  v-model="form.home_address"/>
            </div>
            <div class="input_container">
              <label>رقم الهاتف
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.phone_number" />
            </div>
            <div class="input_container">
              <label>التخصص
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا"  v-model="form.specialization"/>
            </div>
            <div class="input_container">
              <label>البريد الالكتروني
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.email"/>
            </div>
            <div class="input_container">
              <label>المؤهلات العلمية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="bachelor" value="bachelor">بكالوريوس</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="diploma" value="diploma">دبلوم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="master" value="master">ماجستير</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="phd" value="phd">دكتوراة</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>المدرسة/المعهد/الجامعة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.school_institute_university"/>
            </div>
            <div class="input_container">
              <label>سنة الحصول عليها
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.graduation_year" />
            </div>
            <div class="input_container">
              <label>المعدل/التقدير
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" v-model="form.gpa" />
            </div>

            <div class="input_container w100">
              <label>عدد الخبرات العملية: ( عدد الوظائف التي عملت بها):
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="1">وظيفة</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="2">وظيفتان</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="3">ثلاث وظائف</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="4">اربع وظائف</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <input type="text" placeholder="مكان العمل" v-model="form.workplace"/>
            </div>
            <div class="input_container">
              <input type="text" placeholder="المدينة التي بها العمل" v-model="form.workplace_country_city" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="المسمى الوظيفي" v-model="form.job_title" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="عدد سنوات العمل" v-model="form.years_of_work" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="أسباب ترك العمل" v-model="form.leaving_work_reason" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="متطلبات الوظيفة" v-model="form.main_tasks" />
            </div>
            <div class="right_title">
              <h4>الدورات التدريبية</h4>
            </div>
            <div class="input_container">
              <input type="text" placeholder="اسم الدورة 1" v-model="form.course_name_1" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="الجهة القائمة عليها" v-model="form.course_name_1_party_of_charge" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="اسم الدورة 2" v-model="form.course_name_2" />
            </div>
            
            <div class="input_container">
              <input type="text" placeholder="الجهة القائمة عليها" v-model="form.course_name_2_party_of_charge" />
            </div>

            <div class="input_container">
              <label
                >هل قدمت أوراقك (شهادة التخرج وشهادة الخبرة) للحصول على شهادة
                الداتافلو Did you upload your documents (University Certificate
                and Experience Certificate) for Dataflow verification ؟ (For
                Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon></label
              >
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.dataflow_verification_documents_uploaded" :value="1">نعم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.dataflow_verification_documents_uploaded" :value="0">لا</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label
                >هل تقدمت لإختبار البرومترك (بيرسون فيو) Did you admit to
                Prometric (Pearson VUE) exam؟ (For Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon></label
              >
               <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.admit_to_prometric_pearson_vue_exam" :value="1">نعم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.admit_to_prometric_pearson_vue_exam" :value="0">لا</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label
                >هل تحمل شهادة التصنيف المهني من الهيئة السعودية للتخصصات الصحية
                Do you have the SCFHS Accreditation Certificate ؟ (For
                Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label
              >
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_scfhs_accreditation_certificate" :value="1">نعم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_scfhs_accreditation_certificate" :value="0">لا</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>هل تحمل رخصة قيادة ؟
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_driving_license" :value="1">نعم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_driving_license" :value="0">لا</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>هل تجيد قيادة السيارات ؟
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.good_at_driving_cars" :value="1">نعم</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.good_at_driving_cars" :value="0">لا</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>درجة اجادة اللغة الانجليزية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="excellent">ممتاز</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="middle">متوسط</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="weak">ضعيف</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>ارفاق صورة الهوية او جواز السفر
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" @change="handleFileUpload_id_number($event)" />
            </div>
            <div class="input_container">
              <label>ارفاق السيرة الذاتية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_cv($event)" />
            </div>
            <div class="input_container">
              <label>ارفاق شهادة البكالوريوس
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_bachelor_degree_certificate($event)" />
            </div>
            <div class="input_container">
              <label>ارفق كارنية نقابة الصيادلة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_pharmacists_union_membership_card($event)" />
            </div>
            <div class="input_container">
              <label>ارفاق ترخيص مزاولة المهنة بوزارة الصحة بدولتك
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_license_to_practice_profession_in_your_country($event)" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 1
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_1($event)" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 2
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_2($event)" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 3
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_3($event)" />
            </div>
            <div class="input_container">
              <label>ارفاق صورة بيان الدرجات
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_transcript($event)" />
            </div>
            <div class="input_container">
              <label
                >ارفق صورة من ترخيص مزاولة المهنة في المملكة العربية
                السعودية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_license_to_practice_profession_in_ksa($event)" />
            </div>

            <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
            </div>
            <div class="action">
              <button v-if="postLoaded == false">
                  {{this.$route.params.id !== undefined ? ' تعديل' : 'إرسال +' }}
              </button>
              <button class="saveBtn" v-if="postLoaded == true"><b-spinner></b-spinner></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Form",
  data(){
    return{
      postLoaded: false,
      form: {
        job: '',
        name: '',
        birth_date: '',
        residence: '',
        id_number: '',
        nationality: '',
        expiry_date: '',
        religion: '',
        marital_status: '',
        number_of_children: '',
        home_address: '',
        phone_number: '',
        specialization: '',
        email: '',
        scientific_qualifications: '',
        school_institute_university: '',
        graduation_year: '',
        gpa: '',
        number_of_jobs_worked: 0,
        workplace: '',
        workplace_country_city: '',
        job_title: '',
        years_of_work: '',
        leaving_work_reason: '',
        main_tasks: '',
        course_name_1: '',
        course_name_1_party_of_charge: '',
        course_name_2: '',
        course_name_2_party_of_charge: '',
        dataflow_verification_documents_uploaded: 0,
        admit_to_prometric_pearson_vue_exam: 0,
        have_scfhs_accreditation_certificate: 0,
        have_driving_license: 0,
        good_at_driving_cars: 0,
        english_fluency_degree: '',
        file_cv: '',
        file_id_number: '',
        file_license_to_practice_profession_in_your_country: '',
        file_experience_certificate_1: '',
        file_experience_certificate_2: '',
        file_experience_certificate_3: '',
        file_bachelor_degree_certificate: '',
        file_license_to_practice_profession_in_ksa: '',
        file_pharmacists_union_membership_card: '',
        file_transcript: '',
      },
      errors: [],
      ErrorCheck: false,
    }
  },
  methods:{
    send(){
      this.postLoaded = true
      // this.error = {}
      const formData = new FormData();
      formData.append('job', this.form.job);
      formData.append('name', this.form.name);
      formData.append('birth_date', this.form.birth_date);
      formData.append('residence', this.form.residence);
      formData.append('id_number', this.form.id_number);
      formData.append('nationality', this.form.nationality);
      formData.append('expiry_date', this.form.expiry_date);
      formData.append('religion', this.form.religion);
      formData.append('marital_status', this.form.marital_status);
      formData.append('number_of_children', this.form.number_of_children);
      formData.append('home_address', this.form.home_address);
      formData.append('phone_number', this.form.phone_number);
      formData.append('specialization', this.form.specialization);
      formData.append('email', this.form.email);
      formData.append('scientific_qualifications', this.form.scientific_qualifications);
      formData.append('school_institute_university', this.form.school_institute_university);
      formData.append('graduation_year', this.form.graduation_year);
      formData.append('gpa', this.form.gpa);
      formData.append('number_of_jobs_worked', this.form.number_of_jobs_worked);
      formData.append('workplace', this.form.workplace);
      formData.append('workplace_country_city', this.form.workplace_country_city);
      formData.append('job_title', this.form.job_title);
      formData.append('years_of_work', this.form.years_of_work);
      formData.append('leaving_work_reason', this.form.leaving_work_reason);
      formData.append('main_tasks', this.form.main_tasks);
      formData.append('course_name_1', this.form.course_name_1);
      formData.append('course_name_1_party_of_charge', this.form.course_name_1_party_of_charge);
      formData.append('course_name_2', this.form.course_name_2);
      formData.append('course_name_2_party_of_charge', this.form.course_name_2_party_of_charge);
      formData.append('dataflow_verification_documents_uploaded', this.form.dataflow_verification_documents_uploaded);
      formData.append('admit_to_prometric_pearson_vue_exam', this.form.admit_to_prometric_pearson_vue_exam);
      formData.append('have_scfhs_accreditation_certificate', this.form.have_scfhs_accreditation_certificate);
      formData.append('have_driving_license', this.form.have_driving_license);
      formData.append('good_at_driving_cars', this.form.good_at_driving_cars);
      formData.append('english_fluency_degree', this.form.english_fluency_degree);
      formData.append('attachments[id_number]', this.form.file_id_number);
      formData.append('attachments[cv]', this.form.file_cv);
      formData.append('attachments[bachelor_degree_certificate]', this.form.file_bachelor_degree_certificate);
      formData.append('attachments[pharmacists_union_membership_card]', this.form.file_pharmacists_union_membership_card);
      formData.append('attachments[license_to_practice_profession_in_your_country]', this.form.file_license_to_practice_profession_in_your_country);
      formData.append('attachments[experience_certificate_1]', this.form.file_experience_certificate_1);
      formData.append('attachments[experience_certificate_2]', this.form.file_experience_certificate_2);
      formData.append('attachments[experience_certificate_3]', this.form.file_experience_certificate_3);
      formData.append('attachments[transcript]', this.form.file_transcript);
      formData.append('attachments[license_to_practice_profession_in_ksa]', this.form.file_license_to_practice_profession_in_ksa);
        axios.post('https://app.almujtama.com.sa/api/employmentRequest', formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then( res => {
            this.$router.push('/')
            console.log(res)
            this.errors = []
            this.postLoaded = false
        })  
        .catch(err =>  {
            console.log(err.response.data.errors)
            this.errors = err.response.data.errors;
            this.ErrorCheck = true;
            this.postLoaded = false;
            
        })
      
  },  
    handleFileUpload_cv( event){
      console.log(event.target.files[0], 'file')
      this.form.file_cv = event.target.files[0];
    },
    handleFileUpload_id_number( event){
      this.form.file_id_number = event.target.files[0];
    },
    handleFileUpload_license_to_practice_profession_in_your_country( event){
      this.form.file_license_to_practice_profession_in_your_country = event.target.files[0];
    },
    handleFileUpload_experience_certificate_1( event){
      this.form.file_experience_certificate_1 = event.target.files[0];
    },
    handleFileUpload_experience_certificate_2( event){
      this.form.file_experience_certificate_2 = event.target.files[0];
    },
    handleFileUpload_experience_certificate_3( event){
      this.form.file_experience_certificate_3 = event.target.files[0];
    },
    handleFileUpload_bachelor_degree_certificate( event){
      this.form.file_bachelor_degree_certificate = event.target.files[0];
    },
    handleFileUpload_license_to_practice_profession_in_ksa( event){
      this.form.file_license_to_practice_profession_in_ksa = event.target.files[0];
    },
    handleFileUpload_pharmacists_union_membership_card( event){
      this.form.file_pharmacists_union_membership_card = event.target.files[0];
    },
    handleFileUpload_transcript( event){
      this.form.file_transcript = event.target.files[0];
    },
    personData(){
      console.log('test')
    }
  }
};
</script>
<style lang="scss" scoped>
.requiredIcon{
  color: #c03e3e;
  font-size: 9px;
}
.aboutUs_header {
  background-color: #78a28f;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  .headerContainer {
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .side {
      h2 {
        font-size: 34px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 30px;
      }
      .breadCrobs {
        display: flex;
        align-items: center;
        margin-top: 100px;
        @media (max-width: 576px) {
          margin: 30px 0;
        }
        a,
        span {
          font-size: 18px;
          font-weight: 600;
          color: #d8d253;
          margin-left: 10px;
        }
        h3 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0;
        }
      }
    }
  }
}

.toggle {
  width: 431px;
  border: 2px solid #bfc956;
  border-radius: 5px;
  display: flex;
  margin: 100px auto 50px auto;
  > div {
    width: 50%;
    padding: 30px 0;
    text-align: center;
    font-size: 23px;
    color: #ffffff;
    font-weight: 600;
    background-color: #bfc956;
  }
  > div:last-child {
    background-color: #78a28f;
  }
}

.choose {
  width: 410px;
  height: 328px;
  box-shadow: 0px 10px 50px #21343014;
  border-radius: 10px;
  margin: auto;
  h3 {
    padding: 50px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #78a28f;
    margin-bottom: 40px;
  }
  .radio {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
  }
}

.form {
  box-shadow: 0px 10px 50px #21343014;
  border-radius: 10px;
  margin: 100px 0;
  padding: 30px;
  h3 {
    font-size: 27px;
    color: #78a28f;
    text-align: center;
    font-weight: 900;
    font-family: flatMedium;
  }
  .line {
    margin: 30px auto;
  }
  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input_container {
      width: 45%;
      margin-bottom: 20px;
      @media (max-width: 991px) {
        width: 100%;
      }
      label {
        font-size: 16px;
        font-weight: 900;
        color: #78a28f;
        display: flex;
        align-items: center;
        .requiredIcon{
          margin-right: 5px;
        }
      }
      input {
        width: 100%;
        display: block;
        padding: 10px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        font-size: 16px;
        color: #6f7775;
      }
      input::placeholder {
        font-size: 16px;
        color: #6f7775;
      }
      .radio_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 16px;
          color: #6f7775;
          white-space: nowrap;
        }
        input {
          width: unset;
        }
      }
    }
    .w100 {
      width: 100%;
    }
    .right_title {
      width: 100%;
      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #78a28f;
      }
    }
    .action {
      width: 100%;
      button {
        margin: 30px auto;
        font-size: 16px;
        color: #ffff;
        background-color: #d8d253;
        border: 4px;
        width: 112px;
        padding: 10px;
        text-align: center;
        border: 0;
        display: block;
      }
    }
  }
}
</style>