<template>
  <div class="error">
    <div class="error_container">
      <span>Error Page</span>
      <img src="../../assets/images/404.png" alt="" />
      <h4>المتجر تحت الصيانة مؤقتاَ</h4>
      <div class="line"></div>
      <p>عملائنا الكرام نأسف لعدم توفر الخدمة في الوقت الحالي</p>
    </div>
    <span></span>
  </div>
</template>
<script>
export default {
  name: "Error",
};
</script>
<style lang="scss" scoped>
.error {
  min-height: 100vh;
  background-color: #78a28f;
  display: flex;
  justify-content: center;
  align-items: center;
  .error_container {
    width: 630px;
    height: 586px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 100%;
      margin: 20px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #2b5933;
      font-weight: 800;
    }
    h2 {
      font-size: 150px;
      color: #2b5933;
      font-weight: 800;
    }
    h4 {
      font-size: 40px;
      color: #78a28f;
      font-weight: 800;
    }
    p {
      font-size: 20px;
      color: #6f7775;
    }
  }
}
</style>