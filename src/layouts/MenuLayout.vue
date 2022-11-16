<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div class="my-btn">
        <q-btn
          @click="$router.push('/')"
          class="my-btn"
          outline
        >ГЛАВНАЯ | HOME</q-btn
        >
        <q-btn
          @click="$router.push('/services')"
          class="my-btn"
          outline
        >УСЛУГИ | SERVICES</q-btn
        >
        <q-btn
          @click="$router.push('/about')"
          class="my-btn"
          outline
        >ПРО МЕНЯ | ABOUT</q-btn
        >
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
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="scss">

.q-drawer {
  background: rgba(255, 255, 255, 0.5);
};

</style>
