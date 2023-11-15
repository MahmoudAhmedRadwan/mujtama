<template>
  <!-- contactUs -->
  <div class="contactUs">

    <header class="contact_us_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2> تواصل معنا</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">الرئيسية</router-link>
              <span>>></span>
              <h3>تواصل معنا</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <section class="channels">
      <div class="container">
        <div class="channels_container">
          <div class="side">
            <h3>قنوات التواصل</h3>
            <div class="line"></div>
            <p>
              يتشرف قسم خدمة العملاء بالرد على استفساراتكم و اقتراحاتكم من خلال
              القنوات التالية
            </p>
            <div class="icons">
              <div class="info_container">
                <div class="icon_container">
                  <img src="../../assets/images/phone.png" alt="" />
                </div>
                <div class="content">
                  <h4>الرقم الموحد</h4>
                  <span>920008144</span>
                </div>
              </div>
              <div class="info_container">
                <div class="icon_container">
                  <img src="../../assets/images/envelope.png" alt="" />
                </div>
                <div class="content">
                  <h4>البريد الإلكتروني</h4>
                  <span>info@ALmujtama.com.sa</span>
                </div>
              </div>
              <div class="info_container">
                <div class="icon_container">
                  <img src="../../assets/images/location.png" alt="" />
                </div>
                <div class="content">
                  <h4>موقعنا</h4>
                  <span>جدة،المحمدية - طريق المدينة المنورة النازل</span>
                </div>
              </div>
            </div>
          </div>
          <div class="side">
            <div class="contact_invstor">
              <form @submit.prevent="contactUs">
                <div class="form_input">
                  <label>الاسم</label>
                  <input type="text" placeholder="الاسم" />
                </div>
                <div class="form_input">
                  <label>البريد الالكتروني</label>
                  <input type="text" placeholder="البريد" />
                </div>
                <div class="form_input">
                  <label>رقم الجوال</label>
                  <input type="text" placeholder="الرقم" />
                </div>
                <div class="form_input">
                  <label>عنوان الرسالة</label>
                  <input type="text" placeholder="العنوان" />
                </div>
                <div class="form_text">
                  <label>الرسالة</label>
                  <textarea placeholder="كتابة النص هنا"></textarea>
                </div>
                <button>إرسال</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bgEm"></section>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data(){
    return{

    }
  },
  methods:{
    contactUs(){
      console.log('test contact')
    }
  }
};
</script>
<style lang="scss" scoped>
.contactUs {
  .contact_us_header {
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

  .channels {
    padding: 100px 0;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    .channels_container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .side {
        width: 48%;
        @media (max-width: 991px) {
          width: 100%;
        }
        > h3 {
          font-size: 40px;
          color: #78a28f;
          font-weight: 800;
        }
        .line {
          margin: 30px 0;
        }
        p {
          font-size: 16px;
          color: #6f7775;
          margin-bottom: 50px;
        }
        .icons {
          .info_container {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            .icon_container {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              background-color: #d8d253;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
            }
            .content {
              h4 {
                font-size: 20px;
                font-weight: 500;
                color: #78a28f;
              }
              span {
                font-size: 16px;
                font-weight: 500;
                color: #6f7775;
              }
            }
          }
        }

        .contact_invstor {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px #ddd;
          form {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            h4 {
              width: 100%;
              font-size: 27px;
              color: #78a28f;
              margin-bottom: 20px;
            }
            .form_input {
              width: 49%;
              margin-bottom: 15px;
              label {
                font-size: 16px;
                font-weight: 500;
                color: #78a28f;
                margin-bottom: 10px;
                display: block;
              }
              input {
                border: 1px solid #dddddd;
                border-radius: 4px;
                padding: 10px;
                display: block;
                width: 100%;
              }
            }
            .form_text {
              width: 100%;
              margin-bottom: 15px;
              label {
                font-size: 16px;
                font-weight: 500;
                color: #78a28f;
                margin-bottom: 10px;
                display: block;
              }
              textarea {
                border: 1px solid #dddddd;
                border-radius: 4px;
                padding: 10px;
                display: block;
                width: 100%;
                min-height: 150px;
              }
            }
            button {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 18px;
              color: #fff;
              background-color: #d1d13c;
              border-radius: 4px;
              border: 0;
              padding: 15px;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }

  .bgEm {
    background-color: #d9d9d9;
    padding: 300px;
    margin-top: -166px;
    @media (max-width: 991px) {
      display: none;
    }
  }
}
</style>