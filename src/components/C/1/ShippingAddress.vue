<template>
<transition name="modal">
  <div class="modal-mask" style="position: absolute; top: 0; left: 0; z-index: 120; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)">
    <div class="modal-container" style="max-width: 540px; max-height: 100vh; display: flex; flex-direction: column; margin: 0 auto; padding: 24px 0;">
      <div class="flexy padding-vert-m padding-hor-l" style="border-bottom: 1px solid #DDE1EB; background-color: white; flex: 0 0 auto; height: 64px; border-radius: 10px 10px 0 0;">
        <h2 style="font-size: 20px;">New shipping address</h2>
        <!-- <div class="fixed" style="width: 16px;" @click="closePressed()">
          <button>
            <img src="./../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity: 1; padding-top: 4px;">
          </button>
        </div> -->
      </div>
      <div class="padding-hor-l" style="overflow: scroll; background-color: white; padding-top: 16px; padding-bottom: 40px;">
        <!--EDIT ADDRESS-->
        <div>
          <div class="padding-vert-s">
            <label for="fullName" class="text">Full name</label>
            <input type="text" name="" id="fullName" v-model="name.value" :class="{errorInputHighlight: !name.isValid && !name.wasFocused}" @focus="name.wasFocused = true">
            <div v-if="!name.isValid" class="errorMessage" :class="{errorMessageHighlight: !name.wasFocused}">
              Shouldn't be empty
            </div>
          </div>
          <div class="padding-vert-s">
            <label for="addressLine1" class="text">Address</label>
            <input type="text" name="" id="addressLine1" v-model="address1.value" :class="{errorInputHighlight: !address1.isValid && !address1.wasFocused}" @focus="address1.wasFocused = true">
            <div v-if="!address1.isValid" class="errorMessage" :class="{errorMessageHighlight: !address1.wasFocused}">
              Shouldn't be empty
            </div>
          </div>
          <!-- <div class="padding-vert-s">
            <label for="addressLine2" class="text">Address Line 2</label>
            <input type="text" name="" id="addressLine2" v-model="address2">
          </div> -->
          <div class="flexy">
            <div class="padding-vert-s">
              <label for="city" class="text">City</label>
              <input type="text" name="" id="city" v-model="city.value" :class="{errorInputHighlight: !city.isValid && !city.wasFocused}" @focus="city.wasFocused = true">
              <div v-if="!city.isValid" class="errorMessage" :class="{errorMessageHighlight: !city.wasFocused}">
                Shouldn't be empty
              </div>
            </div>
            <div class="fixed" style="width: 16px;"></div>
            <div class="padding-vert-s">
              <label for="state" class="text">State/Region/Province</label>
              <input type="text" name="" id="state" v-model="state.value" :class="{errorInputHighlight: !state.isValid && !state.wasFocused}" @focus="state.wasFocused = true">
              <div v-if="!state.isValid" class="errorMessage" :class="{errorMessageHighlight: !state.wasFocused}">
                Shouldn't be empty
              </div>
            </div>
          </div>
          <div class="flexy">
            <div class="padding-vert-s">
              <label for="zip" class="text">Country</label>
              <select v-model="country.value"  :class="{errorInputHighlight: !country.isValid && !country.wasFocused}" @focus="country.wasFocused = true">
                <option value="" disabled>Choose country...</option>
                <option value="United States">United States</option>
                <option value="Mexico">Mexico</option>
                <option value="Canada">Canada</option>
                <option value="Brazil">Brazil</option>
              </select>
              <div v-if="!country.isValid" class="errorMessage" :class="{errorMessageHighlight: !country.wasFocused}">
                Shouldn't be empty
              </div>
            </div>
            <div class="fixed" style="width: 16px;"></div>
            <div class="padding-vert-s">
              <label for="zip" class="text">ZIP</label>
              <input type="text" name="" id="zip" v-model="zip.value" :class="{errorInputHighlight: !zip.isValid && !zip.wasFocused}" @focus="zip.wasFocused = true">
              <div v-if="!zip.isValid" class="errorMessage" :class="{errorMessageHighlight: !zip.wasFocused}">
                Shouldn't be empty
              </div>
            </div>
          </div>
          <div class="padding-vert-xs">
            <label for="phone" class="text">Phone</label>
            <input type="text" name="" id="phone" v-model="phone.value" :class="{errorInputHighlight: !phone.isValid && !phone.wasFocused}" @focus="phone.wasFocused = true">
            <div v-if="!phone.isValid" class="errorMessage" :class="{errorMessageHighlight: !phone.wasFocused}">
                Shouldn't be empty
              </div>
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
    'selectedAddress'
  ],
  data () {
    return {
      name: {value: '', isValid: true, wasFocused: false},
      address1: {value: '', isValid: true, wasFocused: false},
      // address2: '',
      city: {value: '', isValid: true, wasFocused: false},
      state: {value: '', isValid: true, wasFocused: false},
      zip: {value: '', isValid: true, wasFocused: false},
      country: {value: '', isValid: true, wasFocused: false},
      phone: {value: '', isValid: true, wasFocused: false}
    }
  },
  methods: {
    savePressed () {
      let data = {
        name: this.name.value,
        address1: this.address1.value,
        // address2: this.address2,
        city: this.city.value,
        state: this.state.value,
        zip: this.zip.value,
        country: this.country.value,
        phone: this.phone.value
      }
      let errors = this.checkForErrors()
      if (errors) {
        return
      }
      this.$emit('confirmed', data)
    },
    checkForErrors (data) {
      let hasErrors = false
      //
      this.name.isValid = true
      this.address1.isValid = true
      this.city.isValid = true
      this.state.isValid = true
      this.zip.isValid = true
      this.country.isValid = true
      this.phone.isValid = true
      //
      this.name.wasFocused = false
      this.address1.wasFocused = false
      this.city.wasFocused = false
      this.state.wasFocused = false
      this.zip.wasFocused = false
      this.country.wasFocused = false
      this.phone.wasFocused = false
      //
      if (this.name.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.name.isValid = false
      }
      if (this.address1.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.address1.isValid = false
      }
      if (this.city.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.city.isValid = false
      }
      if (this.state.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.state.isValid = false
      }
      if (this.zip.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.zip.isValid = false
      }
      if (this.country.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.country.isValid = false
      }
      if (this.phone.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.phone.isValid = false
      }
      return hasErrors
    }
  },
  created () {
    if (this.selectedAddress !== null) {
      this.name = {value: this.selectedAddress.name, isValid: true, wasFocused: false}
      this.address1 = {value: this.selectedAddress.address1, isValid: true, wasFocused: false}
      // this.address2 = this.selectedAddress.address2
      this.city = {value: this.selectedAddress.city, isValid: true, wasFocused: false}
      this.state = {value: this.selectedAddress.state, isValid: true, wasFocused: false}
      this.zip = {value: this.selectedAddress.zip, isValid: true, wasFocused: false}
      this.country = {value: this.selectedAddress.country, isValid: true, wasFocused: false}
      this.phone = {value: this.selectedAddress.phone, isValid: true, wasFocused: false}
    }
  }
}
</script>

<style lang="scss" scoped>
.errorInputHighlight {
  border-color: tomato;
}
.errorMessage {
  font-size: 13px;
  color: #afb1b4;
}

.errorMessageHighlight {
  color: tomato;
}
</style>