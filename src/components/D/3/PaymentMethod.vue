<template>
<transition name="modal">
  <div class="modal-mask" style="position: absolute; top: 0; left: 0; z-index: 120; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)">
    <div class="modal-container" style="max-width: 540px; max-height: 100vh; display: flex; flex-direction: column; margin: 0 auto; padding: 24px 0;">
      <div class="flexy padding-hor-xl fixed" style="background-color: white; border-radius: 10px 10px 0 0; padding-top: 24px; padding-bottom: 24px; z-index: 200; transition: all .4s;" :class="{shadowyBottom: didScroll}">
        <div style="font-size: 24px; font-weight: 900;">
          <span v-if="mode === 'add'">New payment information</span>
          <span v-if="mode === 'edit'">Edit payment information</span>
          <span v-if="mode === 'manage'">Manage payment information</span>
        </div>
        <div class="fixed" style="width: 16px;" @click="$emit('cancelled')" v-if="this.mode === 'manage'">
          <button>
            <img src="./../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity: 1; padding-top: 4px;">
          </button>
        </div>
      </div>
      <div class="padding-hor-xl" style="overflow: scroll; background-color: white; padding-top: ; padding-bottom: 12px;" :class="{roundBottom: mode === 'manage'}" id="watchMeScroll" @scroll="checkScrollPosition">
        <!-- MANAGE ADDRESSES -->
        <div v-if="this.mode === 'manage'">
          <div v-for="(payment, i) in payments" :key="i" style="padding: 12px 0;" class="flexy">
            <div>
              <div><strong>{{payment.name}}</strong></div>
              <div>{{payment.number}}</div>
              <div>{{payment.month}} / {{payment.year}}</div>
            </div>
            <div class="fixed" style="width: 80px; text-align: right;">
              <button @click="editSelectedPressed(i)" style="color: #409EFF;">Edit</button>
            </div>
            <div class="fixed" style="width: 80px; text-align: right;">
              <button @click="deleteSelectedPressed(i)" style="color: silver;">Delete</button>
            </div>
          </div>
          <div class="clickable flexy" style="padding: 24px 0 12px; color: #409EFF; font-weight: 500; font-size: 14px;" @click="addPressed()">
            Add new payment method
          </div>
        </div>
        <!--EDIT ADDRESS-->
        <div v-if="this.mode === 'add' || this.mode === 'edit'">
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
        </div>
        <div v-if="this.mode === 'add' || this.mode === 'edit'" class="fixed padding-hor-xl padding-vert-m" style="z-index: 200; background-color: white; text-align: right; border-radius: 0 0 10px 10px; transition: all .4s;" :class="{shadowyTop: doesHaveScrollDown}">
          <button class="boxed primary properGrey" style="margin-right: 4px;" @click="cancelPressed()">Cancel</button>
          <button class="boxed primary properBlue" style="min-width: 120px;" @click="savePressed">Save</button>
        </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: [
    'selectedPayment',
    'mode',
    'payments'
  ],
  data () {
    return {
      name: {value: '', isValid: true, wasFocused: false},
      number: {value: '', isValid: true, wasFocused: false},
      month: {value: '', isValid: true, wasFocused: false},
      year: {value: '', isValid: true, wasFocused: false},
      //
      shouldComeBackToManager: false,
      //
      scrollable: null,
      didScroll: false,
      doesHaveScrollDown: false
    }
  },
  methods: {
    checkScrollPosition () {
      this.checkIfCanScroll()
      if (this.scrollable.scrollTop > 10) {
        this.didScroll = true
      } else {
        this.didScroll = false
      }
    },
    checkIfCanScroll () {
      if (this.scrollable.scrollHeight > this.scrollable.clientHeight && ((this.scrollable.scrollTop + 10) < (this.scrollable.scrollHeight - this.scrollable.clientHeight))) {
        this.doesHaveScrollDown = true
      } else {
        this.doesHaveScrollDown = false
      }
    },
    savePressed () {
      let errors = this.checkForErrors()
      if (errors) {
        return
      }
      let data = {
        name: this.name.value,
        number: this.number.value,
        month: this.month.value,
        year: this.year.value
      }
      if (this.mode === 'add') {
        this.$emit('saveNew', data)
      } else {
        this.$emit('saveExisting', data)
      }
    },
    cancelPressed () {
      if (this.shouldComeBackToManager) {
        this.$emit('backToManager')
      } else {
        this.$emit('cancelled')
      }
    },
    addPressed () {
      setTimeout(() => {
        this.checkIfCanScroll()
      }, 100)
      this.shouldComeBackToManager = false
      this.$emit('add')
      this.clearForm()
    },
    editSelectedPressed (index) {
      setTimeout(() => {
        this.checkIfCanScroll()
      }, 100)
      this.shouldComeBackToManager = true
      this.$emit('edit', index)
      this.fillForm()
    },
    deleteSelectedPressed (index) {
      this.$emit('delete', index)
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
    },
    fillForm () {
      this.name = {value: this.payments[this.selectedPayment].name, isValid: true, wasFocused: false}
      this.number = {value: this.payments[this.selectedPayment].number, isValid: true, wasFocused: false}
      this.month = {value: this.payments[this.selectedPayment].month, isValid: true, wasFocused: false}
      this.year = {value: this.payments[this.selectedPayment].year, isValid: true, wasFocused: false}
    },
    clearForm () {
      this.name = {value: '', isValid: true, wasFocused: false}
      this.number = {value: '', isValid: true, wasFocused: false}
      this.month = {value: '', isValid: true, wasFocused: false}
      this.year = {value: '', isValid: true, wasFocused: false}
    }
  },
  created () {
    if (this.mode === 'edit') {
      this.fillForm()
    }
    setTimeout(() => {
      this.scrollable = document.getElementById('watchMeScroll')
      this.checkIfCanScroll()
    }, 100)
  },
  watch: {
    selectedPayment () {
      this.fillForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.shadowyBottom {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
.shadowyTop {
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.15); 
}


//
button.boxed.properBlue {
  background-color: #3a84e8;
}

button.boxed.properGrey {
  background-color: #f1f1f1;
  color: #6d6d6d;
  font-weight: normal !important;
}

textarea, input[type=text], input[type=password], select {
    min-width: 220px;
}


//
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

//

.roundBottom {
  border-radius: 0 0 10px 10px;
}

//

.modal-enter-active, .modal-leave-active {
  transition: all .2s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container, .modal-leave-active .modal-container {
  transition: all .3s;
}
.modal-enter .modal-container, .modal-leave-to .modal-container/* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0.96);
  opacity: 0;
}
</style>
