<template>
<!-- Admin.vue -->
    <div class="admin_page">
        <div class="side_menu">
            <div class="logo">
                <img src="../../assets/images/newLogo.png" alt="">
            </div>
            <a href="#" class="store_manage">إدارة المتجر</a>

            <div class="links">
                <ul>
                    <li>
                        <router-link to=""> 
                            <div class="img_container"><img src="../../assets/images/minpage.png" alt=""></div> 
                            الرئيسية 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/branches">
                            <div class="img_container"><img src="../../assets/images/pharmacyLink.png" alt=""></div> 
                             الصيدليات 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="img_container"><img src="../../assets/images/magazin.png" alt=""></div> 
                            المجلة الإلكترونية 
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="">
                                    أقسام المقالات 
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/articles">
                                    المقالات
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="img_container"><img src="../../assets/images/jops.png" alt=""></div> 
                            طلبات التوظيف
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/admin/jobs-for-saudis">
                                    وظائف للسعودين
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    وظائف لغير السعودين
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="img_container"><img src="../../assets/images/invistmentLogo.png" alt=""></div> 
                            علاقات المستثمرين
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="img_container"></div> 
                            مؤشرات الأداء الرئيسية
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/key-performance-indicators">
                            <div class="img_container"></div> 
                            المؤشرات الرئيسية
                        </router-link>
                    </li>
                 
                </ul>
                
            </div>

        </div>
        <div class="content">
            <div class="navBar">
                <div class="side">
                    <div class="menu_icon">
                        <img src="../../assets/images/menuIcon.png" alt="">
                    </div>
                </div>
                <div class="side">
                    <div class="notification">
                        <img src="../../assets/images/notificationIcon.png" alt="">
                    </div>
                    <div class="name_container">
                        <h3>John Doe</h3>
                        <h4>Admin</h4>
                    </div>
                    <div class="img_container">
                        <div class="active_status"></div>
                    </div>
                    
                </div>
            </div>

            <div class="main_content">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Admin'
}
</script>
<style lang="scss" scoped>
.admin_page{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .side_menu{
        width: 314px;
        background-color: #FFF;
        min-height: 100vh;
        .logo{
            width: 186px;
            margin: 10px auto 40px auto;
            img{
                width: 100%;
            }
        }
        .store_manage{
            width: 164px;
            background-color: #78A28F;
            padding: 10px;
            text-align: center;
            font-size: 16px;
            color: #FFF;
            display: block;
            margin: auto auto 20px auto;
        }

        .links{
            ul{
                li{
                    a{
                        font-size: 16px;
                        color: #444444;
                        display: flex;
                        align-items: center;
                        padding: 10px 20px;
                        .img_container{
                            width: 30px;
                            margin-left: 10px;
                        }
                        
                    }
                    >ul{
                        margin-right: 50px;
                    }
                }
            }
            
        }
    }
    .content{
        width: calc(100% - 314px);
        padding: 30px;
        background-color: #FAFAFA;
        min-height: 100vh;
        .navBar{
            border-radius: 15px;
            background-color: #FFF;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-items: center;
            .side{
                display: flex;
                align-items: center;
                .menu_icon{
                    cursor: pointer;
                }
                .img_container{
                    width: 61px;
                    height: 61px;
                    border-radius: 50%;
                    background-color: #EFEFEF;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .active_status{
                        width: 16px;
                        height: 16px;
                        background-color: #28C66F;
                        border-radius: 50%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }
                .name_container{
                    margin-left: 23px;
                    h3{
                        font-size: 16px;
                        font-weight: 600;
                        color: #1E1E1E;
                        margin-bottom: 2px;
                        font-family: flatMedium;
                    }
                    h4{
                        font-size: 14px;
                        color: #656565;
                        margin-bottom: 0;
                    }
                }
                .notification{
                    margin-left: 23px;
                }
            }
        }
    }
}
</style>