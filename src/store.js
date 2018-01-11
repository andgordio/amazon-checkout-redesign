import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //
    cart: [
      {
        name: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
        by: 'Jake Knapp',
        img: require('./assets/products/sprint.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 14.53,
        quantity: 1
      },
      {
        name: 'Hooked: How to Build Habit-Forming Products',
        by: 'Nir Eyal',
        img: require('./assets/products/hooked.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 18.56,
        quantity: 1
      }
    ],
    also: [
      {
        name: 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses',
        by: 'Eric Ries',
        img: require('./assets/products/lean.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 20.29,
        quantity: 1
      },
      {
        name: 'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers',
        by: 'Ben Horowitz',
        img: require('./assets/products/hard.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 19.66,
        quantity: 1
      },
      {
        name: 'Rework',
        by: 'Jason Fried',
        img: require('./assets/products/rework.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 17.68,
        quantity: 1
      },
      {
        name: 'Remote: Office Not Required',
        by: 'Jason Fried',
        img: require('./assets/products/remote.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 15.59,
        quantity: 1
      }
    ],
    recent: [
      {
        name: 'Beautiful Evidence',
        by: 'Edward R. Tufte',
        img: require('./assets/products/evidence.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 28.87,
        quantity: 1
      },
      {
        name: 'About Face: The Essentials of Interaction Design',
        by: 'Alan Cooper',
        img: require('./assets/products/face.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 36.47,
        quantity: 1
      },
      {
        name: '100 Things Every Designer Needs to Know About People',
        by: 'Susan Weinschenk',
        img: require('./assets/products/100.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 22.95,
        quantity: 1
      },
      {
        name: 'HTML and CSS: Design and Build Websites',
        by: 'Jon Duckett',
        img: require('./assets/products/html.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 20.53,
        quantity: 1
      }
    ],
    extra: [
      {
        name: 'Logo Design Love: A Guide to Creating Iconic Brand Identities, 2nd Edition',
        by: 'David Airey',
        img: require('./assets/products/logo.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 31.05,
        quantity: 1
      },
      {
        name: 'Layout Essentials: 100 Design Principles for Using Grids (Design Essentials)',
        by: 'Beth Tondreau',
        img: require('./assets/products/layout.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 14.76,
        quantity: 1
      }
    ],
    later: [
      {
        name: 'CSS: The Missing Manual',
        by: 'David Sawyer McFarland',
        img: require('./assets/products/css.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 24.61,
        quantity: 1
      },
      {
        name: 'The Principles of Beautiful Web Design: Designing Great Web Sites is Not Rocket Science!',
        by: 'Jason Beaird',
        img: require('./assets/products/beauty.jpg'),
        seller: 'Amazon',
        availability: 'In Stock',
        price: 31.23,
        quantity: 1
      }
    ],
    //
    addresses: [],
    payments: [],
    //
    selectedAddress: null,
    selectedPayment: null,
    chosenDelivery: '0',
    isSignedIn: false
    //
  },
  getters: {
    getCart: state => {
      return state.cart
    },
    getAlso: state => {
      return state.also
    },
    getRecent: state => {
      return state.recent
    },
    getExtra: state => {
      return state.extra
    },
    getLater: state => {
      return state.later
    },
    //
    getAddresses: state => {
      return state.addresses
    },
    getPayments: state => {
      return state.payments
    },
    //
    getSelectedAddress: state => {
      return state.selectedAddress
    },
    getSelectedPayment: state => {
      return state.selectedPayment
    },
    getChosenDelivery: state => {
      return state.chosenDelivery
    },
    getIsSignedIn: state => {
      return state.isSignedIn
    }
  },
  mutations: {
    //
    changeCart (state, payload) {
      state.cart = payload
    },
    changeLater (state, payload) {
      state.later = payload
    },
    changeAlso (state, payload) {
      state.also = payload
    },
    changeExtra (state, payload) {
      state.extra = payload
    },
    changeRecent (state, payload) {
      state.recent = payload
    },
    //
    addNewAddress (state, payload) {
      state.addresses.push(payload)
    },
    changeSelectedAddress (state, payload) {
      state.selectedAddress = payload
    },
    changeExistingAddress (state, payload) {
      state.addresses[payload.index] = payload.address
    },
    removeAddress (state, payload) {
      state.addresses.splice(payload, 1)
    },
    //
    addNewPayment (state, payload) {
      state.payments.push(payload)
    },
    changeSelectedPayment (state, payload) {
      state.selectedPayment = payload
    },
    changeExistingPayment (state, payload) {
      state.payments[payload.index] = payload.payment
    },
    removePayment (state, payload) {
      state.payments.splice(payload, 1)
    },
    //
    changeChosenDelivery (state, payload) {
      state.chosenDelivery = payload
    },
    changeIsSignedIn (state, payload) {
      state.isSignedIn = payload
    }
  },
  actions: {
    //
    setCart ({commit}, payload) {
      commit('changeCart', payload)
    },
    setLater ({commit}, payload) {
      commit('changeLater', payload)
    },
    setAlso ({commit}, payload) {
      commit('changeAlso', payload)
    },
    setExtra ({commit}, payload) {
      commit('changeExtra', payload)
    },
    setRecent ({commit}, payload) {
      commit('changeRecent', payload)
    },
    //
    setNewAddress ({commit}, payload) {
      commit('addNewAddress', payload)
    },
    setSelectedAddress ({commit}, payload) {
      commit('changeSelectedAddress', payload)
    },
    setExistingAddress ({commit}, payload) {
      commit('changeExistingAddress', payload)
    },
    setRemoveAddress ({commit}, payload) {
      commit('removeAddress', payload)
    },
    //
    setNewPayment ({commit}, payload) {
      commit('addNewPayment', payload)
    },
    setSelectedPayment ({commit}, payload) {
      commit('changeSelectedPayment', payload)
    },
    setExistingPayment ({commit}, payload) {
      commit('changeExistingPayment', payload)
    },
    setRemovePayment ({commit}, payload) {
      commit('removePayment', payload)
    },
    //
    setChosenDelivery ({commit}, payload) {
      commit('changeChosenDelivery', payload)
    },
    setIsSignedIn ({commit}, payload) {
      commit('changeIsSignedIn', payload)
    }
  }
})
