<template>
  <div style="max-height: 100vh; overflow: auto;">


    <!--HEADER-->
    <div class="" style="background-color: #24303D; color: white;">
      <!-- LINE 1 -->
      <div id="first" class="flexy" style="height: 60px; position: relative; align-items: flex-start;">
        <div class="fixed padding-hor-l" style="width: 140px; cursor: pointer; padding-top: 12px;" @click="$router.push({name: 'Start'})">
          <img src="./../../../assets/amazon-logo.png" style="width: 84px;" alt="">
        </div>
        <!-- checkout -->
        <transition name="lineonecheckout">
          <div v-if="$route.name !== 'Start' && $route.name !== 'ShoppingCart' && $route.name !== 'Complete'" style="position: absolute; margin-top: 12px; padding-top: 4px; padding-bottom: 4px; margin-left: 132px; padding-left: 21px; color:#FF9900; font-size: 19px; font-weight: 500; border-left: 1px solid rgba(255,255,255,0.2);">Checkout</div>
        </transition>
        <!--  -->
        <transition name="lineoneinit">
        <div class="flexy padding-hor-m lineoneinit" style="" v-if="$route.name === 'Start' || $route.name === 'ShoppingCart' || $route.name === 'Complete'">
          <div class="fixed flexy align-center" style="width: 48px; height: 35px; background-color: #f3f3f3; border-right: 1px solid d1d1d1; color: #666; border-radius: 5px 0 0 5px; text-align: center;  cursor: pointer;">
            <div style="text-align: right; font-size: 13px; font-weight: 900;">
              All
            </div>
            <img src="./../../../assets/icn-dropdown-dark.png" style="display: inline-block; width: 8px; flex: 0 0 auto; margin-left: 6px; margin-right: 8px;" alt="">
          </div>
          <div class="" style="background-color: white; height: 35px; cursor: text;">
            
          </div>
          <div class="fixed" style="width: 48px; background-color: #FFB647; height: 35px; line-height: 35px; border-radius: 0 5px 5px 0; text-align: center; padding-top: 4px; cursor: pointer;">
            <img src="./../../../assets/icn-search.png" style="width: 21px;" alt="">
          </div>
        </div>
        </transition>
        <!--  -->
        <transition name="lineoneinit">
        <div class="fixed padding-hor-l flexy align-center lineoneinit" style="width: 140px; cursor: pointer;" v-if="$route.name === 'Start' || $route.name === 'ShoppingCart' || $route.name === 'Complete'" @click="$router.push({name:'ShoppingCart'})">
          <div style="position: relative;">
            <div><img src="./../../../assets/icn-cart.png" style="width: 38px;  padding-top: 6px;" alt=""></div>
            <div style="position: absolute; top: -1px; left: 11px; width: 24px; text-align:center; color: #FF9900; font-weight: 900; font-size: 16px;">{{cart.length}}</div>
          </div>
          <div style="font-size: 18px; font-weight: 900;">
            cart
          </div>
        </div>
        </transition>
      </div>
      <!-- LINE 2 -->
      <transition name="linetwo">
      <div v-if="$route.name === 'Start' || $route.name === 'ShoppingCart' || $route.name === 'Complete'" id="second" class="flexy align-center linetwo-container">
        <div class="fixed padding-hor-l flexy align-center" style="width: 140px; cursor: pointer;">
          <div style="text-align: right; font-size: 13px; font-weight: 900;">
            Departments
          </div>
          <img src="./../../../assets/icn-dropdown-white.png" style="display: inline-block; width: 8px; flex: 0 0 auto; margin-left: 6px; margin-right: 8px;" alt="">
        </div>
        <!--  -->
        <div class="flexy padding-hor-m align-center" style="opacity: 0.6; font-size: 13px;">
          <div class="fixed flexy align-center" style="cursor: pointer;">
            <div style="text-align: right; ">
              Browsing History
            </div>
            <img src="./../../../assets/icn-dropdown-white.png" style="display: inline-block; width: 8px; flex: 0 0 auto; margin-left: 6px; margin-right: 8px;" alt="">
          </div>
          <div class="fixed" style="padding-left: 12px;">My Amazon.com</div>
          <div class="fixed" style="padding-left: 12px;">Today's Deals</div>
          <div class="fixed" style="padding-left: 12px;">Gift Cards</div>
          <div class="fixed" style="padding-left: 12px;">Registry</div>
          <div class="fixed" style="padding-left: 12px;">Sell</div>
          <div class="fixed" style="padding-left: 12px;">Help</div>
        </div>
        <!--  -->
        <div class="fixed padding-hor-l flexy align-center" style="cursor: pointer; font-size: 13px; font-weight: 900;" @click="$route.name = 'ShoppingCart'">
          <div class="fixed flexy align-center" style="cursor: pointer; padding-right: 24px;">
            <div style="text-align: right; font-size: 13px; font-weight: 900;">
              Account & Lists
            </div>
            <img src="./../../../assets/icn-dropdown-white.png" style="display: inline-block; width: 8px; flex: 0 0 auto; margin-left: 6px; margin-right: 8px;" alt="">
          </div>
          <div class="fixed" style="padding-right: 24px;">Orders</div>
          <div class="fixed flexy align-center" style="cursor: pointer;">
            <div style="text-align: right; font-size: 13px; font-weight: 900;">
              Try Prime
            </div>
            <img src="./../../../assets/icn-dropdown-white.png" style="display: inline-block; width: 8px; flex: 0 0 auto; margin-left: 6px;" alt="">
          </div>
        </div>
      </div>
      </transition>
      <!-- end of LINE 2 -->
    </div>
    <!-- end of HEADER -->
    <router-view/>
    
    <!-- <Start v-if="currentView === 'Start'"/>
    <ShoppingCart   v-if="currentView === 'ShoppingCart'"
                    :cart="cart"
                    :alsoItems="alsoItems"
                    :recentItems="recentItems"
                    :extraItems="extraItems"
                    :laterItems="laterItems"
                    @updated = "shoppingCartUpdated($event)"
                    @confirmed="shoppingCartConfirmed($event)"/>
    <ShippingAddress  v-if="doShowAddressManager"
                      :mode="addressMode"
                      :addresses="addresses"
                      :selectedAddress="selectedAddressForEditing"
                      @add="addAddressPressed()"
                      @edit="editAddressPressed($event)"
                      @delete="deleteAddressPressed($event)"
                      @saveNew="shippingAddressSaveNew($event)"
                      @saveExisting="shippingAddressSaveExisting($event)"
                      @backToManager="shippingAddressCancelledBackToManager()"
                      @cancelled="shippingAddressCancelled()"/>
    <PaymentMethod  v-if="doShowPaymentManager"
                    :mode="paymentMode"
                    :payments="payments"
                    :selectedPayment="selectedPaymentForEditing"
                    @add="addPaymentPressed()"
                    @edit="editPaymentPressed($event)"
                    @delete="deletePaymentPressed($event)"
                    @saveNew="paymentMethodSaveNew($event)"
                    @saveExisting="paymentMethodSaveExisting($event)"
                    @backToManager="paymentMethodCancelledBackToManager()"
                    @cancelled="paymentMethodCancelled()"/>
    <ExtraSignup  v-if="currentView === 'ExtraSignup'"/>

    <div id="checkout" v-if="currentView === 'Checkout'">
      <div>
        <div class="flexy align-stretch" style="flex-direction: row-reverse;">
          <OrderSummary   :selectedAddress="selectedAddress"
                                        :selectedPayment="selectedPayment"
                                        :cart="cart"
                                        :delivery="chosenDelivery"
                                        @placed="currentView = 'ExtraSignup'"/>
          <div class="padding-vert-l">
            <div class="flexy align-stretch" style="">
              <ShippingAddressMin   :selectedAddress="selectedAddress"
                                    :addresses="addresses"
                                    :reactivator="reactivator"
                                    @add="addAddressPressed()"
                                    @signin="signInPressed()"
                                    @change="changeAddressSelected($event)"
                                    @manage="manageAddressPressed()"
                                    />
              <PaymentMethodMin     :selectedPayment="selectedPayment"
                                    :payments="payments"
                                    :reactivator="reactivator"
                                    @add="addPaymentPressed()"
                                    @signin="signInPressed()"
                                    @change="changePaymentSelected($event)"
                                    @manage="managePaymentPressed()"
                                    />
            </div>
            <div class="flexy align-stretch" style="padding-top: 32px;">
              <ShoppingCartMin  :cart="cart"
                                @edit="currentView = 'ShoppingCart'"/>
              <Delivery         :chosenDelivery="chosenDelivery"
                                @deliveryChosen="changeDelivery($event)"/>
            </div>
          </div>
          <SignIn v-if="doShowSignIn" @close="signInClosed()" @login="loginPressed"/>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Start from './Start'
// import ShoppingCart from './ShoppingCart'
import ShoppingCartMin from './ShoppingCartMin'
import Delivery from './Delivery'
import ShippingAddress from './ShippingAddress'
import ShippingAddressMin from './ShippingAddressMin'
import PaymentMethod from './PaymentMethod'
import PaymentMethodMin from './PaymentMethodMin'
import OrderSummary from './OrderSummary'
import ExtraSignup from './ExtraSignup'
import SignIn from './SignIn'

export default {
  components: {
    // Start,
    // ShoppingCart,
    ShoppingCartMin,
    ShippingAddress,
    ShippingAddressMin,
    PaymentMethod,
    PaymentMethodMin,
    Delivery,
    OrderSummary,
    ExtraSignup,
    SignIn
  },
  data () {
    return {
      // addressMode: null,
      // doShowAddressManager: false,
      // selectedAddress: null,
      // selectedAddressForEditing: null,
      // addresses: [],
      //
      // paymentMode: null,
      // doShowPaymentManager: false,
      // selectedPayment: null,
      // selectedPaymentForEditing: null,
      // payments: [],
      //
      // doShowSignIn: false,
      //
    }
  },
  computed: {
    cart () {
      return this.$store.getters.getCart
    }
  },
  methods: {
    // shoppingCartConfirmed (items) {
    //   this.currentView = 'Checkout'
    //   this.cart = items
    // },
    // shoppingCartUpdated (items) {
    //   this.cart = items
    // },
    //
    // ADDRESS
    addAddressPressed () {
      this.addressMode = 'add'
      this.doShowAddressManager = true
    },
    editAddressPressed (index) {
      this.addressMode = 'edit'
      this.selectedAddressForEditing = index
      // this.doShowAddressManager = true
    },
    deleteAddressPressed (index) {
      if (index > 0) {
        this.selectedAddress = index - 1
      } else {
        if (this.addresses.length === 1) {
          this.selectedAddress = null
        } else {
          this.selectedAddress = index + 1
        }
      }
      this.addresses.splice(index, 1)
      // this.selectedAddress = index
      // this.doShowAddressManager = true
    },
    shippingAddressSaveNew (data) {
      this.addresses.push(data)
      this.selectedAddress = this.addresses.length - 1
      this.doShowAddressManager = false
    },
    shippingAddressSaveExisting (data) {
      this.addresses[this.selectedAddressForEditing] = data
      this.reactivator++
      this.addressMode = 'manage'
    },
    changeAddressSelected (index) {
      this.selectedAddress = index
    },
    manageAddressPressed () {
      this.addressMode = 'manage'
      this.doShowAddressManager = true
    },
    shippingAddressCancelled () {
      this.doShowAddressManager = false
    },
    shippingAddressCancelledBackToManager () {
      this.addressMode = 'manage'
    },
    //
    // PAYMENT
    addPaymentPressed () {
      this.paymentMode = 'add'
      this.doShowPaymentManager = true
    },
    editPaymentPressed (index) {
      this.paymentMode = 'edit'
      this.selectedPaymentForEditing = index
      // this.doShowAddressManager = true
    },
    deletePaymentPressed (index) {
      if (index > 0) {
        this.selectedPayment = index - 1
      } else {
        if (this.payments.length === 1) {
          this.selectedPayment = null
        } else {
          this.selectedPayment = index + 1
        }
      }
      this.payments.splice(index, 1)
      // this.selectedAddress = index
      // this.doShowAddressManager = true
    },
    paymentMethodSaveNew (data) {
      this.payments.push(data)
      this.selectedPayment = this.payments.length - 1
      this.doShowPaymentManager = false
    },
    paymentMethodSaveExisting (data) {
      this.payments[this.selectedPaymentForEditing] = data
      this.reactivator++
      this.paymentMode = 'manage'
    },
    changePaymentSelected (index) {
      this.selectedPayment = index
    },
    managePaymentPressed () {
      this.paymentMode = 'manage'
      this.doShowPaymentManager = true
    },
    paymentMethodCancelled () {
      this.doShowPaymentManager = false
    },
    paymentMethodCancelledBackToManager () {
      this.paymentMode = 'manage'
    },
    //
    // SIGN IN
    signInPressed () {
      this.doShowSignIn = true
    },
    signInClosed () {
      this.doShowSignIn = false
    },
    loginPressed () {
      this.addresses.push({
        name: 'Sam Bell',
        address1: '821 Washington St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '10101',
        country: 'United States',
        phone: '+1 800 555 66 77'
      })
      this.addresses.push({
        name: 'Sam Bell',
        address1: '1014 Lincoln St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '10114',
        country: 'United States',
        phone: '+1 800 555 00 11'
      })
      this.payments.push({
        name: 'Sam Bell',
        number: '1234 5678 1234 1235',
        month: '07',
        year: '20'
      })
      this.selectedAddress = 0
      this.selectedPayment = 0
      this.doShowSignIn = false
    },
    // DELIVERY
    changeDelivery (index) {
      this.chosenDelivery = index
    }
  },
  created () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.lineoneinit {
  height: 60px;
  overflow: hidden;
  // position: relative;
}

.linetwo-container {
  height: 44px;
  font-size: 14px;
  overflow: hidden;
}

.lineoneinit-enter-active, .lineoneinit-leave-active {
  transition: all .2s;
}
.lineoneinit-enter, .lineoneinit-leave-to {
  height: 0;
  opacity: 0;
}
//
.lineonecheckout-enter-active {
  transition: all .2s .2s;
}
.lineonecheckout-leave-active {
  transition: all .2s;
}
.lineonecheckout-enter, .lineonecheckout-leave-to {
  // position: absolute;
  // margin-top: 28px;
  transform: translate(4px, 0);
  opacity: 0;
}
//
.linetwo-enter-active, .linetwo-leave-active {
  transition: all .2s;
}
.linetwo-enter, .linetwo-leave-to {
  height: 0;
  opacity: 0;
}
</style>
