<template>
  <q-page padding>
    <div class="video-youtube">
      <h1>Здесь вы можете найти...</h1>
      <br />
      <iframe
        width="300"
        height="500"
        src="https://youtube.com/embed/pRstof8s8y8?feature=share"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <br />
    <div class="video-youtube">
      <iframe
        width="300"
        height="500"
        src="https://youtube.com/embed/v30BPffEjTQ?feature=share"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style scoped>
.video-youtube {
  display: flex;
  justify-content: center;
}
</style>
