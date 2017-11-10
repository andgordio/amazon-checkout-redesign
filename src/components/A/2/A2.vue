<template>
  <div>
    <!--HEADER-->
    <div class="padding-hor-l padding-vert-m black flexy" style="height: 80px;">
      <div>
        <button @click="currentView = 'Start'" style="color: white;">Amazon</button>
      </div>
      <div class="fixed" style="width: 40px;">
        <button @click="currentView = 'ShoppingCart'" style="color: white;">Cart</button>
      </div>
    </div>

    <!--START-->        <Start          v-if="currentView === 'Start'"/>

    <div class="flexy align-top" v-if="currentView !== 'Start'">
      <div id="sidebar" class="fixed silver" style="width: 360px; height: 100vh;">
        <div class="clickable-children">
          <div :class="{selected: currentView === 'ShoppingCart', disabled: !didAcceptShoppingCart && currentView !== 'ShoppingCart'}" @click="currentView = 'ShoppingCart'">
            <ShoppingCartMin :cart="cart" :didAcceptShoppingCart="didAcceptShoppingCart"/>
          </div>
          <hr>
          <div :class="{selected: currentView === 'ShippingAddress', disabled: !isShippingFilled && currentView !== 'ShippingAddress'}" @click="currentView = 'ShippingAddress'">
            <ShippingAddressMin :isShippingFilled="isShippingFilled"/>
          </div>
          <hr>
          <div :class="{selected: currentView === 'PaymentMethod', disabled: !isShippingFilled && currentView !== 'PaymentMethod'}" @click="currentView = 'PaymentMethod'">
            <PaymentMethodMin :isPaymentFilled="isPaymentFilled"/>
          </div>
          <hr>
          <div :class="{selected: currentView === 'OrderSummary', disabled: !isShippingFilled && !isPaymentFilled && currentView !== 'OrderSummary'}" @click="currentView = 'OrderSummary'">
            <div class="padding-vert-m padding-hor-xl">
              <h3>Summary</h3>
            </div>
          </div>
        </div>
        <!-- shopping cart min -->
        <!-- shipping min -->
        <!-- payment min -->
        <!-- summary min -->
      </div>
      <div id="mainContent">
        <!--SHOPPING CART--><ShoppingCart   v-if="currentView === 'ShoppingCart'"
                                            :cart="cart"
                                            @confirmed="shoppingCartConfirmed()"/>
        <!--SHIPPING ADDRESS--><ShippingAddress   v-if="currentView === 'ShippingAddress'"
                                                  @confirmed="shippingAddressConfirmed()"/>
        <!--PAYMENT METHOD--><PaymentMethod   v-if="currentView === 'PaymentMethod'"
                                              @confirmed="paymentMethodConfirmed()"/>
        <!--SUMMARY--><OrderSummary   v-if="currentView === 'OrderSummary'"
                                      :isShippingFilled="isShippingFilled"
                                      :isPaymentFilled="isPaymentFilled"
                                      @placed="currentView = 'ExtraSignup'"/>    
        <!--EXTRA SIGNUP--><ExtraSignup  v-if="currentView === 'ExtraSignup'"/>
      </div>
    </div>

  </div>
</template>

<script>
import Start from './Start'
import ShoppingCart from './ShoppingCart'
import ShoppingCartMin from './ShoppingCartMin'
import ShippingAddress from './ShippingAddress'
import ShippingAddressMin from './ShippingAddressMin'
import PaymentMethod from './PaymentMethod'
import PaymentMethodMin from './PaymentMethodMin'
import OrderSummary from './OrderSummary'
import ExtraSignup from './ExtraSignup'

export default {
  components: {
    Start,
    ShoppingCart,
    ShoppingCartMin,
    ShippingAddress,
    ShippingAddressMin,
    PaymentMethod,
    PaymentMethodMin,
    OrderSummary,
    ExtraSignup
  },
  name: 'A2',
  data () {
    return {
      currentView: 'Start',
      didAcceptShoppingCart: false,
      isShippingFilled: false,
      isPaymentFilled: false,
      cart: [
        {
          name: 'Echo Dot (2nd Generation) - Black',
          price: 49.99,
          quantity: 1
        },
        {
          name: 'Fire TV Stick with Alexa Voice Remote | Streaming Media Player',
          price: 39.99,
          quantity: 1
        }
      ]
    }
  },
  methods: {
    shoppingCartConfirmed () {
      this.didAcceptShoppingCart = true
      if (this.isShippingFilled && this.isPaymentFilled) {
        this.currentView = 'OrderSummary'
      } else if (this.isShippingFilled) {
        this.currentView = 'PaymentMethod'
      } else {
        this.currentView = 'ShippingAddress'
      }
    },
    shippingAddressConfirmed () {
      this.currentView = 'PaymentMethod'
      this.isShippingFilled = true
    },
    paymentMethodConfirmed () {
      this.currentView = 'OrderSummary'
      this.isPaymentFilled = true
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  background-color: rgba(0,150,255,0.1);
}
</style>
