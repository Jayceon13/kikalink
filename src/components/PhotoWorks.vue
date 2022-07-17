<template>
  <div class="photo-window" v-if="show" @click="hidePhoto">
    <slot>
      <div class="q-pa-md" @click.stop>
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </slot>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "photo-works",
  setup() {
    return {
      slide: ref(1),
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hidePhoto() {
      this.$emit("update:show", false);
    },
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
  min-width: 400px;
}
</style>
>
