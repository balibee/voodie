<script>
export default {
  name: 'Review',
  props: ['review']
}
</script>

<template lang="pug">
  .row.review
    .col-2
      p {{ review.foodieId }}
      //- img.rounded-circle.img-thumbnail.profile(src='https://i.pravatar.cc/300')
    .col-2
      p {{ review.rating }}
    .col-8
      p {{ review.review}}
</template>

<style lang="scss">
.review {
  align-items: center;
  padding-bottom: 10px;
}

.profile {
  padding: 0px;
  max-height: 60px;
  vertical-align: middle;
}
</style>
