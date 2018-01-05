<template>
<transition name="cart-appear" appear>
  <div class="padding-hor-l padding-vert-m fixed silver rounded" style="width: 32%; background-color: white; box-shadow: 0px 7px 24px rgba(0,0,0,0.1); border-radius: 12px;">
    <!-- <h3 style="font-size: 19px;">Order summary</h3> -->
    <div class="padding-hor-m">
    <h1 style="padding-top: 12px; padding-bottom: 12px; font-size: 28px; font-weight: 600;">Order summary</h1>
    <div class="padding-vert-xs"></div>
    <div class="padding-vert-xs flexy">
      <div>Items</div>
      <div class="fixed text-right" style="width:56px;">$89.98</div>
    </div>
    <div class="padding-vert-xs flexy">
      <div>Shipping & handling</div>
      <div class="fixed text-right" style="width:56px;">$6.98</div>
    </div>
    <div class="padding-vert-xs flexy">
      <div>Free shipping</div>
      <div class="fixed text-right" style="width:56px;">-$6.98</div>
    </div>
    <hr>
    <div class="padding-vert-xs flexy">
      <div>Total before tax</div>
      <div class="fixed text-right" style="width:56px;">$89.98</div>
    </div>
    <div class="padding-vert-xs flexy">
      <div>Estimated tax</div>
      <div class="fixed text-right" style="width:56px;">$6.87</div>
    </div>
    <hr>
    <div class="padding-vert-xs flexy">
      <div>Order total</div>
      <div class="fixed text-right" style="width:56px;">$96.85</div>
    </div>
    <div class="padding-vert-s"></div>
    <button class="boxed primary wide" :class="{grey: !canPlaceOrder}" @click="placeOrder()">Place order</button>
    <div class="padding-vert-m" v-if="showInstructions">
      <div>Before you can place your order, please, do the following:</div>
      <div class="padding-vert-s">
        <ul>
          <li v-if="!isShippingFilled">Add shipping address</li>
          <li v-if="!isPaymentFilled">Add payment method</li>
        </ul>
      </div>
    </div>
    <div class="padding-vert-s" v-else></div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Summary',
  data () {
    return {
      showInstructions: false
    }
  },
  props: [
    'selectedAddress',
    'selectedPayment'
  ],
  computed: {
    canPlaceOrder () {
      return this.selectedPayment !== null && this.selectedPayment !== null
    }
  },
  methods: {
    placeOrder () {
      if (this.canPlaceOrder) {
        this.$emit('placed')
      } else {
        this.showInstructions = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-appear-enter-active, .cart-appear-leave-active {
  transition: all .3s;
}
.cart-appear-enter, .cart-appear-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

