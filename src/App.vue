<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style lang="scss">
@font-face {
  font-family: icomoon;
  src: url(./assets/fonts/Flat.otf);
}
* {
  direction: rtl;
}
#app {
  font-family: icomoon;
}
// #app {
//   font-family: "Almarai", sans-serif;
// }
.btn-primary {
  background: transparent linear-gradient(90deg, #63adc8 0%, #6bdfaf 100%) 0% 0%
    no-repeat padding-box !important;
  border: none !important;
}
</style>
