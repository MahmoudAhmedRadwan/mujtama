<template>
    <div>
        <!-- Main.vue -->
        <div class="statistics_numbers_container">
            <div class="statistics_number">
                <div class="img_container">
                    <img src="../../../assets/images/statistcs3.png" alt="">
                </div>
                <div class="info">
                    <span>الطلبات</span>
                    <h3>4310</h3>
                    <div>
                        1.700
                        <b-icon icon="arrow-up"></b-icon>
                    </div>
                    
                </div>
            </div>
            <div class="statistics_number">
                <div class="img_container">
                    <img src="../../../assets/images/statistcs2.png" alt="">
                </div>
                <div class="info">
                    <span>المبيعات</span>
                    <h3>97.000</h3>
                    <div class="redColor">
                        1.700
                        <b-icon icon="arrow-up"></b-icon>
                    </div>
                    
                </div>
            </div>
            <div class="statistics_number">
                <div class="img_container">
                    <img src="../../../assets/images/statistcs1.png" alt="">
                </div>
                <div class="info">
                    <span>المستخدمين</span>
                    <h3>9.700</h3>
                    <div class="greenColor">
                        1.700
                        <b-icon icon="arrow-up"></b-icon>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'رقم الفرع'
}
</script>
<style lang="scss" scoped>
.statistics_numbers_container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    .statistics_number{
        width: 30%;
        padding: 20px;
        background-color: #FFF;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 1200px) {
            width: 33%;
        }
        @media (max-width: 991px) {
            width: 100%;
            margin-bottom: 20px;
        }
        .info{
            text-align: center;
            span{
                font-size: 16px;
                color: #656565;
                font-weight: 800;
            }
            h3{
                font-size: 30px;
                font-weight: 700;
            }
            > div{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                color: #28C66F;
                font-weight: 800;
            }
            .redColor{
                color: #EC5453;
            }
            .greenColor{
                color: #28C66F;
            }
        }
    }
}
</style>