<template>
  <q-layout view="hHh lpR fFf" style="font-size: 10px; overflow: hidden">
    <preloader-menu/>
    <header class="header-nav" style="position: fixed; top: 0; width: 100%; height: 50px; z-index: 9999; display: flex; justify-content: flex-end" >
      <q-btn
        @click="$router.push('/')"
        class="my-btn-services"
        style="top: 12px; left: 20px; position: absolute"
      >
        <span style="color: white">RU</span>
      </q-btn
      >
      <div :class="!showBurgerMenu ? 'hamburger hamburger--elastic': 'hamburger is-active hamburger--elastic'" @click.stop="blockBurgerMenu">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </header>
    <div class="menu" style="position: fixed;z-index: 10; min-height: 100%">
      <block-burger-eng v-model:show="showBurgerMenu"></block-burger-eng>
    </div>
    <div class="page">
      <q-page-container v-scroll="onScroll" id="page-container">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>


<script setup>
import BlockBurgerEng from "components/burgerMenuEng";
import { defineComponent, ref, onMounted } from "vue";
import { debounce } from 'quasar'
import BlockPage from "pages/IndexPage";
import { state } from 'src/store/simplestore'
import PreloaderMenu from "components/PreloaderMenu";



const onScrollHandler = (pos) => {
  state.scrollY = pos
}
// Дебонсим событие скролла (в мс). Чем меньше - тем плавнее, но тогда
// сверх-нагрузка на браузер/комп. Надо тестить значение непосредственно на устройствах
const onScroll = debounce(onScrollHandler, 1)

const showBurgerMenu = ref(false)


const blockBurgerMenu = () => {
  showBurgerMenu.value = !showBurgerMenu.value;
  if(showBurgerMenu.value === true) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = 'visible';}
};

</script>

<style lang="scss">

body{
  overflow: visible;
}

.header-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
}

.hamburger {
  margin: 10px 10px 0 0;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  overflow: visible; }
.hamburger:hover {
  opacity: 0.7; }
.hamburger.is-active:hover {
  opacity: 0.7; }
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #ffffff; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #ffffff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; }
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; }
.hamburger-inner::before {
  top: -10px; }
.hamburger-inner::after {
  bottom: -10px; }
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.hamburger--elastic .hamburger-inner::before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease; }
.hamburger--elastic .hamburger-inner::after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0; }
.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -20px, 0) rotate(-270deg);
  transition-delay: 0.075s; }

.my-btn-contact {
  margin-top: auto;
}

</style>
