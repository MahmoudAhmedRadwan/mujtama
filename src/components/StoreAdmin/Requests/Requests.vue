<template>
    <div>
        <HeaderBg :img="img" title="الطلبات" />
        <!-- <header class="admin_content_header">
            <div class="filter">
                <select>
                    <option value="" selected disabled>المدينة</option>
                </select>
                <div class="tabs_filter">
                    <div class="active_tap">الكل</div>
                    <div>الأكثر شراء</div>
                    <div>النقاط</div>
                </div>
            </div>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            
        </header> -->

        <div class="detailsTable">
            <div class="table_row">
                <div class="block">
                    <span>#124</span>
                </div>
                <div class="block">
                    <p>جدة,الروضة شارع الأمير سعود الفيصل</p>
                </div>
                <div class="block">
                    <h4>Processing</h4>
                    <h3>10:45AM اليوم</h3>
                </div>
                <div class="block">
                    <h6>بطاقة</h6>
                </div>
                <div class="block">
                    <h5>1251.2</h5>
                    <h3>ريال إجمالي الفاتورة</h3>
                </div>
                <div class="block">
                    <h3 class="des">وصفي</h3>
                </div>
                <div class="block">
                    <div class="print">
                        <img src="../../../assets/images/print.png" alt="">
                        <div class="detailsClick">
                            التفاصيل
                            <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
export default {
    name: 'Requests',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/requests.png'),
        }
    }
}
</script>
<style lang="scss" scoped>

</style>