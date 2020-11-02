<script type="text/javascript">
import navbar from './components/navbar.vue'
export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
</style>

<template lang="pug">
  #app
    #navbar
      navbar
    router-view
</template>
