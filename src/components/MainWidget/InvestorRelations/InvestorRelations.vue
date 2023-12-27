<template>
  <!-- investor_elations -->
  <div class="investor_elations">
    <header class="investor_elations_header">
      <div class="leftRound"></div>
      <div class="rightRound"></div>
      <div class="rightSmallRound"></div>
      <div class="leftSmallRound"></div>
      <div class="container">
        <div class="header_logo">
          <img src="../../../assets/images/newLogo.png" alt="" />
        </div>
        <div class="title">
          <h2> {{$t('investor.INVESOTRSRELATION')}}</h2>
          <div class="line"></div>
          <p>{{$t('investor.INVESOTRSRELATIONDescription')}}</p>
          <a href="#results_reports">{{$t('investor.INVESOTRSRELATION')}}</a>
        </div>
        <div class="breadCrobs">
          <router-link to="/"> {{$t('landing.Home')}}</router-link>
          <span>>></span>
          <h3>{{$t('investor.INVESOTRSRELATION')}}</h3>
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
            <h3>{{$t('investor.AboutTheGroup')}}</h3>
            <div class="line"></div>

            <p> {{$t('investor.AboutTheGroupDescription1')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription2')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription3')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription4')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription5')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription6')}}</p>
            <p>{{$t('investor.AboutTheGroupDescription7')}}</p>
          </div>
        </div>
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

    

    <section class="results_reports" id="results_reports">
      <div class="container">
        <h3> {{$t('investor.ReportsAndResults')}}</h3>
        <div class="line"></div>
        <div class="content_container">
          <div class="img_container">
            <img src="../../../assets/images/reportsResults.png" alt="" />
          </div>
          <div class="content">
            <div class="content_row" v-for="reportsResult in reportsResults" :key="reportsResult.id">
              <div class="side">
                <h3>{{reportsResult.translation[0].title}}</h3>
              </div>
              <div class="side">
                <select @change="(e) => download_file(e)">
                  <option value="" selected disabled> {{$t('investor.downloadTheFile')}}</option>
                  <option :value="file.download_url" v-for="file in reportsResult.files" :key="file.id">{{file.translation[0].title}}</option>
                </select>
              </div>
            </div>
            <!-- <div class="content_row">
              <div class="side">
                <h3>القوائم المالية</h3>
              </div>
              <div class="side">
                <select @change="(e) => downloadFinancial(e)">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="30/06/2023">30/06/2023</option>
                  <option value="31/12/2021">31/12/2022</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3>التقارير</h3>
              </div>
              <div class="side">
                <select @change="(e) => downloadBoardOfDirectorsReport(e.target.value)">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="تقرير مجلس الإدارة">تقرير مجلس الإدارة</option>
                  <option value="الإستراتيجية الشركة">استراتيجية الشركة</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3>الشهادات</h3>
              </div>
              <div class="side">
                <select @change="(e) => downloadcertification(e.target.value)">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="شهادة توافق مع الشريعة">شهادة توافق مع الشريعة</option>
                </select>
              </div>
            </div>
            
            <div class="content_row">
              <div class="side">
                <h3>احصائيات و تقارير مالية</h3>
              </div>
              <div class="side">
                <button class="dis">تنزيل الملفات</button>
                 <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">نتائج النصف الأول</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3>النظام الاساس</h3>
              </div>
              <div class="side">
                <select @change="(e) => downloadcertification(e.target.value)">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="النظام الاساس">النظام الاساس</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3> مستند التسجيل </h3>
              </div>
              <div class="side">
                <select @change="(e) => downloadMV(e)">
                  <option value="" selected disabled> تنزيل الملفات </option>
                  <option value="ar">تنزيل الملفات باللغة العربية</option>
                  <option value="en">تنزيل الملفات باللغه الانجليزية</option>
                </select>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section class="yearly_reort">
      <h3> {{$t('investor.MoneyMarketDisclosure')}}</h3>
      <div class="line"></div>
      <div class="aannouncement">
        <p>{{$t('investor.MoneyMarketDisclosureDescription')}}</p>
        <div class="date_container">
          <div class="date">
            07/12/2023
            <img src="../../../assets/images/calendar-days.png" alt="">
          </div>
        </div>
      </div>
      <a target="_blank" href="https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements/issuer-announcements-details/!ut/p/z1/jZFNU8IwEIZ_CweOsku_6y0IBBAstVYgFybFWjqTNkwpdPj3BpxxLF-aW7LPs8m7AQZzYDnfpwkvU5lzofYLZi1NYqE2cNDziGuj3x916HBM9J5vwKwOOBNqof9CfE-zTcRAA1Yrd7tPyn92BiP0NGzjuY_B1FTAdKKP8RUpWnX_1v14YxH8n_8D0L7WU4Db8bs92kZq_-2zs4iXE6gDVyKegHsZ6h0uHzkClggZfX8YySPdSYAV8WdcxEVrV6jjdVluto9NbGJVVa1EykTErZXMmnhNWcttCfM6eeSOXU5NSv7Bq51QNlOlDc8PwSGLpLrINV0NAl7AQk3W_hX7_clACz2DTsZOmxomzPZpXEGYyyJTDw-OKYVccRHDQulvKvNdfZOFYTjHdPjAooMu9uskWw5Jo_EFSH7kGA!!/dz/d5/L0lDU0lLVUtVSkNncFJDZ3BSQ2lDbEVLSUtVU0ovWUJVRUFBQUlJTUlFQUNJQ0tJS0lHT0JPQkdPSkZKRkdKTk5ETkRMSUVFTkhIUEhQTEhBb0VLSW9FTUEhLzRKQ2lqc1l1T0lRU2t5RkpOUlRrS2FhaG10MnN0bk5Uelc3V1d3V29wVlVZb0EhIS9aN181QTYwMkg4ME8wSFRDMDYwU0c2VVQ4MURRNi9aNl81QTYwMkg4ME8wSFRDMDYwU0c2VVQ4MURJMy92aWV3L25vcm1hbC9BTk5PVU5DRU1FTlRfTlVNQkVSLzc3MjQwL2NvbXBhbnlTeW1ib2wvOTU5Mi9odHRwOiUwJTB0YWRhd3VsJTAvYW5uQ2F0LzEvYW5JZC9hcg!!/"> {{$t('investor.AdvertisementDetails')}}</a>
    </section>

    <section class="numbers_of_year">
      <span>{{$t('investor.INVESOTRSRELATION')}}</span>
      <h3> {{$t('investor.KeyIndex')}}</h3>
      <div class="line"></div>
      <div class="numbers container">
        <div class="number_container" v-for="key_metric in key_metrics" :key="key_metric.id">
          <div class="number_round">{{key_metric.value}}</div>
          <span>{{key_metric.translations[0].title}}</span>
          <p>{{key_metric.translations[0].description}}</p>
        </div>
        <!--<div class="number_container">
          <div class="number_round">+{{indicatorPerformance.branches_number}}</div>
          <span>عدد الفروع</span>
          <p>160 فرعا منتشرا على نطاق واسع</p>
          <p>125 فرعا فى خدمتكم</p>
          <p>35 فرعا تحت التأسيس</p>
        </div>
         <div class="number_container">
          <div class="number_round"> {{indicatorPerformance.reference_stock_price}} ر.س</div>
          <span>سعر السهم الاسترشادي</span>
          <p>سعر السهم الاسترشادي عند الادراج</p>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.square_meter}}k+</div>
          <span>متر مربع</span>
          <p>لتقديم افضل جودة في الامداد و التموين</p>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.number_of_premium_customers}}K+</div>
          <span>عدد عملاء التميز</span>
          <p>يعد برنامج عميل التميز من أفضل برامج جمع النقاط في المملكة</p>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.products}}K+</div>
          <span>صنفاً بين يديكم</span>
        </div> -->
      </div>
    </section>
    <section class="numbers_of_year secondeNumbers">
      <h3>{{$t('investor.KeyPerformanceIndex')}}</h3>
      <div class="line"></div>
      <h6> {{$t('investor.FirstQuarter')}}</h6>

      <div class="numbers container">
        <div class="number_container" v-for="performance in indicatorPerformance" :key="performance.id">
          <div class="number_round">{{performance.value}}</div>
          <span>{{performance.translations[0].title}}</span>
          <p>{{performance.translations[0].description}}</p>
        </div>
        <!-- <div class="number_container">
          <div class="number_round">{{indicatorPerformance.income}}</div>
          <span>الإيرادات</span>
        </div>
        <div class="number_container">
          <div class="number_round"> {{indicatorPerformance.net_income}} </div>
          <span> صافى الربح </span>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.gross_profit_margin}} %</div>
          <span>هامش مجمل الربح</span>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.return_on_equity}}%</div>
          <span>العائد على حقوق المساهمين</span>
        </div>
        <div class="number_container">
          <div class="number_round">{{indicatorPerformance.net_income_margin}}%</div>
          <span>هامش صافى الربح</span>
        </div> -->
      </div>
    </section>

    <section class="questions">
      <div class="container">
        <h3> {{$t('investor.quetionsHeadTitle')}}</h3>
        <p>{{$t('investor.quetionsTitle')}}</p>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question1')}}</h4>

            <div class="toggleClick" @click="() => toggleClick(1)">
                {{toggleQuestion == 1 ? '-' : '+'}}
            </div>
          </div>

          <p :class="toggleQuestion == 1 ? 'active_p' : ''">{{$t('investor.answer1')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question2')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(2)">
                {{toggleQuestion == 2 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 2 ? 'active_p' : ''">{{$t('investor.answer2')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question3')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(3)">
                {{toggleQuestion == 3 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 3 ? 'active_p' : ''">{{$t('investor.answer3')}}</p>
          <div class="tableAnsewer" :class="toggleQuestion == 3 ? 'active_p' : ''">
            <table>
              <tr>
                <th> {{$t('investor.tableHeader1')}}</th>
                <th>{{$t('investor.tableHeader2')}}</th>
                <th>{{$t('investor.tableHeader3')}}</th>
              </tr>
              <tr>
                <td>  {{$t('investor.JEDDAH')}}</td>
                <td> 69 </td>
                <td> 55% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.TAIF')}}</td>
                <td> 17 </td>
                <td> 14% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.MAKKAH')}}</td>
                <td> 15 </td>
                <td>12%  </td>
              </tr>
              <tr>
                <td>  {{$t('investor.RIYADH')}}</td>
                <td> 7 </td>
                <td> 5% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.JAZAN')}}</td>
                <td> 6 </td>
                <td> 4% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.MADINAH')}}</td>
                <td> 5 </td>
                <td> 4% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.RABIGH')}}</td>
                <td> 2 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.ALKHARJ')}}</td>
                <td> 2 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.YANBU')}}</td>
                <td> 1 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td>  {{$t('investor.ONLINESTORE')}}</td>
                <td> 1 </td>
                <td> 1% </td>
              </tr>
              <tr>
                <td>  </td>
                <td> 125 </td>
                <td> 100% </td>
              </tr>
            </table>
          </div>
        </div>  
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question4')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(5)">
                {{toggleQuestion == 5 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 5 ? 'active_p' : ''">{{$t('investor.answer4')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question5')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(6)">
                {{toggleQuestion == 6 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 6 ? 'active_p' : ''">{{$t('investor.answer5')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question6')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(7)">
                {{toggleQuestion == 7 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 7 ? 'active_p' : ''">{{$t('investor.answer6')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>{{$t('investor.question7')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(8)">
                {{toggleQuestion == 8 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 8 ? 'active_p' : ''">{{$t('investor.answer7')}}</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4> {{$t('investor.question8')}}</h4>
            <div class="toggleClick" @click="() => toggleClick(9)">
                {{toggleQuestion == 9 ? '-' : '+'}}
            </div>
          </div>
          <p :class="toggleQuestion == 9 ? 'active_p' : ''">{{$t('investor.answer8')}}</p>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact_container">
          <div class="side">
            <h3> {{$t('investor.ConnectingwithinvestorsRelation')}}</h3>
            <div class="line"></div>
          </div>
          <div class="side">
            <div class="contact_invstor">
              <form action="" @submit.prevent="contactUs">
                <div class="form_input">
                  <label> {{$t('investor.Name')}}</label>
                  <input type="text" :placeholder="$t('investor.Name')" />
                </div>
                <div class="form_input">
                  <label> {{$t('investor.Email')}}</label>
                  <input type="text" :placeholder="$t('investor.Email')" />
                </div>
                <div class="form_input">
                  <label> {{$t('investor.CellNo')}}</label>
                  <input type="text" :placeholder="$t('investor.CellNo')" />
                </div>
                <div class="form_input">
                  <label> {{$t('investor.Subject')}}</label>
                  <input type="text" :placeholder="$t('investor.Subject')" />
                </div>
                <div class="form_text">
                  <label> {{$t('investor.Mail')}}</label>
                  <textarea :placeholder="$t('investor.Mail')"></textarea>
                </div>
                <button> {{$t('investor.Send')}}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
// import store from "../../../store";

export default {
  name: "InvestorRelations",
  data(){
    return{
      toggleQuestion: '0',
      pageNumber: 0,
      indicatorPerformance: [],
      key_metrics: [],
      reportsResults: [],
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
    }
  },
  mounted(){
    this.getResultsAndReports();
    this.getIndicatorPerformancekpis();
    this.getIndicatorPerformancekey_metrics();
  },
  methods: {
    getResultsAndReports() {
            axios.get('https://app.almujtama.com.sa/api/reportsResults', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response)
                this.reportsResults = response.data.data
                // this.loadingRequest = false;
            })
            .catch((err) => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
    },
    download_file(e){
      console.log(e.target.value)
      window.open(e.target.value, '_blank');
    },
    toggleClick(index){
      if(this.toggleQuestion == index){
        this.toggleQuestion = 0
      } else {
        this.toggleQuestion = index
      }
    },
    downloadFinancial(e) {
      // if (e.target.value == "30/06/2023") {
      //   axios
      //     .create({
      //       baseURL: "http://m.bare3.business/api/",
      //       headers: {
      //         "Content-Type": "application/json",
      //         // Authorization: "Bearer " + localStorage.getItem("token"),
      //         // localization: store.state.localization
      //       },
      //       responseType: "blob",
      //     })
      //     .get("/financial_6")
      //     .then((response) => {
      //       const url = window.URL.createObjectURL(new Blob([response.data]));
      //       const link = document.createElement("a");
      //       link.href = url;
      //       link.setAttribute("download", "file.pdf");
      //       document.body.appendChild(link);
      //       link.click();
      //     })
      //     .catch((err) => {
      //       console.log(err.response.data);
      //     });
      // } else if (e.target.value == "31/12/2021") {
      //   axios
      //     .create({
      //       baseURL: "http://m.bare3.business/api/",
      //       headers: {
      //         "Content-Type": "application/json",
      //         // Authorization: "Bearer " + localStorage.getItem("token"),
      //         // localization: store.state.localization
      //       },
      //       responseType: "blob",
      //     })
      //     .get("financial_12")
      //     .then((response) => {
      //       const url = window.URL.createObjectURL(new Blob([response.data]));
      //       const link = document.createElement("a");
      //       link.href = url;
      //       link.setAttribute("download", "file.pdf");
      //       document.body.appendChild(link);
      //       link.click();
      //     })
      //     .catch((err) => {
      //       console.log(err.response.data);
      //     });
      // }

      if (e.target.value == "30/06/2023") {
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:724e3e1b-47a6-4cb4-b4cf-50cb2627075b', '_blank');
      } else if(e.target.value == "31/12/2021"){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:c816694b-2c8d-4c17-89da-ebf87f031d78');
      }
    },
    downloadcertification(type) {
      if(type == 'شهادة توافق مع الشريعة'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:1f83f8f6-e1a7-4f9f-8d3e-85133a63d917', '_blank');   
      } else if(type == 'النظام الاساس'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:f83663b1-8b9e-4de3-b1bb-d170f3934643', '_blank');
      }
      
    },
    downloadBoardOfDirectorsReport(type) {
      if(type == 'تقرير مجلس الإدارة'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8d491e94-a164-4660-ad78-bceac1a74a0d', '_blank');
      } else if(type == 'الإستراتيجية الشركة'){
      window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:d05fad46-7066-4b26-a7ee-4838b868e602', '_blank');
            }
      
    },
    downloadMV(e) {
    if(e.target.value == 'ar'){
        axios
          .create({
            baseURL: "http://m.bare3.business/api/",
            headers: {
              "Content-Type": "application/json",
              // Authorization: "Bearer " + localStorage.getItem("token"),
              // localization: store.state.localization
            },
            responseType: "blob",
          })
          .get("/mv")
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file.pdf");
            document.body.appendChild(link);
            link.click();
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
      // if(e.target.value == 'ar'){
      //   window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8889e243-a2bb-4446-b012-a6c5182aed3d');  
      // } else if (e.target.value == 'en'){
      //   window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:976aae6f-4f5f-49c9-b4ea-aa2929039e40');  
      // }
      
    },
    contactUs(){
      console.log('contact us test')
    },
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
    getIndicatorPerformancekpis(){
      axios.create({
          baseURL: 'https://app.almujtama.com.sa/api',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('token'),
              // localization: store.state.localization
          },
          params:{
            category: 'kpis'
          }
      })
      .get('/indicatorPerformance')
      .then(res => {
      console.log(res, 'all data')
        this.indicatorPerformance = res.data.data
      });
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
.investor_elations_header {
  background-image: url(../../../assets/images/map.png);
  padding: 100px 100px 30px 100px;
  position: relative;
  @media (max-width: 991px) {
    border-bottom: 50px solid #78a28f;
    padding: 20px;
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
  .rightSmallRound,
  .leftSmallRound {
    width: 30px;
    height: 30px;
    border: 4px solid #2b5933;
    position: absolute;
    border-radius: 50%;
    top: 45%;
    right: 10%;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .leftSmallRound {
    top: 40%;
    right: unset;
    left: 10%;
  }
  .header_logo {
    display: flex;
    justify-content: flex-end;
    img{
      max-width: 100%
    }
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
.widgetBg{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #78a28f;
  height: 252px;
  padding: 10px;
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
      font-weight: 900;
      color: #78a28f;
      font-family: flatMedium;
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
  margin: 100px 0 50px 0;
  @media (max-width: 991px) {
    margin: 50px 0;
  }
  .container {
    > h3 {
      font-size: 40px;
      font-weight: 900;
      color: #78a28f;
      font-family: flatMedium;
      @media (max-width: 991px) {
        text-align: center;
      }
    }
    .line {
      margin: 30px 0;
      @media (max-width: 991px) {
        margin: 30px auto 0 auto;
      }
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
          padding: 10px;
          box-shadow: 0 0 10px #ddd;
          border-radius: 10px;
          margin-bottom: 15px;
          @media (max-width: 576px) {
            flex-direction: column;
            justify-content: center;
          }
        }
        .side {
          p {
            font-size: 14px;
            color: #6f7775;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            img {
              margin-left: 10px;
            }
          }
          h3{
            @media (max-width: 576px) {
              text-align: center;
            }
          }
          select,
          button {
            background-color: #d8d253;
            font-size: 14px;
            text-align: center;
            padding: 10px 30px;
            color: #fff;
            border: 0;
            border-radius: 4px;
            display: block;
            width: 180px;
            option {
              background-color: #fff;
              color: #000;
              direction: ltr;
              text-align: right;
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
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  .aannouncement{
    background-color: #FFF;
    border-radius: 10px;
    padding: 30px 20px;
    width: 740px;
    margin: auto;
    @media (max-width: 991px) {
      width: 90%;
    }
    .date_container{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      .date{
        font-size: 14px;
        font-weight: 800;
        img{
          margin-right: 10px;
        }
      }
    }
    
    p{
      font-size: 18px;
      font-weight: 800;
      color: #78A28F;
      line-height: 30px;
      text-align: right;
    }
  }
  a{
    font-size: 16px;
    color: #FFF;
    background-color: #D8D253;
    padding: 9px 0;
    margin-top: 40px;
    display: block;
    width: 153px;
    margin: 40px auto 0 auto;
    border-radius: 4px;
  }
  
  h3 {
    font-size: 40px;
    font-weight: 900;
    color: #ffffff;
    font-family: flatMedium;
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
    margin: 10px;
    option{
      background-color: #FFF;
      color: #2b5933;
      &:hover{
        background-color: #2b5933;
      }
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
    font-weight: 900;
    color: #78a28f;
    font-family: flatMedium;
  }
  > h6 {
    font-size: 24px;
    font-weight: 900;
    color: #78a28f;
    font-family: flatMedium;
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

.questions{
  h3{
    font-size: 40px;
    color: #78A28F;
    font-weight: 900;
    margin: 50px 0 20px 0;
    text-align: center;
    @media (max-width: 991px) {
      font-size: 30px;
    }
  }
  p{
    font-size: 31px;
    color: #D8D253;
    font-weight: 600;
    text-align: center;
    margin-bottom: 70px;
    @media (max-width: 991px) {
      font-size: 22px;
    }
  }

  .question_container{
    margin-bottom: 30px;
    .toggle_flex{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .toggleClick{
        border: 3px solid #2B5933;
        font-size: 30px;
        font-weight: 600;
        color: #2B5933;
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    h4{
      font-size: 22px;
      color: #78A28F;
      font-weight: 600;
      margin-bottom: 27px;
    }
    p{
      font-size: 22px;
      color: #2B5933;
      font-weight: 600;
      display: none;
    }
  }
}

.secondeNumbers{
  .number_container{
    width: calc(100% / 5 - 25px) !important;
    @media (max-width: 1200px) {
        width:25% !important;
      }
    @media (max-width: 991px) {
      width:45% !important;
    }
    @media (max-width: 991px) {
      width:100% !important;
    }
    .number_round{
      font-size: 28px !important;
      @media (max-width: 1200px) {
        font-size: 19px !important;
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
        font-weight: 900;
        color: #fff;
        margin-top: 100px;
        font-family: flatMedium;
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
.dis{
  background-color: gray !important;
}
.tableAnsewer{
  width: 500px;
  box-shadow: 0px 10px 50px #21343014;
  padding: 20px;
  background-color: #ffffff7a;
  display: none;
  table {
    border-collapse: collapse;
    width: 100%; 
    background-color: #FFF;
  }

  td, th {
    padding: 8px;
    text-align: center;
    font-size: 20px;
    color: #78A28F;
    border-bottom: 1px solid #70707054;
    font-weight: 600;
  }

}
.new_pharmacy {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
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
    box-shadow: 0px 10px 50px #21343014;
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
      line-height: 40px;
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
    width: 600px;
    @media (max-width: 1200px) {
      width: 38%;
      width: 100%;
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
      width: 100%;
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
.active_p{
  display: block !important;
}

.en{
  .investor_elations_header .title a{
    width: 190px;
  }
  .breadCrobs{
    a,
    span{
      margin: 0 10px 0 0;
    }
  }

  .new_pharmacy .description .arrows .arrow:last-child{
    order: 1;
  }
  .new_pharmacy .description .arrows .arrow:first-child{
    order: 2;
  }
  .yearly_reort a{
    width: 175px;
  }
}
</style>