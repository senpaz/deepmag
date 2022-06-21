<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0;
}

body {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}
</style>
