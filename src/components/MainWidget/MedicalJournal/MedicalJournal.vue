<template>
  <div>
    <header class="aboutUs_header">
      <div class="container">
        <div class="headerContainer">
          <div class="side">
            <h2>المجلة الإلكترونية </h2>
            <div class="line"></div>
            <div class="breadCrobs">
              <router-link to="/">الرئيسية</router-link>
              <span>>></span>
              <h3>المجلة الطبية</h3>
            </div>
          </div>
          <div class="side">
            <img src="../../../assets/images/aboutUslogo.png" alt="about us" />
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
            <div class="linRow" v-for="articlesSection in articlesSections" :key="articlesSection.id">
              <h4 @click="() => getCategoryFilter(articlesSection.id)">{{articlesSection.translation[0].name}}</h4>
              <span>{{articlesSection.code}}</span>
            </div>
            

            <div class="title_line">
              <div class="small_line"></div>
              <h3>الأقسام الفرعية</h3>
            </div>
            <div class="linRow" v-for="articlesSubSection in articlesSubSections" :key="articlesSubSection.id">
              <h4 @click="() => getSubCategoryFilter(articlesSubSection.id)"> {{articlesSubSection.translation[0].name}} </h4>
              <!-- <span>10</span> -->
            </div>

            <div class="hash_tag">
              <h3>هاشتاق</h3>
              <div class="single_hash" v-for="article in articles" :key="article.id">#{{article.translation[0].tags}}</div>
            </div>
          </div>

          <div class="journals">
            <div v-for="article in articles" :key="article.id">
              <div class="single_journal">
                <div class="img_container">
                  <img :src="article.image" alt="" />
                </div>
                <div class="date">
                  <img src="../../../assets/images/calender.png" alt="" />
                  15/5//2022
                </div>
              </div>
              <h3>{{article.translation[0].name}}</h3>
              <div class="line"></div>
              <p> {{article.translation[0].description}} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
import Request from '../../../services/Request';
export default {
  name: "MedicalJournal",
  data(){
    return{
      articles: [],
      articlesSections: [],
      articlesSubSections: [],
      category_id: '',
      subcategory_id: ''
    }
  },
  mounted(){
    this.getArticles();
    this.getArticlesSections();
    this.getArticlesSubSections();
  },
  methods:{
    getCategoryFilter(id){
      Request.getFilteredData('api/article', {
        category_id: id,
      })
      .then(res => {
        console.log(res)
        this.articles = res.data.data
      })
    },
    getSubCategoryFilter(id){
      Request.getFilteredData('api/article', {
        subcategory_id: id,
      })
      .then(res => {
        console.log(res)
        this.articles = res.data.data
      })
    },
    getArticles() {
      axios.get('https://app.almujtama.com.sa/api/article', {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
              'Authorization': 'Bearer '+ localStorage.getItem('token'),
          },
      })
          .then((response) => {
          console.log(response)
          this.articles = response.data.data
          })
          .catch((error) => {
          console.error('Error fetching data from API:', error);
          });
    },
    getArticlesSections(){
        axios.get(`https://app.almujtama.com.sa/admin/magazineCategory`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        })
        .then((response) => {
            console.log(response, 'mmmmmm')
            this.articlesSections = response.data.data
        
        })
        .catch((error) => {
        console.error('Error fetching data from API:', error);
        });
    },
    getArticlesSubSections(){
        axios.get(`https://app.almujtama.com.sa/admin/magazineSubcategory`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
            params:{
                magazine_category_id : this.$route.params.id
            }
        })
        .then((response) => {
            console.log(response, 'mmmmmm')
            this.articlesSubSections = response.data.data
        
        })
        .catch((error) => {
        console.error('Error fetching data from API:', error);
        });
    },
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
        cursor: pointer;
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
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
          max-height: 100%;
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