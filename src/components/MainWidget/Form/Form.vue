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

          <form @submit.prevent="personData">
            <div class="input_container">
              <label>
                الوظيفة المطلوبة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>الاسم (حسب جواز السفر)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>تاريخ الميلاد
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>محل الاقامة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>رقم الهوية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>الجنسية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>تاريخ الانتهاء
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>الديانة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>مسلم</span>
                <input type="radio" />
              </div>
              <div class="radio_container">
                <span>غير ذلك</span>
                <input type="radio" />
              </div>
            </div>
            <div class="input_container">
              <label>الحالة الاجتماعية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>اعزب</span>
                <input type="radio" />
              </div>
              <div class="radio_container">
                <span>متزوج </span>
                <input type="radio" />
              </div>
            </div>
            <div class="input_container">
              <label>عدد الابناء
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>عنوان السكن
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>رقم الهاتف
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>التخصص
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>البريد الالكتروني
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>المؤهلات العلمية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>بكالوريوس</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>دبلوم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>ماجستير</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>دكتوراة</span>
                <input type="checkbox" />
              </div>
            </div>

            <div class="input_container">
              <label>التخصص
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>المدرسة/المعهد/الجامعة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>سنة الحصول عليها
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>
            <div class="input_container">
              <label>المعدل/التقدير
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="text" placeholder="اكتب هنا" />
            </div>

            <div class="input_container w100">
              <label>عدد الخبرات العملية: ( عدد الوظائف التي عملت بها):
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>وظيفة</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>وظيفتان</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>ثلاث وظائف</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>اربع وظائف</span>
                <input type="checkbox" />
              </div>
            </div>

            <div class="input_container">
              <input type="text" placeholder="مكان العمل" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="مكان العمل" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="المسمى الوظيفي" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="المسمى الوظيفي" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="أسباب ترك العمل" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="أسباب ترك العمل" />
            </div>
            <div class="right_title">
              <h4>الدورات التدريبية</h4>
            </div>
            <div class="input_container">
              <input type="text" placeholder="اسم الدورة 1" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="اسم الدورة 2" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="الجهة القائمة عليها" />
            </div>
            <div class="input_container">
              <input type="text" placeholder="الجهة القائمة عليها" />
            </div>

            <div class="input_container">
              <label
                >هل قدمت أوراقك (شهادة التخرج وشهادة الخبرة) للحصول على شهادة
                الداتافلو Did you upload your documents (University Certificate
                and Experience Certificate) for Dataflow verification ؟ (For
                Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon></label
              >
              <div class="radio_container">
                <span>نعم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>لا</span>
                <input type="checkbox" />
              </div>
            </div>
            <div class="input_container">
              <label
                >هل تقدمت لإختبار البرومترك (بيرسون فيو) Did you admit to
                Prometric (Pearson VUE) exam؟ (For Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon></label
              >
              <div class="radio_container">
                <span>نعم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>لا</span>
                <input type="checkbox" />
              </div>
            </div>
            <div class="input_container">
              <label
                >هل تحمل شهادة التصنيف المهني من الهيئة السعودية للتخصصات الصحية
                Do you have the SCFHS Accreditation Certificate ؟ (For
                Pharmacist job ONLY)
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label
              >
              <div class="radio_container">
                <span>نعم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>لا</span>
                <input type="checkbox" />
              </div>
            </div>

            <div class="input_container">
              <label>هل تحمل رخصة قيادة ؟
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>نعم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>لا</span>
                <input type="checkbox" />
              </div>
            </div>

            <div class="input_container">
              <label>هل تجيد قيادة السيارات ؟
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>نعم</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>لا</span>
                <input type="checkbox" />
              </div>
            </div>
            <div class="input_container">
              <label>درجة اجادة اللغة الانجليزية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <div class="radio_container">
                <span>ممتاز</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>متوسط</span>
                <input type="checkbox" />
              </div>
              <div class="radio_container">
                <span>ضعيف</span>
                <input type="checkbox" />
              </div>
            </div>

            <div class="input_container">
              <label>رفاق صورة الهوية او جواز السفر
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>ارفاق السيرة الذاتية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>ارفاق شهادة البكالوريوس
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>ارفق كارنية نقابة الصيادلة
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>ارفاق ترخيص مزاولة المهنة بوزارة الصحة بدولتك
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 1
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 2
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>شهادات الخبرة 3
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label>ارفاق صورة بيان الدرجات
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>
            <div class="input_container">
              <label
                >ارفق صورة من ترخيص مزاولة المهنة في المملكة العربية
                السعودية
                <b-icon class="requiredIcon" icon="star-fill" aria-hidden="true"></b-icon>
              </label>
              <input type="file" />
            </div>

            <div class="action">
              <button>إرسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data(){
    return{

    }
  },
  methods:{
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