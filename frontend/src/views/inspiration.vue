<script>
import { mapActions } from 'vuex'

export default {
  name: 'Inspiration',
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    this.recipes = await this.fetchRecipes()
  },
  methods: {
    ...mapActions(['fetchRecipes'])
  }
}
</script>

<template lang="pug">
  .inspiration
    .h2 Inspiration

</template>
