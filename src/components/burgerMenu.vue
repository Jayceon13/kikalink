<template>
  <div :class="hideBlock ? 'burgerMenuDown' : 'burgerMenuUp'" v-if="show" @click.stop="hideBlock">
    <div @click.stop class="my-btn" style="display: flex; align-items: center">
      <img
        class="logo"
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKEUP-burger.svg"
        style="width: 200px; height: 80px"
      />
      <q-btn
        @click="() => { hideBlock(); scrollToAbout() }"
        class="my-btn"
        style="color: rgba(255, 255, 255, 1)"
      >ОБО МНЕ</q-btn
      >
      <q-btn
        @click="blockBtnsVisible"
        class="my-btn"
        style="color: rgba(255, 238, 193, 1)"
      >УСЛУГИ</q-btn
      >
      <div class="blockBtn" @click.stop v-if="showBtns" style="display: flex; flex-direction: column; color: rgba(255, 255, 255, 1)">
        <q-btn
          @click="() => { hideBlock(); scrollToShaping() }"
          class="my-btn-services"
        >АРХИТЕКТУРА БРОВЕЙ /СОЗДАНИЕ ФОРМЫ</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToThinning() }"
          class="my-btn-services"
        >ПРОРЕЖИВАНИЕ</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToStyling() }"
          class="my-btn-services"
        >ДОЛГОВРЕМЕННАЯ УКЛАДКА БРОВЕЙ</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToLightening() }"
          class="my-btn-services"
        >ОСВЕТЛЕНИЕ БРОВЕЙ</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToLamination() }"
          class="my-btn-services"
        >ЛАМИНИРОВАНИЕ РЕСНИЦ</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToCorrection() }"
          class="my-btn-services"
        >ОКРАШИВАНИЕ /КОРРЕКЦИЯ БРОВЕЙ (ХНА /КРАСКА)</q-btn
        >
        <q-btn
          @click="() => { hideBlock(); scrollToProt() }"
          class="my-btn-services">
                      ПРОТЕИНОВОЕ ВОССТАНОВЛЕНИЕ РЕСНИЦ /БРОВЕЙ
          </q-btn>
      </div>
      <div class=" vertical-bottom q-btn-links" style="  display: flex; flex-direction: column;">
        <q-btn
          @click="blockBtnsLinks"
          class="my-btn-contact"
          style="font-size: 18px;  color: rgba(255, 238, 193, 1)"
        >КОНТАКТЫ</q-btn
        >
        <div class="BtnLink"  v-if="showLinks" style="display: flex; text-transform: none">
          <q-btn
            class="BtnLink-contact"
            href="https://api.whatsapp.com/send?phone=79811853911&text="
            round
            color="rgb(71,71,71)"
          >
             <span class="q-btn__content" style="flex-direction: column">
               WhatsApp
            <img src="/icons/Whatsapp.svg"
                 style="padding: 10px 0px"

            />
             </span></q-btn>
          <q-btn
            style="display: flex; flex-direction: column"
            class="BtnLink-contact"
            href="https://www.youtube.com/channel/UCkgLlrr4KACgtnpr1Q5D5kw"
            round
            color="primary"
          >
            <span class="q-btn__content" style="flex-direction: column">
            YouTube
            <img src="/icons/Youtube.svg"
                 style="padding: 10px 0px"
            />
           </span></q-btn>


          <q-btn
            class="BtnLink-contact"
            href="https://t.me/k_alferuk"
            round
            color="primary"
          >
            <span class="q-btn__content" style="flex-direction: column">
              Telegram
            <img src="/icons/Telegram.svg"
                 style="padding: 10px 0px"
            /></span></q-btn>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import IndexPage from "../pages/IndexPage.vue"
export default {
  name: "block-burger",
  data() {
    return {
      showBtns: false,
      showLinks: false,
      test: 'test',
    };
  },
  props: {

    show: {
      type: Boolean,
      default: false,

    },
  },
  methods: {
    blockBtnsVisible() {
      this.showBtns = !this.showBtns;

    },
    blockBtnsLinks() {
      this.showLinks = !this.showLinks;
    },
    hideBlock() {
      this.$emit("update:show", false);
    },
    scrollToAbout() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToWorks() {
      document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToShaping() {
      document.getElementById('shaping').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToThinning() {
      document.getElementById('thinning').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToStyling() {
      document.getElementById('styling').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToLightening() {
      document.getElementById('lightening').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToLamination() {
      document.getElementById('lamination').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToCorrection() {
      document.getElementById('correction').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToProt() {
      document.getElementById('prot').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-btn {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.menu{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.burgerMenuDown{
  background: black;
  z-index: 1;
  height: 100%;
  animation: slide-down 1s ease-in-out forwards;

}
@keyframes slide-down {
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
}

.burgerMenuUp{
  background: black;
  z-index: 1;
  height: 100%;
  animation: slide-up 1s ease-in-out forwards;

}
@keyframes slide-up {
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
}

.q-btn {
  height: auto;
  width: auto;
  margin: 6px;
}

.q-btn:before {
  box-shadow: none;
}
span.q-btn__content {
  display: flex;
  flex-direction: column;
}
.BtnLink-contact {

  margin: 6px 20px 0px;
  font-size: 10px;
  text-transform: none;
}
.my-btn{
  font-size: 18px;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
}
.my-btn-services {
  font-size: 12px;
  margin: 2px 0px;
}
@media (min-height: 736px) {
  .logo {
   margin: 70px 0px 0px;
  }
}

</style>
