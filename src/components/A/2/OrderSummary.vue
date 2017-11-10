<template>
  <div class="padding-hor-l padding-vert-l">
    <h1>Oder surmmary</h1>
    <div class="padding-vert-l"></div>
    <div class="flexy align-top">
      <div id="delivery" class="fixed" style="width: 240px;">
        <h3>Delivery</h3>
        <div class="padding-vert-l">
          <div class="flexy align-top padding-vert-xs">
            <input type="radio" id="deliveryChoice1" value="1" v-model="chosenDelivery" class="fixed" style="width: 24px;">
            <label for="deliveryChoice1"><div>Thursday, Nov 2</div><div>Free Two-Day shipping with a free trial of Amazon Prime</div></label>
          </div>
          <div class="flexy align-top padding-vert-xs">
            <input type="radio" id="deliveryChoice2" value="2" v-model="chosenDelivery" class="fixed" style="width: 24px;">
            <label for="deliveryChoice2"><div>Nov 6—10</div><div>FREE shipping</div></label>
          </div>
          <div class="flexy align-top padding-vert-xs">
            <input type="radio" id="deliveryChoice3" value="3" v-model="chosenDelivery" class="fixed" style="width: 24px;">
            <label for="deliveryChoice3"><div>Monday, Nov 6</div><div>$6.98 - Standart shipping</div></label>
          </div>
          <div class="flexy align-top padding-vert-xs">
            <input type="radio" id="deliveryChoice4" value="4" v-model="chosenDelivery" class="fixed" style="width: 24px;">
            <label for="deliveryChoice4"><div>Thursday, Nov 2</div><div>$13.98 - Two-Day Shipping</div></label>
          </div>
          <div class="flexy align-top padding-vert-xs">
            <input type="radio" id="deliveryChoice5" value="5" v-model="chosenDelivery" class="fixed" style="width: 24px;">
            <label for="deliveryChoice5"><div>Wednesday, Nov 1</div><div>$20.98 - One-Day Shipping</div></label>
          </div>
        </div>
      </div>
      <div id="delivery" class="fixed" style="width: 40px;">
      </div>
      <div id="summary">
        <h3>Summary</h3>
        <div class="padding-vert-s"></div>
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
        <button class="boxed primary" :class="{grey: !canPlaceOrder}" @click="placeOrder()">Place order</button>
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
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  data () {
    return {
      showInstructions: false,
      chosenDelivery: 1
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
