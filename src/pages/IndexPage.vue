<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <video id="bg-vdo" playsinline muted :poster="vdoPoster">
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
               data-aos-duration="3000">Меня зовут Кристина ,
              Уже 6 лет я создаю красоту для других людей . КОМЕРЧЕСКИЙ И НЕКОМЕРЧЕСКИЙ макияж мое все . Создаю уникальные образы для сьемок музыкальных клипов и рекламы . С моим макияжем ты будешь неотразима ❤️
              Создаю рекламу для бьюти брендов ⭐️</p>
          </div>
          <div class="service-menu">
            <div
              data-aos="fade-up-left"
              data-aos-duration="3000"
              class="service-paragraph"
              style="text-align: end">
          <h5>УСЛУГИ</h5>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>
          <h5 data-aos="fade-up-right"
              data-aos-duration="3000"
              >АРХИТЕКТУРА БРОВЕЙ /СОЗДАНИЕ ФОРМЫ</h5>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >ПРОРЕЖИВАНИЕ</h5>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
            >ДОЛГОВРЕМЕННАЯ УКЛАДКА БРОВЕЙ</h5>
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end"
          >ОСВЕТЛЕНИЕ БРОВЕЙ</h5>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >ЛАМИНИРОВАНИЕ РЕСНИЦ</h5>
          <h5
            data-aos="fade-up-left"
            data-aos-duration="3000"
            style="text-align: end">ОКРАШИВАНИЕ /КОРРЕКЦИЯ БРОВЕЙ (ХНА /КРАСКА)</h5>
          <h5
            data-aos="fade-up-right"
            data-aos-duration="3000">ПРОТЕИНОВОЕ ВОССТАНОВЛЕНИЕ РЕСНИЦ /БРОВЕЙ</h5>
          </div>
        </div>


    </q-page>
  </div>
</template>

<script setup>
import {computed, onMounted, watch} from "vue";
import {state} from "src/store/simplestore";



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
