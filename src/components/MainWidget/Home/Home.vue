<template>
  <div>
    <header class="home_page_header">
      <img src="../../../assets/images/pharmacy.png" alt="" />
      <div class="charts">
        <div class="numbers">
          <div class="number">160</div>
          <div class="line"></div>
          <h3> {{$t('home.branchesWidelySpread')}}</h3>
        </div>
        <div class="numbers">
          <div class="number">21K+</div>
          <div class="line"></div>
          <h3> {{$t('home.squareMeterToProvideBestQualityInSupplyAnd')}}</h3>
        </div>
        <div class="numbers">
          <div class="number">25K+</div>
          <div class="line"></div>
          <h3> {{$t('home.ItemsInYourHands')}}</h3>
        </div>
        <router-link to="/branches" class="our_branches">
          <div>
            <span> {{$t('home.homeOurBranches')}}</span>
            <div class="line"></div>
          </div>
          <b-icon icon="arrow-left" font-scale="5" class="icon"></b-icon>
        </router-link>
      </div>
    </header>

    <section class="home_page_description_sections container">
      <img
        class="rightBg"
        src="../../../assets/images/aboutCompanyBg.svg"
        alt=""
      />
      <div class="img_container">
        <img src="../../../assets/images/group.png" alt="" />
      </div>
      <div class="description">
        <router-link to="/about-us">
          <h3> {{$t('home.AbouttheGroup')}}</h3>
        </router-link>
        <div class="line"></div>
        <p>
          {{$t('home.AbouttheGroupDescription')}}
          
        </p>
        <p>
          {{$t('home.AbouttheGroupDescriptionSeconde')}}
        </p>
        <div class="society">
          <span> {{$t('home.LeadershipInCommunityServices')}} </span>
          <div class="img_container">
            <img src="../../../assets/images/hands.png" alt="" />
          </div>
        </div>
        <!-- <router-link to="/about-us" class="readMore">قراءة المزيد</router-link> -->
      </div>
    </section>
    <section class="home_page_description_sections container">
      <div class="img_container">
        <img src="../../../assets/images/group2.png" alt="" />
      </div>
      <div class="description">
        <span class="smallTitle"> {{$t('home.OurServices')}}</span>
        <router-link to="/about-us">
          <h3>
            {{$t('home.OurServicesDescription')}}
          </h3>
        </router-link>
        <div class="line"></div>
        <div class="list">
          <ul>
            <li>
              <div class="icon_container">
                <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
              </div>
              <h4> {{$t('home.OnlineCommunity')}}</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
              </div>
              <h4> {{$t('home.OnlineCommunityEMagazine')}}</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
              </div>
              <h4> {{$t('home.OnlineCommunityOnlineStore')}}</h4>
            </li>
            <li>
              <div class="icon_container">
                <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
              </div>
              <h4> {{$t('home.OnlineCommunityCustomerService')}}</h4>
            </li>
          </ul>
        </div>
        <!-- <router-link to="/about-us" class="readMore">المزيد</router-link> -->
      </div>
    </section>
    <section class="home_page_description_sections container">
      <div class="img_container">
        <img src="../../../assets/images/InvestorRelations.png" alt="" />
      </div>
      <div class="description">
        <span class="smallTitle"> {{$t('home.homeInvestorRelations')}}</span>
        <router-link to="/investor-relations">
        <h3>
          {{$t('home.homeInvestorRelationsDescriptiom')}}
        </h3>
        </router-link>
        <div class="line"></div>
        <!-- <router-link to="/investor-relations" class="readMore" >مركز النتائج</router-link> -->
      </div>
    </section>

    <section class="new_pharmacy">
      <div class="description">
        <span> {{$t('investor.LatestNews')}}</span>
        <h3>
          {{ pages[pageNumber].description }}
        </h3>
        <h3>
          {{ pages[pageNumber].descriptionTwo }}
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
      <span>{{$t('home.homeInvestorRelations')}}</span>
      <h3> {{$t('home.RelationshipOfInvestors')}}</h3>
      <div class="line"></div>
      <div class="numbers container">
         <div class="number_container" v-for="key_metric in key_metrics" :key="key_metric.id">
          <div class="number_round">{{key_metric.value}}</div>
          <span>{{key_metric.translations[0].title}}</span>
          <p>{{key_metric.translations[0].description}}</p>
        </div>
      </div>
    </section>

    <section class="grouping">
      <div class="heart_position">
        <img src="../../../assets/images/heart.png" alt="" />
      </div>
      <div class="container">
        <div class="groupingFlex">
          <div>
            <h3> {{$t('home.CollectWithALMujtama')}}</h3>
            <p>
              {{$t('home.CollectWithALMujtamaDescription')}}
            </p>
            <div class="line"></div>
          </div>
          <router-link to="/about-us" ><b-icon icon="heart-fill" font-scale="5" class="icon"></b-icon>  {{$t('home.RegisterNow')}}</router-link>
        </div>
      </div>
    </section>

    <section class="distinguished_clients">
      <div class="description">
        <div class="img_container_position">
          <img src="../../../assets/images/offersHeart.png" alt="" />
        </div>
        <h3> {{$t('home.TheLoyaltyClientProgram')}}</h3>
        <h4> 
          {{$t('home.TheLoyaltyClientProgramDescription')}}
        </h4>
        <p>
          {{$t('home.TheLoyaltyClientProgramDescriptionTwo')}}
        </p>
        
      </div>
      <div class="imgs">
        <div class="img_container">
          <img src="../../../assets/images/offer1.png" alt="" />
        </div>
        <div class="img_container">
          <img src="../../../assets/images/offer2.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      pageNumber: 0,
      indicatorPerformance: {},
      key_metrics: [],
      pages: [
        {
          description:
            "تعلن شركة المجتمع الرائدة الطبية عن موافقة مجلس الإدارة في اجتماعه المنعقد بتاريخ 04/12/2023م على قبول استقالة عضو مجلس الإدارة الأستاذ/ هشام عمر باروم ( غير تنفيذي ) من منصبه وذلك بتاريخ 04/12/2023م على أن تسري الاستقالة من تاريخ تقديم الاستقالة في 04/12/2023م ويعود سبب الاستقالة إلى انتهاء ترخيص الجمعية العامة المنعقدة بتاريخ 06/10/2022م بشأن السماح له بالاشتراك في عضوية مجلس إدارة شركة انوفا السعودية للرعاية الصحية.",
          seconde_description:
            "وقد عبر العضو عن شكره وامتنانه لمساهمي الشركة وأعضاء المجلس على الفترة التي قضاها كعضو في مجلس الإدارة، ويتوجه مجلس إدارة الشركة بجزيل الشكر والتقدير للأستاذ/ هشام عمر باروم متمنيين له دوام التوفيق والنجاح.",
          img: require("../../../assets/images/newsTrueSign.jpg"),
        },
        {
          description:
            "تعلن شركة المجتمع الرائدة الطبية (“الشركة”) عن عزم الشركة تسجيل وإدراج أسهم الشركة البالغة (9,500,000) سهم عادي ادراجاً مباشراً في السوق الموازية “نمو” ، و سيتم الإعلان عن تاريخ الإدراج قريباً",
          seconde_description:
            "انضموا إلينا في الفرع الجديد واستفيدوا من خدماتنا المتميزة صيدليات_المجتمع #الريادة_في_خدمة_المجتمع",
          img: require("../../../assets/images/new7.jpg"),
        },
        {
          description:this.$t('slider.newOpening'),
          seconde_description:this.$t('slider.newOpeningDescription'),
          img: require("../../../assets/images/opening.png"),
        },
        {
          description:
            "كلية الصيدلية بجامعة الملك عبد العزيز بمدينة جدة كل الشكر للراعي الذهبي صيدلية المجتمع لمساهمتهم في نجاح فاعليتنا",
          seconde_description: "#صيدلية_المجتمع",
          img: require("../../../assets/images/openening2023.png"),
        },
        {
          description:
            "قامت إدارة شركة المجتمع الرائدة الطبية بتكريم الصيدلي محمد أحمد محمد علي لحصوله على المركز الرابع حسب تقييم الأداء في شهر سبتمبر.",
            descriptionTwo: 'صيدليات المجتمع تتمنى له ولجميع شركاء النجاح المزيد من التوفيق والسداد',
          img: require("../../../assets/images/gift.png"),
        },
      ],
    };
  },
  mounted() {
    this.getIndicatorPerformancekey_metrics();
  },
  methods: {
    changePageNumber(type) {
      if (type == "left") {
        if (this.pageNumber <= 3 && this.pageNumber > -1) {
          this.pageNumber = this.pageNumber + 1;
        } else {
          this.pageNumber = 0;
        }
      } else if (type == "right") {
        if (this.pageNumber <= 4 && this.pageNumber > 0) {
          this.pageNumber = this.pageNumber - 1;
        } else {
          this.pageNumber = 4;
        }
      }
    },
    getIndicatorPerformancekey_metrics(){
      axios.create({
          baseURL: 'https://app.almujtama.com.sa/api',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('token'),
              // localization: store.state.localization
          },
          params:{
            category: 'key_metrics'
          }
      })
      .get('/indicatorPerformance')
      .then(res => {
      console.log(res, 'all data key_metrics')
        this.key_metrics = res.data.data
      });
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
    > div,
    a {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
      @media (max-width: 991px) {
        width: 50%;
      }
    }
    .numbers {
      flex-direction: column;
      .number {
        font-size: 54px;
        font-weight: 900;
        color: #79a18f;
        font-family: flatMedium;
        @media (max-width: 991px) {
          font-size: 24px;
        }
      }
      .line {
        height: 2px;
        width: 60px;
        background-color: #d8d253;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 13px;
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
    @media (max-width: 991px) {
      display: none;
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
      a{
        
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
      transition: .3s ease-in-out;
      font-family: flatMedium;
      &:hover{
        color: #d1d13c;
      }
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
          cursor: pointer;
          transition: .3s ease-in-out;
          
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
            margin-bottom: 0;
          }
          &:hover{
            h4 {
              color: #d1d13c;
            }
            .icon_container {
              background-color: #d1d13c;
            }
            
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
    @media (max-width: 991px) {
      width: 90%;
      padding: 20px;
      order: 2;
    }
    span {
      font-size: 36px;
      color: #2b5933;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 22px;
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
        background-color: #d8d253;
        cursor: pointer;
        margin-top: 30px;
        .icon {
          font-size: 16px !important;
        }
      }
      .arrow:last-child {
        border: 0;
        margin-right: 10px;
      }
    }
  }
  .img_container {
    margin-right: -50px;
    width: 530px;
    @media (max-width: 1200px) {
      width: 38%;
    }
    @media (max-width: 1450px) {
      margin: 30px 0 0 0;
    }
    @media (max-width: 991px) {
      order: 1;
      width: 90%;
      margin-bottom: 10px;
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
      width: 20%;
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
        font-family: flatMedium;
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
    flex-wrap: wrap;

    > div {
      width: 65%;
      @media (max-width: 991px) {
        width: 100%;
      }
      h3 {
        font-size: 20px;
        color: #184c1f;
        font-weight: 900;
        font-family: flatMedium;
        @media (max-width: 991px) {
          text-align: center;
        }
      }
      p {
        font-size: 23px;
        color: #fff;
        font-weight: 800;
        font-weight: 500;
        margin-top: 30px;
        @media (max-width: 1200px) {
          font-size: 20px;
        }
        @media (max-width: 991px) {
          text-align: center;
        }
      }
      .line {
        height: 3px;
        width: 70px;
        background-color: #d1d13c;
        margin-top: 30px;
        @media (max-width: 991px) {
        margin: 20px auto;
      }
      }
    }
    a {
      background-color: #d8d253;
      width: 193px;
      height: 58px;
      text-align: center;
      border-radius: 4px;
      margin: auto 40px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #fff;
      @media (max-width: 991px) {
        margin: 20px auto 0 auto;
      }
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
      padding: 70px 15px 10px 15px;
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

.en{
  .home_page_description_sections{
    .society{
      span{
        margin: 0 20px 0 0;
      }
    }
    .list{
      ul{
        li{
          .icon_container{
            margin: 0 10px 0 0;
          }
        }
      }
    }
  }

  .new_pharmacy{
    .description{
      .arrows{
        .arrow:first-child{
          order: 2;
          margin: 30px 0 0 10px;
        }
        .arrow:last-child{
          
          order: 1;
        }
      }
    }
  }

  .grouping{
    .groupingFlex{
      a{
        margin: auto 0 auto 40px;
      }
    }
  }

  .distinguished_clients{
    .description{
      .img_container_position{
        left: unset;
        right: 50px;
      }
    }
    .img_container{
      margin: 0 0 0 30px;
      @media (max-width: 991px) {
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>