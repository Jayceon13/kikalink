<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <video id="bg-vdo" muted="muted" playsinline  :poster="vdoPoster">
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
          <div id="_anim-item">
          <h5 data-aos="fade-up-right"
              data-aos-duration="3000">ОБО МНЕ</h5>
            <p data-aos="fade-up-right"
               data-aos-duration="3000" style="max-width: 300px">Меня зовут Кристина ,
              Уже 6 лет я создаю красоту для других людей .
              КОМЕРЧЕСКИЙ И НЕКОМЕРЧЕСКИЙ макияж мое все .
              Создаю уникальные образы для сьемок музыкальных клипов и рекламы .
              С моим макияжем ты будешь неотразима ❤️
              Создаю рекламу для бьюти брендов ⭐️</p>
            <h6>МОИ РАБОТЫ</h6>

          </div>
          <div class="q-pa-md">
            <q-carousel
              data-aos="fade-up-right"
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
              style="max-width: 300px"
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
          <h5 style="font-size: 28px">УСЛУГИ</h5>
          </div>
          <h6 data-aos="fade-up-right"
              data-aos-duration="3000"
              >АРХИТЕКТУРА БРОВЕЙ /СОЗДАНИЕ ФОРМЫ</h6>

            <q-carousel
              data-aos="fade-up-left"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>

            <h6
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >ПРОРЕЖИВАНИЕ</h6>
            <q-carousel
              data-aos="fade-up-right"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>

            <p data-aos="fade-up-left"
               data-aos-duration="3000">Описание услуги :

              Прореживание – это способ коррекции бровей,
              при котором удаляются жесткие, длинные или закрученные волоски,
              а также волоски в местах их большого скопления. Такой метод имеет
              множество преимуществ и может кардинально изменить весь процесс коррекции.️</p>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
            >ДОЛГОВРЕМЕННАЯ УКЛАДКА БРОВЕЙ</h5>
            <q-carousel
              data-aos="fade-up-left"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>

            <p data-aos="fade-up-right"
               data-aos-duration="3000">Описание услуги :

              Долговременная укладка бровей – это нанесение специального состава,
              который фиксирует волоски в нужном направлении.
              Раньше долговременную укладку бровей делали составами,
              которые использовались для ламинирования ресниц. Именно поэтому
              есть второе название процедуры – ламинирование бровей
              Подходит для тех у кого мало бровей , с помощью процедуры
              волоски становятся плотнее и их становится больше .
              Так же подходит для тех у кого жесткие не послушные брови ,
              которые невозможно уложить фиксирующим средством .
              Осветление бровей
              Процедура подходит тем у кого слишком темный волосок или тем кому
              перетемнивший волос .
              Ламинирование ресниц
              Если ваши реснички смотрят вниз и вы их не видите это процедура
              отлично подойдёт для вас . С помощью ламинирования мы создаем изгиб ресницам , уплотняем волосок . Эффект наращенных ресниц .
              Окрашивание/коррекция бровей(хна/краска)
              Протеиновое восстановление ресниц/бровей
              Полностью не химические составы питают и ухаживают за вашими
              бровями и ресницами . Восстанавливающая процедура после неудачного ламинирования . Подходит так же для тех кто хочет более натуральный эффект без вреда для волос . ️</p>
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >ОСВЕТЛЕНИЕ БРОВЕЙ</h5>
            <q-carousel
              data-aos="fade-up-right"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>

            <p data-aos="fade-up-right"
               data-aos-duration="3000">Описание услуги :

              Осветление - это частичное или полное удаление искусственного или натурального пигмента,
              находящегося в структуре волоска, с помощью специальных средств.
              Осветление бровей изначально придумано для того, чтобы цвет волос резонировал с цветом волосков бровей.
              На сегодняшний же день данной услугой пользуются многие девушки и молодые люди,
              которые хотят сделать образ визуально легче.
              ️</p>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >ЛАМИНИРОВАНИЕ РЕСНИЦ</h5>
            <q-carousel
              data-aos="fade-up-left"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>
            <p data-aos="fade-up-right"
               data-aos-duration="3000">Описание услуги :

              Абсолютно безопасная и современная технология ухода за ресничками,
              позволяющая сделать взгляд более выразительным. С помощью специальных
              растворов происходит воздействие на ресницы, в результате чего они
              становятся гладкими, естественно утолщенными и удлиненными.
              Ламинирование ресниц - процедура безопасная и уходовая,
              поэтому в принципе подходит всем. Особенно ламинирование
              украсит глаза тех девушек, у которых не очень яркие и густые собственные
              реснички и которые не хотят пользоваться нарощенными ресницами, желая
              создать максимально естественный, но привлекательный образ.️</p>
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end">ОКРАШИВАНИЕ /КОРРЕКЦИЯ БРОВЕЙ (ХНА /КРАСКА)</h5>
            <q-carousel
              data-aos="fade-up-right"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>
            <p data-aos="fade-up-right"
               data-aos-duration="3000">Описание услуги :

              Окрашивание хной для бровей — это процедура, которая придает бровям желаемый тон.
              Во время окрашивания цвет приобретают не только волоски, но и кожа под ними.
              Это позволяет добиться эффекта «тени», иначе, «пудрового» эффекта.
              Брови выглядят натурально, но более ярко, объемно и выразительно.

              Преимущества долговременного окрашивания с помощью хны в том,
              что после него нет необходимости ежедневно уделять значительное время макияжу бровей.
              Из-за схожести визуального эффекта окрашивание хной также называют биотатуажем.
              Кроме того, с помощью этой процедуры можно скорректировать форму бровей — как и при помощи перманентного макияжа.️</p>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000">ПРОТЕИНОВОЕ ВОССТАНОВЛЕНИЕ РЕСНИЦ /БРОВЕЙ</h5>
            <q-carousel
              data-aos="fade-up-left"
              data-aos-duration="3000"
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide :name="1" img-src="" />
              <q-carousel-slide :name="2" img-src="" />
              <q-carousel-slide :name="3" img-src="" />
              <q-carousel-slide :name="4" img-src="" />

            </q-carousel>
            <p data-aos="fade-up-right"
               data-aos-duration="3000">Описание услуги :

              Протеиновое восстановление – процедура нанесения на брови специальных средств,
              которые содержат в составе витамины, минералы и белки. Такие средства насыщают волоски полезными микроэлементами,
              ускоряют рост и укрепляют их, воздействуя на клеточном уровне.
              Процедура даёт возможность вернуть им природную красоту после использования низкокачественной косметики,
              частого выщипывания, вредного питания, стресса или при отсутствии должного ухода.
              Также потребность в процедуре возникает после неудачного татуажа, ожогов, химиотерапии.️</p>
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
const fullscreen = ref(false)
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
q-carousel-slide {
  max-width: 300px;
}

._anim-item{
  opacity: 0;
  transform: translateX(120%)scaleX(0);
}

._anim-item p{
  width: 300px;
}

._anim-item._active {
  transform: translateX(0%)scaleX(1);
  opacity: 1;
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
