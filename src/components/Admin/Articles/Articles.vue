<template>
    <!-- Branches.vue -->
    <div>
        <header class="admin_content_header">
            <h2>المقالات</h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <router-link to="/admin/articles/add-articles"> + إضافة مقال </router-link>
            
        </header>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> العنوان</th>
                        <th> القسم الرئيسى</th>
                        <th> القسم الرئيسى</th>
                        <th> اضاف بواسطة</th>
                        <th> حالة الخبر</th>
                        <th> التعليقات</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>تم بحمد الله #افتتاح صيدلية المجتمع بمدينة جدة الموقع / جدة – حي البساتين - شارع الأمير سلطان</td>
                        <td>اخر الاخبار</td>
                        <td>المجتمع</td>
                        <td>المكتب العلمي 2023-06-24 12:26:09</td>
                        <td>معروض</td>
                        <td>مشاهدة ......</td>
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
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
export default {
    name:'Articles'
}
</script>
<style lang="scss" scoped>
.filter{
    select{
        background-color: #FFF;
        border: 0;
        width: 89px;
        text-align: center;
        font-size: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
}


</style>