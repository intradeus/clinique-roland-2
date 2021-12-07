<template>
  <main-layout>
    <div class="parallax banner2 text-center">
      <h3 class="title">{{ $t('contact') }}</h3>
    </div>
    <div class="container">
      <div class="block">
        <div class="info">
          <div class="info-item">
            <div class="square-icon">
              <h5>
                <font-awesome-icon class="info-icon mr-2" icon="phone" />
                {{ $t('contactObject.phoneTitle') }}
              </h5>
            </div>
            <div>
              <a class="footer-link-item-text" href="tel:+1 514-836-7667"
                >{{ $t('general.phone') }} </a
              >
            </div>
          </div>
          <div class="info-item">
            <div class="square-icon">
              <h5>
                <font-awesome-icon
                  class="info-icon mr-2"
                  icon="envelope"
                />{{ $t('contactObject.emailTitle') }}
              </h5>
            </div>
            <div>
              <a
                class="footer-link-item-text"
                href="mailto:cliniqueroland@me.com"
                >{{ $t('general.email') }} </a
              >
            </div>
          </div>
          <div class="info-item">
            <div class="square-icon">
              <h5>
                <font-awesome-icon
                  class="info-icon mr-2"
                  icon="map-marked"
                />{{ $t('contactObject.LocationTitle') }}
              </h5>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                class="footer-link-item-text"
                href="https://www.google.com/maps/place/3845+Avenue+Laval,+Montr%C3%A9al,+QC+H2W+2H9/@45.5182142,-73.5768786,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91bcb12f6bca3:0x694836ecf71d95ea!8m2!3d45.5182105!4d-73.5746899"
                target="_blank"
              >
                {{ $t('general.address') }} <br>{{ $t('contactObject.locatonSubtitle') }}</a
              >
            </div>
          </div>
        </div>
        <div class="map">
          <h6 id="spinner" class="text-center spinner">
              <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </h6>
          <div class="map_frame">
            <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=3845%20avenue%20laval%2C%20montreal&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";

export default {
  components: {
    MainLayout,
  },
  mounted: function(){
    this.hideSpinnerShowMap();
  },
  methods: {
    hideSpinnerShowMap: function(){
      
      setTimeout(function () {
          document.getElementById("spinner").style.display='none';
          document.getElementsByClassName("map_frame")[0].style.visibility='visible';
      }, 1200);
      
    }
  }
};
</script>
<style lang="scss" scoped>
.parallax {
  min-height: 200px;
  &.banner2 {
    background-image: url("../content/assets/banner1.jpg");
    height: 200px;
  }
}

.map_frame {
  visibility: hidden;
}
.spinner {
  margin-top : 200px;
}

.block {
  margin: 80px 0px 80px 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 30%;
    background: linear-gradient(to bottom left, #1d2331, #313236 90%);
    margin-bottom : 6px;

    @media (max-width: 991px) {
      width: 100%;
      margin-bottom : 0px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      padding: 20px;

      a {
        font-size: 15px;
        font-family: "Work Sans", sans-serif;
        color: #a8aeb3;
        :hover {
          text-decoration: none
        }
      }
    }
  }

  .map {
    width: 70%;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
}

.square-icon {
  color: white;
  border-bottom: 1px solid white;
  padding-bottom: 12px;

  h5 {
    margin-bottom: 0px;

    .info-icon {
      border-bottom: none;
      color: white;
      padding: 5px 5px 0px 5px;
      font-size: 35px;
    }
  }
}
</style>
