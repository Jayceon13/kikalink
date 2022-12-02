<template>
  <q-layout view="hHh lpR fFf">
    <q-toolbar elevated class="bg-primary text-white">
      <q-toolbar-title>
      </q-toolbar-title>
      <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
    </q-toolbar>

    <q-drawer v-model="rightDrawerOpen" side="right" :width="395" bordered
    style="font-family: 'PT Sans'; display: flex;"
    >
      <button @click="toggleRightDrawer"
      style="position: absolute; top: 20px; right: 20px; background: none; border: 0px"><img src="../assets/xicon.svg" alt="X"/></button>
      <div class="my-btn"
      style="display: flex; align-items: center; height: 100vh; width: 100%" >
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
            <img src="../assets/WhatsApp.svg"
                 style="padding: 10px 0px"

            /></q-btn>
          <q-btn
            class="BtnLink-contact"
            href="https://www.youtube.com/channel/UCkgLlrr4KACgtnpr1Q5D5kw"
            round
            color="primary"
          >YouTube
            <img src="../assets/YouTube.svg"
                 style="padding: 10px 0px"
            /></q-btn>


          <q-btn
            class="BtnLink-contact"
            href="https://t.me/k_alferuk"
            round
            color="primary"
          >YouTube
            <img src="../assets/Telegram.svg"
                 style="padding: 10px 0px"
            /></q-btn>

        </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="scss">
.menuBlock{
  display: flex;
  justify-content: center;
}
.my-btn-contact {
  margin-top: auto;
}
</style>

<script>
import Vue, { ref } from 'vue'
import blockBtns from "components/BlockBtns";

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },

  data() {
    return {
      showBtns: false,
      showLinks: false
    }
  },
  methods: {
    blockBtnsVisible() {
      this.showBtns = !this.showBtns;

    },
    blockBtnsLinks() {
      this.showLinks = !this.showLinks;
    }
  },
}


</script>

<style lang="scss">

.q-drawer{
  display: flex;
  background: rgba(0, 0, 0, 1);
};
@media screen and (max-width: 600px) {
}
.q-btn {
  margin: 6px;
}

.q-btn:before {
  box-shadow: none;
}
.q-btn__content {
  display: flex;
  flex-direction: column;
}
.BtnLink-contact {
  margin: 15px 26px;
  font-size: 10px;
  text-transform: none;
}
.my-btn{
  font-size: 18px;
}
.my-btn-services {
  font-size: 12px;
  margin: 8px 0px;
}

</style>

