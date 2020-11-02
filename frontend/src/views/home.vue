<template lang="pug">
  .home
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
