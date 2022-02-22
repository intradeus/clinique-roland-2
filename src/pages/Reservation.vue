<template>
  <main-layout>
      <div class="parallax banner2 text-center">
        <h3 class="title">{{ $t('booking') }}</h3>
      </div>
      <div class="container">
        <p class="attention-message text-center">
          {{ $t('bookingObject.warningp1') }} 
          <router-link class="hyperlink" to="/news?name=reprise-des-activites-d-osteopathie&id=2">{{ $t('bookingObject.warningp2') }}</router-link>
           {{ $t('bookingObject.warningp3') }}
        </p>

         <h6 class="msg" >{{ $t('bookingObject.msgp5') }}
           <router-link to="/tutorial">{{ $t('bookingObject.msgp6') }}</router-link>
        </h6>
      </div>
      <div class="container apt-script">
          <h6 id="spinner" class="text-center spinner">
              <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </h6>
          <div id="square-script" class="square-appointment">
              <div id="square-appointment-script" class="script"></div>
          </div>
        <h6 class="msg policy-msg" >{{ $t('bookingObject.msgp1') }}<a :href="getPrivacyPolicy()"
              target="_blank">{{ $t('bookingObject.msgp2') }}</a> {{ $t('bookingObject.msgp3') }} <router-link
              to="/annulation#annulation">{{ $t('bookingObject.msgp4') }}</router-link>
        </h6>
      </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import postscribe from 'postscribe';
  import general from '../general.js'

  export default {
    components: {
      MainLayout
    },
    mounted: function () {
      postscribe('#square-appointment-script', `<script src="https://square.site/appointments/buyer/widget/b9604415-b959-4cff-91c2-837b2f3be7ab/6X7WVZAYFCM48.js?lang=en-US"><\/script>`);
      this.hideSpinnerShowScript();
    },
    methods: {
      getPrivacyPolicy: function(){
            if(general.getCookie("site-lang") == "fr"){
                return "../content/documents/Politique_de_Confidentialité-Clinique_Roland.pdf";
            }else {
                return "../content/documents/Privacy_Policy-Clinique_Roland.pdf";
            }
      },
      hideSpinnerShowScript: function(){
            
            setTimeout(function () {
                document.getElementById("spinner").style.display='none';
                document.getElementsByClassName("square-appointment")[0].style.visibility='visible';
            }, 3000);
        }
      }
  }
  
</script>
<style lang="scss" scoped >
@import "../content/css/style.scss";
@import "../content/css/variables.scss";

.parallax {
  min-height: 200px;
  &.banner2 {
    background-image: url("../content/assets/banner1.jpg");
    height: 200px;
  }
}

.square-appointment {
  visibility: hidden;
  background-color: white;
  height: 100%;
  margin-bottom : 10px;
  border : 1px solid #b98196;
  text-align: center;
  .script {
    height : 1500px;
  }
}

@media (max-width: $breakpoint-phone) {
    .container {
      &.apt-script{
        padding-left:0;
        padding-right:0;
      }
    }
}

.spinner {
  margin-top: 60px;
}
a {
  :hover {
        text-decoration: none;
  }

  &.hyperlink {
    font-weight: 700;
    color: #303F66;    
  } 
}


p {

  &.attention-message {
    margin-top : 30px;
    background: linear-gradient(to right,#eb9d9d,#b98196);
    line-height: 35px;  
    padding : 5px;
  } 

}

.msg {
  text-align: center;
  margin-bottom: 10px;

  &.policy-msg {
    font-size: 12px;
  }

}

</style>