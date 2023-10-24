<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  components : {
  },
  mounted(){ 

  },
  updated() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
*{
  direction: rtl;
}
#app {
  font-family: 'Almarai', sans-serif;
}
.btn-primary{
  background: transparent linear-gradient(90deg, #63ADC8 0%, #6BDFAF 100%) 0% 0% no-repeat padding-box !important;
  border:none!important;
}
</style>
