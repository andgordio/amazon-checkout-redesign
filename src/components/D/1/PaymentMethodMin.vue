<template>
<transition name="info-appear" appear>
  <div class="padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3 style="font-size: 19px;">Payment information</h3>
    <div class="padding-vert-m" v-if="selectedPayment === null">
      <button class="boxed primary" @click="addPressed()">Add payment method</button>
      <div style="font-size: 14px; padding-top:12px; "><button @click="openSignIn()" style="color:#409EFF; border-bottom: 1px dashed; border-radius: 0; cursor: pointer;">Sign in</button> for 1-click checkout</div>
    </div>
    <div class="padding-vert-m" v-else>
      <div>{{payments[selectedPayment].name}}</div>
      <div class="text-grey" style="padding-top: 4px;">{{mutateCardNumber(payments[selectedPayment].number)}}</div>
      <div class="text-grey" style="padding-top: 4px;">{{payments[selectedPayment].month}} / {{payments[selectedPayment].year}}</div>
      <div style="color: transparent; width: 0; height: 0; overflow: hidden;">{{reactivator}}</div>
      <!-- OVERLAY -->
      <transition name="popover">
      <div v-if="doShowMethodsList">
        <div @click="doShowMethodsList=false" class="popover-curtain"></div>
        <div @click.stop="doNothing" class="popover-content">
          <div v-for="(payment, i) in payments" :key="i" @click="choosePressed(i)" class="hoverableItem clickable flexy" style="border-radius: 6px;">
            <!--<div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> <span v-if="i === selectedAddress">→</span>-->
            <div style="padding: 12px 24px;"> <!--border-bottom: 1px solid #DDE1EB;-->
              <div><strong>{{payment.name}}</strong></div>
              <div>{{payment.number}}</div>
              <div>{{payment.month}} / {{payment.year}}</div>
            </div>
          </div>
          <div class="hoverableItem clickable flexy" @click="addNewPaymentPressed" style="border-radius: 6px; margin-top:4px;">
            <!-- <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> -->
            <div style="padding: 12px 24px" >
              <button style="font-weight: 400; color: #409EFF;">Add new payment</button>
            </div>
          </div>
          <div class="hoverableItem clickable flexy" @click="managePaymentPressed" style="border-radius: 6px;">
            <!-- <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> -->
            <div style="padding: 12px 24px" >
              <button style="font-weight: 400; color: #409EFF;">Manage payment methods</button>
            </div>
          </div>
        </div>
      </div>
      </transition>
      <!-- end of OVERLAY -->
      <div class="padding-vert-s"><button style="color:#409EFF; border-bottom: 1px dashed; border-radius: 0;" @click="changePressed()">Change</button></div>
    </div>
  </div>
</transition>
</template>


<script>
export default {
  name: 'PaymentMethodMin',
  props: [
    'selectedPayment',
    'payments',
    'reactivator'
  ],
  data () {
    return {
      doShowMethodsList: false
    }
  },
  methods: {
    addPressed () {
      this.$emit('add')
    },
    changePressed () {
      this.doShowMethodsList = true
    },
    choosePressed (index) {
      this.$emit('change', index)
      this.doShowMethodsList = false
      //
    },
    addNewPaymentPressed () {
      this.doShowMethodsList = false
      this.$emit('add')
    },
    managePaymentPressed () {
      this.doShowMethodsList = false
      this.$emit('manage')
    },
    //
    doNothing () {
      //
    },
    mutateCardNumber (number) {
      let safeString = '**** **** **** '
      let lastChars = number.slice(number.length - 4, number.length)
      safeString = safeString + lastChars
      return safeString
    },
    //
    openSignIn () {
      this.$emit('signin')
    }
  }
}
</script>

<style lang="scss">
.selected {
  // background-color: #d4f6ff;
  // color: white;
}

.hoverableItem:hover {
  background-color: #f7f7f7;
}

//
//
//

.popover-curtain {
  position: absolute; z-index: 100; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)
}

.popover-content {
  position: absolute; z-index: 101; display: inline-block; background-color: white; box-shadow: 0 8px 18px rgba(0,0,0,0.2); border-radius: 6px; padding: 12px 12px 16px 12px; transform: translate(-20px,-64px);
}

.popover-enter-active, .popover-leave-active {
  transition: all .2s;
}
.popover-enter, .popover-leave-to {
  opacity: 0;
}

.popover-enter-active .popover-content, .popover-leave-active .popover-content {
  transition: all .3s;
}
.popover-enter .popover-content, .popover-leave-to .popover-content {
  transform: translate(-20px, -56px);
  opacity: 0;
}
//
//
//

.info-appear-enter-active, .info-appear-leave-active {
  transition: all .3s .2s;
}
.info-appear-enter, .info-appear-leave-to {
  opacity: 0;
}
</style>

