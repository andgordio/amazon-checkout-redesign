<template>
<transition name="cart-appear" appear>
  <div class="padding-hor-xl padding-vert-m fixed" style="width: 32%; background-color: #F5F5F5; min-height: 100vh; position: sticky; top: 0; height: 100%;">
    <!-- <h3 style="font-size: 19px;">Order summary</h3> -->
    <div class="padding-hor-m" style="padding-top: 20px;">
    <div style="font-size: 19px; font-weight: 900;">Order summary</div>
    <div class="flexy" style="padding-top: 24px;">
      <div>Items</div>
      <div class="fixed text-right" style="width:56px;">${{cartSum}}</div>
    </div>
    <div class="flexy" style="padding-top: 6px;">
      <div>Shipping & handling</div>
      <div class="fixed text-right" style="width:56px;">${{deliveryPrice === 0 ? '6.98' : deliveryPrice}}</div>
    </div>
    <div class="flexy" style="padding-top: 6px;" v-if="deliveryPrice === 0">
      <div>Free shipping</div>
      <div class="fixed text-right" style="width:56px;">-$6.98</div>
    </div>
    <div class="flexy" style="padding-top: 24px;">
      <div>Total before tax</div>
      <div class="fixed text-right" style="width:56px;">${{beforeTax}}</div>
    </div>
    <div class="flexy" style="padding-top: 6px;">
      <div>Estimated tax</div>
      <div class="fixed text-right" style="width:56px;">${{tax}}</div>
    </div>
    <div class="flexy" style="padding-top: 24px; font-weight: 900;">
      <div>Order total</div>
      <div class="fixed text-right" style="width:56px;">${{total}}</div>
    </div>
    <div class="padding-vert-s"></div>
    <button class="boxed primary wide properBlue" :class="{properGrey: !canPlaceOrder}" @click="placeOrder()">Place order</button>
    <transition name="alert">  
      <div class="padding-vert-m flexy align-top" v-if="showInstructions" style="position: fixed; width: 340px; font-size: 13px; padding-left: 24px; padding-right: 12px; bottom: 80px; right: 32px; background-color: white; box-shadow: 0px 4px 16px rgba(0,0,0,0.1); border-radius: 0 6px 6px 0; border-left: 4px solid orange;">
        <div>
          <div>Before you can place your order, please, do the following:</div>
          <div style="padding-top: 8px;">
            <ul>
              <li v-if="selectedAddress === null">Add shipping address</li>
              <li v-if="selectedPayment === null">Add payment method</li>
            </ul>
          </div>
        </div>
        <div class="fixed" style="width: 16px; margin-left: 12px;">
          <button @click="showInstructions = false;"><img src="./../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon dark" style="width: 16px; opacity:1;"></button>
        </div>
      </div>
    </transition>
    <div class="padding-vert-m" style="font-size: 12px; color: #878D98;">
      <div style="padding-top: 12px;">By placing order, you agree to Amazon's <span style="color: #878D98; border-bottom: 1px dashed; cursor: pointer;">privacy notice</span> and <span style="color: #878D98; border-bottom: 1px dashed; cursor: pointer;">conditions of use</span>.</div>
      <div style="padding-top: 12px;"><span style="color: #878D98; border-bottom: 1px dashed; cursor: pointer;">How are shipping costs calculated?</span></div>
      <div style="padding-top: 12px;">You got free shipping on the eligible items in your order! ( <span style="color: #878D98; border-bottom: 1px dashed; cursor: pointer;">Why aren't all my items eligible?</span>)</div>
    </div>
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
    'selectedPayment',
    'cart'
    // 'delivery'
  ],
  computed: {
    canPlaceOrder () {
      return this.selectedAddress !== null && this.selectedPayment !== null
    },
    cartSum () {
      let sum = 0
      for (let i in this.cart) {
        sum += this.cart[i].price * this.cart[i].quantity
      }
      return sum.toFixed(2)
    },
    deliveryPrice () {
      switch (this.$store.getters.getChosenDelivery) {
        case '0':
          return 0
        case '1':
          return 0
        case '2':
          return 6.98
        case '3':
          return 13.98
        case '4':
          return 20.98
        default:
          break
      }
    },
    beforeTax () {
      let beforeTaxTemp = 0
      beforeTaxTemp = parseInt(this.cartSum) + this.deliveryPrice
      return beforeTaxTemp.toFixed(2)
    },
    tax () {
      let taxTemp = 0
      taxTemp = parseInt(this.beforeTax) * 0.18
      return taxTemp.toFixed(2)
    },
    total () {
      let totalTemp = 0
      totalTemp = parseInt(this.beforeTax) + parseInt(this.tax)
      return totalTemp.toFixed(2)
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

button.boxed.properBlue {
  background-color: #3a84e8;
}

button.boxed.properGrey {
  background-color: rgba(0,0,0,0.08);
  color: #818181;
  font-weight: normal;
}

.cart-appear-enter-active, .cart-appear-leave-active {
  transition: all .3s;
}
.cart-appear-enter, .cart-appear-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.alert-enter-active, .alert-leave-active {
  transition: all .3s;
}
.alert-enter, .alert-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

