<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://drive.google.com/uc?export=view&id=1lYD9zU5oi80FSIsY5Vmpwt4TbVsMKuEp"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://drive.google.com/uc?export=view&id=1asBXcSVfOIACm-MECt9cwNqHykJEJhXk"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://drive.google.com/uc?export=view&id=13uh7WpyL3561zBBWAhxwOkL7_VmDWM7U"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://drive.google.com/uc?export=view&id=1nKIel5IGJhARcsoGVRTzv-4Wtz9qszxa"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://drive.google.com/uc?export=view&id=1ywYTTX93l2s5I-jalkJoukQoQ75EKg3b"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style lang="scss" scoped>
.photo-window {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.q-pa-md {
  margin: auto;
}
</style>
