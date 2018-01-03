<template>
  <div style="max-height: 100vh; overflow: auto;">
    <!--HEADER-->
    <div class="padding-hor-l padding-vert-m black flexy" style="height: 80px; background-color: #232f3e;">
      <div>
        <button @click="currentView = 'Start'" style="color: white;">Amazon</button>
      </div>
      <div class="fixed" style="width: 40px;">
        <button @click="currentView = 'ShoppingCart'" style="color: white;">Cart</button>
      </div>
    </div>

    
    <!--START--><Start v-if="currentView === 'Start'"/>
    <!--SHOPPING CART--><ShoppingCart   v-if="currentView === 'ShoppingCart'"
                    :cart="cart"
                    :alsoItems="alsoItems"
                    :recentItems="recentItems"
                    :extraItems="extraItems"
                    :laterItems="laterItems"
                    @confirmed="shoppingCartConfirmed($event)"/>
    <!--SHIPPING ADDRESS--><ShippingAddress  v-if="doShowAddressManager"
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
    <!--PAYMENT METHOD--><PaymentMethod  v-if="doShowPaymentManager"
                    :mode="paymentMode"
                    :payments="payments"
                    :selectedPayment="selectedPaymentForEditing"
                    @add="addPaymentPressed()"
                    @edit="editPaymentPressed($event)"
                    @delete="deletePaymentPressed($event)"
                    @saveNew="paymentMethodSaveNew($event)"
                    @saveExisting="paymentMethodSaveExisting($event)"
                    @cancelled="paymentMethodCancelled()"/>
    <!--EXTRA SIGNUP--><ExtraSignup  v-if="currentView === 'ExtraSignup'"/>

    <!--CHECKOUT--><div id="checkout" v-if="currentView === 'Checkout'">
      <div class="padding-hor-l" style="background-color: #f1f3f7; min-height: 100vh;">
        <div class="padding-vert-m flexy">
          <!-- <h1>Checkout</h1> -->
        </div>
        <div class="flexy align-top">
          <div class="padding-vert-s">
            <div class="flexy align-stretch">
              <!--SHIPPING ADDRESS MIN-->
              <ShippingAddressMin   :selectedAddress="selectedAddress"
                                    :addresses="addresses"
                                    :reactivator="reactivator"
                                    @add="addAddressPressed()"
                                    @signin="signInPressed()"
                                    @change="changeAddressSelected($event)"
                                    @manage="manageAddressPressed()"
                                    />
              <div class="fixed" style="width: 2%"></div>
              <!--PAYMENT METHOD MIN-->
              <PaymentMethodMin     :selectedPayment="selectedPayment"
                                    :payments="payments"
                                    :reactivator="reactivator"
                                    @add="addPaymentPressed()"
                                    @signin="signInPressed()"
                                    @change="changePaymentSelected($event)"
                                    @manage="managePaymentPressed()"
                                    />
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
          <!--SUMMARY--><OrderSummary   :selectedAddress="selectedAddress"
                                        :selectedPayment="selectedPayment"
                                        @placed="currentView = 'ExtraSignup'"/>
          <!-- SIGN IN -->
          <SignIn v-if="doShowSignIn" @close="signInClosed()" @login="loginPressed"/>
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
import SignIn from './SignIn'

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
    ExtraSignup,
    SignIn
  },
  data () {
    return {
      currentView: 'Start',
      chosenDelivery: '1',
      reactivator: 0,
      //
      addressMode: null,
      doShowAddressManager: false,
      selectedAddress: null,
      selectedAddressForEditing: null,
      addresses: [],
      //
      // isPaymentFilled: false,
      paymentMode: null,
      doShowPaymentManager: false,
      selectedPayment: null,
      selectedPaymentForEditing: null,
      payments: [],
      //
      doShowSignIn: false,
      //
      cart: [
        {
          name: 'Beautiful Evidence',
          by: 'Edward R. Tufte',
          img: require('./../../../assets/products/evidence.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 28.87,
          quantity: 1
        },
        {
          name: 'Hooked: How to Build Habit-Forming Products',
          by: 'Nir Eyal',
          img: require('./../../../assets/products/hooked.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 18.56,
          quantity: 1
        }
      ],
      alsoItems: [
        {
          name: 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses',
          by: 'Eric Ries',
          img: require('./../../../assets/products/lean.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 20.29,
          quantity: 1
        },
        {
          name: 'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers',
          by: 'Ben Horowitz',
          img: require('./../../../assets/products/hard.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 19.66,
          quantity: 1
        },
        {
          name: 'Rework',
          by: 'Jason Fried',
          img: require('./../../../assets/products/rework.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 17.68,
          quantity: 1
        },
        {
          name: 'Remote: Office Not Required',
          by: 'Jason Fried',
          img: require('./../../../assets/products/remote.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 15.59,
          quantity: 1
        }
      ],
      recentItems: [
        {
          name: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
          by: 'Jake Knapp',
          img: require('./../../../assets/products/sprint.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 14.53,
          quantity: 1
        },
        {
          name: 'About Face: The Essentials of Interaction Design',
          by: 'Alan Cooper',
          img: require('./../../../assets/products/face.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 36.47,
          quantity: 1
        },
        {
          name: '100 Things Every Designer Needs to Know About People',
          by: 'Susan Weinschenk',
          img: require('./../../../assets/products/100.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 22.95,
          quantity: 1
        },
        {
          name: 'HTML and CSS: Design and Build Websites',
          by: 'Jon Duckett',
          img: require('./../../../assets/products/html.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 20.53,
          quantity: 1
        }
      ],
      extraItems: [
        {
          name: 'Logo Design Love: A Guide to Creating Iconic Brand Identities, 2nd Edition',
          by: 'David Airey',
          img: require('./../../../assets/products/logo.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 31.05,
          quantity: 1
        },
        {
          name: 'Layout Essentials: 100 Design Principles for Using Grids (Design Essentials)',
          by: 'Beth Tondreau',
          img: require('./../../../assets/products/layout.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 14.76,
          quantity: 1
        }
      ],
      laterItems: [
        {
          name: 'CSS: The Missing Manual',
          by: 'David Sawyer McFarland',
          img: require('./../../../assets/products/css.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 24.61,
          quantity: 1
        },
        {
          name: 'The Principles of Beautiful Web Design: Designing Great Web Sites is Not Rocket Science!',
          by: 'Jason Beaird',
          img: require('./../../../assets/products/beauty.jpg'),
          seller: 'Amazon',
          availability: 'In Stock',
          price: 31.23,
          quantity: 1
        }
      ]
    }
  },
  methods: {
    shoppingCartConfirmed (items) {
      this.currentView = 'Checkout'
      this.cart = items
    },
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
        phone: '11111111'
      })
      this.addresses.push({
        name: 'Sam Bell',
        address1: '1014 Lincoln St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '10114',
        country: 'United States',
        phone: '222222222'
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
    }
  },
  created () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
</style>
