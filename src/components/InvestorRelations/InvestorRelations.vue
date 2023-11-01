<template>
  <!-- investor_elations -->
  <div class="investor_elations">
    <header class="investor_elations_header">
      <div class="leftRound"></div>
      <div class="rightRound"></div>
      <div class="container">
        <div class="header_logo">
          <img src="../../assets/images/footerLogo.png" alt="" />
        </div>
        <div class="title">
          <h2>علاقات المستثمرين</h2>
          <div class="line"></div>
          <p>
            من خلال صفحة علاقات المستثمرين يستطيع المستثمر الاطلاع على التقارير
            و النتائج الخاصة بالشركة
          </p>
          <a href="">النتائج و التقارير </a>
        </div>
        <div class="breadCrobs">
          <router-link to="/">الرئيسية</router-link>
          <span>>></span>
          <h3>علاقات المستثمرين</h3>
        </div>
      </div>
    </header>

    <section class="invetors_relations container">
      <div class="img_container">
        <img src="../../assets/images/InvestorRelations.png" alt="" />
      </div>
      <div class="description">
        <span class="smallTitle">علاقات المستثمرين</span>
        <h3>
          من خلال صفحة علاقات المستثمرين يستطيع المستثمر الاطلاع على التقارير و
          النتائج الخاصة بالشركة
        </h3>
        <div class="line"></div>
        <a href="" class="readMore">مركز النتائج</a>
      </div>
    </section>

    <section class="results_reports">
      <div class="container">
        <h3>النتائج و التقارير</h3>
        <div class="line"></div>
        <div class="content_container">
          <div class="img_container">
            <img src="../../assets/images/reportsResults.png" alt="" />
          </div>
          <div class="content">
            <div class="content_row">
              <div class="side">
                <p>
                  <img src="../../assets/images/calendar-days.png" alt="" />
                  20/06/2022 11AM to 15PM
                </p>
                <h3>افصاحات سوق المال</h3>
              </div>
              <div class="side">
                <select @change="downloadPDF">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="20/06/2021">20/06/2021</option>
                  <option value="20/06/2020">20/06/2020</option>
                  <option value="20/06/2019">20/06/2019</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <p>
                  <img src="../../assets/images/calendar-days.png" alt="" />
                  20/06/2022 11AM to 15PM
                </p>
                <h3>القوائم المالية</h3>
              </div>
              <div class="side">
                <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">20/06/2021</option>
                  <option value="">20/06/2020</option>
                  <option value="">20/06/2019</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <p>
                  <img src="../../assets/images/calendar-days.png" alt="" />
                  20/06/2022 11AM to 15PM
                </p>
                <h3>التقارير</h3>
              </div>
              <div class="side">
                <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">20/06/2021</option>
                  <option value="">20/06/2020</option>
                  <option value="">20/06/2019</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <p>
                  <img src="../../assets/images/calendar-days.png" alt="" />
                  20/06/2022 11AM to 15PM
                </p>
                <h3>2023 نتائج النصف الأول لعام</h3>
              </div>
              <div class="side">
                <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">20/06/2021</option>
                  <option value="">20/06/2020</option>
                  <option value="">20/06/2019</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <p>
                  <img src="../../assets/images/calendar-days.png" alt="" />
                  20/06/2022 11AM to 15PM
                </p>
                <h3>نشرة الاصدار</h3>
              </div>
              <div class="side">
                <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">20/06/2021</option>
                  <option value="">20/06/2020</option>
                  <option value="">20/06/2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="yearly_reort">
      <h3>التقارير السنوية</h3>
      <div class="line"></div>
      <select>
        <option value="" disabled selected>تنزيل التقرير السنوي</option>
        <option value="">20/06/2021</option>
        <option value="">20/06/2020</option>
        <option value="">20/06/2019</option>
      </select>
    </section>

    <section class="numbers_of_year">
      <span>علاقات المستثمرين</span>
      <h3>لأرقام الرئيسية السنوية</h3>
      <div class="line"></div>
      <div class="numbers container">
        <div class="number_container">
          <div class="number_round">+160</div>
          <span>عددالفروع</span>
          <p>160 فرع منتشرا على نطاق واسع</p>
          <p>25 فرع فى خدمتكم</p>
          <p>35 فرع تحت التأسيس</p>
        </div>
        <div class="number_container">
          <div class="number_round">ر.س 40</div>
          <span>سعر السهم</span>
          <p>يتم تحديث سعر السهم بشكل دوري حسب سعر السهم في تداول</p>
        </div>
        <div class="number_container">
          <div class="number_round">2023مـ</div>
          <span>القوائم المالية</span>
          <p>يتم نشر القوائم المالية بعد اعتمادها من هيئة السوق المالية</p>
        </div>
        <div class="number_container">
          <div class="number_round">800K+</div>
          <span>عدد عملاء التميز</span>
          <p>يعد برنامج عميل التميز من أفضل برامج جمع النقاط في المملكة</p>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact_container">
          <div class="side">
            <h3>تواصل مع علاقات المستثمرين</h3>
            <div class="line"></div>
          </div>
          <div class="side">
            <div class="contact_invstor">
              <form action="">
                <h4>عنوان</h4>
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
  </div>
</template>
<script>
import { saveAs } from "file-saver";

export default {
  name: "InvestorRelations",
  methods: {
    downloadPDF() {
      // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
      const fileUrl = "../../assets/files.test.pdf";

      // Fetch the PDF file
      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          // Save the PDF file using FileSaver.js
          saveAs(blob, "downloaded_file.pdf");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.investor_elations_header {
  background-image: url(../../assets/images/map.png);
  padding: 100px;
  position: relative;
  border-bottom: 90px solid #78a28f;
  @media (max-width: 991px) {
    border-bottom: 50px solid #78a28f;
  }
  .leftRound {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 10%;
    border-radius: 50%;
    background-color: #d9d9d9;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .rightRound {
    width: 170px;
    height: 170px;
    position: absolute;
    top: 60%;
    right: 10%;
    border-radius: 50%;
    background-color: #d9d9d9;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .header_logo {
    display: flex;
    justify-content: flex-end;
  }
  .title {
    padding: 100px 0;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    h2 {
      font-size: 54px;
      text-align: center;
      font-weight: 800;
      color: #196455;
      @media (max-width: 991px) {
        font-size: 36px;
      }
    }
    .line {
      margin: 30px auto;
    }
    p {
      font-size: 18px;
      color: #6f7775;
      text-align: center;
      @media (max-width: 991px) {
        font-size: 16px;
      }
    }
    a {
      display: block;
      width: 140px;
      padding: 10px;
      text-align: center;
      font-size: 18px;
      margin: auto;
      background-color: #d8d253;
      color: #2b5933;
      border-radius: 4px;
      margin-top: 30px;
    }
  }
  .breadCrobs {
    display: flex;
    align-items: center;
    margin-top: 200px;
    @media (max-width: 991px) {
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
      color: #78a28f;
      margin-bottom: 0;
    }
  }
}
.invetors_relations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 50px;
  }
  > .img_container {
    width: 45%;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 20px;
    }
    img {
      max-width: 100%;
      @media (max-width: 991px) {
        margin: auto;
      }
    }
  }
  .description {
    width: 50%;
    @media (max-width: 991px) {
      width: 100%;
      text-align: center;
    }
    .smallTitle {
      font-size: 20px;
      color: #2b5933;
    }
    h3 {
      font-size: 26px;
      font-weight: 500;
      color: #78a28f;
      @media (max-width: 991px) {
        font-size: 26px;
      }
    }
    .line {
      width: 70px;
      height: 2px;
      background-color: #d1d13c;
      margin: 30px 0;
      @media (max-width: 991px) {
        margin: 30px auto;
      }
    }

    .readMore {
      width: 193px;
      height: 58px;
      background-color: #d8d253;
      text-align: center;
      font-size: 16px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      @media (max-width: 991px) {
        margin: auto;
      }
    }
  }
}

.results_reports {
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 50px;
  }
  .container {
    > h3 {
      font-size: 40px;
      font-weight: 800;
      color: #78a28f;
    }
    .line {
      margin: 30px 0;
    }
    .content_container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      .img_container {
        width: 40%;
        @media (max-width: 991px) {
          width: 100%;
        }
        img {
          max-width: 100%;
          @media (max-width: 991px) {
            margin: 0 auto 20px auto;
            display: block;
          }
        }
      }
      .content {
        width: 58%;
        @media (max-width: 991px) {
          width: 100%;
        }

        .content_row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          box-shadow: 0 0 10px #ddd;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        .side {
          p {
            font-size: 14px;
            color: #6f7775;
            display: flex;
            align-items: center;
            img {
              margin-left: 10px;
            }
          }
          select {
            background-color: #d8d253;
            font-size: 14px;
            text-align: center;
            padding: 10px 30px;
            color: #fff;
            border: 0;
            border-radius: 4px;
            option {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
}

.yearly_reort {
  text-align: center;
  background-color: #78a28f;
  padding: 200px 0;
  h3 {
    font-size: 40px;
    font-weight: 800;
    color: #ffffff;
  }
  .line {
    margin: 30px auto;
  }
  select {
    border: 0;
    border-radius: 4px;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    background-color: #d1d13c;
  }
}

.numbers_of_year {
  padding: 100px 0;
  text-align: center;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  > span {
    font-size: 16px;
    color: #2b5933;
  }
  > h3 {
    font-size: 40px;
    font-weight: 800;
    color: #78a28f;
  }
  .line {
    height: 3px;
    width: 70px;
    background-color: #d1d13c;
    margin: 30px auto 30px auto;
  }

  .numbers {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .number_container {
      width: 25%;
      @media (max-width: 991px) {
        width: 50%;
        margin-bottom: 20px;
      }
      @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 20px;
      }
      .number_round {
        border-radius: 50%;
        width: 190px;
        height: 190px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        font-weight: 900;
        color: #78a28f;
        border: 6px solid #707070;
        margin: auto;
      }
      > span {
        font-size: 20px;
        color: #78a28f;
        display: block;
        margin: 20px 0;
      }
      p {
        font-size: 16px;
        color: #6f7775;
        margin-bottom: 0;
      }
    }
  }
}

.contact {
  background-color: #78a28f;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  .contact_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .side {
      width: 48%;
      @media (max-width: 1200px) {
        width: 100%;
      }
      > h3 {
        font-size: 40px;
        font-weight: 800;
        color: #fff;
        margin-top: 100px;
        @media (max-width: 1200px) {
          text-align: center;
          font-size: 36px;
        }
      }
      .line {
        @media (max-width: 1200px) {
          margin: 30px auto;
        }
      }
      .contact_invstor {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
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
</style>