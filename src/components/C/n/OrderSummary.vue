<template>
  <div>
    <h3>Order summary</h3>
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

  </div>
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
    'isShippingFilled',
    'isPaymentFilled'
  ],
  computed: {
    canPlaceOrder () {
      return this.isShippingFilled && this.isPaymentFilled
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
