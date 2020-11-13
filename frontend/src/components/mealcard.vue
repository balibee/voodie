<script>
export default {
  name: 'Mealcard',
  props: ['title', 'readyInMinutes', 'id', 'imageType']
}
</script>

<style lang="scss">
.daily-recipe-card {
  padding-top: 5px;
  padding-bottom: 25px;
}

.card-img-overlay {
  padding: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7));
}

.card-title {
  text-shadow: 0 2px 0 black;
}
</style>

<template lang="pug">
  .daily-recipe-card
    .card.text-white
      img.card-img(:src='`https://spoonacular.com/recipeImages/${id}-240x150.${imageType}`')
      .card-img-overlay.d-flex.flex-row.justify-content-between.align-items-end
        .card-body.d-flex.justify-content-between
          h5.card-title.col-sm-10 {{ title }}
          h5.card-title.col-sm-2.text-right {{ readyInMinutes }}
</template>
