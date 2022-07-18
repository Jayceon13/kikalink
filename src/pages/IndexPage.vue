<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <q-avatar size="130px">
        <img src="~assets/avatar.jpg" />
      </q-avatar>
      <img
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKEUP.svg"
        style="width: 200px; height: 200px"
      />
      <div class="my-btn">
        <q-btn
          @click="$router.push('/services')"
          class="my-btn"
          outline
          style="color: white"
          >SEVRICES</q-btn
        >
        <q-btn
          @click="$router.push('/about')"
          class="my-btn"
          outline
          style="color: white"
          >ABOUT</q-btn
        >
        <q-btn @click="showPhoto" class="my-btn" outline style="color: white"
          >MY WORKS</q-btn
        >
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
      <photo-works v-model:show="photoVisible"></photo-works>
    </q-page>
  </div>
</template>

<script>
import PhotoWorks from "src/components/PhotoWorks.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { PhotoWorks },
  name: "IndexPage",
  data() {
    return {
      photoVisible: false,
    };
  },
  PhotoWorks,
  methods: {
    showPhoto() {
      this.photoVisible = true;
    },
  },
});
</script>

<style lang="scss">
.my-btn {
  display: flex;
  flex-direction: column;
  margin: 15px;
}
</style>
