<script>
export default {
  name: 'Review',
  props: ['review']
}
</script>

<template lang="pug">
  .row.review.text-center
    .col-2
      p {{ review.author }}
      //- img.rounded-circle.img-thumbnail.profile(src='https://i.pravatar.cc/300')
    .col-8
      p {{ review.text }}
    .col-2
      p {{ review.rating }}
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
