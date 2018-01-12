<template>
<transition name="info-appear" appear>
  <div class="padding-hor-l fixed flexy align-top" style="width: 50%">
    <div class="fixed" style="width: 48px; margin-right: 12px;">
      <img src="./../../../assets/icn-check-shipping.png" style="width:48px;" alt="">
    </div>
    <div style="padding-top: 12px;">
      <div style="font-size: 19px; font-weight: 900;">Shipping address</div>
      <div style="padding-top: 12px; position: relative;" v-if="selectedAddress === null">
        <!-- <div id="loader">
          <div class="pulse-container">
            <div class="pulse1"></div>
            <div class="pulse2"></div>
          </div>
        </div> -->
        <button class="boxed primary" style="background-color: #3a84e8;" @click="addPressed">Add shipping address</button>
        <div v-if="!isSignedIn" style="font-size: 14px; padding-top:12px; "><button @click="openSignIn()" style="font-size: 13px; padding: 3px 8px; color:#3a84e8; border: 1px solid; border-radius: 4px;">Sign in</button> for 1-click checkout</div>
      </div>
      <div style="padding-top: 8px;" v-else>
        <div>{{addresses[selectedAddress].name}}</div>
        <div style="padding-top: 4px;">{{addresses[selectedAddress].address1}} <!--{{selectedAddress.address2}} --></div>
        <div style="padding-top: 4px;">{{addresses[selectedAddress].city}}, {{addresses[selectedAddress].state}}, {{addresses[selectedAddress].country}}</div>
        <div style="padding-top: 4px;">{{addresses[selectedAddress].phone}}</div>
        <div style="color: transparent; width: 0; height: 0; overflow: hidden;">{{reactivator}}</div>
        <!-- OVERLAY -->
        <transition name="popover">
        <div v-if="doShowAddressesList">
          <div @click="doShowAddressesList=false" class="popover-curtain" style=""></div>
          <div @click.stop="doNothing" class="popover-content" style="">
            <!-- <div @click="choosePressed()" style="padding: 12px 0; border-bottom: 1px solid #DDE1EB;" class="hoverableItem clickable">
              <div><strong>Sam Bell</strong></div>
              <div>821 Washington St</div>
              <div>Ashland, Illinois, United States</div>
              <div>1 555 374 82 96</div>
            </div> -->
            <div v-for="(address, i) in addresses" :key="i" @click="choosePressed(i)" class="hoverableItem clickable flexy" style="border-radius: 6px;">
              <!--<div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> <span v-if="i === selectedAddress">→</span>-->
              <div :class="{selectedItem: i === selectedAddress}" style="padding: 12px 24px;"> <!-- border-bottom: 1px solid #DDE1EB;-->
                <div><strong>{{address.name}}</strong></div>
                <div>{{address.address1}}</div>
                <div>{{address.city}}, {{address.state}}, {{address.country}}</div>
                <div>{{address.phone}}</div>
              </div>
            </div>
            <div class="hoverableItem clickable flexy" @click="addNewAddressPressed" style="border-radius: 6px; margin-top:4px;">
              <!-- <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> -->
              <div style="padding: 12px 24px;">
                <button style="font-weight: 400; color: #409EFF;">Add new address</button>
              </div>
            </div>
            <div class="hoverableItem clickable flexy" @click="manageAddressesPressed" style="border-radius: 6px;">
              <!-- <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> -->
              <div style="padding: 12px 24px;">
                <button style="font-weight: 400; color: #409EFF;">Manage addresses</button>
              </div>
            </div>
          </div>
        </div>
        </transition>
        <!-- end of OVERLAY -->
        <div style="padding-top: 10px;">
          <button class="" style="font-size: 13px; min-width: 88px; padding: 3px 0; color:#3a84e8; border: 1px solid; border-radius: 4px;" @click="changePressed">
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>


<script>
export default {
  name: 'ShippingAddressMin',
  props: [
    'selectedAddress',
    'addresses',
    'reactivator'
  ],
  data () {
    return {
      doShowAddressesList: false
    }
  },
  computed: {
    isSignedIn () {
      return this.$store.getters.getIsSignedIn
    }
  },
  methods: {
    addPressed () {
      this.$emit('add')
    },
    changePressed () {
      // if (this.selectedAddress !== null) {
      this.doShowAddressesList = true
      // }
      // this.$emit('edit')
    },
    choosePressed (index) {
      this.$store.dispatch('setSelectedAddress', index)
      this.doShowAddressesList = false
    },
    addNewAddressPressed () {
      this.doShowAddressesList = false
      this.$emit('add')
    },
    manageAddressesPressed () {
      this.doShowAddressesList = false
      this.$emit('manage')
    },
    doNothing () {
      //
    },
    //
    openSignIn () {
      this.$emit('signin')
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  // background-color: #d4f6ff;
  // color: white;
}

.selectedItem {
  // background-color: #409EFF;
  // color: white;
  // border-radius: 6px;
}

.hoverableItem:hover {
  background-color: #f7f7f7 !important;
}

//
//
//

.popover-curtain {
  position: absolute; z-index: 100; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)
}

.popover-content {
  position: absolute; z-index: 101; display: inline-block; background-color: white; box-shadow: 0 8px 18px rgba(0,0,0,0.2); border-radius: 6px; padding: 12px 12px 16px 12px; transform: translate(-20px,-72px);
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
  transform: translate(-20px, -64px);
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

//
//
//
//
//
//
.dimmed {
  & #loader {
    display: none !important;
  }
}


#loader {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 163px;
  }

  .pulse-container {
    width: 20px;
    height: 20px;
    position: relative;
    margin: 12px 16px;
  }

  .label {
    color: silver;
    /*opacity: 0.5;*/
    font-size: 15px;
  }

  .pulse1, .pulse2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffb341;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 3.0s infinite ease-in-out;
    animation: sk-bounce 3.0s infinite ease-in-out;
  }

  .pulse2 {
    -webkit-animation-delay: -2.0s;
    animation-delay: -2.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.3) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }

</style>

