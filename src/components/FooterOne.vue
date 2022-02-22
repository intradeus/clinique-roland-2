<template>
      <div class="black-banner">
        <div class="container">
            <div class="row">
                <div class="external-links col-md-6">
                    <h3>
                        {{ $t('footer1.links') }}
                    </h3>
                    <div class="links">
                        <a rel="noopener noreferrer" class="text-center" href="https://www.osteopathiequebec.ca/fr/" target="_blank">
                            <img src="../content/assets/OQ.jpg" alt="Logo Osteopathie Quebec">
                            <h5>Ostéopathie Québec</h5>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>
                        {{ $t('footer1.info') }}
                    </h3>
                   <ul class="address">
                        <li>
                            <div class="square-icon">
                                <font-awesome-icon icon="map-marked" :style="{ color: 'white' }"/>
                            </div>
                            <a rel="noopener noreferrer" class="footer-link-item-text" href="https://www.google.com/maps/place/3845+Avenue+Laval,+Montr%C3%A9al,+QC+H2W+2H9/@45.5182142,-73.5768786,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91bcb12f6bca3:0x694836ecf71d95ea!8m2!3d45.5182105!4d-73.5746899"
                                target="_blank"> {{ $t('general.address') }}</a>
                        </li>
                        <li>
                            <div class="square-icon">
                                <font-awesome-icon icon="envelope" :style="{ color: 'white' }"/>
                            </div>
                            <a class="footer-link-item-text" href="mailto:cliniqueroland@me.com"> {{ $t('general.email') }}</a>
                        </li>
                        <li>
                            <div class="square-icon">
                                <font-awesome-icon icon="phone" :style="{ color: 'white' }"/>
                            </div>
                            <a class="footer-link-item-text" href="tel:+1 514-836-7667"> {{ $t('general.phone') }}</a>
                        </li>
                        <li>
                            <div class="square-icon">
                                <font-awesome-icon icon="file" :style="{ color: 'white' }"/>
                            </div>
                            <a class="footer-link-item-text" :href="getPrivacyPolicy()"
                                target="_blank"> {{ $t('general.privacyPolicy') }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import general from '../general.js'

export default {
    methods: {
        getPrivacyPolicy: function(){
            if(general.getCookie("site-lang") == "fr"){
                return require("@/content/documents/Politique_de_Confidentialité-Clinique_Roland.pdf");
            }else {
                return require("@/content/documents/Privacy_Policy-Clinique_Roland.pdf");
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    ul {
        padding-left: 0px;
    }
    li {
        display: flex;
        flex-direction: row;
        margin-bottom : 8px;
    }
    .black-banner {
        background-color : #1D2331;
        padding : 3em;
    }

    .links {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 150px;
        border-radius: 50px;
        margin-bottom : 8px
    }

    a {
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
    }

    h5 {
        color: black;
        font-family: 'Work Sans', sans-serif;
    }

    h3 {
        color: #7B6572;
        font-family: 'Work Sans', sans-serif;
        margin-bottom : 36px;
        font-weight: 600;
    }

    .footer-link-item-text {
        color : #a8aeb3;
    }

    .square-icon {
        text-align: center;
        margin-right : 30px;
        margin-bottom : 20px;
    }

    .external-links{
         @media (max-width: 768px) {
             margin-bottom : 3em;
        }
    }
</style>
   