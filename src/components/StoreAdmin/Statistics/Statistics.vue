<template>
    <div>
        <div class="statistics_container">
            <div class="statisticsPart">
                <div class="img_container">
                    <img src="../../../assets/images/shopping-bag.png" alt="">
                </div>
                <div>
                    <h3>الطلبات</h3>
                    <h4>10</h4>
                </div>
            </div>
            <div class="statisticsPart">
                <div class="img_container">
                    <img src="../../../assets/images/dollar-sign.png" alt="">
                </div>
                <div>
                    <h3>المبيعات</h3>
                    <h4>10</h4>
                </div>
            </div>
            <div class="statisticsPart">
                <div class="img_container">
                    <img src="../../../assets/images/group-green.png" alt="">
                </div>
                <div>
                    <h3>المستخدمين</h3>
                    <h4> 10 </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Statistics'
}
</script>
<style lang="scss" scoped>
.statistics_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .statisticsPart{
        background-color: #FFF;
        border-radius: 10px;
        box-shadow: 0 0 10px #DDD;
        margin-bottom: 30px;
        width: 30%;
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            width: 100%;
        }
        .img_container{
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background-color: #D2F5E7;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            @media (max-width: 768px) {
                width: 62px;
                height: 62px;
            }
        }
        > div{
            h3{
                font-size: 30px;
                margin-bottom: 20px;
                font-weight: 600;
                text-align: center;
                @media (max-width: 991px) {
                    font-size: 24px;
                }
            }
            h4{
                font-weight: 600;
                font-size: 30px;
                margin-bottom: 0;
                text-align: center;
                @media (max-width: 991px) {
                    font-size: 24px;
                }
            }
        }
    }
}
</style>