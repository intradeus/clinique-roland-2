<template>
  <div id="feedback" class="parallax banner2">
    <div class="text-center feedback">
      <h3 class="h3-feedback">{{ $t('testimonials.title') }}</h3>
      <div class="container container-testimonials">
        <h2 class="pt-4 mb-3">
          <template v-for="s in stars">
              <font-awesome-icon :key="s" icon="star" :style="{ color: 'white', marginLeft: '5px' }"/>
            </template>
            <template v-if="halfStar">
              <font-awesome-icon icon="star-half-alt" :style="{ color: 'white' }"/>
            </template>
        </h2>
        <div class="testimonials">
          <div
            v-for="feedback in feedbacks"
            v-bind:key="feedback.id"
            class="feedback"
          >
            <div class="bubble">
              {{ feedback.content }}
              <br />
              <br />
              <h5 class="text-left">
                <span v-for="n in parseInt(feedback.stars)" :key="`index-${n}`">
                  <font-awesome-icon
                    icon="star"
                    prefix="fa"
                    :style="{ color: 'white' }"
                  />
                </span>
              </h5>
            </div>
            <div class="pointer"></div>
            <div class="name">{{ feedback.name }}</div>
          </div>
        </div>
        <hr />
        <h5 class="google-review">
         {{ $t('testimonials.subtitle1') }}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/search?rlz=1C1CHBF_enCA831CA831&ei=S951XMfINeK0ggffhrTwBw&q=clinique+osteopathique+christophe+roland&oq=clinique+osteopathique+christophe+roland&gs_l=psy-ab.3..38.753.7001..7044...1.0..0.116.3327.35j5......0....1..gws-wiz.......0i71j35i39j0j0i131j0i67j0i203j35i304i39j0i13j0i22i30.iCXxx0vmoao#lrd=0x4cc91bcec225e2e1:0xfb4e1ccd01e3dadd,3,,,"
            class="google-link"
          >
            {{ $t('testimonials.subtitle2') }} </a
          >
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import jsonFeedbacks from "../../../public/feedback/feedback.json";

export default {
  data() {
    return {
      feedbacks: jsonFeedbacks,
    };
  },
  props: {
    halfStar: {
      type: Boolean,
      required: true
    },
    stars: {
      type:Number,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/css/style.scss";
@import "../../../public/css/variables.scss";

.feedback {
  padding: 60px 0px;
}


.h3-feedback {
  color: #7b6572;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 76px;
  text-shadow: 1px 1px 0px #fff;
}



.container-testimonials {
  background:rgba(0, 0, 0, 0.47);

  .testimonials{
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    grid-gap: 20px;
    justify-content: space-around;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
       grid-template-columns: repeat(1, 1fr);
    }
    
    .feedback{
      color: white;
      padding: 10px;

      .bubble{
          background:rgba(0, 0, 0, 0.47);
          min-width: 200px;
          display: block;
          margin: 0 auto;
          border-radius: 5px;
          text-align: left;
          color: white;
          padding: 20px;
      }

      .pointer {
        margin-left: 30px;
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgba(0, 0, 0, 0.47);;

      }

      .name{
        font-weight: bold;
        text-align: left;
        margin-left: 30px;
      }
    }
  }
}

a {
  &.google-link{
    color: #a1dcf3;
    
  }

  :hover{
      cursor: pointer !important;
    }
}

h5 {
  &.google-review{
    color : white;
    font-weight: bold;
    padding: 20px 0px 20px 0px;;
  }
}

hr{
    margin : 0;
}
</style>
