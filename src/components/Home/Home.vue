<template>
  <div>
    <header class="home_page_header">
      <img src="../../assets/images/pharmacy.png" alt="" />
      <div class="charts">
        <div class="numbers">
          <div class="number">165</div>
          <div class="line"></div>
          <h3>فرعا منتشرة على نطاق واسع</h3>
        </div>
        <div class="numbers">
          <div class="number">21K+</div>
          <div class="line"></div>
          <h3>متر مربع لتقديم افضل جودة في الامداد و التموين</h3>
        </div>
        <div class="numbers">
          <div class="number">25K+</div>
          <div class="line"></div>
          <h3>صنفاً بين يديكم</h3>
        </div>
        <div class="our_branches">
          <div>
            <span>فروعنا</span>
            <div class="line"></div>
          </div>
          <b-icon icon="arrow-left" font-scale="5" class="icon"></b-icon>
        </div>
      </div>
    </header>

    <section class="home_page_description_sections container">
      <img
        class="rightBg"
        src="../../assets/images/aboutCompanyBg.svg"
        alt=""
      />
      <div class="img_container">
        <img src="../../assets/images/group.png" alt="" />
      </div>
      <div class="description">
        <h3>نبذة عن الشركة</h3>
        <div class="line"></div>
        <p>
          صيدليات المجتمع مجموعة رائدة ومتكاملة في تقديم الخدمات الصيدلانية.
          شركاء وزارة الصحة في تنفيذ برامج الرعاية الصحية ومبادرات منظومة
          الوزارة لبرامج التحول الوطني 2020 ضمن رؤية المملكة 2030.
        </p>
        <p>
          شركاء وزارة الصحة بالتنسيق مع الشركة الوطنية للشراء الموحد (نوبكو)
          لصرف الوصفات الطبية (وصفتي) الصادرة من مراكز الرعاية الأولية
          والمستشفيات التابعة لوزارة الصحة إضافة الى المستشفيات التابعة للخدمات
          الطبية بالقطاعات الحكومية الأخرى مثل: وزارة الدفاع ووزارة الداخلية
          ووزارة التعليم العالي في كل من: (جدة – مكة المكرمة – الطائف - الرياض -
          المدينة المنورة - الخرج - مدينة الملك عبد الله الاقتصادية- ينبع - رابغ
          – جازان- صبيا)
        </p>
        <div class="society">
          <span>الريادة في خدمة المجتمع</span>
          <div class="img_container">
            <img src="../../assets/images/hands.png" alt="" />
          </div>
        </div>
        <router-link to="/about-us" class="readMore">قراءة المزيد</router-link>
      </div>
    </section>
    <section class="home_page_description_sections container">
      <div class="img_container">
        <img src="../../assets/images/group2.png" alt="" />
      </div>
      <div class="description">
        <span class="smallTitle">خدماتنا</span>
        <h3>
          صيدليات المجتمع مجموعة رائدة ومتكاملة في تقديم الخدمات الصيدلانية.
        </h3>
        <div class="line"></div>
        <div class="list">
          <ul>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="envelope-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <h4>المجتمع اون لاين</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="envelope-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <h4>المجلة الالكترونية</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="envelope-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <h4>المتجر الالكتروني</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="envelope-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <h4>خدمة العملاء والتواصل مع الجمهور</h4>
            </li>
          </ul>
        </div>
        <router-link to="/about-us" class="readMore">المزيد</router-link>
      </div>
    </section>
    <section class="home_page_description_sections container">
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
        <router-link to="/investor-relations" class="readMore"
          >مركز النتائج</router-link
        >
      </div>
    </section>

    <section class="new_pharmacy">
      <div class="description">
        <span>اخر الأخبار</span>
        <h3>
          {{ pages[pageNumber].description }}
        </h3>
        <div class="line"></div>
        <p>
          {{ pages[pageNumber].seconde_description }}
        </p>
        <div class="arrows">
          <div class="arrow" @click="() => changePageNumber('right')">
            <b-icon icon="chevron-right" font-scale="5" class="icon"></b-icon>
          </div>
          <div class="arrow" @click="() => changePageNumber('left')">
            <b-icon icon="chevron-left" font-scale="5" class="icon"></b-icon>
          </div>
        </div>
      </div>
      <div class="img_container">
        <img :src="pages[pageNumber].img" alt="newpharmacey" />
      </div>
    </section>

    <section class="numbers_of_year">
      <span>علاقات المستثمرين</span>
      <h3>لأرقام الرئيسية السنوية</h3>
      <div class="line"></div>
      <div class="numbers container">
        <div class="number_container">
          <div class="number_round">+160</div>
          <router-link to="/branches">عددالفروع</router-link>

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

    <section class="grouping">
      <div class="heart_position">
        <img src="../../assets/images/heart.png" alt="" />
      </div>
      <div class="container">
        <div class="groupingFlex">
          <div>
            <h3>اجمع مع المجتمع</h3>
            <p>
              إيمانا من مجموعة صيدليات المجتمع بأن عملائها الكرام هم شركاء
              النجاح و محور الرعاية و تقديراً لعملائها الكرام ، فقد طورت صيدليات
              المجتمع نظام الولاء حيث يتيح لعملائها الكرام الحصول بضائع مجانية
              تعادل 3% من مشترياتها .
            </p>
            <div class="line"></div>
          </div>
          <a href=""
            ><b-icon icon="heart-fill" font-scale="5" class="icon"></b-icon>سجل
            الان
          </a>
        </div>
      </div>
    </section>

    <section class="distinguished_clients">
      <div class="description">
        <div class="img_container_position">
          <img src="../../assets/images/offersHeart.png" alt="" />
        </div>
        <h3>برنامج عملاء التميز</h3>
        <h4>
          هو برنامج يتيح لعملاء صيدليات المجتمع الحصول على بضاعة مجانية تعادل 3
          % من مشترياتهم عند الوصول الى مبلغ 300 ريال (غير شامل ضريبة القيمة
          المضافة) من أي من فروعها أو الموقع الإلكتروني والتطبيق.
        </h4>
        <p>
          يعد برنامج عميل التميز من أفضل برامج جمع النقاط في المملكة. *عدا
          الورقيات والحفائظ وبعض الأدوية حيث تحسب البضاعة المجانية بما يعادل 1%
          من قيمة المشتريات ولا يتم احتساب أي نقاط لمشتريات الحليبات ومنتجات
          الرضاعة الصناعية حسب تعميم وزارة الصحة بمنع الترويج للمنتجات المساعدة
          على الرضاعة الصناعية تشجيعاً للرضاعة الطبيعية
        </p>
      </div>
      <div class="imgs">
        <div class="img_container">
          <img src="../../assets/images/offer1.png" alt="" />
        </div>
        <div class="img_container">
          <img src="../../assets/images/offer2.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      pageNumber: 0,
      pages: [
        {
          description:
            "يسرنا أن نعلن أنه تم بحمد الله افتتاح فرع جديد لصيدلية المجتمع في حي الصفا - طريق الأمير متعب بن عبدالعزيز - جدة",
          seconde_description:
            "انضموا إلينا في الفرع الجديد واستفيدوا من خدماتنا المتميزة صيدليات_المجتمع #الريادة_في_خدمة_المجتمع",
          img: require("../../assets/images/opening.png"),
        },
        {
          description:
            "كلية الصيدلية بجامعة الملك عبدالعزيز بمدينة جدة كل الشكر للراعي الذهبي صيدلية المجتمع لمساهمتهم في نجاح فعاليتنا +",
          seconde_description: "#صيدلية_المجتمع",
          img: require("../../assets/images/openening2023.png"),
        },
        {
          description:
            "صدور موافقة هيئة السوق المالية على ادراج شركة المجتمع الرائدة الطبية في السوق الموازية ( نمو ) . يسر إدارة الشركة ان تشكر هيئة السوق المالية على الدعم المستمر وان تتقدم بالتهنئة لمساهمي الشركة وجميع موظفيها ومنسوبيها وعملائها الكرام على هذه النقلة المهمة في مسيرة الشركة.",
          img: require("../../assets/images/congrats.png"),
        },
        {
          description:
            "قامت إدارة شركة المجتمع الرائدة الطبية بتكريم الصيدلي محمد أحمد محمد علي لحصوله على المركز الرابع حسب تقييم الأداء في شهر سبتمبر. صيدليات المجتمع تتمنى له ولجميع شركاء النجاح المزيد من التوفيق والسداد.",
          img: require("../../assets/images/gift.png"),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    changePageNumber(type) {
      if (type == "left") {
        if (this.pageNumber <= 3 && this.pageNumber > -1) {
          this.pageNumber = this.pageNumber + 1;
        }
      } else if (type == "right") {
        if (this.pageNumber <= 3 && this.pageNumber > -1) {
          this.pageNumber = this.pageNumber - 1;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home_page_header {
  position: relative;
  @media (max-width: 991px) {
    margin-bottom: 200px;
  }
  img {
    max-width: 100%;
  }
  .charts {
    position: absolute;
    bottom: -85px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    width: 70%;
    @media (max-width: 1450px) {
      width: 90%;
      bottom: -100px;
    }
    @media (max-width: 991px) {
      bottom: -180px;
    }
    > div {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      @media (max-width: 991px) {
        width: 50%;
      }
    }
    .numbers {
      flex-direction: column;
      .number {
        font-size: 54px;
        font-weight: 900;
        color: #78a28f;
        @media (max-width: 991px) {
          font-size: 30px;
        }
      }
      .line {
        height: 2px;
        width: 60px;
        background-color: #d8d253;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 18px;
        font-weight: 600;
        color: #78a28f;
        text-align: center;
      }
    }
    .our_branches {
      background-color: #d1d13c;
      padding: 20px 0;
      > div {
        margin-left: 10px;
        span {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          text-align: center;
        }
        .line {
          height: 2px;
          width: 60px;
          background-color: #78a28f;
          margin: auto;
        }
      }
      .icon {
        font-size: 40px !important;
        color: #78a28f;
      }
    }
  }
}

.home_page_description_sections {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  position: relative;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 50px;
  }
  .rightBg {
    position: absolute;
    top: -13px;
    right: -181px;
    @media (max-width: 1700px) {
      right: -111px;
      top: -42px;
    }
    @media (max-width: 1400px) {
      right: -53px;
      top: -21px;
    }
  }
  > .img_container {
    width: 45%;
    display: flex;
    align-items: center;
    position: relative;
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
    .img_position {
      position: absolute;
      top: -50px;
      left: 100px;
    }
    .positionTitle {
      position: absolute;
      bottom: -65px;
      right: 25px;
      span {
        font-size: 51px;
        font-weight: 600;
        color: #d1d13c;
      }
      h3 {
        font-size: 51px;
        color: #2b5933;
        font-weight: 600;
      }
    }
    .position_img_bg {
      background-color: #d1d13c;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 6px;
      right: -38px;
      border-radius: 50%;
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
      font-size: 30px;
      font-weight: 800;
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
    p {
      font-size: 18px;
      color: #6f7775;
      margin-bottom: 30px;
    }
    .society {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      @media (max-width: 991px) {
        justify-content: center;
        width: 100%;
      }
      span {
        font-size: 18px;
        color: #78a28f;
        margin-left: 20px;
      }
    }
    .list {
      ul {
        margin-bottom: 50px;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          @media (max-width: 991px) {
            justify-content: center;
          }
          .icon_container {
            width: 18px;
            height: 18px;
            background-color: #2b5933;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-left: 10px;
            .icon {
              font-size: 14px !important;
              color: #fff;
            }
          }
          h4 {
            font-size: 18px;
            color: #78a28f;
            font-weight: 600;
          }
        }
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

.new_pharmacy {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #78a28f;
  padding: 100px 0;
  margin: 100px 0;
  @media (max-width: 991px) {
    flex-direction: column;
    margin: 50px 0;
  }
  .description {
    background-color: #fff;
    padding: 50px;
    width: 750px;
    border-radius: 10px;
    position: relative;
    z-index: 3;
    @media (max-width: 1450px) {
      width: 600px;
    }
    @media (max-width: 1450px) {
      width: 80%;
    }
    span {
      font-size: 20px;
      color: #2b5933;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 36px;
      color: #78a28f;
      font-weight: 800;
      margin-bottom: 30px;
      @media (max-width: 1450px) {
        font-size: 30px;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    .line {
      height: 3px;
      width: 70px;
      background-color: #d1d13c;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      color: #6f7775;
    }
    .arrows {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      .arrow {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dddddd;
        cursor: pointer;
        margin-top: 30px;
        .icon {
          font-size: 16px !important;
        }
      }
      .arrow:last-child {
        border: 0;
        background-color: #d8d253;
        margin-right: 10px;
      }
    }
  }
  .img_container {
    margin-right: -50px;
    @media (max-width: 1200px) {
      width: 38%;
    }
    @media (max-width: 1450px) {
      margin: 30px 0 0 0;
    }
    img {
      max-width: 100%;
    }
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
      > a {
        font-size: 20px;
        color: #78a28f;
        display: block;
        margin: 20px 0;
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

.grouping {
  background-color: #78a28f;
  padding: 100px 0;
  position: relative;
  .heart_position {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-color: #d8d253;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -20px;
    right: 100px;
  }
  .groupingFlex {
    display: flex;

    > div {
      width: 60%;
      h3 {
        font-size: 20px;
        color: #2b5933;
        font-weight: 600;
      }
      p {
        font-size: 23px;
        color: #fff;
        font-weight: 800;
        font-weight: 500;
        margin-top: 30px;
      }
      .line {
        height: 3px;
        width: 70px;
        background-color: #d1d13c;
        margin-top: 30px;
      }
    }
    a {
      background-color: #d8d253;
      width: 193px;
      height: 58px;
      text-align: center;
      border-radius: 4px;
      margin: auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #fff;
      .icon {
        font-size: 16px !important;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
}

.distinguished_clients {
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1450px) {
    padding: 100px;
  }
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 991px) {
    padding: 30px;
    margin-top: 40px;
  }
  .description {
    padding: 70px 50px;
    background-color: #f5f5f5;
    position: relative;
    width: 50%;
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 30px;
    }
    .img_container_position {
      position: absolute;
      top: -40px;
      left: 50px;
    }
    h3 {
      font-size: 20px;
      color: #2b5933;
      margin-bottom: 20px;
    }
    h4 {
      font-size: 20px;
      color: #78a28f;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      color: #6f7775;
    }
  }
  .imgs {
    display: flex;
    width: 50%;
    @media (max-width: 991px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .img_container {
      margin-right: 30px;
      width: 50%;
      @media (max-width: 991px) {
        width: 100%;
        margin: 30px auto;
        display: flex;
        justify-content: center;
      }
      img {
        max-width: 100%;
      }
    }
  }
}
</style>