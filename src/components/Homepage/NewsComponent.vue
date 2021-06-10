<template>
    <div class="news" id="news">
      <div class="container">
        <div class="container text-center">
          <h3 class="h3-news">{{ $t('news.title') }}</h3>
        </div>
        <div>
          <div
            v-for="dataNew in news"
            v-bind:key="dataNew.id"
            class="news-container"
          >
            <a :href="'/news?name=' + dataNew.slug + '&id=' + dataNew.id + '#new'">
              <div class="row">
                <div class="col-md-3 col-xs-3 text-center news-image-container">
                  <img
                    class="news-image"
                    :src="dataNew.image_link"
                    alt="news image"
                  />
                </div>
                <div class="col-md-9 col-xs-9 news-content-container">
                  <h5 class="news-title">
                    {{ dataNew.title }}
                  </h5>
                  <h6 class="news-date">{{ dataNew.date }}</h6>
                  <p class="news-content note-pre">{{ dataNew.content }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import jsonNews from "../../../public/news/news.json";
import EventBus from '../../eventBus';

export default {
  data() {
    return {
        news: [],
    };
  },
  created(){
    var lang = this.$i18n.locale;
    this.addNewsToList(lang);

    var context = this;
    EventBus.$on('language-change', function (changeLang) {
        context.news = [];
        context.addNewsToList(changeLang);
    });
  },
  methods :{
    addNewsToList: function(lang){
      var context = this;

      jsonNews.forEach(n => {
      context.news.push({
        id : n.id,
        image_link : n.image_link,
        title : eval('n.'+ lang + '.title'),
        date: eval('n.'+ lang + '.date'),
        content : eval('n.'+ lang + '.content'),
        slug: eval('n.'+ lang + '.slug')
      });
    });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/css/style.scss";
@import "../../../public/css/variables.scss";

.h3-news {
  color: #7b6572;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 76px;
}

.news {
  background:linear-gradient(to right, white, #c3cfe2);
  padding: 60px 0px;  
} 

.news-container:hover {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

.news-container {
    border-top: 1px solid #CFCFCF;
    border-bottom: 1px solid #CFCFCF;
    padding-top: 20px;  
    padding-bottom: 20px;
    height : auto;

    a:hover{
      text-decoration: none;
    }
    .news-content-container {
      justify-content: center;

      .news-date {
        font-size : 12px;
        color:  #7b6572;
        margin-bottom: 20px;
      }

      .news-content{
          margin-left: 20px;
          margin-right :10px !important;
          margin-bottom: 20px;
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color : #5f5e5e; 
          font-size: .9em;
          font-weight: 400;
          letter-spacing: 1px;
          line-height: 1.8em;
          font-family: 'Work Sans', sans-serif;
      }

      .news-title {
        color: black;
      }
    }

    .news-image-container {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      max-height: 100px;

      @media (max-width: 768px) {
        margin-bottom : 20px;
      }

      .news-image {
        max-width:100%;
        max-height: 100%;
      }
    }
}
</style>
