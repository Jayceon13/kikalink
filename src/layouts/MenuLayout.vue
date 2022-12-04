<template>
  <q-layout view="hHh lpR fFf" style="font-size: 10px">
    <div class="menu" v-scroll style="position: absolute; ">
      <block-burger v-model:show="showBurgerMenu"></block-burger>
    </div>
    <q-header elevated class="bg-primary text-white" >
        <q-btn dense flat round icon="menu" @click="blockBurgerMenu" style=" top: 0;"/>
    </q-header>
    <div class="page" v-show="value1" style="background: #31ccec">
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

.my-btn {
  font-family: 'PT Sans', sans-serif;
}
.my-btn-contact {
  margin-top: auto;
}

</style>

<script>
import BlockBurger from "components/burgerMenu";
import { defineComponent } from "vue";
import BlockPage from "pages/IndexPage";
// let a =

export default defineComponent({
  components: {BlockBurger,},
  data: () => ({
      showBurgerMenu: false,
    value1: true,
  }),
  BlockBurger,
  methods: {
    blockBurgerMenu() {
      this.showBurgerMenu = !this.showBurgerMenu
      this.value1 = !this.value1
    }
  },

});




</script>

<style lang="scss">

</style>

