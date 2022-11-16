<template>
  <div class="window-burger" v-if="show" @click="hideBurgerMenu">
    <slot>
      <div @click.stop class="block-burger">

        <q-btn
          @click="$router.push('/lashesbrow')"
          class="my-btn"
          outline
          style="color: white"
        >LASHES | BROW</q-btn
        >
        <q-btn
          @click="$router.push('/makeup')"
          class="my-btn"
          outline
          style="color: white"
        >MAKE UP | HAIR</q-btn
        >
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "block-burger",
  setup() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideBurgerMenu() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.window-burger {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.block-burger {
  display: flex;
  margin: auto;
  flex-direction: column;
}
</style>
