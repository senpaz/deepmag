<template>
  <div class="video-wrapper">
    <div class="q-video" >
      <client-only>
        <iframe  style="width: 100%; height: 100%" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </client-only>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageIndex',
  data() {
    return {
      src: ''
    }
  },
  mounted () {
    setTimeout(()=>{
      this.src = 'https://www.youtube.com/embed/zsu2WRFaUoQ'
    }, 100)
  }
}
</script>



<style lang="scss" scoped>
.video-wrapper {
  margin-bottom: 50px;
}

.q-video {
  height: calc(100vh - 184px);

  @media (max-width: 1440px) {
    height: 750px;
  }

  @media (max-width: 1023px) {
    height: 650px;
  }
}
</style>
