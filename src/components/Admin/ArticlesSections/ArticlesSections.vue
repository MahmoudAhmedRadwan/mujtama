<template>
    <div>
        <!-- ArticlesSections.vue -->
        <HeaderBg title="أقسام المقالات" description="أقسام رئيسية" />
        <header class="admin_content_header">
            <h2></h2>
            <div class="search">
                
            </div>
            <router-link to="/admin/articles-sections/add-articles-sections"> أضف قسم جديد </router-link>
        </header>
        <div class="main_table">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الأسم </th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>المجلة الإلكترونية</td>
                        <td>
                            <div class="actionsContainer">
                                <button @click="subSections">أقسام فرعية</button>
                                <div class="options_container">
                                    <img src="../../../assets/images/selectIcon.png" alt="">
                                    <div class="hidden_options">
                                        <button> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                        <button> <img src="../../../assets/images/delete-text.png" alt=""> حذف </button>
                                    </div>
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
import HeaderBg from '../../global/HeaderBg/HeaderBg'
export default {
    name: 'ArticlesSections',
    components: {HeaderBg},
    methods:{
        subSections(){
            this.$router.push('/admin/articles-sub-sections')
        }
    }
}
</script>
<style lang="scss" scoped>
.actionsContainer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button{
        background-color: #78A28F;
        border: 10px;
        padding: 5px 20px;
        color: #FFF;
        border: 0;
        margin-left: 20px;
        border-radius: 10px;
    }
}
</style>