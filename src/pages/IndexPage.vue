<template>
  <div class="list-page">
    <q-page class="flex flex-direction: column flex-center">
      <q-avatar size="130px" >
          <img src="~assets/avatar.jpg" >
        </q-avatar>
      <img
        alt="KIKA PRO MAKEUP"
        src="~assets/KIKAPROMAKEUP.svg"
        style="width: 200px; height: 200px"
      >
      <div class="my-btn">
      <q-btn @click="$router.push('/services')" class="my-btn" outline style="color: white">УСЛУГИ</q-btn>
      <q-btn @click="$router.push('/about')" class="my-btn" outline style="color: white">ОБО МНЕ</q-btn>
      </div>
    </q-page>
  </div>
</template>

<style lang="scss">

.my-btn {
  display: flex;
  flex-direction: column;
  margin: 15px;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>
