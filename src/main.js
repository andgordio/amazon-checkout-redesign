// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB1aiQ128dfj5nspFdMQk8EdH28V7M67EI',
      authDomain: 'checkout-redesign-89a9e.firebaseapp.com',
      databaseURL: 'https://checkout-redesign-89a9e.firebaseio.com',
      projectId: 'checkout-redesign-89a9e',
      storageBucket: 'checkout-redesign-89a9e.appspot.com',
      messagingSenderId: '685302588169'
    })
  }
})
