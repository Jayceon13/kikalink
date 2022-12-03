<template>
  <div class="windowMenu">
  <div class="burgerMenu" v-if="show"
       style="font-family: 'PT Sans'; display: block;"
  >
    <div class="my-btn"
         style="display: flex; align-items: center; height: 100vh; width: 100vw" >
      <img
        class="logo"
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKEUP-burger.svg"
        style="width: 200px; height: 100px"
      />
      <q-btn
        @click="$router.push('/index')"
        class="my-btn"
      >ОБО МНЕ</q-btn
      >
      <q-btn
        @click="blockBtnsVisible"
        class="my-btn"
        style="color: rgba(255, 238, 193, 1)"
      >УСЛУГИ</q-btn
      >
      <div class="blockBtn" @click.stop v-if="showBtns" style="display: flex; flex-direction: column;">
        <q-btn
          @click="$router.push('/about')"
          class="my-btn-services"
        >АРХИТЕКТУРА БРОВЕЙ /СОЗДАНИЕ ФОРМЫ</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ПРОРЕЖИВАНИЕ</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ДОЛГОВРЕМЕННАЯ УКЛАДКА БРОВЕЙ</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ОСВЕТЛЕНИЕ БРОВЕЙ</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ЛАМИНИРОВАНИЕ РЕСНИЦ</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ОКРАШИВАНИЕ /КОРРЕКЦИЯ БРОВЕЙ (ХНА /КРАСКА)</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn-services"
        >ПРОТЕИНОВОЕ ВОССТАНОВЛЕНИЕ РЕСНИЦ /БРОВЕЙ</q-btn
        >
      </div>
      <div class=" vertical-bottom q-btn-links" style="  display: flex; flex-direction: column; margin-top: auto; height: 190px">
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
          >WhatsApp
            <img src="/icons/Whatsapp.svg"
                 style="padding: 10px 0px"

            /></q-btn>
          <q-btn
            class="BtnLink-contact"
            href="https://www.youtube.com/channel/UCkgLlrr4KACgtnpr1Q5D5kw"
            round
            color="primary"
          >YouTube
            <img src="/icons/Youtube.svg"
                 style="padding: 10px 0px"
            /></q-btn>


          <q-btn
            class="BtnLink-contact"
            href="https://t.me/k_alferuk"
            round
            color="primary"
          >YouTube
            <img src="/icons/Telegram.svg"
                 style="padding: 10px 0px"
            /></q-btn>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "block-burger",

  data() {
    return {
      showBtns: false,
      showLinks: false,
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
  },
};
</script>

<style lang="scss" scoped>
.windowMenu {
  position: fixed;
  display: flex;
  color: black;
  min-height: 100vh;
  width: 100vw;
  overflow-y: auto;
}
.burgerMenu{
  background: black;
}

.q-btn {
  margin: 6px;
}

.q-btn:before {
  box-shadow: none;
}
.q-btn__content {
  flex-direction: column;
}
.BtnLink-contact {
  margin: 15px 26px;
  font-size: 10px;
  text-transform: none;
}
.my-btn{
  font-size: 18px;
  margin: 0;
}
.my-btn-services {
  font-size: 12px;
  margin: 8px 0px;
}

</style>
