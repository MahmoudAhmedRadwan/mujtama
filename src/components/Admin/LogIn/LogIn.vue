<template>
    <div class="logIn">
        <!-- LogIn.vue -->
        <div class="form_container">
            <div class="logIn_container">
                <h2>تسجيل الدخول</h2>
                <form>
                    <input type="text" placeholder="البريد الإلكتروني">
                    <input type="password" placeholder="Password">
                    <button>Login</button>
                </form>
                <router-link to="">Forget Your Password ?</router-link>
            </div>
        </div>
        <div class="logo_container">
            <img src="../../../assets/images/newLogo.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'LogIn'
}
</script>
<style lang="scss" scoped>
    .logIn{
        display: flex;
        justify-content: space-between;
        padding: 70px;
        min-height: 100vh;
        background-image: url(../../../assets/images/loginBg.svg);
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width: 991px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
        }
        .form_container{
            display: flex;
            align-items: center;
            padding-right: 50px;
            @media (max-width: 991px) {
                order: 2;
                padding-right: 0;
                width: 100%;
            }
            
        }
        .logo_container{
            @media (max-width: 991px) {
                order: 1;
                margin-bottom: 30px;
            }
        }
        .logIn_container{
            width: 460px;
            padding: 50px 30px 150px 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px #DDD;
            background-color: #FFF;
            @media (max-width: 576px) {
                width: 95%;
            }
            h2{
                font-size: 30px;
                font-weight: 600;
                text-align:center;
                border-bottom: 1px solid #DDD;
                padding-bottom: 70px;
                margin-bottom: 70px;
                @media (max-width: 576px) {
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                }
            }
            input{
                display: block;
                width: 100%;
                padding: 5px 10px;
                border-radius: 10px;
                border: 2px solid #DDD;
                font-size: 16px;
                margin-bottom: 20px;
                direction: ltr;
                &::placeholder{
                    color: #DDD;
                }
            }
            button{
                display: block;
                width: 100%;
                padding: 5px 10px;
                font-size: 16px;
                color: #FFF;
                text-align: center;
                margin-top: 100px;
                border: 0;
                border-radius: 10px;
                background-color: #78A28F;
                @media (max-width: 576px) {
                    margin-top: 20px;
                }
            }
            a{
                font-size: 18px;
                text-align: center;
                color: #000;
                display: block;
                margin-top: 20px;
                direction: ltr;
            }
        }
    }
</style>