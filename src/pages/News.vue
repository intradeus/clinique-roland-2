<template>
 <div v-if="actualNews != null && actualNewsImage != ''">
    <main-layout>
      <div id="new" class="parallax banner2 text-center">
        <h3 class="title">{{ $t('news.title') }}</h3>
      </div>
      <div class="container bluebox pt-4 pb-4">
        <div class="text-center mb-4">
          <img :src="newsImage()" alt="news logo">
        </div>
        <hr>
        <h2 class="mb-3">{{actualNews.title}}</h2>
        <p class="date mb-3">{{actualNews.date}}</p>
        <p class="content mb-5">{{actualNews.content}}</p>
      </div>
    </main-layout>
  </div>
  <div v-else>
    <vue-error></vue-error>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import VueError from "../pages/404.vue";
  import news from "../content/news/news.json";
  import EventBus from '../eventBus';
  import general from '../general';
  
  export default {
    components: {
      MainLayout,
      VueError
    },
    data() {
      return {
        newsList : news,
        actualNews : null,
        actualNewsImage : "",
      }
    },
    created() {
      this.setNewsAccordingToLanguage();
      var context = this;

      EventBus.$on('language-change', function (changeLang) {
        context.setNewsAccordingToLanguage();
      });
    },
    methods: {
      setNewsAccordingToLanguage: function(){
        var newsId = this.$route.params.id;
        var context = this;
        var lang = general.getCookie("site-lang") == "" ? "fr" : general.getCookie("site-lang");
        this.newsList.forEach(n => {
          if(n.id == newsId){
            context.actualNews = eval("n." + lang);
            context.actualNewsImage = n.image_file_name;
          }
        });
      },
      newsImage() {
        if (!this.actualNewsImage) {
          return
        }
        return require(`../content/assets/${this.actualNewsImage}`) // the module request
      }
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
</style>
