<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <video class="bg-mobile-vdo" loop autoplay muted playsinline :poster="vdoPoster">
        <source src="/assets/video.mp4" type="video/mp4">
      </video>

      <img data-aos="zoom-in" data-aos-duration="3000" class="logo" alt="KIKA PRO MAKEUP" src="~assets/KIKAPROMAKE.svg"
           style="width: 200px; height: 200px" />
      <div class="main-page" style="color: white; margin: 20px">
        <div class="title-items">
          <h5 id="about" data-aos="fade-up-right" data-aos-duration="3000">
            ABOUT ME
          </h5>
        </div>
        <div class="about-main" style="width: 100%; text-align: center">
        <img data-aos="fade-up-right" data-aos-duration="3000" src="/assets/about1.jpg" alt="" style="max-width: 340px; margin-top: 65px">
        <p data-aos="fade-up-right" data-aos-duration="3000" >My name is Christina.<br>
          For 6 years I have been creating beauty for other people.
          COMMERCIAL AND NON-COMMERCIAL makeup is my everything.<br><br>
          I create random images for filming music videos and commercials.
          <br><br>With my makeup you will be irresistible.<br><br>
          I create ads for beauty brands.
        </p>
        </div>
        <div class="main-left" style="width: 100%; text-align: center">
          <h6 id="works" data-aos="fade-up-left" data-aos-duration="3000">MY WORKS</h6>

          <div class="q-pa-md" style="text-align: left">
            <p data-aos="fade-up-right" data-aos-duration="3000">MAKEUP | STYLING</p>
            <q-carousel data-aos="fade-up-right" data-aos-duration="3000" swipeable animated v-model="slide1" infinite
                        :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                        @mouseenter="autoplay = false" @mouseleave="autoplay = true" draggable="false"
                        navigation-active-icon:-addimg style="max-width: 250px; padding: 0;">
              <q-carousel-slide :name="1" img-src="assets/makeup1.jpg" />
              <q-carousel-slide :name="2" img-src="assets/makeup2.jpg" />
              <q-carousel-slide :name="3" img-src="assets/makeup5.jpg" />
              <q-carousel-slide :name="4" img-src="assets/makeup4.jpg" />
              <q-carousel-slide :name="5" img-src="assets/makeup3.jpg" />
              <q-carousel-slide :name="6" img-src="assets/makeup6.jpg" />
              <q-carousel-slide :name="7" img-src="assets/makeup7.jpg" />
              <q-carousel-slide :name="8" img-src="assets/makeup8.jpg" />
              <q-carousel-slide :name="9" img-src="assets/makeup9.jpg" />
              <q-carousel-slide :name="10" img-src="assets/makeup10.jpg" />
              <q-carousel-slide :name="11" img-src="assets/makeup11.jpg" />
              <q-carousel-slide :name="12" img-src="assets/makeup12.jpg" />
              <q-carousel-slide :name="13" img-src="assets/makeup13.jpg" />
              <q-carousel-slide :name="14" img-src="assets/makeup15.jpg" />
              <q-carousel-slide :name="15" img-src="assets/makeup14.jpg" />
              <q-carousel-slide :name="16" img-src="assets/makeup16.jpg" />
              <q-carousel-slide :name="17" img-src="assets/makeup17.jpg" />
              <q-carousel-slide :name="18" img-src="assets/makeup18.jpg" />
              <q-carousel-slide :name="19" img-src="assets/makeup20.jpg" />
              <q-carousel-slide :name="20" img-src="assets/makeup21.jpg" />
              <q-carousel-slide :name="21" img-src="assets/makeup22.jpg" />
              <q-carousel-slide :name="22" img-src="assets/makeup23.jpg" />
              <q-carousel-slide :name="23" img-src="assets/makeup24.jpg" />
              <q-carousel-slide :name="24" img-src="assets/makeup25.jpg" />
            </q-carousel>
            <div class="works-left" style="width: 100%; text-align: -webkit-right; margin-top: 15px">
              <p data-aos="fade-up-left" data-aos-duration="3000">EYEBROWS | EYELASHES</p>
              <q-carousel class="img-left" data-aos="fade-up-left" data-aos-duration="3000" swipeable animated v-model="slide2" infinite
                          :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                          @mouseenter="autoplay = false" @mouseleave="autoplay = true" draggable="false"
                          navigation-active-icon:-addimg style="max-width: 250px; padding: 0; text-align: end">
                <q-carousel-slide :name="1" img-src="assets/lashes1.jpg" />
                <q-carousel-slide :name="2" img-src="assets/lashes2.jpg" />
                <q-carousel-slide :name="3" img-src="assets/lashes3.jpg" />
                <q-carousel-slide :name="4" img-src="assets/lashes4.jpg" />
                <q-carousel-slide :name="5" img-src="assets/lashes5.jpg" />
                <q-carousel-slide :name="6" img-src="assets/lashes6.jpg" />
                <q-carousel-slide :name="7" img-src="assets/lashes7.jpg" />
                <q-carousel-slide :name="8" img-src="assets/lashes8.jpg" />
                <q-carousel-slide :name="9" img-src="assets/lashes9.jpg" />
                <q-carousel-slide :name="10" img-src="assets/lashes10.jpg" />
              </q-carousel>
            </div>
          </div>
        </div>
        <div class="service-menu">

          <div data-aos="zoom-in" data-aos-duration="5000" class="service-paragraph" style="text-align: center">
            <h5>УСЛУГИ</h5>
          </div>
          <h6 id="shaping" data-aos="fade-up-right" data-aos-duration="3000">EYEBROW ARCHITECTURE/CREATION
            FORMS</h6>
          <p data-aos="fade-up-right" data-aos-duration="3000">PRICE: 50AED | 14$ | 250TL</p>

          <img data-aos="fade-up-right" data-aos-duration="3000" src="assets/lashes6.jpg" alt=""
               style="max-width: 340px">
          <div class="main-left" style="width: 100%; text-align: -webkit-right">
            <h6 id="thinning" data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">THINNING</h6>
            <p data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">PRICE: 50AED | 14$ | 250TL</p>

            <q-btn class="content_info-name content_border-btn" data-aos="fade-left" @click="blockThin" style="text-align: end">
              <p class="btn-name" style="margin: 0; padding-right: 20px">
                Service description:</p>
              <img :class="!showThin ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrow.svg">
            </q-btn>
            <p data-aos="fade-up-left" data-aos-duration="3000" v-if="showThin">
              <br>
              Thinning is a way to correct eyebrows,
              in which stiff, long or twisted hairs are removed,
              as well as hairs in places of their large accumulation.<br><br>This method has
              many benefits and can dramatically change the entire correction process..️</p>
          </div>
          <h6 id="styling" data-aos="fade-up-right" data-aos-duration="3000">LONG-TERM EYEBROW STYLING</h6>
          <p data-aos="fade-up-right" data-aos-duration="3000">PRICE: 170AED | 46$ | 600TL</p>
          <img data-aos="fade-up-right" data-aos-duration="3000" src="assets/lashes7.jpg" alt=""
               style="max-width: 340px">
          <br>
          <q-btn class="content_info-name content_border-btn" data-aos="fade-right" @click="blockStyling">
            <p class="btn-name" style="margin: 0; padding-right: 20px">Service description:</p>
            <img :class="!showStyling ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrow.svg">
          </q-btn>
          <p data-aos="fade-up-right" data-aos-duration="3000" v-if="showStyling">
            <br><br>

            Long-term eyebrow styling is the application of a special composition,
            which fixes the hairs in the right direction.<br><br>
            Previously, long-term eyebrow styling was done with compositions,
            which were used for eyelash lamination.<br><br>That is why
            there is a second name for the procedure - eyebrow lamination.<br><br>
            Suitable for those who have few eyebrows, through the procedure
            the hairs become denser and there are more of them.<br><br>
            Also suitable for those who have hard naughty eyebrows,
            which cannot be fixed with a fixative..️</p>

          <div class="main-left" style="width: 100%; text-align: -webkit-right">
            <h6 id="lightening" data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">LIGHTENING
              EYEBROW</h6>
            <p data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">PRICE: 100AED | 27$ | 400TL</p>
            <img data-aos="fade-up-left" data-aos-duration="3000" src="assets/lashes10.jpg" alt=""
                 style="max-width: 340px">
              <br>
            <q-btn class="content_info-name content_border-btn" data-aos="fade-left" @click="blockLightening" style="text-align: end">
              <p class="btn-name" style="margin: 0; padding-right: 20px">Service description:</p>
              <img :class="!showLightening ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrow.svg">
            </q-btn>
            <p data-aos="fade-up-left" data-aos-duration="3000" v-if="showLightening">
              <br><br>

              Lightening is the partial or complete removal of artificial or natural pigment,
              located in the structure of the hair, with the help of special tools.<br><br>
              Eyebrow lightening was originally designed to make the hair color resonate with the color of the eyebrow hairs.<br><br>
              Today, many girls and young people use this service,
              who want to make the image visually lighter.
              ️</p>
          </div>
          <h6 id="lamination" data-aos="fade-up-right" data-aos-duration="3000">EYELASH LAMINATION</h6>
          <p data-aos="fade-up-right" data-aos-duration="3000">PRICE: 170AED | 46$ | 600TL</p>
          <img data-aos="fade-up-right" data-aos-duration="3000" src="/assets/lashes3.jpg" alt=""
               style="max-width: 340px">
          <br>
          <q-btn class="content_info-name content_border-btn" data-aos="fade-right" @click="blockLamination">
            <p class="btn-name" style="margin: 0; padding-right: 20px">Service description:</p>
            <img :class="!showLamination ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrow.svg">
          </q-btn>
          <p data-aos="fade-up-right" data-aos-duration="3000" v-if="showLamination"><br><br>

            Absolutely safe and modern eyelash care technology,
            allowing you to make the look more expressive.<br><br>With the help of special
            solutions, the eyelashes are affected, as a result of which they
            become smooth, naturally thickened and elongated.
            .️</p>
          <div class="main-left" style="width: 100%; text-align: -webkit-right">
            <h6 id="correction" data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">COLORING
              /EYEBROW CORRECTION (HENNA /PAINT)</h6>
            <p data-aos="fade-up-left" data-aos-duration="3000" style="text-align: end">PRICE: 130AED | 35$ | 450TL</p>
            <img data-aos="fade-up-left" data-aos-duration="3000" src="assets/lashes9.jpg" alt=""
                 style="max-width: 340px">
            <p data-aos="fade-up-left" data-aos-duration="3000">

              .️</p>
          </div>
        </div>
      </div>


    </q-page>
  </div>
</template>

<script>
import { computed, onMounted, watch, ref } from "vue";
import { state } from "src/store/simplestore";

export default ({
    name: 'IndexPage',
    data() {
      return {
        slide1: ref(1),
        slide2: ref(1),
        vdoPoster: '/assets/poster.png',
        showThin: false,
        showStyling: false,
        showLightening: false,
        showLamination: false,
        showBrand: false,
        showWeb: false,
      };
    },
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      blockThin() {
        this.showThin = !this.showThin
      },
      blockStyling() {
        this.showStyling = !this.showStyling
      },
      blockLightening() {
        this.showLightening = !this.showLightening
      },
      blockLamination() {
        this.showLamination = !this.showLamination
      },
      blockBrand() {
        this.showBrand = !this.showBrand
      },
      blockWeb() {
        this.showWeb = !this.showWeb
      },
    },
  }
)


</script>

<style lang="scss" scoped>

p{
  font-size: 15px;
}

h5 {
  font-size: 28px;
}


.bg-mobile-vdo {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.3;
}


p {
  max-width: 340px;
}

.title-items {
  width: 100%;
  text-align: -webkit-center;
}


.price {
  width: 220px;
  font-size: 18px;
  border: 2px solid #fd0202;
  border-radius: 4px;
}


.my-btn {
  color: white;
  display: flex;
  flex-direction: column;
  margin: 15px;
}

.logo {
  animation: 5s show ease;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.content_info-name {
  padding: 12px 8px;
}

.content_border-info {
  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
}

@media screen and (min-width: 900px) {
  .content_border-info {
    margin: 20px 20px 20px 0px;
  }
}
.content_border-img {
  border-width: 2px;
  border-radius: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-color: #ffffff;
  border-style: solid;
}
@media screen and (min-width: 900px) {
  .content_border-img {
    margin: 20px 0px 20px 20px;
  }

}

.content_border-btn {
  margin: 20px 0px;
  border-width: 2px;
  border-radius: 20px;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
}

.content_info-description {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 450px) {
  .content_info-description {
    font-size: 12px;
  }
}
.content_info-description--info {
  width: 100%;
}


@media screen and (min-width: 900px) {
  .content_info-description--img {
    width: 50%;
    height: 100%
  }
}
@media screen and (max-width: 900px) {
  .content_info-description {
    flex-flow: column;
    margin: 0;
  }
}

@media screen and (max-width: 900px) {
  .content_info-description--info .content_border-info{
    width: 80%;
    text-align: center;
    margin: 0;
  }
}

@media screen and (max-width: 900px) {
  .content_info-description--img {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
}
.rotate-animation {
  rotate: 0;
  transition: 1s;
}

.rotate-animation-obj {
  transform: rotate(180deg);
  transition: 1s;
}
</style>

