<template>
  <div class="branches">
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>تعرف علينا</h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">الرئيسية</router-link>
              <span>>></span>
              <h3>فروعنا</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../assets/images/aboutUslogo.png" alt="about us" />
          </div>
        </div>
      </div>
    </header>

    <div class="title">
      <h2>الفروع</h2>
    </div>

    <div class="branches_filters">
      <div class="container">
        <div class="inputs">
          <div class="input_container">
            <input type="text" placeholder="بحث" />
          </div>
          <div class="input_container">
            <input type="text" placeholder="البحث" />
          </div>
          <select>
            <option value="" disabled selected>بحق فى المدينة</option>
          </select>
          <button>
            فروعنا على الخريطة
            <img src="../../assets/images/mapLocation.png" alt="" />
          </button>
        </div>
      </div>
    </div>

    <section class="branches_information">
      <div class="container">
        <div class="branches_container">
          <div class="branch" v-for="branch in branches" :key="branch.id">
            <div class="img_container">
              <img src="../../assets/images/branch.png" alt="" />
            </div>
            <div class="address">
              <h3>{{branch.name_3}}</h3>
              <h3>{{branch.address}}</h3>
            </div>
            <div class="phone">
              <h3>رقم الهاتف</h3>
              <h3>{{branch.mobile}}</h3>
            </div>
            <div class="times">
              <h4>اوقات الدوام</h4>
              <h3>{{branch.time}}</h3>
            </div>
            <div class="services">
              <h4>خدمات فرع إضافية</h4>
              <h3>
                <div class="true">
                  <img src="../../assets/images/greenTrue.png" alt="" />
                </div>
                {{branch.services}}
              </h3>
            </div>
            <a target="_blank" :href="branch.location">
              عرض على الخريطة
              <img src="../../assets/images/mapLocation.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Branches",
  data(){
    return{
      branches: []
    }
  },
  mounted(){
    this.getBranches();
  },
  methods:{
    getBranches(){
      axios.create({
          baseURL: 'http://m.bare3.business/api',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('token'),
              // localization: store.state.localization
          }
      })
      .get('/import')
      .then(res => {
        console.log(res.data)
        this.branches = res.data
          
      });
    }
  }
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

.title {
  h2 {
    font-size: 42px;
    font-weight: 800;
    color: #6da48d;
    text-align: center;
    margin: 20px 0;
  }
}

.branches_filters {
  .inputs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .input_container {
      position: relative;
      margin-left: 30px;
    }
    select,
    input {
      border: 1px solid #dddddd;
      border-radius: 5px;
      width: 271px;
      padding: 10px;
      margin-bottom: 10px;
    }
    button {
      background-color: #d8d253;
      width: 243px;
      font-weight: 600;
      margin: 0 30px 10px 0;
      padding: 10px;
      border: 0;
      font-size: 16px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      img {
        margin-right: 10px;
      }
    }
  }
}

.branches_information {
  .branches_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0px 10px 50px #21343014;
    padding: 100px;
    @media (max-width: 1200px) {
      padding: 50px 20px;
    }
    .branch {
      box-shadow: 0px 10px 50px #21343014;
      padding: 10px;
      margin-bottom: 30px;
      width: 31%;
      @media (max-width: 991px) {
        width: 45%;
      }
      @media (max-width: 678px) {
        width: 100%;
      }
      .img_container {
        img {
          margin: 0 auto 10px auto;
          display: block;
          max-width: 100%;
        }
      }
      .address,
      .phone,
      .times {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
        text-align: center;
      }
      .services {
        padding: 10px;
      }
      h3 {
        font-size: 14px;
        color: #78a28f;
        text-align: center;
        font-weight: 600;

        .true {
          width: 14px;
          height: 14px;
          background-color: #78a28f;
          position: relative;
          border-radius: 50%;
          margin-left: 10px;
          img {
            position: absolute;
            bottom: 1px;
            left: 1px;
          }
        }
      }
      h4 {
        font-size: 14px;
        font-weight: 600;
        color: #2b5933;
        text-align: center;
      }
      .services {
        h3 {
          display: flex;
          align-items: center;
        }
      }
      a {
        width: 80%;
        border: 0;
        background-color: #d8d253;
        padding: 10px;
        font-size: 16px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto 10px auto;
        border-radius: 5px;
        img {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>