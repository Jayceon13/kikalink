<template>
  <div class="q-pa-md">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
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
        img-src="https://drive.google.com/uc?export=view&id=1PlJWQTpyU5iAu8R6n_Fr9hv-oR2IQNkD"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://drive.google.com/uc?export=view&id=1n6WI-1NRXA2arhyrJ-viv0jS9pXbc45g"
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
