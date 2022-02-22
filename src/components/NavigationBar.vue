<template>
    <div class="content">
        <div class="container">
              <router-link to="/" class="logo">
                <div class="logo" id="logo">
                    <h1>{{ $t('titlep1') }}</h1>
                    <h1>{{ $t('titlep2') }}</h1>
                </div>
              </router-link>  
        </div>
        <div class="row">
           <div class="column ml-auto navbar-items">
              <template v-if="!isPhone()">
                <div class="d-flex flex-row pr-5 navigation">
                    <router-link class="ml-auto nav-item" to="/">{{ $t('home') }}</router-link>
                    <router-link class="ml-auto nav-item" to="/about">{{ $t('about') }}</router-link>
                    <router-link class="ml-auto nav-item" to="/reservation">{{ $t('booking') }}</router-link>
                    <router-link class="ml-auto nav-item" to="/contact">{{ $t('contact') }}</router-link>
                    <a class="nav-item language-change" v-on:click.prevent="changeLanguage()">{{otherLanguage}}</a>
                </div>
              </template>
              <template v-else>
                <slide right noOverlay>
                    <router-link to="/"><span class="overlay-menu" >{{ $t('home') }}</span></router-link>
                    <router-link to="/about"><span class="overlay-menu" >{{ $t('about') }}</span></router-link>
                    <router-link to="/reservation"><span class="overlay-menu" >{{ $t('booking') }}</span></router-link>
                    <router-link to="/contact"><span class="overlay-menu" >{{ $t('contact') }}</span></router-link>
                    <a class="overlay-menu language-change" v-on:click.prevent="changeLanguage()">{{otherLanguage}}</a>
                </slide>
              </template>
           </div>
        </div>
    </div>
</template>

<script>
  import routes from '../routes'
  import { Slide } from 'vue-burger-menu'
  import general from '../general'
  import EventBus from '../eventBus';

  export default {
    components: {
        Slide
    },
    data: function () {
      return {
        width : 0,
        actualLanguage : "",
        otherLanguage : ""
      }
    },
     created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        if(general.getCookie("site-lang") == "fr"){
          this.$i18n.locale = 'fr';
          this.otherLanguage = "English";
          this.actualLanguage = "fr";
        }else if(general.getCookie("site-lang") == "en"){
          this.$i18n.locale = 'en';
          this.otherLanguage = "Français";
          this.actualLanguage = "en";
        }else {
          general.setCookie("site-lang", "fr");
          this.$i18n.locale = 'fr';
          this.otherLanguage = "English";
          this.actualLanguage = "fr";
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize () {
            this.width = window.innerWidth;
      },
      isPhone (){
        return this.width < 768;
      },
      isActive(route) {
        if(this.$root.currentRoute == route)
          return true;
      },
      changeLanguage(){
        if(this.actualLanguage == "fr"){
          general.setCookie("site-lang","en",365);
          this.$i18n.locale = 'en';
          this.otherLanguage = "Français";
          this.actualLanguage = "en";
        }else {
          general.setCookie("site-lang","fr",365);
          this.$i18n.locale = 'fr';
          this.otherLanguage = "English";
          this.actualLanguage = "fr";
        }
        EventBus.$emit('language-change', this.actualLanguage);
      }
    }
  }
</script>

<style lang="scss" scoped>
 @import "../content/css/variables.scss";
  @import "../content/css/style.scss";

  a {
    color: #282828;

    &.overlay-menu{
      color: white;

      &.language-change {
        margin-top : 45vh;
        border-top: 1px solid black;
        border-left : none !important;
        margin-left : none !important;
        padding-left : 14px;
      }
    }
  }

  .nav-item {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Work Sans',sans-serif;
    font-size: 0.9em;
    padding: 16px 10px 16px 10px;
  }

  .navbar-items {
    margin-right: 10%;
    margin-top : 30px;
  }

  h1 {
    font-family: 'Syncopate' !important;
    font-size : 39px;
    font-weight: 700;
    @media (max-width: $breakpoint-tablet) {
      font-size : 28px;
      margin-bottom : 0px
    }

    @media (max-width: $breakpoint-phone) {
      font-size : 23px;
    }
  }

  a:hover {
    .logo {
      color: black !important;
    }
    color: #7B6572 !important;
    text-decoration: none;
    cursor: pointer;
  }

  .router-link-exact-active:not(.logo) {
    color: #7B6572 !important;
    border-top : 1px solid #7B6572;
    border-bottom : 1px solid #7B6572;
  }
  .content {
    padding : 2em 0;
  }

  .container {
    padding-right : 100px;
    margin-bottom : 18px;

     @media (min-width: 1200px) {
        max-width: 960px;
     }

     @media (max-width: $breakpoint-tablet) {
       display : flex;
       text-align : left;
    }

    @media (max-width: 600) {
       display : flex;
       text-align : center;
       align-content: center;
       align-items : center;
       padding : 0 100px !important;
    }

    @media (max-width: $breakpoint-phone) {
       text-align : left;
    }
  }

  .language-change {
      border-left : 1px solid black;
      margin-left : 6px;
      padding-left : 15px;
  }
  
</style>

