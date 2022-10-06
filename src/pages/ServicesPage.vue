<template>
  <q-page padding>
    <video id="background-video" autoplay loop muted poster="https://drive.google.com/uc?export=view&id=1ZnY9WNndTb7ZdoRMuM8FzhKNazvToJpl">
      <source src="https://drive.google.com/uc?export=view&id=12yVFkkHnrjNYj4pmu21oj2BUQ7dvC8pe" type="video/mp4">
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
      <q-btn
        href="https://api.whatsapp.com/send?phone=79811853911&text="
        class="my-btn"
        outline
      >ЗАПИСАТЬСЯ</q-btn
      >
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
      <q-btn
        href="https://api.whatsapp.com/send?phone=79811853911&text="
        class="my-btn"
        outline
      >RECORDING</q-btn
      >
    </div>
  </q-page>

</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

#background-video {
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

@media () {
  #background-video { display: none; }
  body {
    background: url("https://assets.codepen.io/6093409/river.jpg") no-repeat;
    background-size: cover;
  }
}
.brow {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
  font-family: Roboto-Slab;
}

.brow p{
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.brow img {
  width: 300px;
  height: 50%;
}

</style>
