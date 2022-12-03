<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" style="flex-direction: row-reverse;">
        <q-btn dense flat round icon="menu" @click="blockBurgerMenu" style="position: relative; top: 0;"/>
    </q-header>
    <div class="menu" style="position: fixed; z-index: 9999; ">
      <block-burger v-model:show="showBurgerMenu" style="display: block"></block-burger>
    </div>
  <h1>dwda</h1>
    <h1>dwda</h1>
    <h1>dwda</h1>
    <h1>dwda</h1>
    <h1>dwda</h1>
    <h1>dwda</h1>
    <q-page-container>
      <router-view />
    </q-page-container>

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

