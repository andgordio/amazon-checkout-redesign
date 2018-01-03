<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Payment information</h3>
    <div class="padding-vert-m" v-if="selectedPayment === null">
      <button class="boxed primary" @click="$emit('edit')">+ Add payment method</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div>{{selectedPayment.name}}</div>
      <div>{{selectedPayment.number}}</div>
      <div>{{selectedPayment.month}} / {{selectedPayment.year}}</div>
      <div class="padding-vert-s"><button class="boxed subtle-primary" @click="$emit('edit')">Change</button></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PaymentMethodMin',
  props: [
    'selectedPayment'
  ],
  data () {
    return {
    }
  }
}
</script>
