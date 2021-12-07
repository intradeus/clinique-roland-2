<template>
      <div class="white-banner">
        <div class="banner-text-box">
            <div class="banner-text">
                    <span class="fa fa-phone" aria-hidden="true"></span>
                    <a href="tel:+1 514-836-7667"> (+1) 514-836-7667</a>
            </div>
            <div class="banner-text">
                <span class="fa fa-envelope-o" aria-hidden="true"></span> 
                <a href="mailto:cliniqueroland@me.com">cliniqueroland@me.com</a>
            </div>               
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../content/css/variables.scss";
    .white-banner {
        background-color: #f5f7fa;
        padding: 0.5em 1em;
        height: 45px;
        @media (max-width: $breakpoint-phone) {
            height: 70px;
        } 
    }

    a:hover {
        color: #00a98f !important;
    }

    .banner-text-box {
        float: none;
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: flex-start;


        @media (max-width: $breakpoint-phone) {
            flex-direction: column;
        }  
    }

    .banner-text {
        padding-left : 10px;
        margin-bottom: 5px;
        margin-top: 5px;
        a {
            color : black;
            text-decoration: none;
            font-weight: 400;
            font-size : 14px;
        }

        a:hover {
            color: #00a98f !important;
        }

        @media (max-width: $breakpoint-phone) {
            margin-top: 0;
            span {
                font-size: 13x;
            }
            
            a {
                font-size: 13px;
                
            }
        }  

        
    }
</style>
   