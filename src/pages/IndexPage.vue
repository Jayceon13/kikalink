<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <img
        class="logo"
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKE.svg"
        style="width: 200px; height: 200px"
      />
      <div class="my-btn">
        <div class="my-btn-raw">
          <q-btn
            href="https://api.whatsapp.com/send?phone=79811853911&text="
            round
            color="rgb(71,71,71)"
            style="margin: 15px"
          >
            <img style="border-radius: 50%" src="../assets/whatsapp.svg"
          /></q-btn>
          <q-btn
            href="https://www.youtube.com/channel/UCkgLlrr4KACgtnpr1Q5D5kw"
            round
            color="primary"
            style="margin: 15px"
          >
            <img src="../assets/youtube.svg"
          /></q-btn>
          <q-btn
            href="https://t.me/k_alferuk"
            round
            color="primary"
            style="margin: 15px"
          >
            <img style="border-radius: 50%" src="../assets/telegram.svg"
          /></q-btn>
        </div>
      </div>
      <block-btns v-model:show="blockBtnsVisible"></block-btns>
    </q-page>
  </div>
</template>

<script>
import BlockBtns from "src/components/BlockBtns.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BlockBtns },
  name: "IndexPage",
  data() {
    return {
      blockBtnsVisible: false,
    };
  },
  BlockBtns,
  methods: {
    showBlockBtns() {
      this.blockBtnsVisible = true;
    },
  },
});
</script>

<style lang="scss">
.my-btn {
  color: white;
  display: flex;
  flex-direction: column;
  margin: 15px;
}
.logo {
  animation: 5s show ease;
}

@keyframes show {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
