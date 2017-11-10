<template>
  <div class="padding-vert-s padding-hor-xl">
    <div class="padding-vert-xs">
      <h3>Shipping Address</h3>
    </div>
    <div v-if="isShippingFilled" class="text-grey">
      <div>Sam Bell</div>
      <div>821 Washington St</div>
      <div>Ashland, Illinois, United States</div>
      <div>1 555 374 82 96</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShippingAddressMin',
  props: [
    'isShippingFilled'
  ]
}
</script>

<style lang="scss" scoped>

</style>
