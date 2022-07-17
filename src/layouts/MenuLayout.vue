<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          @click="$router.push('/')"
          align="center"
          class="font-Chilanka-bold text-3XL"
          style="cursor: pointer"
        >
          KIKA PRO MAKEUP
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.tabs-bottom {
  .q-tab {
    width: 50%;
  }
  .q-tab__content {
    .q-tab__label {
      font-size: 11 px;
    }
  }
}
</style>

<script>
import { menuItems } from "src/data/menuItems";
import { ref } from "vue";

export default {
  data: () => ({
    menuItems,
  }),
};
</script>
