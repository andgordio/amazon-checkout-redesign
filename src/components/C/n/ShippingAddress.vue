<template>
<transition name="modal">
  <div class="modal-mask" style="position: absolute; top: 0; left: 0; z-index: 120; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)">
    <div class="modal-container" style="max-width: 600px; max-height: 100vh; display: flex; flex-direction: column; margin: 0 auto; padding: 24px 0;">
      <div class="flexy padding-vert-m padding-hor-l" style="border-bottom: 1px solid #DDE1EB; background-color: white; flex: 0 0 auto; height: 64px; border-radius: 10px 10px 0 0;">
        <h2 style="font-size: 20px;">New shipping address</h2>
        <!-- <div class="fixed" style="width: 16px;" @click="closePressed()">
          <button>
            <img src="../../../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity: 1; padding-top: 4px;">
          </button>
        </div> -->
      </div>
      <div class="padding-hor-l" style="overflow: scroll; background-color: white; padding-top: 16px; padding-bottom: 40px;">
        <!--EDIT ADDRESS-->
        <div v-if="mode === 'edit'">
          <div class="padding-vert-s">
            <label for="fullName" class="text">Full name</label>
            <input type="text" name="" id="fullName" v-model="name">
          </div>
          <div class="padding-vert-s">
            <label for="addressLine1" class="text">Address Line 1</label>
            <input type="text" name="" id="addressLine1" v-model="address1">
          </div>
          <div class="padding-vert-s">
            <label for="addressLine2" class="text">Address Line 2</label>
            <input type="text" name="" id="addressLine2" v-model="address2">
          </div>
          <div class="padding-vert-s">
            <label for="city" class="text">City</label>
            <input type="text" name="" id="city" v-model="city">
          </div>
          <div class="padding-vert-s">
            <label for="state" class="text">State/Region/Province</label>
            <input type="text" name="" id="state" v-model="state">
          </div>
          <div class="padding-vert-s">
            <label for="zip" class="text">ZIP</label>
            <input type="text" name="" id="zip" v-model="zip">
          </div>
          <div class="padding-vert-s">
            <label for="zip" class="text">Country</label>
            <select v-model="country">
              <option value="" disabled>Choose country...</option>
              <option value="United States">United States</option>
              <option value="Mexico">Mexico</option>
              <option value="Canada">Canada</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
          <div class="padding-vert-xs">
            <label for="phone" class="text">Phone</label>
            <input type="text" name="" id="phone" v-model="phone">
          </div>
        </div>
      </div>
      <div class="padding-hor-l" style="border-top: 1px solid #DDE1EB; background-color: white;  flex: 0 0 auto; height: 64px; padding-top: 10px;text-align: right; border-radius: 0 0 10px 10px;">
        <button class="boxed silver" @click="$emit('cancelled')">Cancel</button>
        <button class="boxed primary" style="min-width: 120px;" @click="savePressed">Save</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: [
    'mode'
  ],
  data () {
    return {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: ''
    }
  },
  methods: {
    savePressed () {
      this.$emit('confirmed', {
        name: this.name,
        address: this.address1 + ' ' + this.address2,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
        phone: this.phone
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>