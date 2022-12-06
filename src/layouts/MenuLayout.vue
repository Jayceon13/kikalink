<template>
  <q-layout view="hHh lpR fFf" style="font-size: 10px">
    <header class="bg-primary text-white" style="position: sticky; top: 0; width: 100vw; height: 40px" >
      <button @click="blockBurgerMenu" style=" top: 0; padding: 10px;">burger</button>
    </header>
    <div class="menu" v-scroll style="position: absolute; ">
      <block-burger v-model:show="showBurgerMenu"></block-burger>
    </div>
    <div class="page">

      <q-page-container v-scroll="onScroll" id="page-container">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<style lang="scss">


.my-btn-contact {
  margin-top: auto;
}

</style>

<script setup>
import BlockBurger from "components/burgerMenu";
import { defineComponent, ref, onMounted } from "vue";
import { debounce } from 'quasar'
import BlockPage from "pages/IndexPage";
import { state } from 'src/store/simplestore'
// let a =

const onScrollHandler = (pos) => {
  state.scrollY = pos
}
// Дебонсим событие скролла (в мс). Чем меньше - тем плавнее, но тогда
// сверх-нагрузка на браузер/комп. Надо тестить значение непосредственно на устройствах
const onScroll = debounce(onScrollHandler, 10)

const showBurgerMenu = ref(false)

const blockBurgerMenu = () => {
  showBurgerMenu.value = !showBurgerMenu.value
}

</script>

<style lang="scss">

.sticky-content {
  position: sticky;
  z-index: 10;
}

header q-btn {
  position: relative;
  z-index: 1;
}
.menu {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>

