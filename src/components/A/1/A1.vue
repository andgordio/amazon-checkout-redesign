<template>
  <div>
    <!--HEADER-->
    <div class="padding-hor-l padding-vert-m black flexy" style="height: 80px;">
      <div>
        <button @click="currentView = 'Start'" style="color: white;">Amazon </button>
      </div>
      <div class="fixed" style="width: 40px;">
        <button @click="currentView = 'ShoppingCart'" style="color: white;">Cart</button>
      </div>
    </div>

    
    <!--START--><Start v-if="currentView === 'Start'"/>
    <!--SHOPPING CART--><ShoppingCart   v-if="currentView === 'ShoppingCart'"
                    :cart="cart"
                    @confirmed="shoppingCartConfirmed()"/>
    <!--SHIPPING ADDRESS--><ShippingAddress  v-if="currentView === 'ShippingAddress'"
                      @confirmed="shippingAddressConfirmed()"
                      @cancelled="shippingAddressCancelled()"/>
    <!--PAYMENT METHOD--><PaymentMethod  v-if="currentView === 'PaymentMethod'"
                    @confirmed="paymentMethodConfirmed()"
                    @cancelled="paymentMethodCancelled()"/>
    <!--EXTRA SIGNUP--><ExtraSignup  v-if="currentView === 'ExtraSignup'"/>

    <!--CHECKOUT--><div id="checkout" v-if="currentView === 'Checkout'">
      <div class="padding-hor-l">
        <div class="padding-vert-l flexy">
          <h1>Checkout</h1>
        </div>
        <div class="flexy align-top">
          <div>
            <div class="flexy align-stretch">
              <!--SHIPPING ADDRESS MIN--><ShippingAddressMin :isShippingFilled="isShippingFilled" @edit="currentView = 'ShippingAddress'"/>
              <div class="fixed" style="width: 2%"></div>
              <!--PAYMENT METHOD MIN--><PaymentMethodMin :isPaymentFilled="isPaymentFilled" @edit="currentView = 'PaymentMethod'"/>
            </div>
            <div class="padding-vert-xs"></div>
            <div class="flexy align-stretch">
              <!--SHOPPING CART MIN--><ShoppingCartMin  :cart="cart"
                                                        @edit="currentView = 'ShoppingCart'"/>
              <div class="fixed" style="width: 2%"></div>
              <!--DELIVERY MIN--><Delivery :chosenDelivery="chosenDelivery"/>
            </div>
            
          </div>
          <div class="fixed" style="width: 24px;"></div>
          <!--SUMMARY--><OrderSummary   :isShippingFilled="isShippingFilled"
                                        :isPaymentFilled="isPaymentFilled"
                                        @placed="currentView = 'ExtraSignup'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Start from './Start'
import ShoppingCart from './ShoppingCart'
import ShoppingCartMin from './ShoppingCartMin'
import Delivery from './Delivery'
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
    Delivery,
    OrderSummary,
    ExtraSignup
  },
  data () {
    return {
      currentView: 'Start',
      chosenDelivery: '1',
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
      this.currentView = 'Checkout'
    },
    shippingAddressConfirmed () {
      this.isShippingFilled = true
      this.currentView = 'Checkout'
    },
    shippingAddressCancelled () {
      this.currentView = 'Checkout'
    },
    paymentMethodConfirmed () {
      this.isPaymentFilled = true
      this.currentView = 'Checkout'
    },
    paymentMethodCancelled () {
      this.currentView = 'Checkout'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
