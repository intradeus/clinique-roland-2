<template>
  <main-layout>
        <div class="parallax banner2 text-center">
          <h3 class="title">{{ $t('about') }}</h3>
        </div>
        <div class="container">
          <template v-if="!isPhone()">
            <div class="image-background">
              <div class="about-text">
                <h3>{{ $t('general.name') }} </h3>
                <p>{{ $t('aboutObject.part1') }} <br><br>
                {{ $t('aboutObject.part2') }} 
                </p>
              </div>
            </div>
          </template>
          <template v-else>
              <div class="about-phone">
                  <div class="about-image">
                    <img width="100%" alt="profile pic" src="../../public/assets/photo-profile-2.jpg">
                  </div>
                  <div class="about-text">
                      <h3>{{ $t('general.name') }}</h3>
                      <p>{{ $t('aboutObject.part1') }} <br><br>
                      {{ $t('aboutObject.part2') }} 
                      </p>
                  </div>
              </div>
          </template>
        </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
    data: function () {
      return {
        width : 0
      }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods : {
      handleResize () {
            this.width = window.innerWidth;
      },
      isPhone (){
        return this.width < 768;
      },
    }
  }
</script>

<style lang="scss" scoped>
@import "../../public/css/style.scss";
@import "../../public/css/variables.scss";

.parallax {
  min-height: 200px;
  &.banner2 {
    background-image: url("../../public/assets/banner1.jpg");
    height: 200px;
  }
}

.container {
  @media (max-width: 500px) {
        padding: 0px;
  }
}


  .image-background {
    min-height: 800px;
    background-image: url("../../public/assets/photo-profile-1.jpg") ;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    width : 100%;

    margin: 20px 0px 20px 0px; 
      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }
  }

  .about-text {
    width : 40%;
    min-height: 800px;
    line-height: 2.5 ; 
    color : white;
    font-size: 13px;
    font-weight: 400;
    text-align: justify;
    font-family: 'Work Sans', sans-serif;
    padding: 20px;
    background: rgba(29,35,49,0.8);
    align-items: center;

    @media (max-width: 1198px) {
        width : 60%;
    }

    @media (max-width: 768px) {
        width : 100%;
    }

    h3 {
      
      margin-bottom: 0px;
      padding : 15px 10px;
    }

    p {
      margin-bottom: 0;
      padding : 10px;
    }
  }
</style>>