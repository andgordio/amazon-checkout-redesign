<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Payment information</h3>
    <div class="padding-vert-m" v-if="!isPaymentFilled">
      <button class="boxed primary" @click="$emit('edit')">+ Add payment method</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div>Sam Bell</div>
      <div>**** **** **** 5457</div>
      <div>07 / 20</div>
      <div class="padding-vert-s"><button class="boxed subtle-primary" @click="$emit('edit')">Change</button></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PaymentMethodMin',
  props: [
    'isPaymentFilled'
  ],
  data () {
    return {
    }
  }
}
</script>
