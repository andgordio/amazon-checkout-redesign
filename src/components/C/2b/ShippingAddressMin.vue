<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Shipping address</h3>
    <div class="padding-vert-m" v-if="selectedAddress === null">
      <button class="boxed primary" @click="addPressed">+ Add shipping address</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div>{{reactiveAddresses[selectedAddress].name}}</div>
      <div>{{reactiveAddresses[selectedAddress].address1}} <!--{{selectedAddress.address2}} --></div>
      <div>{{reactiveAddresses[selectedAddress].city}}, {{reactiveAddresses[selectedAddress].state}}, {{reactiveAddresses[selectedAddress].country}}</div>
      <div>{{reactiveAddresses[selectedAddress].phone}}</div>
      <div style="color: transparent; width: 0; height: 0; overflow: hidden;">{{reactivator}}</div>
      <!-- OVERLAY -->
      <div v-if="doShowAddressesList">
        <div @click="doShowAddressesList=false" style="position: absolute; z-index: 100; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)"></div>
        <div @click.stop="doNothing" style="position: absolute; z-index: 101; display: inline-block; background-color: white; box-shadow: 0 8px 18px rgba(0,0,0,0.2); border-radius: 6px; padding: 8px 0; transform: translate(0,-100px);">
          <!-- <div @click="choosePressed()" style="padding: 12px 0; border-bottom: 1px solid #DDE1EB;" class="hoverableItem clickable">
            <div><strong>Sam Bell</strong></div>
            <div>821 Washington St</div>
            <div>Ashland, Illinois, United States</div>
            <div>1 555 374 82 96</div>
          </div> -->
          <div v-for="(address, i) in addresses" :key="i" @click="choosePressed(i)" class="hoverableItem clickable flexy">
            <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div> <!--<span v-if="i === selectedAddress">→</span>-->
            <div style="padding: 12px 24px 12px 0; border-bottom: 1px solid #DDE1EB;" >
              <div><strong>{{address.name}}</strong></div>
              <div>{{address.address1}}</div>
              <div>{{address.city}}, {{address.state}}, {{address.country}}</div>
              <div>{{address.phone}}</div>
            </div>
          </div>
          <div class="hoverableItem clickable flexy" @click="addNewAddressPressed">
            <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div>
            <div style="padding: 12px 24px 12px 0; border-bottom: 1px solid #DDE1EB;" >
              <button style="font-weight: 400; color: #409EFF;">Add new address</button>
            </div>
          </div>
          <div class="hoverableItem clickable flexy" @click="manageAddressesPressed">
            <div class="fixed" style="width: 32px; text-align:center; color: #409EFF;"></div>
            <div style="padding: 12px 24px 12px 0; border-bottom: 1px solid #DDE1EB;" >
              <button style="font-weight: 400; color: #409EFF;">Manage addresses</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end of OVERLAY -->
      <div class="padding-vert-s"><button class="boxed subtle-primary" @click="changePressed">Change</button></div>
    </div>
    <!-- <h3>Billing address</h3>
    <div class="padding-vert-s">
      <div class="flexy align-top">
        <input type="checkbox" id="billingChoice1" value="1" class="fixed" style="width: 24px;">
        <label for="billingChoice1"><div>Same as shipping address</div></label>
      </div>
    </div> -->
  </div>
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
    reactiveAddresses () {
      return this.addresses
    }
  },
  methods: {
    addPressed () {
      this.$emit('add')
    },
    changePressed () {
      if (this.selectedAddress !== null) {
        this.doShowAddressesList = true
      }
      // this.$emit('edit')
    },
    choosePressed (index) {
      this.$emit('change', index)
      this.doShowAddressesList = false
      //
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
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  // background-color: #d4f6ff;
  // color: white;
}

.hoverableItem:hover {
  background-color: #f7f7f7;
}
</style>

