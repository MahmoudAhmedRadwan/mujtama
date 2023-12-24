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
            <div class="table_row" v-for="order in orders" :key="order.id">
                <div class="block">
                    <span>#{{order.id}}</span>
                </div>
                <div class="block">
                    <p>{{order.address}}</p>
                </div>
                <div class="block">
                    <h4>{{order.status.name}}</h4>
                    <h3>10:45AM اليوم</h3>
                    <!-- <h3>{{order.date}}</h3> -->
                </div>
                <div class="block">
                    <h6>نقدي</h6>
                </div>
                <div class="block">
                    <h5>{{order.price}}</h5>
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
import HeaderBg from '../../global/HeaderBg/HeaderBg';
import axios from 'axios';
export default {
    name: 'Requests',
    components: {HeaderBg},
    data(){
        return{
            img: require('../../../assets/images/requests.png'),
            orders: []
        }
    },
    mounted(){
        this.getRequests();
    },
     methods:{
        getRequests(){
            axios.get(`https://app.almujtama.com.sa/admin/orders`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                params:{
                    category_id : this.$route.params.id
                }
            })
            .then((response) => {
                console.log(response.data.data.data, 'mmmmmm')
                this.orders = response.data.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
    }
}
</script>
<style lang="scss" scoped>

</style>