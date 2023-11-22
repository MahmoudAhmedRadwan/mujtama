
<template>
    <!-- Branches.vue -->
    <div>
        <header>
            <h2>إدارة الفروع</h2>
            <div class="search">
                <input type="text" placeholder="البحث برقم الفرع">
            </div>
            <router-link to="/admin/add-branch"> + أضف فرع جديد </router-link>
            
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
    name:'Branches'
}
</script>
<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 27px 0;
    @media (max-width: 991px) {
        flex-direction: column;
    }
    h2{
        font-size: 26px;
        font-weight: 800;
        font-family: flatMedium;
        @media (max-width: 991px) {
            margin-bottom: 20px;
        }
    }
    .search{
        width: 50%;
        @media (max-width: 991px) {
            width: 80%;
            margin-bottom: 20px;
        }
        input{
            background-color: #FFF;
            border-radius: 10px;
            font-size: 14px;
            width: 100%;
            display: block;
            border: 0;
            padding: 10px;
            @media (max-width: 991px) {
                margin-bottom: 20px;
            }
            &::placeholder{
                color: #C5C5C5;
                font-size: 14px;
            }
        }
    }
    a{
        width: 153px;
        padding: 10px;
        text-align: center;
        font-size: 14px;
        color: #FFF;
        background-color: #D8D253;
        border-radius: 10px;
    }
}
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

.main_table{
    table {
        width: 100%;
        font-size: 16px;
        border-collapse: collapse;
        color: #1E1E1E;
        tr {
            background: #ffffff;
            margin-top: 20px;
            border-top: 10px solid #FAFAFA;
        }
        thead {
            margin-bottom: 20px;
            th {
                color: #1E1E1E;
                background: #FFF;
                padding: 10px;
                border-radius: 10px;
                font-weight: 500;
                margin-bottom: 20px;
            }
        }
        td {
            padding: 10px;
            border-radius: 10px;       
        }
        .options_container{
            cursor: pointer;
            position: relative;
            .hidden_options{
                display: none;
                position: absolute;
                top: 23px;
                right: -73px;
                background-color: #FAFAFA;
                padding: 10px;
                button{
                    border: 0;
                    background-color: transparent;
                    font-size: 12px;
                    color: #656565;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    margin-bottom: 5px;
                    img{
                        margin-left: 10px;
                    }
                }
            }
        }
        .options_container:hover .hidden_options{
            display: block;
        }
    }

@media only screen and (max-width: 640px) {
  table thead {
    display: none;
  }

  table tbody {
    display: block;
  }

  table tbody tr td {
    display: flex;
    align-items: center;
    padding: 0;
  }

  table tbody tr {
    margin-bottom: 20px;
    display: block;
    border: 1px solid #004976;
    background: #f9f9f9;
    overflow: hidden;
  }

  table tbody td::before {
    content: attr(data-label);
    font-weight: bold;
    width: 30%;
    display: flex;
    background: #004976;
    color: #fff;
    padding: 15px;
    margin-inline-end: 10px;
  }
}

}
</style>