<template>
  <div class="date-time">
      <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
          <q-date v-model="date" />
        </div>
      </div>
    </div>
</template>

<script>
let nowDate = new Date();

import { ref } from 'vue'
export default {
  name: 'now-date',
  setup () {
    return {
      date: ref( nowDate )
    }
  }
}
</script>
