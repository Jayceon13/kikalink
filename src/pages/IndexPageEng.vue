<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <video id="bg-vdo" muted playsinline  :poster="vdoPoster">
        <source :src="vdoSrc" type="video/mp4">
      </video>
      <video class="bg-mobile-vdo" loop autoplay muted playsinline  :poster="vdoPoster">
        <source :src="vdoSrc" type="video/mp4">
      </video>
      <img
        data-aos="zoom-in"
        data-aos-duration="3000"
        class="logo"
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKE.svg"
        style="width: 200px; height: 200px"
      />
      <div class="main-page" style="color: white; margin: 20px">
        <div class="title-items">
          <h5 data-aos="fade-up-right"
              data-aos-duration="3000" style="text-align: center; width: 150px; font-family: 'Bellota'; box-shadow: -10px 0 0 rgba(0, 0, 0, 0.5), 10px 0 0 rgba(0, 0, 0, 0.5);background-color: rgba(0, 0, 0, 0.5);"
          >
            ABOUT ME
          </h5>
        </div>
        <img data-aos="fade-up-right"
             data-aos-duration="3000"
             src="assets/about1.jpg"
             alt=""
             style="max-width: 340px">
        <p data-aos="fade-up-right"
           data-aos-duration="3000">My name is Christina ,
          For 6 years I have been creating beauty for other people.
          COMMERCIAL AND NON-COMMERCIAL makeup is my everything.
          I create unique images for filming music videos and commercials.
          With my makeup you will be irresistible ❤️
          I create ads for beauty brands ⭐️</p>
        <div class="main-left" style="width: 100%; text-align: -webkit-right">
        <h6>MY WORKS</h6>
          <q-carousel
            data-aos="fade-up-left"
            data-aos-duration="3000"
            swipeable
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            draggable="false"
            navigation-active-icon:-addimg
            style="max-width: 340px"
          >
            <q-carousel-slide :name="1" img-src="assets/makeup1.jpg" />
            <q-carousel-slide :name="2" img-src="assets/makeup2.jpg" />
            <q-carousel-slide :name="3" img-src="assets/makeup3.jpg" />
            <q-carousel-slide :name="4" img-src="assets/makeup4.jpg" />
            <q-carousel-slide :name="5" img-src="assets/makeup5.jpg" />
            <q-carousel-slide :name="6" img-src="assets/makeup6.jpg" />
            <q-carousel-slide :name="7" img-src="assets/makeup7.jpg" />
            <q-carousel-slide :name="8" img-src="assets/makeup8.jpg" />
            <q-carousel-slide :name="9" img-src="assets/makeup9.jpg" />
            <q-carousel-slide :name="10" img-src="assets/makeup10.jpg" />
            <q-carousel-slide :name="11" img-src="assets/makeup11.jpg" />
            <q-carousel-slide :name="12" img-src="assets/makeup12.jpg" />
            <q-carousel-slide :name="13" img-src="assets/makeup13.jpg" />
          </q-carousel>

        </div>
        <div class="service-menu">
          <div
            data-aos="zoom-in"
            data-aos-duration="5000"
            class="service-paragraph"
            style="text-align: center">
            <h5 style="font-size: 28px">SERVICES</h5>
          </div>
          <h6 data-aos="fade-up-right"
              data-aos-duration="3000"
          >EYEBROW ARCHITECTURE/SHAPING</h6>

          <img data-aos="fade-up-right"
               data-aos-duration="3000"
               src="assets/lashes6.jpg"
               alt=""
               style="max-width: 340px">
          <div class="main-left" style="width: 100%; text-align: -webkit-right">
          <h6
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >THINNING</h6>

          <p data-aos="fade-up-left"
             data-aos-duration="3000" style="text-align: end">Service description:

            Thinning is a way to correct eyebrows,
            in which stiff, long or twisted hairs are removed,
            as well as hairs in places of their large accumulation. Such a method has
            many benefits and can dramatically change the entire correction process.️</p>
          </div>
            <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >LONG-TERM EYEBROW STYLING</h5>
          <img data-aos="fade-up-right"
               data-aos-duration="3000"
               src="assets/lashes7.jpg"
               alt=""
               style="max-width: 340px">

          <p data-aos="fade-up-right"
             data-aos-duration="3000">Service description:

            Long-term eyebrow styling is the application of a special composition,
            which fixes the hairs in the right direction.
            Previously, long-term eyebrow styling was done with compositions,
            which were used for lamination of eyelashes. That is why
            there is a second name for the procedure - eyebrow lamination
            Suitable for those who have few eyebrows , through the procedure
            the hairs become denser and there are more of them.
            Also suitable for those who have hard, unruly eyebrows,
            which cannot be fixed with a fixative.
            Eyebrow lightening
            The procedure is suitable for those who have too dark hair or those who
            darkened hair.
            Eyelash lamination
            If your eyelashes are looking down and you can't see them, this is the procedure.
            perfect for you. With the help of lamination, we create a bend in the eyelashes, thicken the hair. The effect of extended eyelashes.
            Eyebrow coloring/correction (henna/paint)
            Protein eyelash/eyebrow restoration
            Completely non-chemical formulations nourish and care for your
            eyebrows and eyelashes. Restorative procedure after unsuccessful lamination. Also suitable for those who want a more natural effect without harm to the hair.
            ️</p>
          <div class="main-left" style="width: 100%; text-align: -webkit-right">
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >EYEBROW LIGHTENING</h5>
          <img data-aos="fade-up-left"
               data-aos-duration="3000"
               src="assets/lashes9.jpg"
               alt=""
               style="max-width: 340px">

          <p data-aos="fade-up-left"
             data-aos-duration="3000">Service description:

            Lightening is the partial or complete removal of artificial or natural pigment,
            located in the structure of the hair, using special tools.
            Eyebrow lightening was originally designed to make the hair color resonate with the color of the eyebrow hairs.
            Today, many girls and young people use this service,
            who want to make the image visually lighter.
            ️</p>
          </div>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >EYELASH LAMINATION</h5>
          <img data-aos="fade-up-right"
               data-aos-duration="3000"
               src="assets/lashes3.jpg"
               alt=""
               style="max-width: 340px">

          <p data-aos="fade-up-right"
             data-aos-duration="3000">Service description:

            Absolutely safe and modern eyelash care technology,
            allowing you to make the look more expressive. With the help of special
            solutions, the eyelashes are affected, as a result of which they
            become smooth, naturally thickened and elongated.
            Lamination of eyelashes is a safe and caring procedure,
            therefore, in principle, suitable for everyone. Especially lamination
            will decorate the eyes of those girls who do not have very bright and thick own
            eyelashes and who do not want to use eyelash extensions, wanting
            create the most natural yet attractive look.️</p>
          <div class="main-left" style="width: 100%; text-align: -webkit-right">
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end">COLORING / CORRECTION OF EYEBROWS (HENNA / PAINT)</h5>
          <img data-aos="fade-up-left"
               data-aos-duration="3000"
               src="assets/lashes8.jpg"
               alt=""
               style="max-width: 340px">
          <p data-aos="fade-up-left"
             data-aos-duration="3000">Service description:

            Eyebrow henna is a procedure that gives the eyebrows the desired tone.
            During dyeing, not only the hairs acquire color, but also the skin under them.
            This allows you to achieve the effect of "shadow", otherwise, "powder" effect.
            Eyebrows look natural, but more bright, voluminous and expressive.

            The advantages of long-term staining with henna is that
            that after it there is no need to devote considerable time to eyebrow makeup every day.
            Due to the similarity of the visual effect, henna staining is also called biotattoo.
            In addition, with the help of this procedure, you can correct the shape of the eyebrows - just like with permanent makeup
            .️</p>
            </div>
          <h5 id="test"
            data-aos="fade-up-right"
            data-aos-duration="3000">PROTEIN EYELASH/EYEBROW REPAIR</h5>
          <img data-aos="fade-up-right"
               data-aos-duration="3000"
               src="assets/lashes10.jpg"
               alt=""
               style="max-width: 340px">
          <p data-aos="fade-up-right"
             data-aos-duration="3000">Service description:

            Protein recovery - the procedure for applying special products to the eyebrows,
            which contain vitamins, minerals and proteins. Such products saturate the hairs with useful microelements,
            accelerate growth and strengthen them, acting at the cellular level.
            The procedure makes it possible to restore their natural beauty after using low-quality cosmetics,
            frequent plucking, unhealthy diet, stress or lack of proper care.
            Also, the need for the procedure arises after an unsuccessful tattoo, burns, chemotherapy
            .️</p>
        </div>
      </div>


    </q-page>
  </div>
</template>

<script setup>
import {computed, onMounted, watch, ref} from "vue";
import {state} from "src/store/simplestore";


const slide = ref(1)
const autoplay = ref(true)
const vdoPoster = '/assets/poster.png' // Переложи обложку локально, рядом с видео
const vdoSrc = '/assets/vdo1.mp4' // Это путь относительно /public, если что


// Определяем переменные, а значения ставим в mounted, т.к. только там доступен DOM
let vdo = null
let page = null

// Конвертим процент скролла страницы в процент относительно продолжительности видео
const relToTime = (rel) => vdo.duration/2 / 1000 * rel

// Конвертим значение скролла сверху страницы в процент от всей страницы
const scrollToRel = (y) => {
  // Абсолютная высота: вычитаем значение вьюпорта браузера (т.к. в нём скролл останавливается)
  const absHeight = page.clientHeight - document.documentElement.clientHeight
  const value = Math.ceil(y / absHeight * 1000)
  console.warn('Скролл: %s % / Y=%s, ABS=%s', value, y, absHeight)
  return value
}

// Получаем DOM элементы после монтажа компонента
onMounted(() => {
  vdo = document.getElementById('bg-vdo')
  page = document.getElementById('page-container')
})

// Получаем реактивное значение скролла Y из общего хранилища
const y = computed(() => state.scrollY)

// Отслеживаем значение Y и на каждом изменении "мотаем" видео на нужный процент
watch(y, async (val) => {
    const rel = scrollToRel(val)
    vdo.currentTime = relToTime(rel)
  }
);


</script>

<style lang="scss" scoped>
.bg-mobile-vdo {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0;
}
@media screen and (max-width: 450px) {
  .bg-mobile-vdo {
    opacity: 1;
  }
}

p{
  max-width: 340px;
}

.title-items{
  width: 100%;
  text-align: -webkit-center;
}


.price {
  width: 220px;
  font-size: 18px;
  border: 2px solid #fd0202;
  border-radius: 4px;
}


#bg-vdo {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
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
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>

