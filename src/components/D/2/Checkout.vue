<template>
  <div>
    <!-- MODALS -->
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
    <!-- CHECKOUT -->
    <div>
      <div>
        <div class="flexy align-stretch" style="flex-direction: row-reverse;">
          <OrderSummary   :selectedAddress="selectedAddress"
                          :selectedPayment="selectedPayment"
                          :cart="cart"
                          :delivery="chosenDelivery"
                          @placed="placeOrderPressed()"/>
          <div class="padding-vert-l">
            <div class="flexy align-stretch" style="">
              <ShippingAddressMin   :selectedAddress="selectedAddress"
                                    :addresses="addresses"
                                    :reactivator="reactivator"
                                    @add="addAddressPressed()"
                                    @signin="signInPressed()"
                                    @manage="manageAddressPressed()"
                                    />
              <PaymentMethodMin     :selectedPayment="selectedPayment"
                                    :payments="payments"
                                    :reactivator="reactivator"
                                    @add="addPaymentPressed()"
                                    @signin="signInPressed()"
                                    @manage="managePaymentPressed()"
                                    />
            </div>
            <div class="flexy align-stretch" style="padding-top: 32px;">
              <ShoppingCartMin/>
              <Delivery/>
            </div>
          </div>
          <SignIn v-if="doShowSignIn" @close="signInClosed()" @login="loginPressed"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCartMin from './ShoppingCartMin'
import Delivery from './Delivery'
import ShippingAddress from './ShippingAddress'
import ShippingAddressMin from './ShippingAddressMin'
import PaymentMethod from './PaymentMethod'
import PaymentMethodMin from './PaymentMethodMin'
import OrderSummary from './OrderSummary'
import SignIn from './SignIn'

export default {
  components: {
    ShoppingCartMin,
    ShippingAddress,
    ShippingAddressMin,
    PaymentMethod,
    PaymentMethodMin,
    Delivery,
    OrderSummary,
    SignIn
  },
  data () {
    return {
      addressMode: null,
      doShowAddressManager: false,
      selectedAddressForEditing: null,
      //
      paymentMode: null,
      doShowPaymentManager: false,
      selectedPaymentForEditing: null,
      //
      doShowSignIn: false,
      //
      reactivator: 0
      //
      // chosenDelivery: 1
    }
  },
  computed: {
    addresses () {
      return this.$store.getters.getAddresses
    },
    payments () {
      return this.$store.getters.getPayments
    },
    //
    cart () {
      return this.$store.getters.getCart
    },
    alsoItems () {
      return this.$store.getters.getAlso
    },
    recentItems () {
      return this.$store.getters.getRecent
    },
    extraItems () {
      return this.$store.getters.getExtra
    },
    laterItems () {
      return this.$store.getters.getLater
    },
    //
    selectedAddress () {
      return this.$store.getters.getSelectedAddress
    },
    selectedPayment () {
      return this.$store.getters.getSelectedPayment
    },
    chosenDelivery () {
      return this.$store.getters.getChosenDelivery
    }
  },
  methods: {
    //
    // SHIPPING ADDRESS
    addAddressPressed () {
      this.addressMode = 'add'
      this.doShowAddressManager = true
    },
    shippingAddressCancelled () {
      this.doShowAddressManager = false
    },
    manageAddressPressed () {
      this.addressMode = 'manage'
      this.doShowAddressManager = true
    },
    shippingAddressSaveNew (address) {
      this.$store.dispatch('setNewAddress', address)
      this.$store.dispatch('setSelectedAddress', this.addresses.length - 1)
      this.doShowAddressManager = false
    },
    shippingAddressSaveExisting (address) {
      // this.addresses[this.selectedAddressForEditing] = data
      this.$store.dispatch('setExistingAddress', {address: address, index: this.selectedAddressForEditing})
      this.reactivator++
      this.addressMode = 'manage'
    },
    editAddressPressed (index) {
      this.selectedAddressForEditing = index
      this.addressMode = 'edit'
    },
    deleteAddressPressed (index) {
      if (this.addresses.length === 1) {
        this.$store.dispatch('setSelectedAddress', null)
      } else {
        this.$store.dispatch('setSelectedAddress', 0)
      }
      this.$store.dispatch('setRemoveAddress', index)
    },
    shippingAddressCancelledBackToManager () {
      this.addressMode = 'manage'
    },
    //
    // PAYMENT METHOD
    addPaymentPressed () {
      this.paymentMode = 'add'
      this.doShowPaymentManager = true
    },
    paymentMethodCancelled () {
      this.doShowPaymentManager = false
    },
    managePaymentPressed () {
      this.paymentMode = 'manage'
      this.doShowPaymentManager = true
    },
    paymentMethodSaveNew (payment) {
      this.$store.dispatch('setNewPayment', payment)
      this.$store.dispatch('setSelectedPayment', this.payments.length - 1)
      this.doShowPaymentManager = false
    },
    paymentMethodSaveExisting (payment) {
      this.$store.dispatch('setExistingPayment', {payment: payment, index: this.selectedPaymentForEditing})
      this.reactivator++
      this.paymentMode = 'manage'
    },
    editPaymentPressed (index) {
      this.selectedPaymentForEditing = index
      this.paymentMode = 'edit'
    },
    deletePaymentPressed (index) {
      if (this.payments.length === 1) {
        this.$store.dispatch('setSelectedPayment', null)
      } else {
        this.$store.dispatch('setSelectedPayment', 0)
      }
      this.$store.dispatch('setRemovePayment', index)
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
      this.$store.dispatch('setNewAddress', {
        name: 'Sam Bell',
        address1: '821 Washington St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '10101',
        country: 'United States',
        phone: '+1 800 555 66 77' })
      this.$store.dispatch('setNewAddress', {
        name: 'Sam Bell',
        address1: '1014 Lincoln St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '10114',
        country: 'United States',
        phone: '+1 800 555 00 11' })
      this.$store.dispatch('setNewPayment', {
        name: 'Sam Bell',
        number: '1234 5678 1234 1235',
        month: '07',
        year: '20' })
      this.$store.dispatch('setSelectedAddress', 0)
      this.$store.dispatch('setSelectedPayment', 0)
      this.$store.dispatch('setIsSignedIn', true)
      this.doShowSignIn = false
    },
    //
    placeOrderPressed () {
      this.$router.push({name: 'Complete'})
    }
  }
}
</script>

<style>

</style>
