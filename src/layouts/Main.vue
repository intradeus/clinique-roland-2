<template>
  <div>
    <navigation-bar></navigation-bar>
    <slot></slot>
    <footer-one></footer-one>
    <footer-two></footer-two>
  </div>
</template>

<script>
  import navigationBar from '../components/NavigationBar.vue'
  import footerTwo from '../components/FooterTwo.vue'
  import footerOne from '../components/FooterOne.vue'
  
  export default {
    components: {
      navigationBar,
      footerOne,
      footerTwo,
    }
  }
</script>

<style lang="scss">
  @import "../content/css/style.scss";
  @import "../content/css/variables.scss";
</style>
