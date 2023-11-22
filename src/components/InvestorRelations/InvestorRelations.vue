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

    <section class="Company_overview">
      <div class="container">
        <div class="Company_overview_container">
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
              • صيدليات المجتمع مجموعة رائدة ومتكاملة في تقديم الخدمات
              الصيدلانية.
            </p>
            <p>
              • شركاء وزارة الصحة في تنفيذ برامج الرعاية الصحية ومبادرات منظومة
              الوزارة لبرامج التحول الوطني 2020 ضمن رؤية المملكة 2030.
            </p>
            <p>
              • شركاء وزارة الصحة بالتنسيق مع الشركة الوطنية للشراء الموحد
              (نوبكو) لصرف الوصفات الطبية (وصفتي) الصادرة من مراكز الرعاية
              الأولية والمستشفيات التابعة لوزارة الصحة <br>إضافة الى المستشفيات
              التابعة للخدمات الطبية بالقطاعات الحكومية الأخرى مثل: وزارة الدفاع
              و وزارة الداخلية و وزارة التعليم العالي لكل من: (جدة – مكة المكرمة
              – الطائف - الرياض - المدينة المنورة - الخرج - مدينة الملك عبد الله
              الاقتصادية- ينبع - رابغ –جازان- صبيا)
            </p>
            <p>
              • بالتعاون مع وزارة الصحة،تقدم مجموعة صيدليات المجتمع خدمة صرف
              الوصفات الإلكترونية الصادرة من تطبيق (صحتي) والهاتف الموحد (937)
              من خلال فروعها.
            </p>
            <p>
              • شركاء وزارة الصحة وعدد من المؤسسات التعليمية (جامعة الملك عبد
              العزيز- جامعة الطائف) لتقديم الخدمات المجتمعية وتدريب طلبة
              الامتياز بكلية الصيدلة والمساهمة في البحوث العلمية التي تهدف الى
              تطوير مهنة الصيدلة وقطاع الدواء.
            </p>
            <p>
              • شركاء وزارة الصحة في تقديم خدمة التطعيمات الموسمية، إضافة الى
              رصد المؤشرات الحيوية ضمن الحملة الوطنية # اعرف ارقامك # تمهيداً
              لتطبيق نظام الملف الموحد لجميع المواطنين وذلك بالتنسيق مع الجهات
              الحكومية ذات العلاقة.
            </p>
            <p>
              • بإشراف من وزارة الصحة تقدم صيدليات المجتمع خدمة الرعاية الصحية
              غير العاجلة داخل عيادات مجهزة ومخصصة لتقديم الخدمة والاستفادة من
              خدمة الطب الاتصالي لتقديم أفضل الخدمات الصحية.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="new_pharmacy">
      <div class="description">
        <span>اخر الأخبار</span>
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
                  <option value="النظام الاساس">النظام الاساس</option>
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
                <select @change="(e) => downloadMV(e)">
                  <option value="" selected disabled> تنزيل الملفات </option>
                  <option value="ar">تنزيل الملفات باللغة العربية</option>
                  <option value="en">تنزيل الملفات باللغه الانجليزية</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="yearly_reort">
      <h3>افصاحات سوق المال </h3>
      <div class="line"></div>
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
          <div class="number_round">21k+</div>
          <span>متر مربع</span>
          <p>لتقديم افضل جودة في الامداد و التموين</p>
        </div>
        <div class="number_container">
          <div class="number_round">800K+</div>
          <span>عدد عملاء التميز</span>
          <p>يعد برنامج عميل التميز من أفضل برامج جمع النقاط في المملكة</p>
        </div>
        <div class="number_container">
          <div class="number_round">25K+</div>
          <span>صنفاً بين يديكم</span>
        </div>
      </div>
    </section>
    <section class="numbers_of_year secondeNumbers">
      <h3>مؤشرات الأداء الرئيسية</h3>
      <div class="line"></div>
      <h6>(النصف الأول من العام 2023)</h6>

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

    <section class="questions">
      <div class="container">
        <h3>مقابلة مع الرئيس التنفيذي و العضو المنتدب لشركة المجتمع الرائدة الطبية :</h3>
        <p>تعرّف على استراتيجية شركة المجتمع الرائدة الطبية ومزاياها التنافسية</p>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>1-ما تقييمكم للمنافسة في سوق الصيدليات في المملكة؟ وكم تبلغ حصتكم السوقية؟</h4>

            <div class="toggleClick" @click="() => toggleClick(1)">
                +
            </div>
          </div>

          <p :class="toggleQuestion == 1 ? 'active_p' : ''">يبلغ عدد الصيدليات المجتمعية في المملكة (9) الاف صيدلية تقريباً، وتمتلك مجموعتنا حوالي (125) صيدلية حتى تاريخه، وسيتم إضافة (40) صيدلية على الأقل مع نهاية عام 2024م بإذن الله، ومن ناحية الحصة السوقية فلا توجد إحصائية رسمية يمكن الادلاء بها في الوقت الحالي، ولكن يمكنني القول بأن شركة المجتمع الرائدة الطبية تستحوذ حالياً على ما نسبته من 8 – 10 % من عدد الوصفات التي تصدر من مختلف المستشفيات ومراكز الرعاية الصحية الأولية بالمملكة عن طريق نظام وصفتي.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>2-ما هي استراتيجية الشركة فيما يتعلق بالتوسع في فتح المزيد من الصيدليات؟ وما هي المناطق المستهدفة للتوسع في المستقبل؟</h4>
            <div class="toggleClick" @click="() => toggleClick(2)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 2 ? 'active_p' : ''">افتتاح المزيد من الفروع كان وما زال من أهداف الشركة مع ازدياد في وتيرته في الفترة الأخيرة، حيث يتم افتتاح بين 25 – 30 صيدلية سنويا في الوقت الحالي، ومن المتوقع خلال شهر من الآن وبعد الانتهاء من تشغيل المستودع الرئيسي على مساحة (21,000 متر مربع) أن يرتفع هذا العدد ليصبح ما تتم إضافته من فروع إلى 40 فرعا سنويا -بإذن الله-. أما بالنسبة للمناطق المستهدفة فسوف تتم مراعاة التوزيع الجغرافي والتوجه إلى مناطق غير مخدومة، فعلى الرغم من أن عدد الصيدليات المجتمعية بالمملكة (صيدلية لكل 4000 نسمة) وهو أعلى من المعدل العالمي (صيدلية لكل 8000 نسمة) إلا أن هناك مناطق شاسعة لم تصلها الخدمة. كما أن صيدليات المجتمع لها الأسبقية في تشغيل وإدارة صيدليات العيادات الخارجية لمستشفيات ومراكز الرعاية الأولية التابعة لوزارة الصحة داخل أروقتها (3 مستشفيات + مستشفى جامعي) ضمن فروعها ال (125) حتى تاريخ هذه المقابلة حيث تقوم بصرف الوصفات الطبية بنظام "وصفتي". كما أن الخدمات المتميزة التي تقدمها صيدليات المجتمع – العديد منها مرجعية- مثل تقديم الاستشارات الدوائية والطب الاتصالي والمتجر الإلكتروني والتوصيل المنزلي زاد من الحاجة إلى توسيع التوزيع الجغرافي.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>3-ما التوزيع الجغرافي للصيدليات؟</h4>
            <div class="toggleClick" @click="() => toggleClick(3)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 3 ? 'active_p' : ''">فيما يلي جدول يوضح التوزيع الجغرافي الحالي لصيدليات المجتمع:</p>
          <div class="tableAnsewer" :class="toggleQuestion == 3 ? 'active_p' : ''">
            <table>
              <tr>
                <th>المدينة</th>
                <th>عدد الفروع</th>
                <th>النسبة (%)</th>
              </tr>
              <tr>
                <td> جدة </td>
                <td> 69 </td>
                <td> 55% </td>
              </tr>
              <tr>
                <td> الطائف </td>
                <td> 17 </td>
                <td> 14% </td>
              </tr>
              <tr>
                <td> مكة </td>
                <td> 15 </td>
                <td>12%  </td>
              </tr>
              <tr>
                <td> الرياض </td>
                <td> 7 </td>
                <td> 5% </td>
              </tr>
              <tr>
                <td> جازان </td>
                <td> 6 </td>
                <td> 4% </td>
              </tr>
              <tr>
                <td> المدينة </td>
                <td> 5 </td>
                <td> 4% </td>
              </tr>
              <tr>
                <td> رابغ </td>
                <td> 2 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td> الخرج </td>
                <td> 2 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td> ينبع </td>
                <td> 1 </td>
                <td> 2% </td>
              </tr>
              <tr>
                <td> المتجر الالكتروني </td>
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
            <h4>4-تمتلك الشركة سلسلة كبيرة من الصيدليات في مختلف مناطق المملكة، هل يمكنكم تزويدنا بتفاصيل حول أداء هذه الصيدليات من ناحية الإيرادات وصافي الأرباح ونسب النمو؟</h4>
            <div class="toggleClick" @click="() => toggleClick(5)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 5 ? 'active_p' : ''">حققت الشركة إيرادات بلغت حوالي 367 مليون ريال سعودي وصافي أرباح بلغ حوالي 19مليون ريال سعودي كما في نهاية عام 2022م حيث حققت الشركة نمو في الإيرادات بنسبة 21% ونمو في صافي الأرباح بنسبة 144% عن العام المالي السابق. كما بلغت إيرادات الشركة حوالي 204 مليون ريال سعودي وبلغ صافي الأرباح حوالي 11 مليون ريال سعودي كما في 30 يونيو 2023م، أي بما يتمثل في نمو في الإيرادات بنسبة 19% ونمو في صافي الأرباح بنسبة 66% عن الفترة المالية المماثلة السابقة.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>5-حققت الشركة أرباحاً بـ 11.3 مليون ريال بنهاية النصف الأول من عام 2023م، ما تعليقكم على هذه النتائج؟ وما توقعاتكم لأداء النصف الثاني؟</h4>
            <div class="toggleClick" @click="() => toggleClick(6)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 6 ? 'active_p' : ''">حققت الشركة نمو في صافي الأرباح في عام 2022م بنسبة 144% عن العام المالي السابق، وذلك جراء ضخ سيولة إضافية في الشركة مع دخول مستثمرين جدد، وأيضاً ازدياد معدل عدد الفروع الجديدة عن الذي كانت عليه في الأعوام السابقة قبل ضخ السيولة الإضافية. وبناءً على ذلك تم تحقيق نمو إضافي في الإيرادات وصافي الأرباح خلال النصف الأول من عام 2023م، حيث بلغت أرباح الشركة 11,33 مليون ريال سعودي كما في 30 يونيو 2023م. ومن المتوقع أن تحقق الشـركة إجمالي مبيعات تبلغ 430 مليون ريال سعودي بنهاية عام 2023م وصافي أرباح تبلغ 24 مليون ريال سعودي أي بزيادة بمعدل 25% عن عام 2022م بإذن الله.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>6-ما هو تصور الشركة لمستقبل صناعة الرعاية الصحية في المملكة والتحديات والفرص المتوقعة في هذا القطاع؟</h4>
            <div class="toggleClick" @click="() => toggleClick(7)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 7 ? 'active_p' : ''">منذ الإعلان عن توجه الدولة رعاها الله لتخصيص خدمة الرعاية الصحية، اتخذ القطاع الصحي الخاص خطوات مهمة تتمثل بدخول مستثمرين لإنشاء العديد من المستشفيات والمراكز المتخصصة بالشراكة مع خبرات عالمية ومحلية ذات تجربة واسعة. وفي هذا الصدد، قامت شركة المجتمع الرائدة الطبية بإنشاء مستودع على مساحة 21 ألف متر مربع مجهز بأحدث وسائل التخزين والصـرف لمقابلة الطلب المتزايد على خدمات فروعها التي يجري افتتاحها والتوسع في مناطق جغرافية جديدة. كما أن قيام شركة المجتمع الرائدة الطبية بتشغيل الصيدليات الخارجية لعدد من المستشفيات التابعة لوزارة الصحة ووزارة التعليم العالي في كل من: جدة والطائف وجازان وصبيا ألقى عليها مسؤولية زيادة طاقتها الاستيعابية والتشغيلية وتدريب وتوظيف الكوادر الصحية الوطنية ووضع الخطط المستقبلية كشركة رائدة في تنفيذ برامج التحول الوطني ورؤية 2030 وكأول سلسلة صيدليات مجتمعية حققت مبدأ التكامل مع مستشفيات ومراكز صحية حكومية. وإذا علمنا أن عدد مستشفيات وزارة الصحة تبلغ 284 مستشفى وحوالي 2300 مركز رعاية أولية فيتضح لنا جلياً أن توجه الشركة بعقد شراكات طويلة الأمد مع وزارة الصحة وغيرها من القطاعات الصحية الحكومية هو استثمار ممتاز ذو نظرة مستقبلية واعدة.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>7-ما توقعاتكم لحجم الإيرادات الإضافية والربحية الناتجة من التوسعات الجديدة؟</h4>
            <div class="toggleClick" @click="() => toggleClick(8)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 8 ? 'active_p' : ''">كما تمت الإشارة في الإجابة على الأسئلة رقم(4) ورقم (5) ورقم (6) فإن مجال قطاع الدواء هو مجال واعد، ومن خلال النظرة المتمعنة من إدارة الشـركة التي ترى في الأفق مجالاً رحباً للتوسع الأفقي بافتتاح فروع في مناطق جغرافية جديدة، والتوسع الرأسي بتطوير وادخال أحدث انظمة الادارة والمحاسبة وادارة المخزون حسب المعايير الدولية والتدريب على مهارات البيع، كما وضعت ضمن اولوياتها تطوير وتدريب الكادر الصحي الوطني وتحقيق نسبة التوطين المطلوبة لمهنة "صيدلي" وتوقيع الاتفاقيات في هذا الشأن مع عدد من كليات الصيدلة ووضع برامج التدريب المناسبة لتأهيل الكادر الوطني للعمل في مجال الصيدليات المجتمعية، مما ساهم في رفع مستوى الاداء وانعكس على هيئة قفزات مهمة في رقم المبيعات وزيادة في الربحية. وإجابة على سؤالكم، يُتوقع في نهاية عام 2024م أن تزيد المبيعات عن نصف مليار ريال سعودي وصافي أرباح تتجاوز (27) مليون ريال سعودي.</p>
        </div>
        <div class="question_container">
          <div class="toggle_flex">
            <h4>8-هل هناك خطط للانتقال إلى السوق الرئيسية؟</h4>
            <div class="toggleClick" @click="() => toggleClick(9)">
                +
            </div>
          </div>
          <p :class="toggleQuestion == 9 ? 'active_p' : ''">نعم بالتأكيد، خاصة وأن الشركة تسعى لأن تعزز مكانتها وريادتها في مجال الخدمات الصيدلانية، خاصةً في مجال إدارة المخزون وسلاسل الإمداد والصرف الآمن والرشيد لتوفير الدواء والمستحضرات الصيدلانية للمستفيد.</p>
        </div>
      </div>
    </section>

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
      toggleQuestion: '0',
      pageNumber: 0,
      pages: [
        {
          description:
            "تعلن شركة المجتمع الرائدة الطبية (“الشركة”) عن عزم الشركة تسجيل وإدراج أسهم الشركة البالغة (9,500,000) سهم عادي ادراجاً مباشراً في السوق الموازية “نمو” ، و سيتم الإعلان عن تاريخ الإدراج قريباً",
          seconde_description:
            "انضموا إلينا في الفرع الجديد واستفيدوا من خدماتنا المتميزة صيدليات_المجتمع #الريادة_في_خدمة_المجتمع",
          img: require("../../assets/images/new7.jpg"),
        },
        {
          description:
            "يسرنا أن نعلن أنه تم -بحمد الله- افتتاح فرع جديد لصيدلية المجتمع في حي الصفا- طريق الأمير متعب بن عبد العزيز- جدة",
          seconde_description:
            "انضموا إلينا في الفرع الجديد واستفيدوا من خدماتنا المتميزة صيدليات_المجتمع #الريادة_في_خدمة_المجتمع",
          img: require("../../assets/images/opening.png"),
        },
        {
          description:
            "كلية الصيدلية بجامعة الملك عبد العزيز بمدينة جدة كل الشكر للراعي الذهبي صيدلية المجتمع لمساهمتهم في نجاح فاعليتنا",
          seconde_description: "#صيدلية_المجتمع",
          img: require("../../assets/images/openening2023.png"),
        },
        {
          description:
            "قامت إدارة شركة المجتمع الرائدة الطبية بتكريم الصيدلي محمد أحمد محمد علي لحصوله على المركز الرابع حسب تقييم الأداء في شهر سبتمبر.",
            descriptionTwo: 'صيدليات المجتمع تتمنى له ولجميع شركاء النجاح المزيد من التوفيق والسداد',
          img: require("../../assets/images/gift.png"),
        },
      ],
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
      if(e.target.value == 'ar'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:8889e243-a2bb-4446-b012-a6c5182aed3d');  
      } else if (e.target.value == 'en'){
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:ap:976aae6f-4f5f-49c9-b4ea-aa2929039e40');  
      }
      
    },
    contactUs(){
      console.log('contact us test')
    },
    changePageNumber(type) {
      if (type == "left") {
        if (this.pageNumber <= 2 && this.pageNumber > -1) {
          this.pageNumber = this.pageNumber + 1;
        } else {
          this.pageNumber = 0;
        }
      } else if (type == "right") {
        if (this.pageNumber <= 3 && this.pageNumber > 0) {
          this.pageNumber = this.pageNumber - 1;
        } else {
          this.pageNumber = 3;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.investor_elations_header {
  background-image: url(../../assets/images/map.png);
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
            width: 160px;
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
    border-bottom: 1px solid #707070;
    font-weight: 600;
  }
  td:last-child{
    border-bottom: 0;
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
</style>