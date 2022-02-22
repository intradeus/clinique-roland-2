<template>
  <main-layout>
    <div class="banner">
      <div class="banner-text">
        <h3 class="h3-title">{{ $t('homeObject.title1') }}<span>{{ $t('homeObject.title2') }}</span></h3>
        <p class="banner-content">
          {{ $t('homeObject.subtitle') }}
        </p>
        
        <router-link to="/reservation" type="button" class="reserve-button draw-border white mb-5">{{ $t('homeObject.reserve') }} <font-awesome-icon icon="angle-right" :style="{ color: 'white' }"/></router-link>
        <a href="#feedback" class="stars-button">
          <h4 >
            <template v-for="s in stars">
              <font-awesome-icon :key="s" icon="star" :style="{ color: 'white', marginLeft: '5px' }"/>
            </template>
            <template v-if="halfStar">
              <font-awesome-icon icon="star-half-alt" :style="{ color: 'white' }"/>
            </template>
            <font-awesome-icon class="ml-2" icon="angle-right" :style="{ color: 'white' }"/>
          </h4>
        </a>
      </div>
    </div>
    <div class="text-center about">
      <div class="container">
        <h3 class="h3-about">{{ $t('homeObject.about.title') }}</h3>
      </div>
      <div class="container border-container">
        <div>
          <h6 style="line-height: 2"><u>{{ $t('homeObject.about.val1') }}</u></h6>
          <h6 style="line-height: 2">{{ $t('homeObject.about.val2') }}</h6>
          <h6 style="line-height: 2">{{ $t('homeObject.about.val3') }}<strong><router-link class="tax-href" to="/news/3?name=application-obligatoire-des-taxes-aux-services-d-osteopathie">+ taxes <font-awesome-icon icon="info-circle"/></router-link></strong></h6>
          <h6 style="line-height: 2">
            {{ $t('homeObject.about.val4') }}
          </h6>
          <h6 style="line-height: 2">
            {{ $t('homeObject.about.val5') }}
            <a target="_self" href="/annulation#annulation"
              >{{ $t('general.cancelPolicy') }}</a
            >.
          </h6>
        </div>
      </div>
    </div>
    <feedback-component :stars="this.stars" :half-star="this.halfStar" ></feedback-component>
    <news-component></news-component>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import FeedbackComponent from "../components/FeedbackComponent.vue";
import NewsComponent from "../components/NewsComponent.vue";
import jsonFeedbacks from "../content/feedback/feedback.json";

export default {
  components: {
    MainLayout,
    NewsComponent,
    FeedbackComponent
  },
  data() {
    return {
      feedbacks: jsonFeedbacks,
      stars: 5,
      halfStar: false,
    }
  },
  beforeMount: function() {
    var totalStar = 0;
    var feedbackCount = 0;
    this.feedbacks.forEach(f => {
      totalStar += parseInt(f.stars);
      feedbackCount++;
    });
    var avgStars = totalStar/feedbackCount;

    if(avgStars % 1 == 0){
      this.stars = avgStars;
    }else if(avgStars % 1 != 0){
      this.halfStar = true;
      this.stars = Math.floor(avgStars);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../content/css/style.scss";
@import "../content/css/variables.scss";

hr{
  margin:0;
}

.border-container {
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding: 20px 0px;
}

.white {
  color: white;
}

.about {
  padding: 60px 0px 100px 0px;
  background: linear-gradient(to right, white, #c3cfe2);
}

h3 {
  color: white;
  font-size: 48px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  letter-spacing: 1px;

  span {
    font-weight: 600;
  }

  &.h3-about {
    color: #7b6572;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 40px
  }
}

.banner-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 0 15px;
  padding: 130px 5px 70px 5px;

  .banner-content{
    width: 55%;
    letter-spacing: 4px;
    font-size: 1em;
    line-height: 1.8em;
    font-weight: 300;
    color: #fff;

    @media (max-width: 991px) {
       width: 70%;
    }

    @media (max-width: 768px) {
       width: 100%;
    }
  }
}

a {
    &.reserve-button {
      text-decoration: none;
      letter-spacing: 1px;
      padding: 11px 20px;
      background: rgba(0, 0, 0, 0.30);
      font-size: 0.9em;
      border-radius: 0;
      color: white;

      &:hover {
        color :white;
      }
    }

    &.stars-button{
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid white;
      }

    }

  &.tax-href {
      text-decoration: none;
      color :black;
  }
}

.parallax {
  &.banner2 {
    background-image: url("../content/assets/banner2.jpg");
  }
}

.banner {
    background: url("../content/assets/banner1.jpg");
    background-size: cover;
    max-height: 100%;
    background-position: center;
    background-repeat: no-repeat
}

</style>
