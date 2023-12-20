<template>
    <div>
        <HeaderBg :img="img" title="المنتجات" />
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteProduct" 
            messege="هل أنت متأكد من مسح المنتج ؟"
        />
        <header class="admin_content_header">
            <div></div>
            <!-- <div class="filter">
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
            </div> -->
            <router-link to="/store-admin/products/add-product"> + إضافة منتج </router-link>
            
        </header>
        <RequestSpinner v-if="loadingRequest == true" />
        <div class="main_table" v-if="loadingRequest == false">
            <table width="100%">
                <thead>
                    <tr>
                        <th> الاسم</th>
                        <th> النوع</th>
                        <th> التصنيف</th>
                        <th> السعر</th>
                        <th> التوفر </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td> {{product.translation[0].name}} </td>
                        <td> {{product.wasfy == 1 ? 'وصفي' : 'غير وصفي'}} </td>
                        <td>{{product.subcategory}}</td>
                        <td>{{product.price + " " +'ر.س'}}</td>
                        <td class="blueColor">{{product.active == 1 ? 'متوفر' : 'غير متوفر'}}</td>
                        
                        <td>
                            <div class="options_container">
                                <img src="../../../assets/images/selectIcon.png" alt="">
                                <div class="hidden_options">
                                    <button @click="() => editProduct(product.id)"> <img src="../../../assets/images/edit-text.png" alt=""> تعديل  </button>
                                    <button @click="() => deleteData(product.id)"> <img src="../../../assets/images/delete-text.png" alt="" > حذف </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="noData" v-if="products.length < 1">
                <p> لا يوجد منتجات </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import Alert from '../../global/Alert/Alert';
import Request from '../../../services/Request';
import RequestSpinner from '../../global/loadingSpinners/RequestSpinner';
export default {
    name: 'Products',
    components: {HeaderBg, Alert, RequestSpinner},
    data(){
        return{
            loadingRequest: true,
            img: require('../../../assets/images/products_headTitle.png'),
            products: [],
            deleteID: '',
            alertToggle: false,
        }
    },
    mounted(){
        this.getProducts();
    },
    methods:{
        getProducts(){
            axios.get(`https://app.almujtama.com.sa/admin/product`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response, 'mmmmmm')
                this.products = response.data.data
                this.loadingRequest = false;
            
            })
            .catch(err => {
                if(Request.statusIsFaield(err)){
                    this.$router.push('/')
                    localStorage.removeItem('token')
                }
            });
        },
        editProduct(id){
            this.$router.push(`/store-admin/products/add-product/${id}`)
        },
        deleteData(id){
            this.deleteID = id;
            this.alertToggle = true;
        },
        acceptedDeleteProduct(){
            Request.delete('admin/product',this.deleteID)
            .then( () => {
                this.getProducts();
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.blueColor{
    color: #2081FF;
}
</style>