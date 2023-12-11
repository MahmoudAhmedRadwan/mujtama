<template>
    <div>
        <HeaderBg :img="img" title="المنتجات" />
        <header class="admin_content_header">
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
            <router-link to="/store-admin/products/add-product"> + إضافة منتج </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> الرقم المرجعي</th>
                        <th> التصنيف</th>
                        <th> السعر</th>
                        <th> التوفر </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>حليب نيدو</td>
                        <td>#23121321</td>
                        <td>العناية بالطفل</td>
                        <td>24 ر.س</td>
                        <td class="blueColor">متوفر</td>
                        
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button> <img src="../../../assets/images/delete-text.png" alt="" > حذف </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
export default {
    name: 'Products',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/products_headTitle.png'),
        }
    }
}
</script>
<style lang="scss" scoped>
.blueColor{
    color: #2081FF;
}
</style>