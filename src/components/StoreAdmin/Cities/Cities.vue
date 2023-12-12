<template>
    <div>
        <HeaderBg :img="img" title="مدن التوصيل" />
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
            <router-link to="/store-admin/cities/add-city"> + إضافة مدينة </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> سعر التوصيل</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>جدة</td>
                        <td>10 ر.س</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
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
    name: 'Cities',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/locationLarg.png'),
        }
    }
}
</script>
<style lang="scss" scoped>

</style>