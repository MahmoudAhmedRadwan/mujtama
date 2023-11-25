
<template>
    <!-- Branches.vue -->
    <div>
        <header class="admin_content_header">
            <h2>وظائف للسعودين</h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <router-link to=""> + أضف وظيفة جديدة </router-link>
            
        </header>
        <div class="filter">
            <select>
                <option value="" selected disabled>المدينة</option>
            </select>
        </div>

        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> رقم الفرع</th>
                        <th> أسم الفرع</th>
                        <th> الهاتف</th>
                        <th> المدينة</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>#5036</td>
                        <td>صيدلية المجتمع الرائدة 1</td>
                        <td>0599132523</td>
                        <td>جدة</td>
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
                    <tr>
                        <td>#5036</td>
                        <td>صيدلية المجتمع الرائدة 1</td>
                        <td>0599132523</td>
                        <td>جدة</td>
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
    name:'JobsForSaudis'
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