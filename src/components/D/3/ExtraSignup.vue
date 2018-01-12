<template>
<transition name="info-appear" appear>
  <div class="flexy align-top padding-vert-l" style="max-width: 540px; margin: 0 auto;">
    <!-- Order placed -->
    <div class="flexy fixed align-top" style="width: 100%;">
      <div class="fixed" style="width: 48px; margin-right: 12px;">
        <img src="./../../../assets/icn-check-complete.png" style="width:48px;" alt="">
      </div>
      <div style="padding-top: 12px;">
        <div style="font-size: 19px; font-weight: 900;">Your order is placed!</div>
        <div style="padding-top: 6px;">Order number: 109-0072999-1233390</div>
        <div v-if="isSignedIn" style="padding-top: 6px;">An email confirmation has been sent to you.</div>
        <div v-if="!isSignedIn">
          <div style="font-size: 19px; font-weight: 900; padding-top: 32px;">Get email notifications</div>
          <div style="font-size: 14px; padding-top: 8px; line-height: 1.3;">Enter your email to create Amazon account, save your purchases, use 1-click checkout for next purchases together with many other Amazon user’s benefits.</div>
          <div v-if="!hasRegistered">
            <div style="padding-top: 8px;">
              <!-- <label for="fullName" class="text">Email</label> -->
              <input type="text" name="" id="fullName" v-model="email" placeholder="Enter your email" style="width: 300px;" :class="{errorInputHighlight: !isValid && !wasFocused}" @focus="wasFocused = true">
              <div v-if="!isValid" class="errorMessage" :class="{errorMessageHighlight: !wasFocused}">
                Shouldn't be empty
              </div>
            </div>
            <div style="padding-top: 8px;">
              <button class="boxed primary properBlue" style="width: 300px;" @click="createPressed()" :class="{properGrey: isProcessing}">
                <span v-if="!isProcessing">Create account</span>
                <span v-else>Processing</span>
              </button>
            </div>
          </div>
          <div v-else style="padding-top: 16px;">
            <div class="padding-vert-m flexy align-top" style="padding-left: 24px; padding-right: 12px; bottom: 80px; right: 32px; background-color: white; border-radius: 0 6px 6px 0; border-left: 4px solid orange;">
              Account created! An email with further instructions has been sent to you.
            </div>
          </div>
        </div>
        <div style="font-size: 14px; padding-top: 32px;">
          <button style="font-size: 13px; padding: 3px 8px; color:#3a84e8; border: 1px solid; border-radius: 4px;"><a href="https://itunes.apple.com/us/app/amazon-shopping-made-easy/id297606951" target="_blank" style="text-decoration: none; color: #3a84e8;">Get Amazon app</a></button> to get shipment notifications on your mobile device
        </div>
      </div>
    </div>
    <!-- save  -->
    <!-- <div v-if="!isSignedIn" class="flexy fixed align-top"  style="width: 50%;">
      <div class="fixed" style="width: 48px; margin-right: 12px;">
        <img src="./../../../assets/icn-check-account.png" style="width:48px;" alt="">
      </div>
      <div style="padding-top: 12px;">
      <div style="font-size: 19px; font-weight: 900;">Create account</div>
      </div>
    </div> -->
  </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      isValid: true,
      wasFocused: false,
      isProcessing: false,
      hasRegistered: false
    }
  },
  computed: {
    isSignedIn () {
      return this.$store.getters.getIsSignedIn
    }
  },
  methods: {
    createPressed () {
      if (!this.isProcessing) {
        this.isValid = true
        this.wasFocused = false
        if (this.email.replace(/\s/g, '').length === 0) {
          this.isValid = false
        } else {
          this.isProcessing = true
          setTimeout(() => {
            this.hasRegistered = true
          }, 1000)
        }
      }
    }
  }
}
</script>

<style>
button.boxed.properBlue {
  background-color: #3a84e8;
}

button.boxed.properGrey {
  background-color: #e5eaf0;
  color: #5f6d7c;
}

.errorInputHighlight {
  border-color: tomato !important;
}
.errorMessage {
  font-size: 13px;
  color: #afb1b4;
}

.errorMessageHighlight {
  color: tomato;
}
</style>

