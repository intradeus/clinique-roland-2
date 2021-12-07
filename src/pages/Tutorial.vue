<template>
    <main-layout>
      <div class="parallax banner2 text-center">
        <h3 class="title">{{ $t('tuto.title') }}</h3>
      </div>
      <div id="new" class="container bluebox pt-4 pb-4">
        <h4 class="content mb-3">{{ $t('tuto.subtitle1') }}</h4>
        <div class="container text-center">
          <video class="mb-5" controls>
                        <source src="../content/assets/tutorial/tutorial-first-time.mp4" type="video/mp4">
                        Your browser does not support the video tag.
          </video>
        </div>
           
        <h4 class="content mb-3">{{ $t('tuto.subtitle2') }}</h4>
        <div class="text-center">
          <video class="mb-5" controls>
                        <source src="../content/assets/tutorial/tutorial-sign-in.mp4" type="video/mp4">
                        Your browser does not support the video tag.
          </video>
        </div>
           
      </div>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  
  export default {
    components: {
      MainLayout
    }
  }
</script>
<style lang="scss" scoped>
  .parallax {
  min-height: 200px;
  &.banner2 {
    background-image: url("../content/assets/banner1.jpg");
    height: 200px;
  }
}

img {
  height: 200px;
}

.date {
  color : #7b6572;
  font-weight: bold;
}

.content {
  white-space: pre-wrap;
}

.bluebox {
  background-color: #b9c3d8;
  padding-left : 30px;
  padding-right : 30px;
  margin-top: 20px;
  margin-bottom : 20px;

  @media (max-width: 768px) {
      margin-top: 0px;
      margin-bottom : 0px;
    }
}

video {
   @media (max-width: 768px) {
      height: 250px;
    }
  
}
</style>
