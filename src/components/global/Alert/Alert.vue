<template>
    <div class="alert_messege">
        <p> {{messege}} </p>
        <div class="actions">
            <button @click="accept" class="saveBtn">نعم</button>
            <button @click="cancel" class="cancelBtn">إلغاء</button>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Alert',
    props: {
        acceptedDelete: {
            type: Function
        },
        messege: String
    },
    methods: {
        accept(){
            if (this.acceptedDelete) {
                this.acceptedDelete()
                this.$parent.alertToggle = false;
            }
        },
        cancel(){
            this.$parent.alertToggle = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.alert_messege{
    width: 424px;
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    margin-left: -200px;
    margin-right: -200px;
    top: 10%;
    left: 50%;
    right: 50%;
    background-color: #FFF;
    text-align: center;
    z-index: 99;
    box-shadow: 0 0 10px #8f8f8f;
    p{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 30px;
    }
    .actions{
        display: flex;
        justify-content: center;
        button:first-child{
            margin-left: 20px;
        }
    }
}
</style>