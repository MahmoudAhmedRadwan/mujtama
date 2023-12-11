<template>
    <div>
        <HeaderBg :img="img" title="المستخدمين" />
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
                <input type="text" placeholder="البحث  ">
            </div>
            <router-link to="/store-admin/users/add-user"> + إضافة مستخدم </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> رقم الجوال</th>
                        <th> البريد</th>
                        <th> الشراء</th>
                        <th> النقاط </th>
                        <th>اخر دخول</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>محمد حسن</td>
                        <td>0504448732</td>
                        <td>Mohammed@Gmeil.Com</td>
                        <td>24 ر.س</td>
                        <td class="blueColor">مشاهدة ......</td>
                        <td>2023-06-24</td>
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
    name: 'Users',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/GroupWhite.png'),
        }
    }
}
</script>
<style lang="scss" scoped>
.blueColor{
    color: #2081FF;
}
</style>