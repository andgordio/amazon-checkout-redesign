<template>
<transition name="modal">
  <div class="modal-mask" style="position: absolute; top: 0; left: 0; z-index: 120; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)">
    <div class="modal-container" style="max-width: 540px; max-height: 100vh; display: flex; flex-direction: column; margin: 0 auto; padding: 24px 0;">
      <div class="flexy padding-vert-m padding-hor-l" style="border-bottom: 1px solid #DDE1EB; background-color: white; flex: 0 0 auto; height: 64px; border-radius: 10px 10px 0 0;">
        <h2 style="font-size: 20px;">Payment information</h2>
      </div>
      <div class="padding-hor-l" style="overflow: scroll; background-color: white; padding-top: 16px; padding-bottom: 40px;">
        <div class="padding-vert-s">
          <label for="cardName" class="text">Name on card</label>
          <input type="text" name="" id="cardName" v-model="name.value" :class="{errorInputHighlight: !name.isValid && !name.wasFocused}" @focus="name.wasFocused = true">
          <div v-if="!name.isValid" class="errorMessage" :class="{errorMessageHighlight: !name.wasFocused}">
            Shouldn't be empty
          </div>
        </div>
        <div class="padding-vert-s">
          <label for="cardNumber" class="text">Card number</label>
          <input type="text" name="" id="cardNumber" v-model="number.value" :class="{errorInputHighlight: !number.isValid && !number.wasFocused}" @focus="number.wasFocused = true">
          <div v-if="!number.isValid" class="errorMessage" :class="{errorMessageHighlight: !number.wasFocused}">
            Shouldn't be empty
          </div>
        </div>
        <div class="flexy" style="align-items: flex-start;">
          <div class="padding-vert-s">
            <label for="month" class="text">Expiration Month</label>
            <!-- <input type="text" name="" id="fullName" v-model="month.value" :class="{errorInputHighlight: !month.isValid && !month.wasFocused}" @focus="month.wasFocused = true"> -->
            <select v-model="month.value"  :class="{errorInputHighlight: !month.isValid && !month.wasFocused}" @focus="month.wasFocused = true">
              <option value="" disabled>Choose month...</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <div v-if="!month.isValid" class="errorMessage" :class="{errorMessageHighlight: !month.wasFocused}">
              Shouldn't be empty
            </div>
          </div>
          <div class="fixed" style="width: 16px;"></div>
          <div class="padding-vert-s">
            <label for="year" class="text">Expiration Year</label>
            <!-- <input type="text" name="" id="year" v-model="year.value" :class="{errorInputHighlight: !year.isValid && !year.wasFocused}" @focus="year.wasFocused = true"> -->
            <select v-model="year.value"  :class="{errorInputHighlight: !year.isValid && !year.wasFocused}" @focus="year.wasFocused = true">
              <option value="" disabled>Choose year...</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
            </select>
            <div v-if="!year.isValid" class="errorMessage" :class="{errorMessageHighlight: !year.wasFocused}">
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
    'selectedPayment'
  ],
  data () {
    return {
      name: {value: '', isValid: true, wasFocused: false},
      number: {value: '', isValid: true, wasFocused: false},
      month: {value: '', isValid: true, wasFocused: false},
      year: {value: '', isValid: true, wasFocused: false}
    }
  },
  methods: {
    savePressed () {
      let errors = this.checkForErrors()
      if (errors) {
        return
      }
      this.$emit('confirmed', {
        name: this.name.value,
        number: this.number.value,
        month: this.month.value,
        year: this.year.value
      })
    },
    checkForErrors (data) {
      let hasErrors = false
      //
      this.name.isValid = true
      this.number.isValid = true
      this.month.isValid = true
      this.year.isValid = true
      //
      this.name.wasFocused = false
      this.number.wasFocused = false
      this.month.wasFocused = false
      this.year.wasFocused = false
      //
      if (this.name.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.name.isValid = false
      }
      if (this.number.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.number.isValid = false
      }
      if (this.month.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.month.isValid = false
      }
      if (this.year.value.replace(/\s/g, '').length === 0) {
        hasErrors = true
        this.year.isValid = false
      }
      return hasErrors
    }
  },
  created () {
    if (this.selectedPayment !== null) {
      this.name = {value: this.selectedPayment.name, isValid: true, wasFocused: false}
      this.number = {value: this.selectedPayment.number, isValid: true, wasFocused: false}
      this.month = {value: this.selectedPayment.month, isValid: true, wasFocused: false}
      this.year = {value: this.selectedPayment.year, isValid: true, wasFocused: false}
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
