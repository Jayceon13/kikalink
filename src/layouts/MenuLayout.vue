<template>
    <q-toolbar elevated class="bg-primary text-white" style="flex-direction: row-reverse;">
      <q-btn dense flat round icon="menu" @click="blockBurgerMenu" style="position: sticky; position: -webkit-sticky; top: 0;"/>
    </q-toolbar>
  <block-burger v-model:show="showBurgerMenu"></block-burger>

  <q-layout view="hHh lpR fFf">
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
import BlockBurger from "components/burgerMenu";
import { defineComponent } from "vue";

export default defineComponent({
  components: {BlockBurger,},
  data() {
    return {
      showBurgerMenu: false,
    }
  },
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

