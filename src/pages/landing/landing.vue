<template>
  <div>
    <header class="landing_header">
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
        <select>
          <option value="">Ar</option>
          <option value="">En</option>
        </select>
      </div>

      <div class="links" @click="linkUrlCheck">
        <ul>
          <li>
            <router-link
              to="/"
              :class="hoverType == 'main' ? 'activeLink' : ''"
            >
              الرئيسية <span>+</span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/about-us"
              :class="hoverType == 'about-us' ? 'activeLink' : ''"
            >
              تعرف علينا <span>+</span>
            </router-link>
          </li>
          <li>
            <a href="">المتجر <span>+</span></a>
          </li>
          <li>
            <a
              href=""
              :class="hoverType == 'medical-journal' ? 'activeLink' : ''"
              >المجلة الطبية <span>+</span></a
            >
          </li>
          <li>
            <router-link
              to="/form"
              :class="hoverType == 'form' ? 'activeLink' : ''"
              >الوظائف <span>+</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/investor-relations"
              :class="hoverType == 'investor-relations' ? 'activeLink' : ''"
            >
              علاقات المستثمرين <span>+</span>
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
          <h3>إختصارات</h3>
          <ul>
            <li>
              <router-link to="/investor-relations">
                علاقات المستثمرين
              </router-link>
            </li>
            <li><router-link to="/about-us"> تعرف علينا </router-link></li>
            <li><router-link to="/branches"> فروعنا </router-link></li>
            <li><router-link to=""> المتجر </router-link></li>
            <li>
              <router-link to="/medical-journal"> المجلة الطبية </router-link>
            </li>
            <li><router-link to=""> اجمع مع المجتمع </router-link></li>
            <li><router-link to="/form"> الوظائف </router-link></li>
          </ul>
        </div>
        <div class="contacts">
          <h3>معلومات التواصل</h3>
          <ul>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="telephone-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <div class="words">
                <h4>الرقم الموحد</h4>
                <h5>920008144</h5>
              </div>
            </li>
            <li>
              <div class="icon_container">
                <b-icon
                  icon="telephone-fill"
                  font-scale="5"
                  class="icon"
                ></b-icon>
              </div>
              <div class="words">
                <h4>البريد الالكتروني</h4>
                <h5>info@almujtama.com.sa</h5>
              </div>
            </li>
          </ul>
        </div>
        <div class="contact_info">
          <h3>معلومات التواصل</h3>
          <ul>
            <li>رقم وزارة الصحة الموحد: 937</li>
            <li>رقم الترخيص: 2600011949</li>
            <li>رقم هيئة الدواء والغذاء: 19999</li>
            <li>برنامج تيقظ ( مرتبط بهذا الرابط ): https://ade.sfda.gov.sa</li>
          </ul>
        </div>
        <div class="call_us">
          <router-link to="/contact-us">أتصل بنا</router-link>
        </div>
      </div>
      <div class="copyRights">
        <p>Merkulove @ 2022 Hairty Template. All Rights Reserved</p>
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
    };
  },
  mounted() {
    this.linkUrlCheck();
  },
  methods: {
    linkUrlCheck() {
      if (window.location.href.indexOf("medical-journal") > -1) {
        this.hoverType = "medical-journal";
      } else if (window.location.href.indexOf("about-us") > -1) {
        this.hoverType = "about-us";
      } else if (window.location.href.indexOf("form") > -1) {
        this.hoverType = "form";
      } else if (window.location.href.indexOf("investor-relations") > -1) {
        this.hoverType = "investor-relations";
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
  padding: 10px 20%;
  position: relative;
  @media (max-width: 1450px) {
    padding: 10px 100px;
  }
  @media (max-width: 991px) {
    padding: 10px 30px;
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
      font-size: 24px !important;
      color: #fff;
      margin: 0 10px;
    }
    img {
      margin: 0 10px;
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
      }
      ul {
        li {
          margin-bottom: 5px;
          a {
            font-size: 16px;
            font-weight: 600;
            color: #78a28f;
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