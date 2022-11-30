<template>
  <q-page padding>
    <video id="bg-vdo" playsinline muted :poster="vdoPoster">
      <source :src="vdoSrc" type="video/mp4">
    </video>
    <div class="brow">
      <p>-Архитектура бровей /создание формы<br>
        -Окрашивание /коррекция бровей (хна /краска)<br>
        -Осветление бровей<br>
        -Прореживание<br>
        -Ламинирование ресниц<br>
        -Протеиновое восстановление ресниц /бровей<br>
        -Долговременная укладка бровей<br>
        <br>
        💔Комбо за 45 минут<br>
        <br>
        Ресницы + брови Botex в подарок 🎁<br>
        <br>
        💔Образ за 1,5 часа<br>
        Макияж любой сложности<br>
        Укладка / причёска<br>
        Макияж + укладка<br>
        Макияж тела ( грудь/ноги/руки)<br>
        Грим
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>ЗАПИСАТЬСЯ</q-btn>
      <br>
      <p>
        -Architecture of eyebrows / shaping<br>
        - Coloring / correction of eyebrows (henna / dye<br>
        - Eyebrow lightening<br>
        -thinning<br>
        - Eyelash lamination<br>
        -Protein restoration of eyelashes / eyebrows<br>
        - Long lasting brow styling<br>
        <br>
        💔Combo in 45 minutes<br>
        <br>
        Eyelashes + eyebrows Botex as a gift 🎁<br>
        <br>
        💔 Look in 1.5 hours<br>
        Makeup of any complexity<br>
        Styling / hairstyle<br>
        Makeup + styling
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>RECORDING</q-btn>
    </div>

    <!-- DEBUG: нужна длинная страница для десктопа. Удали потом всё что ниже -->
    <div class="brow">
      <p>-Архитектура бровей /создание формы<br>
        -Окрашивание /коррекция бровей (хна /краска)<br>
        -Осветление бровей<br>
        -Прореживание<br>
        -Ламинирование ресниц<br>
        -Протеиновое восстановление ресниц /бровей<br>
        -Долговременная укладка бровей<br>
        <br>
        💔Комбо за 45 минут<br>
        <br>
        Ресницы + брови Botex в подарок 🎁<br>
        <br>
        💔Образ за 1,5 часа<br>
        Макияж любой сложности<br>
        Укладка / причёска<br>
        Макияж + укладка<br>
        Макияж тела ( грудь/ноги/руки)<br>
        Грим
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>ЗАПИСАТЬСЯ</q-btn>
      <br>
      <p>
        -Architecture of eyebrows / shaping<br>
        - Coloring / correction of eyebrows (henna / dye<br>
        - Eyebrow lightening<br>
        -thinning<br>
        - Eyelash lamination<br>
        -Protein restoration of eyelashes / eyebrows<br>
        - Long lasting brow styling<br>
        <br>
        💔Combo in 45 minutes<br>
        <br>
        Eyelashes + eyebrows Botex as a gift 🎁<br>
        <br>
        💔 Look in 1.5 hours<br>
        Makeup of any complexity<br>
        Styling / hairstyle<br>
        Makeup + styling
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>RECORDING</q-btn>
    </div>
    <div class="brow">
      <p>-Архитектура бровей /создание формы<br>
        -Окрашивание /коррекция бровей (хна /краска)<br>
        -Осветление бровей<br>
        -Прореживание<br>
        -Ламинирование ресниц<br>
        -Протеиновое восстановление ресниц /бровей<br>
        -Долговременная укладка бровей<br>
        <br>
        💔Комбо за 45 минут<br>
        <br>
        Ресницы + брови Botex в подарок 🎁<br>
        <br>
        💔Образ за 1,5 часа<br>
        Макияж любой сложности<br>
        Укладка / причёска<br>
        Макияж + укладка<br>
        Макияж тела ( грудь/ноги/руки)<br>
        Грим
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>ЗАПИСАТЬСЯ</q-btn>
      <br>
      <p>
        -Architecture of eyebrows / shaping<br>
        - Coloring / correction of eyebrows (henna / dye<br>
        - Eyebrow lightening<br>
        -thinning<br>
        - Eyelash lamination<br>
        -Protein restoration of eyelashes / eyebrows<br>
        - Long lasting brow styling<br>
        <br>
        💔Combo in 45 minutes<br>
        <br>
        Eyelashes + eyebrows Botex as a gift 🎁<br>
        <br>
        💔 Look in 1.5 hours<br>
        Makeup of any complexity<br>
        Styling / hairstyle<br>
        Makeup + styling
        <br>
      </p>
      <q-btn href="https://api.whatsapp.com/send?phone=79811853911&text=" class="my-btn" outline>RECORDING</q-btn>
    </div>
  </q-page>

</template>

<script setup>
import { onMounted, watch, computed } from 'vue'
import { state } from 'src/store/simplestore'

// Video params
const vdoPoster = 'https://drive.google.com/uc?export=view&id=1ZnY9WNndTb7ZdoRMuM8FzhKNazvToJpl' // Переложи обложку локально, рядом с видео
const vdoSrc = '/assets/vdo1.mp4' // Это путь относительно /public, если что

// Определяем переменные, а значения ставим в mounted, т.к. только там доступен DOM
let vdo = null
let page = null

// Конвертим процент скролла страницы в процент относительно продолжительности видео
const relToTime = (rel) => vdo.duration / 100 * rel

// Конвертим значение скролла сверху страницы в процент от всей страницы
const scrollToRel = (y) => {
  // Абсолютная высота: вычитаем значение вьюпорта браузера (т.к. в нём скролл останавливается)
  const absHeight = page.clientHeight - document.documentElement.clientHeight
  const value = Math.ceil(y / absHeight * 100)
  console.warn('Скролл: %s % / Y=%s, ABS=%s', value, y, absHeight) // Debug
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

// КОНЕЦ! Дальше сам отлаживай все нюансы + мобильные )))
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

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

/* Почему media пустой??? Куда стучишься? */
// @media () {
//   #bg-vdo { display: none; }
//   body {
//     background: url("https://assets.codepen.io/6093409/river.jpg") no-repeat;
//     background-size: cover;
//   }
// }
.brow {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
  font-family: Roboto-Slab;
}

.brow p {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.brow img {
  width: 300px;
  height: 50%;
}
</style>
