<template>
  <div class="padding-vert-s padding-hor-xl">
    <div class="padding-vert-xs">
      <h3>Payment Method</h3>
    </div>
    <div v-if="isPaymentFilled" class="text-grey">
      <div>Sam Bell</div>
      <div>**** **** **** 5457</div>
      <div>07 / 20</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethodMin',
  props: [
    'isPaymentFilled'
  ]
}
</script>

<style lang="scss" scoped>

</style>
