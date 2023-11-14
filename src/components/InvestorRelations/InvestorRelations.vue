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
          <img src="../../assets/images/newLogo.png" alt="" />
        </div>
        <div class="title">
          <h2>علاقات المستثمرين</h2>
          <div class="line"></div>
          <p>
            من خلال صفحة علاقات المستثمرين يستطيع المستثمر الاطلاع على التقارير والنتائج الخاصة بالشركة
          </p>
          <a href="#results_reports">النتائج و التقارير </a>
        </div>
        <div class="breadCrobs">
          <router-link to="/">الرئيسية</router-link>
          <span>>></span>
          <h3>علاقات المستثمرين</h3>
        </div>
      </div>
    </header>
    <section class="widgetBg">
      <img src="../../assets/images/widgetBg.jpg" alt="">
    </section>

    <section class="invetors_relations container">
      <div class="img_container">
        <img src="../../assets/images/InvestorRelations.png" alt="" />
      </div>
      <div class="description">
        <span class="smallTitle">علاقات المستثمرين</span>
        <h3>
          من خلال صفحة علاقات المستثمرين يستطيع المستثمر الاطلاع على التقارير والنتائج الخاصة بالشركة
        </h3>
        <div class="line"></div>
        <a href="#results_reports" class="readMore">مركز النتائج</a>
      </div>
    </section>

    <section class="results_reports" id="results_reports">
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
                <h3>افصاحات سوق المال</h3>
              </div>
              <div class="side">
                <button class="dis">تنزيل الملفات</button>
                <!-- <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="20/06/2021">20/06/2021</option>
                  <option value="20/06/2020">20/06/2020</option>
                  <option value="20/06/2019">20/06/2019</option>
                </select> -->
              </div>
            </div>
            <div class="content_row">
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
                  <option value="الإستراتيجية الشركة">الإستراتيجية الشركة</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3>الشهادات</h3>
              </div>
              <div class="side">
                <select @change="downloadcertification">
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">شهادة توافق مع الشريعة</option>
                  <option value="">البند الاساس</option>
                </select>
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3>احصائيات و تقارير مالية</h3>
              </div>
              <div class="side">
                <button class="dis">تنزيل الملفات</button>
                <!-- <select>
                  <option value="" selected disabled>تنزيل الملفات</option>
                  <option value="">نتائج النصف الأول</option>
                </select> -->
              </div>
            </div>
            <div class="content_row">
              <div class="side">
                <h3> مستند التسجيل </h3>
              </div>
              <div class="side">
                <button @click="downloadMV">تنزيل الملفات</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="yearly_reort">
      <h3>التقارير </h3>
      <div class="line"></div>
      <select @change="(e) => downloadBoardOfDirectorsReport(e.target.value)">
        <option value="" selected disabled>تنزيل الملفات</option>
        <option value="تقرير مجلس الإدارة">تقرير مجلس الإدارة</option>
        <option value="الإستراتيجية الشركة">الإستراتيجية الشركة</option>
      </select>
    </section>

    <section class="numbers_of_year">
      <span>علاقات المستثمرين</span>
      <h3>المؤشرات الرئيسية</h3>
      <div class="line"></div>
      <div class="numbers container">
        <div class="number_container">
          <div class="number_round">+160</div>
          <span>عدد الفروع</span>
          <p>160 فرعا منتشرا على نطاق واسع</p>
          <p>125 فرعا فى خدمتكم</p>
          <p>35 فرعا تحت التأسيس</p>
        </div>
        <div class="number_container">
          <div class="number_round"> 40 ر.س</div>
          <span>سعر السهم الاسترشادي</span>
          <p>سعر السهم الاسترشادي عند الادراج</p>
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
    <section class="numbers_of_year secondeNumbers">
      <h3>مؤشرات الأداء الرئيسية</h3>
      <div class="line"></div>
      <div class="numbers container">
        <div class="number_container">
          <div class="number_round">204,133,493</div>
          <span>الإيرادات</span>
        </div>
        <div class="number_container">
          <div class="number_round"> 11,332,480 </div>
          <span> صافى الربح </span>
        </div>
        <div class="number_container">
          <div class="number_round">32.6%</div>
          <span>هامش مجمل الربح</span>
        </div>
        <div class="number_container">
          <div class="number_round">8.74%</div>
          <span>العائد على حقوق المساهمين</span>
        </div>
        <div class="number_container">
          <div class="number_round">5.5%</div>
          <span>هامش صافى الربح</span>
        </div>
      </div>
    </section>

    <!-- <section class="questions">
      <div class="container">
        <h3>الأسئلة المقترحة لمقابلة العضو المنتدب لشركة المجتمع الرائدة الطبية</h3>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>1-ما تقييمكم للمنافسة في سوق الصيدليات في المملكة؟ وكم تبلغ حصتكم السوقية؟</h4>

            <div class="toggleClick" @click="() => toggleClick(1)">
                +
            </div>
          </div>

          <p :class="toggleQuestion == 1 ? 'active_p' : ''">ج1: يبلغ عدد الصيدليات المجتمعية في المملكة (8) الاف صيدلية تقريبا، وتمتلك مجموعتنا حوالي (130) صيدلية حتى هذا التاريخ، وسيتم إضافة (40) صيدلية على الأقل مع نهاية عام 2024م بإذن الله، ومن ناحية الحصة السوقية فلا توجد إحصائية رسمية يمكن الادلاء بها في الوقت الحالي، ولكن يمكنني القول بأن شركة المجتمع الرائدة الطبية تستحوذ حاليا على ما نسبته من 8 – 11 % من عدد الوصفات التي تصدر من مختلف المستشفيات ومراكز الرعاية الصحية الأولية بالمملكة عن طريق نظام وصفتي.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>2- ما هي استراتيجية الشركة فيما يتعلق بالتوسع في فتح المزيد من الصيدليات؟ وما هي المناطق المستهدفة للتوسع في المستقبل؟</h4>
            <div class="toggleClick" @click="() => toggleClick(2)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 2 ? 'active_p' : ''">ج2: افتتاح المزيد نم الفروع كان وما زال يجري على قدم وساق ويشهد نموا في الوقت الحالي، حيث يتم افتتاح عدد بين 25 – 30 صيدلية سنويا في الوقت الحالي، ومن المتوقع خلال شهر من الآن وبعد الانتهاء من أعمال إنشاء المستودع الرئيسي على مساحة (21,000 متر مربع) أن يرتفع هذا العدد ليصبح ما تتم إضافته من فروع جديدة إلى 50 فرعا سنويا -بإذن الله-. كما ذكرت أعلاه، يوجد في المملكة عدد 8 آلاف صيدلية مجتمعية وكما تضمنت الإحصائية العالمية بعدد الصيدليات نسبة إلى عدد السكان حيث إن المعدل العالمي هو وجود صيدلية واحدة لكل 8 آلاف نسمة، بينما لدينا في المملكة العربية السعودية توجد صيدلية واحدة لكل 4 آلاف نسمة وهو ضعف النسبة العالمية، وذل بسبب خلل التوزيع الجغرافي، حيث يسعى المستثمرون في القطاع إلى التركيز على المدن الرئيسية بل وفي الشوارع الرئيسية في المدينة الواحدة، وهذا خلل تسعى شركة المجتمع الرائدة الطبية ألا تقع فيه حرصا منها على أموال المستثمرين كما أن توقيع الشركة الاتفاقية الاستراتيجية مع الشركة الوطنية للشراء الموحد (نوبوكو) بصرف الوصفات الإلكترونية (وصفتي) والتي تستحوذ على حوالي 70 % من استهلاك فاتورة الدواء على مستوى المملكة، وتعتبر قفزة مهمة في سجل تطوير أداء الشركة وتطورها.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>3- ما التوزيع الجغرافي للصيدليات؟</h4>
            <div class="toggleClick" @click="() => toggleClick(3)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 3 ? 'active_p' : ''">ج3: تنتشر صيدليات المجتمع حتى الآن في كل من: الرياض/ الخرج/ المدينة المنورة/ ينبع/ جدة/ مكة المكرمة الطائف/ رابغ/ مدينة الملك عبد الله الاقتصادية/ جازان/ صبيا/ بحرة. ويقع مقر الشركة في مدينة جدة وكذلك المستودع الرئيسي في المنطقة الصناعية بالمرحلة الثالثة التابعة لهيئة مدن.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>4- تمتلك الشركة سلسلة كبيرة من الصيدليات في مختلف مناطق المملكة، هل يمكنكم تزويدنا بتفاصيل حول أداء هذه الصيدليات من ناحية الإيرادات وصافي الأرباح ونسب النمو؟</h4>
            <div class="toggleClick" @click="() => toggleClick(4)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 4 ? 'active_p' : ''">جـ4: بلغت مبيعات الشركة في عام 2021م (305) مليون ريال</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>5-حققت الشركة أرباحاً بـ 11.3 مليون ريال بنهاية النصف الأول من عام 2023م، ما تعليقكم على هذه النتائج؟ وما توقعاتكم لأداء النصف الثاني؟</h4>
            <div class="toggleClick" @click="() => toggleClick(5)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 5 ? 'active_p' : ''">ج5: يلاحظ في الجدول أعلاه نمو الأرباح في العام 2022م بنسبة 180 % وذلك جراء ضخ السيولة بعد دخول مستثمرين جدد في الشركة، كما يلاحظ ازدياد عدد الفروع الجديدة... معدلها الذي كانت عليه في الأعوام قبل ضخ السيولة وتحقيقها لمبلغ (11,04) مليون ريال ازدياد في النصف الأولى من العام 2023م، مؤشر قوي لأن تحقق الشركة أعلى من هذا الرقم بنسبة 35 % ليرتفع إجمالي الربح المتوقع للعام 2023م لأكثر من (27) مليون ريال وزيادة عن أرباح عام 2022م بنسبة 25 % -بإذن الله-</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>6- ما هو تصور الشركة لمستقبل صناعة الرعاية الصحية في المملكة والتحديات والفرص المتوقعة في هذا القطاع؟</h4>
            <div class="toggleClick" @click="() => toggleClick(6)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 6 ? 'active_p' : ''">اتخذ القطاع الصحي الخاص ومنذ الإعلان عن توجه الدولة رعاها الله قرارات تخصيص الخدمة، اتخذ القطاع خطوات في جميع المجالات حيث تم العمل على قدم وساق في دخول مستثمرين للاستثمار في هذا القطاع الهام والحيوي ويتم إنشاء العديد من المستشفيات بالشراكة مع شركات عالمية ومحلية ذات خبرة في قطاع الدواء، قامت شركة المجتمع الرائدة الطبية بإنشاء مستودع على مساحة 21 ألف متر مربع لمقابلة الطلب المتزايد على خدمة فروعها التي يتم افتتاح والتوسع في مناطق جغرافية جديدة، كما أنها قيامها بتشغيل الصيدليات الخارجية لعدد خمسة مستشفى حكومية وجامعية في كل من: جدة والطائف وجازان وصبيا ألقى عليها ضرورة أن تزيد من طاقتها الاستيعابية والتشغيلية وتوظيف الكوادر الصحية الوطنية <br> <br>ووضع الخطط المستقبلية كرائدة في تنفيذ خطط الوزارة في سبيل... في مجال تخزين ونقل وصرف وتوفير الدواء (كأول صيدليات خاصة لمستشفيات حكومية يتم تشغيلها عن طريق القطاع الخاص). وإذا علمنا أن لدى وزارة الصحة فقط 270 مستشفى وعددا يزيد عن 0200 مركز رعاية صحية أولية فإنه بالإمكان القول بأن الشركة وضعت خططها على أرض صلبة تسير في طرق مدروسة بعيدة عن التعثر محققة بذلك تطلع المستثمرين في تحقيق الاستثمار الأفضل متماشية مع الخطط الواعدة الموضوعة لتطوير قطاع الخدمات الصحية.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>8-هل هناك خطط للانتقال إلى السوق الرئيسية؟</h4>
            <div class="toggleClick" @click="() => toggleClick(7)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 7 ? 'active_p' : ''">ج9: نعم، بإذن الله، وتتطلع الشركة لأن تكون احد رواد القطاع الصحي في المملكة. وشكراً لإتاحة الفرضة للإجابة على اسئلتكم .....</p>
        </div>
      </div>
    </section> -->

    <section class="contact">
      <div class="container">
        <div class="contact_container">
          <div class="side">
            <h3>تواصل مع علاقات المستثمرين</h3>
            <div class="line"></div>
          </div>
          <div class="side">
            <div class="contact_invstor">
              <form action="" @submit.prevent="contactUs">
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
// import axios from "axios";
// import store from "../../../store";

export default {
  name: "InvestorRelations",
  data(){
    return{
      toggleQuestion: '0'
    }
  },
  methods: {
    toggleClick(index){
      this.toggleQuestion = index
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
    downloadcertification() {
      window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:1f83f8f6-e1a7-4f9f-8d3e-85133a63d917', '_blank');
    },
    downloadBoardOfDirectorsReport(type) {
      if(type == 'تقرير مجلس الإدارة'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8d491e94-a164-4660-ad78-bceac1a74a0d', '_blank');
      } else if(type == 'الإستراتيجية الشركة'){
      window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8d491e94-a164-4660-ad78-bceac1a74a0d', '_blank');
            }
      
    },
    downloadMV() {
      // axios
      //   .create({
      //     baseURL: "http://m.bare3.business/api/",
      //     headers: {
      //       "Content-Type": "application/json",
      //       // Authorization: "Bearer " + localStorage.getItem("token"),
      //       // localization: store.state.localization
      //     },
      //     responseType: "blob",
      //   })
      //   .get("/mv")
      //   .then((response) => {
      //     const url = window.URL.createObjectURL(new Blob([response.data]));
      //     const link = document.createElement("a");
      //     link.href = url;
      //     link.setAttribute("download", "file.pdf");
      //     document.body.appendChild(link);
      //     link.click();
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data);
      //   });
      window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8889e243-a2bb-4446-b012-a6c5182aed3d');
    },
    contactUs(){
      console.log('contact us test')
    }
  },
};
</script>
<style lang="scss" scoped>
.investor_elations_header {
  background-image: url(../../assets/images/map.png);
  padding: 100px;
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
  height: 160px;
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
            width: 160px;
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
  @media (max-width: 991px) {
    padding: 50px 0;
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
    margin: 50px 0 70px 0;
    text-align: center;
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
    .active_p{
      display: block;
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
</style>