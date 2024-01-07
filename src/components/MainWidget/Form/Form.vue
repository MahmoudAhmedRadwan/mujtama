<template>
  <div>
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>{{$t('landing.Jobs')}}</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">{{$t('landing.Home')}}</router-link>
              <span>>></span>
              <h3>{{$t('landing.Jobs')}}</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <!-- <div class="replace">
      <p>
        {{$t('jobForm.replace1')}} <br>
        {{$t('jobForm.replace2')}}
        (<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexuMdLrRWTv2f_FUnXtwwHp_a1xdiL6TfveHfwHok2aZZ2YA/viewform?embedded=true">{{$t('jobForm.replaceLink')}}</a>)</p>
      <div class="line"></div>
    </div> -->

    <!-- <div class="ifram_container p-4">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        :src="googleFormUrl"
      >
      Loading...
      </iframe>
    </div> -->

    <div v-if="settings == false" class="noForm">
      <p> {{$t('jobForm.noForm')}}</p>
    </div>

    <div class="form_container" v-if="settings == true">
      <div class="container">
        <div class="form">
          <h3> {{$t('jobForm.EMPLOYMENTAPPLICATIONFORM')}}</h3>
          <div class="line"></div>

          <form @submit.prevent="send">
            <!-- <div class="input_container">
              <label>
                {{$t('jobForm.RequiredJOB')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')" v-model="form.job" />
            </div> -->
            <div class="input_container">
              <label>
                {{$t('jobForm.RequiredJOB')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <select @change="(e) => chooseJob(e)">
                <option value="" selected disabled> إختار الوظيفة </option>
                <option value="صيدلي">صيدلي</option>
                <option value="غير صيدلي">غير صيدلي</option>
              </select>
            </div>
            <div class="input_container" v-if="writeJob == true">
              <label>{{$t('jobForm.WriteTheJob')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')" v-model="form.job" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.mentionedInPassport')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')" v-model="form.name" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.DOB')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-datepicker v-model="form.birth_date" class="mb-2"></b-form-datepicker>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Address')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')"  v-model="form.residence"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.IDno')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="number" :placeholder="$t('writeHere')" v-model="form.id_number" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Nationality')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')"  v-model="form.nationality"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.ExpiryDate')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-datepicker v-model="form.expiry_date" class="mb-2"></b-form-datepicker>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Religion')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.religion" value="muslim">{{$t('Muslim')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.religion" value="other"> {{$t('NonMuslim')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.AttitudeTowardsRecruitment')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.military_status" value="final_exemption">{{$t('jobForm.finalExemtion')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.military_status" value="temp_exemption"> {{$t('jobForm.temparayExemtion')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.military_status" value="performed_military_service"> {{$t('jobForm.CompletedService')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Maritalstatus')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.marital_status" value="single"> {{$t('single')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.marital_status" value="married"> {{$t('married')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.NoOfChildren')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="number" :placeholder="$t('writeHere')" v-model="form.number_of_children"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.HomeAddress')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')"  v-model="form.home_address"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.MobileNo')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="phone_input_container">
                <!-- <select v-model="form.country_phone_code">
                  <option value="966"> <img src="../../../assets/images/saudi.jpeg" alt=""> +966</option>
                  <option value="202"> <img src="../../../assets/images/egypt.png" alt=""> +201</option>
                </select> -->
                <div class="tel_select" @click="openSelect">
                  {{form.country_phone_code}} <img :src="country_img" alt="">
                   <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                   <!-- <b-icon icon="chevron-up" aria-hidden="true"></b-icon> -->
                    <div class="select_body" v-if="select_body_active == true">
                      <div class="select_row" @click="() => modelingNumber(966, require('../../../assets/images/saudi.jpeg'))">
                        966 <img src="../../../assets/images/saudi.jpeg" alt="">
                      </div>
                      <div class="select_row" @click="() => modelingNumber(202, require('../../../assets/images/egypt.png'))">
                        202 <img src="../../../assets/images/egypt.png" alt="">
                      </div>
                    </div>
                </div>
                <input type="tel" :placeholder="$t('writeHere')" v-model="form.phone_number" />
              </div>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Profession')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')"  v-model="form.specialization"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.EmailID')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="email" :placeholder="$t('writeHere')" v-model="form.email"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Qualification')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="bachelor" value="bachelor"> {{$t('Bachelors')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="diploma" value="diploma"> {{$t('Diploma')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="master" value="master"> {{$t('Masters')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.scientific_qualifications" name="phd" value="phd"> {{$t('PHD')}}</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>{{$t('jobForm.SchoolInstitutionUniversity')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')" v-model="form.school_institute_university"/>
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.YearOfGraduation')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="number" :placeholder="$t('writeHere')" v-model="form.graduation_year" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.Percentage')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" :placeholder="$t('writeHere')" v-model="form.gpa" />
            </div>

            <div class="input_container w100">
              <label>{{$t('jobForm.YearsOfExperience')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="1"> {{$t('Job1')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="2"> {{$t('Job2')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="3"> {{$t('Job3')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.number_of_jobs_worked" :value="4"> {{$t('Job4')}}</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <input type="text" :placeholder="$t('jobForm.Workplace')" v-model="form.workplace"/>
            </div>
            <div class="input_container">
              <input type="text" :placeholder=" $t('jobForm.TheCityWhereYouWork')" v-model="form.workplace_country_city" />
            </div>
            <div class="input_container">
              <input type="text" :placeholder=" $t('jobForm.JobTitle')" v-model="form.job_title" />
            </div>
            <div class="input_container">
              <input type="number" :placeholder="$t('jobForm.NumberOfYearsOfWork')" v-model="form.years_of_work" />
            </div>
            <div class="input_container">
              <input type="text" :placeholder=" $t('jobForm.ReasonsForLeavingWork')" v-model="form.leaving_work_reason" />
            </div>
            <div class="input_container">
              <input type="text" :placeholder="$t('jobForm.JobRequirements')" v-model="form.main_tasks" />
            </div>
            <div class="blackBorder"></div>
            <div class="right_title">
              <h4>  {{$t('jobForm.TrainingCourses')}}</h4>
            </div>
            <div class="input_container">
              <input type="text" :placeholder=" $t('jobForm.CourseName1')" v-model="form.course_name_1" />
            </div>
            <div class="input_container">
              <input type="text" :placeholder=" $t('jobForm.ThePartyInChargeOfIt')" v-model="form.course_name_1_party_of_charge" />
            </div>
            <div class="input_container">
              <input type="text" :placeholder="$t('jobForm.CourseName2')" v-model="form.course_name_2" />
            </div>
            
            <div class="input_container">
              <input type="text" :placeholder="$t('jobForm.ThePartyInChargeOfIt')" v-model="form.course_name_2_party_of_charge" />
            </div>

            <div class="input_container">
              <label> 
                {{$t('jobForm.DidYouUploadYourDocuments')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.dataflow_verification_documents_uploaded" :value="1">{{$t('yes')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.dataflow_verification_documents_uploaded" :value="0">{{$t('no')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.DidYouAdmitTo')}}  
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
               <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.admit_to_prometric_pearson_vue_exam" :value="1">{{$t('yes')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.admit_to_prometric_pearson_vue_exam" :value="0">{{$t('no')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.DoYouHaveTheSCFHS')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_scfhs_accreditation_certificate" :value="1">{{$t('yes')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_scfhs_accreditation_certificate" :value="0">{{$t('no')}}</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>
                {{$t('jobForm.DoYouHaveDrivingLicense')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_driving_license" :value="1">{{$t('yes')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.have_driving_license" :value="0">{{$t('no')}}</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>
                {{$t('jobForm.AreYouAbleToDrive')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.good_at_driving_cars" :value="1">{{$t('yes')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.good_at_driving_cars" :value="0">{{$t('no')}}</b-form-radio>
              </b-form-group>
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.EnglishLevelProficiency')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <b-form-group class="radiroFlex" v-slot="{ ariaDescribedby }">
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="excellent"> {{$t('Professional')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="middle"> {{$t('Advance')}}</b-form-radio>
                <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.english_fluency_degree" value="weak"> {{$t('Intermediate')}}</b-form-radio>
              </b-form-group>
            </div>

            <div class="input_container">
              <label>
                {{$t('jobForm.KindlyAttachedPassport')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" @change="handleFileUpload_id_number($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.KindlyAttachedCV')}}
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" ref="files" @change="handleFileUpload_cv($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.KindlyattachedBachelorsdegree')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_bachelor_degree_certificate($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.KindlyAttachedSyndicateOfPharmacy')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_pharmacists_union_membership_card($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.KindlyAttachedLicenseForPractisingProfession')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_license_to_practice_profession_in_your_country($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.ExperienceCertificate1')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_1($event)" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.ExperienceCertificate2')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_2($event)" />
            </div>
            <div class="input_container">
              <label>{{$t('jobForm.ExperienceCertificate3')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_experience_certificate_3($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.AttachACopyOfYourTranscript')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_transcript($event)" />
            </div>
            <div class="input_container">
              <label>
                {{$t('jobForm.professionInKSA')}}
                <!-- <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon> -->
              </label>
              <input type="file" ref="files" @change="handleFileUpload_license_to_practice_profession_in_ksa($event)" />
            </div>

            <div class="alert alert-danger" role="alert" v-if="ErrorCheck == true">
                <p v-for="(error, index) in errors" :key="index"> {{error}} </p>
            </div>
            <div class="action">
              <button v-if="postLoaded == false">
                
                {{$t('investor.Send')}}
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
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSexuMdLrRWTv2f_FUnXtwwHp_a1xdiL6TfveHfwHok2aZZ2YA/viewform?embedded=true',
      postLoaded: false,
      writeJob: false,
      select_body_active: false,
      country_img : require('../../../assets/images/saudi.jpeg') ,
      form: {
        job: '',
        name: '',
        birth_date: '',
        residence: '',
        id_number: '',
        nationality: '',
        expiry_date: '',
        religion: '',
        military_status: '',
        marital_status: '',
        number_of_children: '',
        home_address: '',
        phone_number: '',
        country_phone_code: '966',
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
        dataflow_verification_documents_uploaded: null,
        admit_to_prometric_pearson_vue_exam: null,
        have_scfhs_accreditation_certificate: null,
        have_driving_license: null,
        good_at_driving_cars: null,
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
      settings: null
    }
  },
  mounted(){
    this.getSettings();
  },
  methods:{
    openSelect(){
      this.select_body_active = !this.select_body_active
    },
    modelingNumber(number, img){
      this.form.country_phone_code = number
      this.country_img = img
    },
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
      formData.append('military_status', this.form.military_status);
      formData.append('marital_status', this.form.marital_status);
      formData.append('number_of_children', this.form.number_of_children);
      formData.append('home_address', this.form.home_address);
      formData.append('phone_number', this.form.phone_number);
      formData.append('country_phone_code', this.form.country_phone_code);
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
    },

    getSettings(){
      axios.create({
          baseURL: 'https://app.almujtama.com.sa/api',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token'),
            // localization: store.state.localization
            'locale': localStorage.getItem('lang')
          }
      })
      .get('/settings')
      .then(res => {
        console.log(res.data.data.receive_employment_request, 'settings')
        this.settings = res.data.data.receive_employment_request
      });
    },

    chooseJob(e){
      if(e.target.value == 'صيدلي'){
        this.form.job = e.target.value
        this.writeJob = false
      } else if(e.target.value == 'غير صيدلي'){
        this.writeJob = true
      }
    }
  }
};
</script>
<style lang="scss" scoped>

.replace{
  padding: 100px;
  p{
    text-align: center;
    font-size: 27px;
    color: #78A28F;
    font-weight: 800;
    a{
      color: #78A28F;
      transition: .3s ease-in-out;
      &:hover{
        color: #D8D100;
      }
    }
  }
  .line{
    margin: 20px auto;
  }
}
.noForm{
  p{
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    color: #78a28f;
    margin-top: 40px;
  }
}
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
      input,
      select {
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
    .blackBorder{
      height: 2px;
      width: 100%;
      background-color: #6f777557;
      margin: 70px 0 40px 0;
    }
    .right_title {
      width: 100%;
      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #78a28f;
        margin: 0 0 30px 0;
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

.phone_input_container{
  display: flex;
  align-items: center;
  select{
    padding: 8px;
    order: 2;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 16px;
    color: #6f7775;
    img{
      width: 30px;
    }
  }
  input{
    order: 1;
    direction: ltr;
  }

  .tel_select{
  width: 140px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  color: #6f7775;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  order: 2;
  cursor: pointer;
  > img{
    width: 30px;
    margin: 0 7px;
  }

  .select_body{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    background-color: #FFF;
    border: 1px solid #dddddd;
    z-index: 3;
    
    .select_row{
      font-size: 16px;
      color: #6f7775;
      display: flex;
      align-items: center;
      padding: 5px;
      img{
        width: 30px;
        margin-right: 5px;
      }
    } 
    .select_row:first-child{
      border-bottom: 1px solid #dddddd;
    }
  }
}
}

.en{
  .breadCrobs{
    a,
    span{
      margin: 0 10px 0 0;
    }
  }
  .phone_input_container{
    select{
      order: 1;
    }
    input{
      order: 2;
    }
  }
}


</style>