<template>
  <!-- about_us -->
  <div class="about_us">
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>{{$t('aboutUs.aboutUs')}}</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/"> {{$t('landing.Home')}} </router-link>
              <span>>></span>
              <h3>{{$t('aboutUs.aboutUs')}}</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <section class="Company_overview">
      <div class="container">
        <div class="Company_overview_container">
          <img
            class="rightBg"
            src="../../../assets/images/aboutCompanyBg.svg"
            alt=""
          />
          <div class="img_container">
            <img src="../../../assets/images/group.png" alt="" />
          </div>

          <div class="description">
            <h3>{{$t('home.AbouttheGroup')}}</h3>
            <div class="line"></div>

            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint1')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint2')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint3')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint4')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint5')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint6')}}</p>
            <p>{{$t('aboutUs.AbouttheGroupDescriptionpoint7')}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="know_us">
      <img
        class="knowUsRightBg"
        src="../../../assets/images/knowUsLeftBg.png"
        alt=""
      />
      <img
        class="knowUsLeftBg"
        src="../../../assets/images/knowUsRightBg.png"
        alt=""
      />
      <div class="container">
        <div class="know_us_container">
          <h3>{{$t('aboutUs.aboutUs')}}</h3>
          <div class="line"></div>
          <div class="description">
            <div class="img_container">
              <img src="../../../assets/images/new12.png" alt="" />
            </div>
            <div class="des">
              <h4> {{$t('aboutUs.OurVision')}}</h4>
              <p> {{$t('aboutUs.OurVision')}}</p>
            </div>
          </div>
          <div class="description">
            <div class="img_container">
              <img src="../../../assets/images/rocket.png" alt="" />
            </div>
            <div class="des">
              <h4> {{$t('aboutUs.OurVision')}}</h4>
              <ul>
                <li><p>{{$t('aboutUs.OurMessageDescription')}}</p></li>
                <li><p>{{$t('aboutUs.OurMessageDescription2')}}</p></li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="organizational_chart">
      <img
        class="rightBg"
        src="../../../assets/images/aboutCompanyBg.svg"
        alt=""
      />
      <div class="container">
        <h3>{{$t('aboutUs.OrganizationalChart')}}</h3>
        <div class="line"></div>
        <p> {{$t('aboutUs.OrganizationalChart')}} </p>
        <p class="bg_p">{{$t('aboutUs.OrganizationalChart')}}</p>
        <div class="img_container">
          <img src="../../../assets/images/employees.png" alt="" v-if="lang == 'ar'"/>
          <img src="../../../assets/images/employeesEnglish.png" alt="" v-if="lang == 'en'" />
        </div>
      </div>
    </section>

    <section class="our_services">
      <div class="container">
        <h3> {{$t('home.OurServices')}}</h3>
        <div class="line"></div>
        <div class="services">
          <div class="service">
            <div class="icon_container">
              <img src="../../../assets/images/new3.png" alt="" />
            </div>
            <h3> {{$t('aboutUs.OnlineCommunity')}}</h3>
            <p>{{$t('aboutUs.OnlineCommunityTitle')}}</p>
          </div>
          <div class="service">
            <div class="icon_container">
              <img src="../../../assets/images/new1.png" alt="" />
            </div>
            <h3> {{$t('aboutUs.aboutUsEMagazine')}}</h3>
            <p>{{$t('aboutUs.aboutUsEMagazineDescription')}}</p>
          </div>
          <div class="service">
            <div class="icon_container">
              <img src="../../../assets/images/new2.png" alt="" />
            </div>
            <h3> {{$t('aboutUs.aboutUsOnlineStore')}}</h3>
            <p>{{$t('aboutUs.aboutUsOnlineStoreDescription')}}</p>
          </div>
          <div class="service">
            <div class="icon_container">
              <img src="../../../assets/images/new11.png" alt="" />
            </div>
            <h3> {{$t('aboutUs.CustomerService')}}</h3>
            <p>{{$t('aboutUs.CustomerServiceDescription')}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="Community_contributions">
      <img
        class="sharingRightBg"
        src="../../../assets/images/sharing.png"
        alt=""
      />
      <img class="sharingLeftBg" src="../../../assets/images/sharing.png" alt="" />
      <div class="container">
        <h3> {{$t('aboutUs.CommunityContributions')}}</h3>
        <p>{{$t('aboutUs.CommunityContributionsDescription')}}</p>
        <div class="line"></div>
        <p>
          {{$t('aboutUs.CommunityContributionsPoint1')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint2')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint3')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint4')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint5')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint6')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint7')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint8')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint9')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint10')}}<br>
          {{$t('aboutUs.CommunityContributionsPoint11')}}<br>
        </p>
      </div>
    </section>

    <section class="our_branches">
      <div class="container">
        <h3>{{$t('home.homeOurBranches')}}</h3>
        <div class="line"></div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.branchesspreadwidely')}} </p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.branchesOnService')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.branchesUnderEstablishment')}}</p>
        </div>

        <h3> {{$t('aboutUs.OurWarehouses')}}</h3>
        <div class="line"></div>

        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.OurWarehousesDecription1')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.OurWarehousesDecription2')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.OurWarehousesDecription3')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p>{{$t('aboutUs.OurWarehousesDecription4')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p>{{$t('aboutUs.OurWarehousesDecription5')}}</p>
        </div>
        <div class="branch_line">
          <div class="icon_container">
            <b-icon icon="check2" font-scale="5" class="icon"></b-icon>
          </div>
          <p> {{$t('aboutUs.OurWarehousesDecription6')}}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data(){
    return{
      lang: ''
    }
  },
  mounted(){
    this.lang = localStorage.getItem('lang')
  }
};
</script>
<style lang="scss" scoped>
.about_us {
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

  .Company_overview {
    margin: 100px 0;
    position: relative;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    .rightBg {
      position: absolute;
      right: 50px;
      top: -27px;
    }
    .Company_overview_container {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .img_container {
        width: 45%;
        position: relative;
        @media (max-width: 1200px) {
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        img {
          max-width: 100%;
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
      }

      .line {
        @media (max-width: 1200px) {
          margin: 20px auto;
        }
      }
      .description {
        width: 50%;
        @media (max-width: 1200px) {
          width: 100%;
          text-align: center;
        }
        h4 {
          font-size: 20px;
          color: #2b5933;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 40px;
          font-weight: 800;
          color: #78a28f;
          margin-bottom: 10px;
          font-family: flatMedium;
        }
        p {
          font-size: 18px;
          color: #6f7775;
          @media (max-width: 1200px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  .know_us {
    background-color: #f5f5f5;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    .knowUsRightBg {
      position: absolute;
      right: -223px;
      bottom: -331px;
      @media (max-width: 991px) {
        right: -290px;
        bottom: -356px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    .knowUsLeftBg {
      position: absolute;
      left: -184px;
      top: -131px;
      @media (max-width: 991px) {
        left: -191px;
        top: -316px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    .know_us_container {
      position: relative;
      z-index: 2;
      > h3 {
        font-size: 40px;
        font-weight: 800;
        color: #78a28f;
        text-align: center;
        font-family: flatMedium;
      }
      .line {
        margin: 30px auto;
      }
      .description {
        display: flex;
        align-items: center;
        margin-top: 80px;
        @media (max-width: 991px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        }
        .img_container {
          border-radius: 50%;
          background-color: #d8d253;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90px;
          height: 90px;
          margin-left: 20px;
          @media (max-width: 991px) {
            margin: 20px 0;
          }
        }
        .des {
          margin-right: 20px;
          @media (max-width: 991px) {
            text-align: center;
          }
          li{
            list-style: unset;
          }
          > h4 {
            font-size: 20px;
            font-weight: 600;
            color: #2b5933;
            margin-bottom: 30px;
            font-family: flatMedium;
          }
          > p {
            font-size: 23px;
            font-weight: 600;
            color: #78a28f;
          }
        }
      }
    }
  }

  .organizational_chart {
    padding: 100px 0 0 0;
    position: relative;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    .rightBg {
      position: absolute;
      top: 7px;
      right: 104px;
      width: 265px;
      display: none;
    }
    h3 {
      font-size: 40px;
      font-weight: 800;
      color: #78a28f;
      text-align: center;
      position: relative;
      z-index: 2;
      font-family: flatMedium;
    }
    .line {
      margin: 30px auto;
      position: relative;
      z-index: 2;
    }
    p {
      font-size: 19px;
      color: #6f7775;
      margin-bottom: 20px;
      position: relative;
      z-index: 2;
    }
    .bg_p {
      font-size: 16px;
      color: #78a28f;
      background-color: #f5f5f5;
      padding: 10px;
      text-align: center;
      border-radius: 4px;
    }
    .img_container {
      margin: auto;
      img {
        max-width: 100%;
      }
    }
  }

  .our_services {
    padding: 20px 0 50px 0;
    h3 {
      font-size: 40px;
      font-weight: 800;
      color: #78a28f;
      text-align: center;
      font-family: flatMedium;
    }
    .line {
      margin: 30px auto;
    }

    .services {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .service {
        text-align: center;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 10px #ddd;
        width: 24%;
        @media (max-width: 991px) {
          width: 45%;
          margin-bottom: 20px;
        }
        @media (max-width: 576px) {
          width: 100%;
          margin-bottom: 20px;
        }
        .icon_container {
          border-radius: 50%;
          background-color: #d8d253;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90px;
          height: 90px;
          margin: 0 auto 20px auto;
          padding: 16px;
          img{
            max-width: 80%;
          }
        }
        h3 {
          font-size: 22px;
          color: #78a28f;
          font-weight: 600;
          font-family: flatMedium;
        }
        p {
          font-size: 15px;
          color: #6f7775;
        }
      }
    }
  }
  .Community_contributions {
    padding: 100px 0;
    background-color: #78a28f;
    position: relative;
    overflow: hidden;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    .sharingRightBg {
      position: absolute;
      right: -301px;
      bottom: -444px;
      display: none;
      @media (max-width: 991px) {
        right: -290px;
        bottom: -356px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    .sharingLeftBg {
      position: absolute;
      left: -218px;
      top: -186px;
      display: none;
      @media (max-width: 991px) {
        left: -191px;
        top: -316px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    h3 {
      font-size: 20px;
      font-weight: 900;
      color: #184c1f;
      position: relative;
      z-index: 2;
      font-family: flatMedium;
    }
    p {
      font-size: 23px;
      font-weight: 600;
      color: #fff;
      position: relative;
      z-index: 2;
      @media (max-width: 991px) {
        font-size: 18px;
      }
    }
    .line {
      margin: 0 0 30px 0;
      position: relative;
      z-index: 2;
    }
  }

  .our_branches {
    padding: 100px 0;
    @media (max-width: 991px) {
      padding: 50px 0;
    }
    h3 {
      font-size: 40px;
      font-weight: 800;
      color: #78a28f;
      margin: 30px 0;
      font-family: flatMedium;
      @media (max-width: 991px) {
        font-size: 30px;
      }
    }
    .line {
      margin-bottom: 30px;
    }
    .branch_line {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .icon_container {
        width: 30px;
        height: 30px;
        background-color: #2b5933;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        border-radius: 50%;
        .icon {
          font-size: 18px !important;
          color: #fff;
        }
      }
      p {
        font-size: 18px;
        font-weight: 700;
        color: #78a28f;
        margin-bottom: 0;
        width: calc(100% - 66px);
        @media (max-width: 991px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>