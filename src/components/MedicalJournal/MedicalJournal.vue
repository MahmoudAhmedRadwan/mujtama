<template>
  <div>
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>تعرف علينا</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">الرئيسية</router-link>
              <span>>></span>
              <h3>المجلة الطبية</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="search">
        <input type="text" placeholder="البحث" />
        <b-icon icon="search" font-scale="5" class="icon"></b-icon>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="journal">
          <div class="sections">
            <h3>الاقسام</h3>
            <div class="line"></div>
            <div class="linRow">
              <h4>اخر الاخبار</h4>
              <span>16</span>
            </div>
            <div class="linRow">
              <h4>المجلة الالكترونية</h4>
              <span>5</span>
            </div>
            <div class="linRow">
              <h4>إنفوجرافيكس</h4>
              <span>5</span>
            </div>

            <div class="title_line">
              <div class="small_line"></div>
              <h3>الأقسام الفرعية</h3>
            </div>
            <div class="linRow">
              <h4>فعاليات</h4>
              <span>10</span>
            </div>
            <div class="linRow">
              <h4>المجتمع</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>مقالات</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>تقارير</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>صحة الاسرة</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>معلومات طبية</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>طب وقائي</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>اخبار</h4>
              <span>12</span>
            </div>
            <div class="linRow">
              <h4>انفوجرافيكس</h4>
              <span>12</span>
            </div>

            <div class="line left"></div>

            <div class="hash_tag">
              <h3>هاشتاق</h3>
              <div class="single_hash">#الدعم</div>
              <div class="single_hash">#المجتمع</div>
              <div class="single_hash">#صيدلية</div>
              <div class="single_hash">#العناية</div>
              <div class="single_hash">#Organization</div>
              <div class="single_hash">#فروع</div>
              <div class="single_hash">#المستثمرين</div>
              <div class="single_hash">#مساعدة</div>
              <div class="single_hash">#تعليم</div>
            </div>
          </div>

          <div class="journals">
            <div class="single_journal">
              <div class="img_container">
                <img src="../../assets/images/mask.png" alt="" />
              </div>
              <div class="date">
                <img src="../../assets/images/calender.png" alt="" />
                15/5//2022
              </div>
            </div>
            <h3>عنوان</h3>
            <div class="line"></div>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "MedicalJournal",
};
</script>
<style lang="scss" scoped>
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

.search {
  margin: 40px 0;
  display: inline-block;
  position: relative;
  input {
    width: 405px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 10px 30px 10px 10px;
    font-size: 16px;
    color: #6f7775;
  }
  .icon {
    position: absolute;
    top: 15px;
    right: 5px;
    font-size: 16px !important;
  }
}

.journal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .sections {
    width: 35%;
    @media (max-width: 991px) {
      width: 100%;
    }
    > h3 {
      font-size: 22px;
      font-weight: 600;
      color: #78a28f;
    }
    .line {
      margin: 30px 0;
    }
    .linRow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 18px;
        color: #78a28f;
      }
      span {
        font-size: 18px;
        color: #6f7775;
      }
    }

    .title_line {
      display: flex;
      align-items: center;
      margin: 20px 0;
      .small_line {
        width: 40px;
        height: 3px;
        background-color: #d8d253;
        margin-left: 10px;
      }
      h3 {
        font-size: 18px;
        font-weight: 600;
        color: #d8d253;
        margin-bottom: 0;
      }
    }
    .left {
      margin: 30px auto 30px 0;
    }

    .hash_tag {
      display: flex;
      flex-wrap: wrap;
      h3 {
        font-size: 18px;
        color: #78a28f;
        font-weight: 600;
        width: 100%;
        margin-bottom: 30px;
      }

      .single_hash {
        padding: 10px;
        border: 1px solid #dddddd;
        margin: 10px;
        color: #78a28f;
        font-size: 16px;
        border-radius: 5px;
      }
    }
  }
  .journals {
    width: 55%;
    @media (max-width: 991px) {
      width: 100%;
    }
    .single_journal {
      .img_container {
        width: 100%;
        img {
          max-width: 100%;
        }
      }
      .date {
        display: flex;
        align-items: center;
        font-size: 12px;
        img {
          margin-left: 10px;
        }
      }
    }
    h3 {
      font-size: 22px;
      margin-top: 30px;
      color: #78a28f;
      font-weight: 600;
    }
    .line {
      margin: 30px 0;
    }
    p {
      font-size: 16px;
      color: #6f7775;
    }
  }
}
</style>