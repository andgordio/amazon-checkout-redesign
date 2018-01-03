<template>
  <div>
    <h3>Shipping address</h3>
    <div class="padding-vert-m" v-if="selectedInfo === null">
      <button class="boxed primary" @click="addPressed">+ Add shipping address</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div v-if="selectedInfo !== null">
        <div>{{selectedInfo.name}}</div>
        <div>{{selectedInfo.address}}</div>
        <div>{{selectedInfo.city}}, {{selectedInfo.state}}, {{selectedInfo.country}}</div>
        <div>{{selectedInfo.phone}}</div>
      </div>
      <div class="padding-vert-s">
        <div v-if="doShowAddressesList">
          <div @click="doShowAddressesList=false" style="position: absolute; z-index: 100; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)"></div>
          <div @click.stop="doNothing" style="position: absolute; z-index: 101; display: inline-block; background-color: white; box-shadow: 0 8px 18px rgba(0,0,0,0.2); border-radius: 6px; padding: 8px 24px; transform: translate(0,-100px);">
            <div @click="choosePressed('original')" style="padding: 12px 0; border-bottom: 1px solid #DDE1EB;" class="hoverableItem clickable">
              <div><strong>Sam Bell</strong></div>
              <div>821 Washington St</div>
              <div>Ashland, Illinois, United States</div>
              <div>1 555 374 82 96</div>
            </div>
            <div v-if="selectedInfo !== null" @click="choosePressed('new')" style="padding: 12px 0; border-bottom: 1px solid #DDE1EB;" class="hoverableItem clickable">
              <div><strong>{{selectedInfo.name}}</strong></div>
              <div>{{selectedInfo.address}}</div>
              <div>{{selectedInfo.city}}, {{selectedInfo.state}}, {{selectedInfo.country}}</div>
              <div>{{selectedInfo.phone}}</div>
            </div>
            <div style="padding: 8px 0; border-bottom: 1px solid #DDE1EB;">
              <button @click="addNewAddressPressed" style="font-weight: 400; color: #409EFF;">Add new address</button>
            </div>
            <div style="padding: 8px 0;">
              <button @click="manageAddressesPressed" style="font-weight: 400; color: #409EFF;">Manage addresses</button>
            </div>
          </div>
        </div>
        <button class="boxed subtle-primary" @click="editPressed">Change</button>
      </div>
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
    'selectedInfo'
  ],
  data () {
    return {
      doShowAddressesList: false,
      originalData: {
        name: 'Sam Bell',
        address: '821 Washington St',
        city: 'Ashland',
        state: 'Illinois',
        zip: '87502',
        country: 'United States',
        phone: '1 555 374 82 96'
      },
      selectedData: null
    }
  },
  methods: {
    addPressed () {
      this.$emit('edit', 'editor')
    },
    editPressed () {
      this.doShowAddressesList = true
      // this.$emit('edit')
    },
    choosePressed (address) {
      this.doShowAddressesList = false
    },
    addNewAddressPressed () {
      this.doShowAddressesList = false
      this.$emit('edit', 'editor')
    },
    manageAddressesPressed () {
      this.doShowAddressesList = false
      this.$emit('edit', 'manager')
    },
    doNothing () {
      console.log('nothing done')
    }
  },
  created () {
    if (this.selectedInfo !== null) {
      this.selectedData = this.selectedInfo
    }
  }
}
</script>

<style lang="scss">
.hoverableItem {
  &:hover {
    // background-color: rgb(243, 243, 243);
  }
}
</style>

