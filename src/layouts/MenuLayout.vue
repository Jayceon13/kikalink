<template>
  <q-layout view="hHh lpR fFf">
    <div class="menu" v-scroll style="position: fixed; z-index: 9999; ">
      <block-burger v-model:show="showBurgerMenu"></block-burger>
    </div>
    <q-header elevated class="bg-primary text-white" style="">
        <q-btn dense flat round icon="menu" @click="blockBurgerMenu" style=" top: 0;"/>
    </q-header>
    <div class="page">
      <h1>dwda</h1>
      <h1>dwda</h1>
      <h1>dwda</h1>
      <h1>dwda</h1>
      <h1>dwda</h1>
      <h1>dwda</h1>
      <q-page-container>
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

<script>
import BlockBurger from "components/burgerMenu";
import { defineComponent } from "vue";

export default defineComponent({
  components: {BlockBurger,},
  data: () => ({
      showBurgerMenu: false,
  }),
  BlockBurger,
  methods: {
    blockBurgerMenu() {
      this.showBurgerMenu = !this.showBurgerMenu
    }
  },
})


</script>

<style lang="scss">

</style>

