<template>
  <div class="q-pa-md">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://drive.google.com/uc?export=view&id=1RbdLYOJeRH6KI9MHYEWr2PDLIBSZDgDK"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://drive.google.com/uc?export=view&id=10y9CfOVHPG4HxsV9hMDNkz-lZv1ab77J"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://drive.google.com/uc?export=view&id=13l2lzY5PWELJtwUCqSyRtoYwb7lT9D2Y"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://drive.google.com/uc?export=view&id=1mfzb54t_vkJNwrM1KTBxHq5duHjZouwh"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://drive.google.com/uc?export=view&id=1K1PtvLbPwdo26FAU6JIJc7n4kN_PISaM"
      />
      <q-carousel-slide
        :name="6"
        img-src="https://drive.google.com/uc?export=view&id=10b7Jg6k9dEzvOheV3L_FVjJOLaH_44zI"
      />
      <q-carousel-slide
        :name="7"
        img-src="https://drive.google.com/uc?export=view&id=1O4DV3ObD986hh1M_laOalkYZF1q9XiCx"
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
