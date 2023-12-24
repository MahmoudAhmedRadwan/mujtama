<template>
  <div>
    <header class="landing_header">
      <div class="menu_toggle" @click="menuToggleClick">
        <b-icon icon="justify" font-scale="5" class="icon"></b-icon>
      </div>

      <div :class=" menuToggle == true ? 'mobile_menu active_mobile_menu' : 'mobile_menu'">
          <div class="social_mobile" @click="menuToggleClick">
            <a href="https://www.facebook.com/almujtamapharmacy"  target="_blank" >
              <b-icon icon="facebook" font-scale="5" class="icon"></b-icon>
            </a>
            <a href="https://www.instagram.com/almujtamapharma/?hl=ar">
              <b-icon icon="instagram" font-scale="5" class="icon"></b-icon>
            </a>
            <a href="https://twitter.com/almujtamapharma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" >
              <img src="../../assets/images/twitter.png" alt="twitter" />
            </a>
          </div>
          <div class="email" @click="menuToggleClick">
            <b-icon icon="envelope-fill" font-scale="5" class="icon"></b-icon>
            info@almujtama.com.sa
          </div>
          <div class="phone">
            <b-icon icon="telephone-fill" font-scale="5" class="icon"></b-icon>
            920008144
          </div>
          <div class="mobile_links" @click="menuToggleClick">
            <ul>
            <li>
              <router-link to="/" :class="hoverType == 'main' ? 'activeLink' : ''">
                الرئيسية
              </router-link>
            </li>

            <li>
              <router-link
                to="/about-us"
                :class="hoverType == 'about-us' ? 'activeLink' : ''"
              >
                <span>+</span>تعرف علينا
              </router-link>
            </li>
            <li>
              <router-link to="Error"><span>+</span>المتجر </router-link>
            </li>
            <li>
              <router-link
                to="/medical-journal"
                :class="hoverType == 'medical-journal' ? 'activeLink' : ''"
                ><span>+</span>المجلة الإلكترونية
              </router-link>
            </li>
            <li>
              <router-link
                to="/form"
                :class="hoverType == 'form' ? 'activeLink' : ''"
                ><span>+</span>الوظائف
              </router-link>
            </li>
            <li>
              <router-link
                to="/branches"
                :class="hoverType == 'branches' ? 'activeLink' : ''"
                ><span>+</span>الفروع
              </router-link>
            </li>
            <li>
              <router-link
                to="/investor-relations"
                :class="hoverType == 'investor-relations' ? 'activeLink' : ''"
              >
                <span>+</span>علاقات المستثمرين
              </router-link>
            </li>
          </ul>
          </div>
          <div class="lang">
            <h3>عربي</h3>
            <select>
              <option value="">Ar</option>
              <option value="">En</option>
            </select>
          </div>
        </div>

      <div class="social">
        <a
          href="https://www.facebook.com/almujtamapharma/?locale=ar_AR"
          target="_blank"
          ><b-icon icon="facebook" font-scale="5" class="icon"></b-icon
        ></a>

        <a href="https://www.instagram.com/almujtamapharma/?hl=ar"
          ><b-icon icon="instagram" font-scale="5" class="icon"></b-icon
        ></a>
        <a
          href="https://twitter.com/almujtamapharma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          ><img src="../../assets/images/twitter.png" alt=""
        /></a>
      </div>
      <div class="email">
        <div class="email">
          info@almujtama.com.sa
          <b-icon icon="envelope-fill" font-scale="5" class="icon"></b-icon>
        </div>
        <div class="phone">
          920008144
          <b-icon icon="telephone-fill" font-scale="5" class="icon"></b-icon>
        </div>
      </div>
      <div class="lang">
        <h3>عربي</h3>
        <select v-model="localelang" @change="changeUrl">
          <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">
              {{ lang }}
          </option>
        </select>
      </div>

      <div class="links" @click="linkUrlCheck">
        <ul>
          <li>
            <router-link
              to="/"
              :class="hoverType == 'main' ? 'activeLink' : ''"
            >
             {{$t('landing.Home')}}
            </router-link>
          </li>

          <li>
            <router-link
              to="/about-us"
              :class="hoverType == 'about-us' ? 'activeLink' : ''"
            >
              <span>+</span>{{$t('landing.AboutUs')}}
            </router-link>
          </li>
          <li>
            <router-link to="Error"><span>+</span> {{$t('landing.Store')}}</router-link>
          </li>
          <li>
            <router-link
              to="/medical-journal"
              :class="hoverType == 'medical-journal' ? 'activeLink' : ''"
              ><span>+</span> {{$t('landing.EMagazine')}}
            </router-link>
          </li>
          <li>
            <router-link
              to="/form"
              :class="hoverType == 'form' ? 'activeLink' : ''"
              ><span>+</span> {{$t('landing.Jobs')}}
            </router-link>
          </li>
          <li>
            <router-link
              to="/branches"
              :class="hoverType == 'branches' ? 'activeLink' : ''"
            > 
              <span>+</span> {{$t('landing.OurBranches')}}
            </router-link> 
          </li>
          <li>
            <router-link
              to="/investor-relations"
              :class="hoverType == 'investor-relations' ? 'activeLink' : ''"
            >
              <span>+</span> {{$t('landing.InvestorRelations')}}
            </router-link>
          </li>
          
        </ul>
      </div>
    </header>
    <router-view></router-view>

    <footer class="landing_footer">
      <div class="footer_body container">
        <div class="logo">
          <img src="../../assets/images/footerLogoNew.png" alt="" />
        </div>
        <div class="shortCuts">
          <h3>{{$t('landing.Pages')}}</h3>
          <ul>
            <li><router-link to="/about-us"> {{$t('landing.AboutUs')}} </router-link></li>
            <li><router-link to="/Error">  {{$t('landing.Store')}}</router-link></li>
            <li><router-link to="/Not-found">   {{$t('landing.EMagazine')}}</router-link></li>
            <li><router-link to="/branches">  {{$t('landing.OurBranches')}}</router-link></li>
            <li><router-link to="/investor-relations"> {{$t('landing.InvestorRelations')}}</router-link></li>
            <li><router-link to=""> {{$t('landing.Collectwithalmujtamajobs')}}</router-link></li>
            <li><router-link to="/form"> {{$t('landing.Jobs')}}</router-link></li>
          </ul>
        </div>
        <div class="contacts">
          <h3>  {{$t('landing.ContactInformation')}}</h3>
          <ul>
            <li>
              <div class="icon_container">
                <b-icon icon="telephone-fill" font-scale="5" class="icon"></b-icon>
              </div>
              <div class="words">
                <h4> {{$t('landing.PhoneNumber')}}</h4>
                <h5>920008144</h5>
              </div>
            </li>
            <li>
              <div class="icon_container">
                <b-icon icon="envelope-fill" font-scale="5" class="icon"></b-icon>
              </div>
              <div class="words">
                <h4>{{$t('landing.Email')}}</h4>
                <h5>info@almujtama.com.sa</h5>
              </div>
            </li>
          </ul>
        </div>
        <div class="contact_info">
          <h3> {{$t('landing.ContactInformation')}}</h3>
          <ul>
            <li>{{$t('landing.Jobs')}} : 937  </li>
            <li>{{$t('landing.LicenseNo')}}: 2600011949  </li>
            <li>{{$t('landing.FoodAndDrugsAdminNo')}}: 19999  </li>
            <li> {{$t('landing.VigilanceProgramme')}}: https://ade.sfda.gov.sa  </li>
          </ul>
        </div>
        <div class="call_us">
          <router-link to="/contact-us">{{$t('landing.ContactUs')}}</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "landing",
  data() {
    return {
      hoverType: "",
      menuToggle: false,
      localelang: 'ar',
    };
  },
  mounted() {
    this.linkUrlCheck();
  },
  methods: {
    changeUrl(){
      this.$i18n.locale = this.localelang
      localStorage.setItem('lang', this.localelang)
      // this.$router.push({
      //     params: {lang: this.localelang}
      // })
      if (this.$i18n.locale === "ar") {
          document.querySelector("html").style.direction = "rtl";
          document.querySelector("body").style.direction = "rtl";
      } else {
          document.querySelector("html").style.direction = "ltr";
          document.querySelector("body").style.direction = "ltr";
      }
    },
    menuToggleClick(){
      this.menuToggle = !this.menuToggle
    },
    linkUrlCheck() {
      if (window.location.href.indexOf("medical-journal") > -1) {
        this.hoverType = "medical-journal";
      } else if (window.location.href.indexOf("about-us") > -1) {
        this.hoverType = "about-us";
      } else if (window.location.href.indexOf("form") > -1) {
        this.hoverType = "form";
      } else if (window.location.href.indexOf("investor-relations") > -1) {
        this.hoverType = "investor-relations";
      } else if (window.location.href.indexOf("branches") > -1) {
        this.hoverType = "branches";
      } else {
        this.hoverType = "main";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.landing_header {
  background-color: #2b5933;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 20%;
  position: relative;
  @media (max-width: 1450px) {
    padding: 10px 100px;
  }
  @media (max-width: 991px) {
    padding: 10px 30px;
  }

  .menu_toggle{
    display: none;
    > .icon{
      color: #FFF;
      font-size: 40px !important;
    }
    @media (max-width: 991px) {
      display: block;
    }
  }
  .mobile_menu{
    position: absolute;
    width: 100%;
    background-color: #2b5933;
    top: 51px;
    left: 0;
    right: 0;
    padding: 20px;
    z-index: 99;
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: .3s ease-in-out;
    .social_mobile{
      display: flex;
      align-items: center;
      .icon{
        color: #fff;
        font-size: 30px !important;
        margin-left: 20px;
      }
      img{
        width: 25px;
      }
    }
    .email,
    .phone{
      font-size: 20px;
      color: #FFF;
      display: flex;
      align-items: center;
      margin-top: 20px;
      .icon{
        font-size: 30px !important;
        margin: 0 0 0 10px;
      }
    }
    .mobile_links{
      margin-top: 30px;
      ul{
        li{
          margin-bottom: 10px;
          a{
            font-size: 20px;
            color: #FFF;
          }
        }
      }
    }
    .lang{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 30px;
      h3{
        margin-left: 10px;
      }
    }
  }

  .active_mobile_menu{
    height: auto;
    padding: 20px;
  }

  .social,
  .email,
  .lang {
    display: flex;
    align-items: center;
    color: #fff;
    @media (max-width: 991px) {
      display: none;
    }
    .icon {
      font-size: 21px !important;
      color: #fff;
      margin: 0 10px;
    }
    img {
      margin: 0 10px 6px 0;
    }
  }
  .lang {
    justify-content: flex-end;
    h3 {
      font-size: 20px;
    }
    select {
      font-size: 20px;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 7px;
      padding: 3px 4px;
      color: #fff;
      margin-right: 10px;
      option {
        color: #2b5933;
        font-weight: 600;
      }
    }
  }
  .links {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -70px;
    z-index: 4;
    @media (max-width: 991px) {
      display: none;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        margin-left: 20px;
        list-style: none;
        a {
          font-size: 20px;
          text-decoration: none;
          color: #2b5933;
          font-weight: 600;
          transition: .2s ease-in-out;
          &:hover{
            color: #d8d253;
          }
          @media (max-width: 991px) {
            font-size: 14px;
          }
          > span {
            color: #2b5933;
          }
        }
      }
    }
  }
}
.activeLink {
  color: #d8d253 !important;
}

.landing_footer {
  margin-top: 100px;
  .footer_body {
    display: flex;
    @media (max-width: 991px) {
      flex-direction: column;
    }
    .logo {
      margin-left: 100px;
      @media (max-width: 1399px) {
        margin-left: 50px;
      }
      @media (max-width: 1199px) {
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        margin: 0 0 20px 0;
      }
    }
    .shortCuts {
      margin-left: 200px;
      @media (max-width: 1399px) {
        margin-left: 70px;
      }
      @media (max-width: 1199px) {
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        margin: 0 0 20px 0;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #78a28f;
        margin-bottom: 20px;
        font-family: flatMedium;
      }
      ul {
        li {
          margin-bottom: 5px;
          a {
            font-size: 16px;
            font-weight: 600;
            color: #78a28f;
            white-space: nowrap;
            transition: .3s ease-in-out;
            &:hover{
              color: #d8d253;
            }
          }
        }
      }
    }
    .contact_info {
      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #78a28f;
        margin-bottom: 50px;
        font-family: flatMedium;
        @media (max-width: 991px) {
          margin: 0 0 20px 0;
        }
      }
      ul {
        li {
          font-size: 16px;
          color: #6f7775;
        }
      }
    }
    .contacts {
      margin-left: 100px;
      @media (max-width: 1399px) {
        margin-left: 50px;
      }
      @media (max-width: 1199px) {
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        margin: 0 0 20px 0;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #78a28f;
        margin-bottom: 20px;
        font-family: flatMedium;
      }
      ul {
        li {
          display: flex;
          margin-bottom: 10px;
          .icon_container {
            background-color: #d8d253;
            width: 34px;
            height: 34px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-left: 10px;
            .icon {
              font-size: 16px !important;
              color: #fff;
            }
          }
          .words {
            h4 {
              font-size: 14px;
              color: #78a28f;
            }
            h5 {
              font-size: 14px;
              color: #6f7775;
            }
          }
        }
      }
    }
    .call_us {
      width: 112px;
      height: 58px;
      background-color: #d8d253;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin: 73px 30px 0 0;
      @media (max-width: 991px) {
        margin: 0 0 20px 0;
      }
      a {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .copyRights {
    background-color: #2b5933;
    padding: 10px;
    p {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      text-align: center;
      margin-bottom: 0;
    }
  }
}

@media (max-width: 1450px) {
}
</style>