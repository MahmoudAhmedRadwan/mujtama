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
            <router-link to="/store-admin/statistics" class="store_manage">إدارة المتجر</router-link>

            <div class="links" @click="linkUrlCheck">
                <ul>
                    <li>
                        <router-link to="/admin/main" :class="hoverType == 'main' ? 'aciveLink' : ''"> 
                            <div class="img_container"><img src="../../assets/images/minpage.png" alt=""></div> 
                            الرئيسية 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/branches" :class="hoverType == 'branches' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/pharmacyLink.png" alt=""></div> 
                             الصيدليات 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="" :class="hoverType == 'SupportTickets' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/magazin.png" alt=""></div> 
                            المجلة الإلكترونية 
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/admin/articles-sections" :class="hoverType == 'articles-sections' ? 'aciveLink' : ''">
                                    أقسام المقالات 
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/articles" :class="hoverType == 'articles' ? 'aciveLink' : ''">
                                    المقالات
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/admin/employment-applications" :class="hoverType == 'employment-applications' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/jops.png" alt=""></div> 
                            طلبات التوظيف
                        </router-link>
                    </li>
                    <li>
                        <router-link to="" :class="hoverType == 'SupportTickets' ? 'aciveLink' : ''">
                            <div class="img_container"><img src="../../assets/images/invistmentLogo.png" alt=""></div> 
                            علاقات المستثمرين
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/key-metrics" :class="hoverType == 'key-metrics' ? 'aciveLink' : ''">
                            <div class="img_container"></div> 
                            مؤشرات الأداء الرئيسية
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/indicator-performance" :class="hoverType == 'indicator-performance' ? 'aciveLink' : ''">
                            <div class="img_container"></div> 
                            المؤشرات الرئيسية
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/results-and-reports" :class="hoverType == 'results-and-reports' ? 'aciveLink' : ''">
                            <div class="img_container"></div> 
                            النتائج و التقارير
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" >
                            <div class="img_container"></div>
                            تسجيل الخروج
                        </router-link>
                    </li>
                 
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
    name: 'Admin',
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
            if (window.location.href.indexOf("main") > -1) {
                this.hoverType = 'main'
            } else if(window.location.href.indexOf("branches") > -1){
                this.hoverType = 'branches'
            } else if(window.location.href.indexOf("articles-sections") > -1){
                this.hoverType = 'articles-sections'
            } else if(window.location.href.indexOf("articles") > -1){
                this.hoverType = 'articles'
            } else if(window.location.href.indexOf("employment-applications") > -1){
                this.hoverType = 'employment-applications'
            } else if(window.location.href.indexOf("key-performance-indicators") > -1){
                this.hoverType = 'key-performance-indicators'
            } else if(window.location.href.indexOf("results-and-reports") > -1){
                this.hoverType = 'results-and-reports'
            } else if(window.location.href.indexOf("indicator-performance") > -1){
                this.hoverType = 'indicator-performance'
            } else if(window.location.href.indexOf("key-metrics") > -1){
                this.hoverType = 'key-metrics'
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
                console.log(response.data, 'profile')
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