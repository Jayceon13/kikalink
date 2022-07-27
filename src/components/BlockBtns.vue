<template>
  <div class="window-btns" v-if="show" @click="hideBlock">
    <slot>
      <div @click.stop class="block-btn">
        <q-btn
          @click="$router.push('/lashes')"
          class="my-btn"
          outline
          style="color: white"
          >LASHES</q-btn
        >
        <q-btn @click="showPhoto" class="my-btn" outline style="color: white"
          >BROWS</q-btn
        >
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "block-btns",
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
    hideBlock() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.window-btns {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.block-btn {
  display: flex;
  margin: auto;
  flex-direction: column;
}
</style>
