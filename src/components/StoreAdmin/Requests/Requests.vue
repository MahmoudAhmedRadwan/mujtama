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
.detailsTable{
    .table_row{
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        background-color: #FFF;
        width: 100%;
        margin-bottom: 30px;
        .block{
            padding: 30px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            span{
                font-size: 16px;
                color: #2E4765;
            }
            p{
                font-size: 16px;
                font-weight: 600;
            }
            h4,
            h6{
                font-size: 16px;
                font-weight: 600;
            }
            h3{
                font-size: 16px;
                color: #2E4765;
            }
            .des{
                font-size: 18px;
                font-weight: 800;
            }
            .print{
                img{
                    display: block;
                    margin: auto;
                }
                .detailsClick{
                    cursor: pointer;
                }
            }
        }
    }
}
</style>