<template>
    <main-layout>
      <div class="parallax banner2 text-center">
        <h3 class="title">{{ $t('cancelPolicyObject.title') }}</h3>
      </div>
      <div class="container bluebox">
            <h5 class="text-center"> {{ $t('cancelPolicyObject.text1') }}</h5>
            <br>
            <div>
                <p>{{ $t('cancelPolicyObject.p1') }}</p>
                <br>
                <p>{{ $t('cancelPolicyObject.p2') }}<b>{{ $t('cancelPolicyObject.p3') }}</b>{{ $t('cancelPolicyObject.p4') }}</p>
                <br>
                <p>{{ $t('cancelPolicyObject.p5') }}<b>{{ $t('cancelPolicyObject.p6') }}</b></p>
            </div>
    </div>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout,
    },
    data() {
      return {
      }
    },

  }
</script>
<style lang="scss" scoped>
  .parallax {
  min-height: 200px;
  &.banner2 {
    background-image: url("../../public/assets/banner1.jpg");
    height: 200px;
  }
}

.bluebox {
  padding: 40px 20px 40px 20px;
  margin-top: 20px;
  margin-bottom : 20px;
  background-color: #b9c3d8;
  text-align: justify;
  line-height: 2.5;

   @media (max-width: 768px) {
      margin-top: 0px;
      margin-bottom : 0px;
   }
  
}

</style>
