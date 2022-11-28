<template>
  <q-layout view="hHh lpR fFf ">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <button @click="toggleRightDrawer"><img src="../assets/xicon.svg" alt="X" /></button>
      <div class="my-btn">
        <q-btn @click="$router.push('/')" class="my-btn" outline>ГЛАВНАЯ | HOME</q-btn>
        <q-btn @click="$router.push('/services')" class="my-btn" outline>УСЛУГИ | SERVICES</q-btn>
        <q-btn @click="$router.push('/about')" class="my-btn" outline>ПРО МЕНЯ | ABOUT</q-btn>
      </div>
    </q-drawer>

    <q-page-container v-scroll="onScroll" id="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { debounce } from 'quasar'
import { state } from 'src/store/simplestore'

// Обработчик каждого события scroll. Просто сохраняет значение Y в state,
// а вся магия с видео - в ServicePage.vue
const onScrollHandler = (pos) => {
  state.scrollY = pos
}
// Дебонсим событие скролла (в мс). Чем меньше - тем плавнее, но тогда
// сверх-нагрузка на браузер/комп. Надо тестить значение непосредственно на устройствах
const onScroll = debounce(onScrollHandler, 10)

const rightDrawerOpen = ref(false)

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style lang="scss">
.menuBlock {
  display: flex;
  justify-content: center;
}

.q-header .q-layout__shadow:after {
  bottom: auto;
}

.q-drawer {
  background: rgba(255, 255, 255, 0.5);
}

;
</style>
