<template>
<!-- Admin.vue -->
    <div class="admin_page">
        <div class="side_menu" :class="showSideMenu == true ? 'menuShow' : 'menuHide'">
            <div class="toggleMenu" @click="toggleMenu">
                <b-icon icon="caret-right-fill" aria-hidden="true"></b-icon>
            </div>
            <div class="logo">
                <img src="../../assets/images/newLogo.png" alt="">
            </div>
            <router-link to="/admin/main" class="store_manage">إدارة الصفحة الرئيسية</router-link>

            <div class="links" @click="linkUrlCheck">
                <ul>
                    <li>
                        <router-link to="/store-admin/statistics" :class="hoverType == 'statistics' ? 'aciveLink' : ''"> 
                            <div class="img_container"><img src="../../assets/images/minpage.png" alt=""></div> 
                            الرئيسية 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/store-admin/requests" :class="hoverType == 'requests' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/storeAdminDescription.png" alt=""></div> 
                             الطلبات 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/store-admin/prescriptions/mine" :class="hoverType == 'prescriptions' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/prescription.png" alt=""></div> 
                             الوصفات 
                        </router-link>
                    </li>
                    <li>
                    <li>
                        <router-link to="" :class="hoverType == 'test' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/products.png" alt=""></div> 
                            المنتجات
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/store-admin/products" :class="hoverType == 'products' ? 'aciveLink' : ''">
                                    إدارة المنتجات
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/store-admin/categories" :class="hoverType == 'categories' ? 'aciveLink' : ''">
                                    أقسام المنتجات
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/store-admin/users" :class="hoverType == 'users' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/users.png" alt=""></div> 
                            المستخدمين
                        </router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/store-admin/cities" :class="hoverType == 'cities' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/locationBlack.png" alt=""></div> 
                            مدن التوصيل
                        </router-link>
                    </li> -->
                 
                </ul>
                
            </div>

        </div>
        <div class="content" :class="showSideMenu == true ? 'contentShow' : 'contenthide'">
            <div class="navBar">
                <div class="side">
                    <div class="menu_icon" @click="toggleMenu">
                        <img src="../../assets/images/menuIcon.png" alt="">
                    </div>
                </div>
                <div class="side">
                    <div class="notification">
                        <img src="../../assets/images/notificationIcon.png" alt="">
                    </div>
                    <div class="name_container">
                        <h3>{{profile.name}}</h3>
                        <h4>{{profile.role}}</h4>
                    </div>
                    <div class="img_container">
                        <img :src="profile.image" alt="">
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
import axios from 'axios';
export default {
    name: 'StoreAdmin',
    data(){
        return{
            showSideMenu: true,
            hoverType: '',
            profile: {}
        }
    },
    mounted(){
        this.linkUrlCheck();
        this.getProfile();
    },
    methods: {
        linkUrlCheck(){
            if (window.location.href.indexOf("statistics") > -1) {
                this.hoverType = 'statistics'
            } else if(window.location.href.indexOf("products") > -1){
                this.hoverType = 'products'
            } else if(window.location.href.indexOf("users") > -1){
                this.hoverType = 'users'
            } else if(window.location.href.indexOf("categories") > -1){
                this.hoverType = 'categories'
            } else if(window.location.href.indexOf("cities") > -1){
                this.hoverType = 'cities'
            }  else if(window.location.href.indexOf("requests") > -1){
                this.hoverType = 'requests'
            }  else if(window.location.href.indexOf("prescriptions") > -1){
                this.hoverType = 'prescriptions'
            } 
        },
        toggleMenu(){
            this.showSideMenu = !this.showSideMenu
        },
        getProfile(){
            axios.get(`https://app.almujtama.com.sa/api/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data, 'profiledede')
                this.profile = response.data.data
            
            })
            .catch((error) => {
            console.error('Error fetching data from API:', error);
            });
        },
    }
}
</script>
<style lang="scss" scoped>
.menuShow{
    width: 314px;
    @media (max-width: 991px) {
        width: 0;
    }
}
.menuHide{
    width: 0;
    @media (max-width: 991px) {
        width: 225px;
        right: 0 !important;
    }
}
.contentShow{
    width: calc(100% - 314px);
    @media (max-width: 991px) {
        width: 100%;
    }
}
.contenthide{
    width: 100%;
    @media (max-width: 991px) {
        width: 100%;
    }
}
.admin_page{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 991px) {
        position: relative;
    }
    .side_menu{
        transition: .3s ease-in-out;
        background-color: #FFF;
        min-height: 100vh;
        @media (max-width: 991px) {
            position: absolute;
            top: 0;
            right: -277px;
            bottom: 0;
            background-color: #FFFF;
            z-index: 99;
            width: 225px;
        }
        .toggleMenu{
            display: flex;
            justify-content: flex-end;
            padding: 20px 0 0 0;
            display: none;
            @media (max-width: 991px) {
                display: flex;
            }
            svg{
                font-size: 35px;
                color: #78A28F; 
            }
        }
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
                        padding: 15px 20px;
                        -webkit-box-shadow: -1px 6px 4px 0px #EFEFEF;
                        -moz-box-shadow: -1px 6px 4px 0px #EFEFEF;
                        box-shadow: -1px 6px 4px 0px #EFEFEF;
                        .img_container{
                            width: 30px;
                            margin-left: 10px;
                        }
                        
                    }
                    .aciveLink{
                        background-color: #D8D253;  
                        color: #FFF;  
                    }
                    >ul{
                        li{
                            a{
                                padding: 15px 57px 15px 20px;
                            }
                        }
                    }
                }
            }
            
        }
    }
    .content{
        transition: .3s ease-in-out;
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
            margin-bottom: 40px;
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
                        height: 100%;
                        border-radius: 50%;
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